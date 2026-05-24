"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Settings, ArrowLeft, ArrowRight, Send, CheckCircle2, AlertTriangle, Play, HelpCircle, Activity, Zap, Cpu, User, Mail, Phone, MessageSquare, Tag, ClipboardList } from "lucide-react";

// --- Fallback Data in German for offline/unconfigured state ---
const FALLBACK_CATEGORIES = [
  {
    id: 1,
    name: "Solar-Systeme",
    icon: "fa-solar-panel",
    subcategories: [
      {
        id: 11,
        name: "Einfamilienhaus PV-Anlage",
        questions: [
          {
            id: 111,
            question_text: "Welche Dachform hat Ihr Gebäude?",
            type: "radio",
            answers: [
              { id: 1111, answer_text: "Satteldach", next_question_id: 112 },
              { id: 1112, answer_text: "Flachdach", next_question_id: 112 },
              { id: 1113, answer_text: "Pultdach", next_question_id: 112 }
            ]
          },
          {
            id: 112,
            question_text: "Wie groß ist die Dachfläche (ca.)?",
            type: "slider",
            unit: "m²",
            config: { min: 50, max: 300, step: 10, default: 120 },
            answers: [
              { id: 1121, next_question_id: 113 }
            ]
          },
          {
            id: 113,
            question_text: "Wie hoch ist Ihr jährlicher Stromverbrauch?",
            type: "radio",
            answers: [
              { id: 1131, answer_text: "Bis 4.000 kWh" },
              { id: 1132, answer_text: "4.000 - 8.000 kWh" },
              { id: 1133, answer_text: "Über 8.000 kWh" }
            ]
          }
        ]
      },
      {
        id: 12,
        name: "Gewerbliche Dachflächen",
        questions: [
          {
            id: 121,
            question_text: "Ist ein Freiflächenspeicher gewünscht?",
            type: "radio",
            answers: [
              { id: 1211, answer_text: "Ja, maximale Redundanz" },
              { id: 1212, answer_text: "Nein, reine Netzeinspeisung" }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 2,
    name: "Intelligente Wärmepumpen",
    icon: "fa-fire-burner",
    subcategories: [
      {
        id: 21,
        name: "Neubau-Installation",
        questions: [
          {
            id: 211,
            question_text: "Welche Heizflächen sind geplant?",
            type: "radio",
            answers: [
              { id: 2111, answer_text: "Komplette Fußbodenheizung" },
              { id: 2112, answer_text: "Klassische Wandheizkörper" }
            ]
          }
        ]
      },
      {
        id: 22,
        name: "Bestandsbau Sanierung",
        questions: [
          {
            id: 221,
            question_text: "Aus welchem Jahrzehnt stammt Ihr Gebäude?",
            type: "radio",
            answers: [
              { id: 2211, answer_text: "Vor 1980 (Altbau)" },
              { id: 2212, answer_text: "1980 - 2000" },
              { id: 2213, answer_text: "Nach 2000" }
            ]
          }
        ]
      }
    ]
  }
];

export default function InteractiveForm() {
  // --- Global Settings ---
  const [activeTab, setActiveTab] = useState<"inquiry" | "support">("inquiry");
  const [apiUrl, setApiUrl] = useState("https://admin.empire-premium.de/api/v1");
  const [apiKey, setApiKey] = useState("ep_581dfae2da6e9d48adad1cad4511061db4d86867508c57cf");
  const [showConfig, setShowConfig] = useState(false);
  const [categories, setCategories] = useState<any[]>(FALLBACK_CATEGORIES);
  const [isDynamic, setIsDynamic] = useState(false);

  // --- Lead Inquiry State ---
  const [leadView, setLeadView] = useState<"category" | "subcategory" | "question" | "contact">("category");
  const [categoryId, setCategoryId] = useState<number | null>(null);
  const [subcategoryId, setSubcategoryId] = useState<number | null>(null);
  const [currentQuestionId, setCurrentQuestionId] = useState<number | null>(null);
  const [answers, setAnswers] = useState<Record<number, { value: string; answerId?: number; checkedIds?: number[] }>>({});
  const [history, setHistory] = useState<any[]>([]);
  const [checkboxSelections, setCheckboxSelections] = useState<number[]>([]);
  const [textInputValue, setTextInputValue] = useState("");
  const [sliderValue, setSliderValue] = useState<number>(100);

  // Contact details
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [contactNotes, setContactNotes] = useState("");

  const [leadStatus, setLeadStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [leadMessage, setLeadMessage] = useState("");

  // --- Support Ticket State ---
  const [supStep, setSupStep] = useState(0);
  const [supTopic, setSupTopic] = useState("");
  const [supSubject, setSupSubject] = useState("");
  const [supDesc, setSupDesc] = useState("");
  const [supName, setSupName] = useState("");
  const [supEmail, setSupEmail] = useState("");
  const [supPriority, setSupPriority] = useState("normal");

  const [supStatus, setSupStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [supMessage, setSupMessage] = useState("");

  // --- Derived Inquiry States ---
  const currentCategory = categories.find((c) => c.id === categoryId);
  const currentSubcategory = currentCategory?.subcategories?.find((s: any) => s.id === subcategoryId);
  const currentQuestion = currentSubcategory?.questions?.find((q: any) => q.id === currentQuestionId);

  // --- Load localStorage on mount ---
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedUrl = localStorage.getItem("kraftwerk_api_url");
      const storedKey = localStorage.getItem("kraftwerk_api_key");
      if (storedUrl) setApiUrl(storedUrl);
      if (storedKey) {
        setApiKey(storedKey);
      } else {
        localStorage.setItem("kraftwerk_api_key", "ep_581dfae2da6e9d48adad1cad4511061db4d86867508c57cf");
      }
      if (!storedUrl) {
        localStorage.setItem("kraftwerk_api_url", "https://admin.empire-premium.de/api/v1");
      }
    }
  }, []);

  // --- Fetch categories when credentials change ---
  useEffect(() => {
    fetchCategories();
  }, [apiUrl, apiKey]);

  const fetchCategories = async () => {
    if (!apiUrl) return;
    try {
      const res = await fetch(`${apiUrl}/categories`, {
        headers: apiKey ? { "x-api-key": apiKey } : {},
      });
      if (res.ok) {
        const json = await res.json();
        const data = json.data?.categories || json.data || json;
        if (Array.isArray(data) && data.length > 0) {
          setCategories(data);
          setIsDynamic(true);
        }
      } else {
        throw new Error();
      }
    } catch {
      // Fallback silently if CRM is unconfigured
      setCategories(FALLBACK_CATEGORIES);
      setIsDynamic(false);
    }
  };

  const handleSaveConfig = () => {
    localStorage.setItem("kraftwerk_api_url", apiUrl);
    localStorage.setItem("kraftwerk_api_key", apiKey);
    setShowConfig(false);
    fetchCategories();
  };

  // --- Inquiry logic handlers ---
  const selectCategory = (cat: any) => {
    setCategoryId(cat.id);
    setSubcategoryId(null);
    setAnswers({});
    setHistory(["category"]);

    if (cat.subcategories && cat.subcategories.length > 0) {
      setLeadView("subcategory");
    } else {
      setLeadView("contact");
    }
  };

  const selectSubcategory = (sub: any) => {
    setSubcategoryId(sub.id);
    setHistory([...history, "subcategory"]);

    if (sub.questions && sub.questions.length > 0) {
      setLeadView("question");
      const sortedQ = [...sub.questions].sort((a: any, b: any) => (a.order_index || 0) - (b.order_index || 0));
      setCurrentQuestionId(sortedQ[0].id);
    } else {
      setLeadView("contact");
    }
  };

  const handleAnswer = (qId: number, answerText: string, ansId: number, nextId?: number) => {
    setAnswers({ ...answers, [qId]: { value: answerText, answerId: ansId } });
    setHistory([...history, { view: "question", qId }]);

    if (nextId) {
      setCurrentQuestionId(nextId);
    } else {
      setLeadView("contact");
    }
  };

  // Synchronize state when question changes (to support Back button properly)
  useEffect(() => {
    if (currentQuestionId) {
      const savedAnswer = answers[currentQuestionId];
      if (savedAnswer) {
        setCheckboxSelections(savedAnswer.checkedIds || []);
        setTextInputValue(savedAnswer.value || "");
        setSliderValue(parseInt(savedAnswer.value) || (currentQuestion?.config?.default ?? 100));
      } else {
        setCheckboxSelections([]);
        setTextInputValue("");
        const minVal = currentQuestion?.config?.min ?? 0;
        const maxVal = currentQuestion?.config?.max ?? 100;
        const defVal = currentQuestion?.config?.default ?? Math.round((minVal + maxVal) / 2);
        setSliderValue(defVal);
      }
    }
  }, [currentQuestionId, answers, currentQuestion]);

  const handleSliderSubmit = (val: number) => {
    const q = currentQuestion;
    if (!q) return;

    const firstAnsId = q.answers?.[0]?.id;
    const updatedAnswers = {
      ...answers,
      [q.id]: {
        value: `${val}`,
        answerId: firstAnsId,
      }
    };
    setAnswers(updatedAnswers);
    setHistory([...history, { view: "question", qId: q.id }]);

    const nextId = q.answers?.[0]?.next_question_id;
    if (nextId) {
      setCurrentQuestionId(nextId);
    } else {
      setLeadView("contact");
    }
  };

  const handleCheckboxToggle = (ansId: number) => {
    setCheckboxSelections((prev) =>
      prev.includes(ansId) ? prev.filter((id) => id !== ansId) : [...prev, ansId]
    );
  };

  const handleCheckboxSubmit = () => {
    if (checkboxSelections.length === 0) {
      alert("Bitte wählen Sie mindestens eine Option!");
      return;
    }
    const q = currentQuestion;
    if (!q) return;

    const selectedAnswers = q.answers.filter((a: any) => checkboxSelections.includes(a.id));
    const selectedText = selectedAnswers.map((a: any) => a.answer_text).join(", ");
    const firstAnsId = selectedAnswers[0]?.id;

    const updatedAnswers = {
      ...answers,
      [q.id]: {
        value: selectedText,
        answerId: firstAnsId,
        checkedIds: [...checkboxSelections]
      }
    };
    setAnswers(updatedAnswers);
    setHistory([...history, { view: "question", qId: q.id }]);

    const nextId = selectedAnswers.find((a: any) => a.next_question_id)?.next_question_id;

    if (nextId) {
      setCurrentQuestionId(nextId);
    } else {
      setLeadView("contact");
    }
  };

  const handleTextInputSubmit = (val: string) => {
    if (!val.trim()) {
      alert("Bitte geben Sie eine Antwort ein!");
      return;
    }
    const q = currentQuestion;
    if (!q) return;

    const updatedAnswers = {
      ...answers,
      [q.id]: {
        value: val.trim()
      }
    };
    setAnswers(updatedAnswers);
    setHistory([...history, { view: "question", qId: q.id }]);

    const nextId = q.next_question_id;
    if (nextId) {
      setCurrentQuestionId(nextId);
    } else {
      setLeadView("contact");
    }
  };

  const handlePrev = () => {
    if (history.length === 0) return;
    const prevHistory = [...history];
    const lastState = prevHistory.pop();
    setHistory(prevHistory);

    if (lastState === "category") {
      setLeadView("category");
    } else if (lastState === "subcategory") {
      setLeadView("subcategory");
    } else if (typeof lastState === "object" && lastState.view === "question") {
      setLeadView("question");
      setCurrentQuestionId(lastState.qId);
    }
  };

  const handleLeadSubmit = async () => {
    if (!contactName || !contactEmail) {
      alert("Name und E-Mail sind Pflichtfelder!");
      return;
    }

    setLeadStatus("loading");
    setLeadMessage("Übermittele Anfrage...");

    const payload = {
      title: "Empire Premium Website Lead",
      category_id: categoryId,
      subcategory_id: subcategoryId,
      contact_name: contactName,
      contact_email: contactEmail,
      contact_phone: contactPhone,
      notes: contactNotes,
      source_website: typeof window !== "undefined" ? window.location.hostname : "empire-premium.de",
      answers: Object.keys(answers).map((qId) => ({
        question_id: parseInt(qId),
        answer_id: answers[parseInt(qId)].answerId,
        answer_value: answers[parseInt(qId)].value,
      })),
    };

    try {
      const res = await fetch(`${apiUrl}/inquiries`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(apiKey ? { "x-api-key": apiKey } : {}),
        },
        body: JSON.stringify(payload),
      });

      const resJson = await res.json();
      if (res.ok) {
        setLeadStatus("success");
        setLeadMessage("Vielen Dank! Ihre Anfrage wurde erfolgreich übermittelt.");
        // Reset states
        setAnswers({});
        setContactName("");
        setContactEmail("");
        setContactPhone("");
        setContactNotes("");
      } else {
        throw new Error(resJson.message || "Unerwarteter API-Fehler.");
      }
    } catch (e: any) {
      setLeadStatus("error");
      setLeadMessage(`API Fehler: ${e.message || "Lead-Endpoint nicht erreichbar."}`);
    }
  };

  // --- Support logic handlers ---
  const handleSelectSupTopic = (topic: string) => {
    setSupTopic(topic);
    setSupSubject(`${topic}: `);
    setTimeout(() => setSupStep(1), 200);
  };

  const handleSupportSubmit = async () => {
    if (!supSubject || !supDesc || !supName || !supEmail) {
      alert("Bitte füllen Sie alle Pflichtfelder aus!");
      return;
    }

    setSupStatus("loading");
    setSupMessage("Erstelle Ticket...");

    const payload = {
      subject: supSubject,
      description: supDesc,
      client_name: supName,
      client_email: supEmail,
      priority: supPriority,
    };

    try {
      const res = await fetch(`${apiUrl}/support`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(apiKey ? { "x-api-key": apiKey } : {}),
        },
        body: JSON.stringify(payload),
      });

      const resJson = await res.json();
      if (res.ok) {
        setSupStatus("success");
        setSupMessage("Erfolg! Ihr Support-Ticket wurde im CRM angelegt.");
        setSupSubject("");
        setSupDesc("");
        setSupName("");
        setSupEmail("");
      } else {
        throw new Error(resJson.message || "CRM Fehler beim Erstellen des Tickets.");
      }
    } catch (e: any) {
      setSupStatus("error");
      setSupMessage(`API Fehler: ${e.message || "Support-Endpoint nicht erreichbar."}`);
    }
  };

  const handleResetLead = () => {
    setLeadView("category");
    setCategoryId(null);
    setSubcategoryId(null);
    setCurrentQuestionId(null);
    setAnswers({});
    setHistory([]);
    setContactName("");
    setContactEmail("");
    setContactPhone("");
    setContactNotes("");
    setLeadStatus("idle");
    setLeadMessage("");
  };

  const handleResetSupport = () => {
    setSupStep(0);
    setSupTopic("");
    setSupSubject("");
    setSupDesc("");
    setSupName("");
    setSupEmail("");
    setSupPriority("normal");
    setSupStatus("idle");
    setSupMessage("");
  };

  // --- Dynamic step indicators Inquiry ---

  let progressPercent = 15;
  let wizardTitle = "Wie können wir Ihnen helfen?";
  let stepLabel = "Kategorie";

  if (leadView === "subcategory") {
    progressPercent = 40;
    wizardTitle = "Präzisieren Sie Ihr Anliegen";
    stepLabel = "Unterkategorie";
  } else if (leadView === "question") {
    progressPercent = 70;
    wizardTitle = currentQuestion?.question_text || "Frage";
    stepLabel = "Details";
  } else if (leadView === "contact") {
    progressPercent = 95;
    wizardTitle = "Ihre Kontaktdaten";
    stepLabel = "Kontakt";
  }

  // --- Support indicators ---
  let supProgress = 10;
  let supTitle = "Technischer Support";
  if (supStep === 1) {
    supProgress = 50;
    supTitle = "Problembeschreibung";
  } else if (supStep === 2) {
    supProgress = 95;
    supTitle = "Kontaktdaten & Priorität";
  }

  return (
    <section
      id="effizienz-rechner"
      className="relative z-10 py-24 md:py-32 px-6 max-w-4xl mx-auto w-full border-t border-white/5"
    >
      {/* Decorative Aura Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] rounded-full bg-emerald-500/5 blur-[130px] pointer-events-none" />

      {/* Segment Selector Tab Toggles */}
      <div className="flex justify-center mb-12 relative z-10">
        <div className="p-1 rounded-full border border-white/10 bg-slate-950/80 backdrop-blur-md flex gap-2">
          <button
            onClick={() => setActiveTab("inquiry")}
            className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
              activeTab === "inquiry"
                ? "bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 shadow"
                : "text-slate-400 hover:text-white"
            }`}
          >
            ☀️ Projekt-Planer
          </button>
          <button
            onClick={() => setActiveTab("support")}
            className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
              activeTab === "support"
                ? "bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 shadow"
                : "text-slate-400 hover:text-white"
            }`}
          >
            🛠️ Technischer Support
          </button>
        </div>
      </div>

      {/* Active Form Content Area */}
      <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/45 p-8 md:p-12 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        
        {/* API connection indicator badge */}
        <div className="absolute top-6 right-6 flex items-center gap-1.5 px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-wider bg-slate-900 border border-white/5 text-slate-400">
          <Activity className={`w-3 h-3 ${isDynamic ? "text-emerald-400" : "text-slate-500"}`} />
          {isDynamic ? "Live CRM synchron" : "Offline Sandbox"}
        </div>

        {/* 1. WIZARD: INQUIRY (LEADS) */}
        {activeTab === "inquiry" && (
          <div className="space-y-8">
            {leadStatus === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 space-y-6 max-w-md mx-auto relative z-10"
              >
                <div className="w-20 h-20 rounded-full bg-emerald-500/10 border border-emerald-400/30 flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(16,185,129,0.15)] animate-pulse">
                  <CheckCircle2 className="w-10 h-10 text-emerald-400" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-black text-white tracking-tight">Anfrage übermittelt!</h3>
                  <p className="text-slate-400 text-sm font-medium leading-relaxed">
                    Vielen Dank für Ihr Vertrauen. Unsere Empire Premium Energieexperten prüfen Ihre Angaben und melden sich in Kürze bei Ihnen.
                  </p>
                </div>
                
                <button
                  onClick={handleResetLead}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 font-black text-xs uppercase tracking-widest shadow shadow-emerald-500/20 active:scale-98"
                >
                  Neue Anfrage planen
                </button>
              </motion.div>
            ) : (
              <>
            {/* Header Stage */}
            <div className="text-center space-y-4">
              <div className="w-48 h-[3px] bg-white/5 rounded-full mx-auto overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-emerald-400 to-teal-300 transition-all duration-500"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
              <span className="block text-[9px] font-black uppercase tracking-widest text-emerald-400">
                {stepLabel}
              </span>
              <h3 className="text-xl md:text-3xl font-black text-white tracking-tight leading-tight max-w-md mx-auto">
                {wizardTitle}
              </h3>
            </div>

            {/* Stage Body content rendering */}
            <div className="min-h-[220px] flex items-center justify-center">
              <AnimatePresence mode="wait">
                {/* Category select stage */}
                {leadView === "category" && (
                  <motion.div
                    key="lead-cat"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full"
                  >
                    {categories.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => selectCategory(cat)}
                        className={`flex flex-col items-center gap-3 p-6 rounded-2xl border transition-all duration-300 bg-slate-950/40 text-center ${
                          categoryId === cat.id
                            ? "border-emerald-400 bg-emerald-500/10 text-white shadow-[0_0_15px_rgba(16,185,129,0.15)]"
                            : "border-white/5 hover:border-emerald-500/25 hover:bg-slate-900/30 text-slate-300 hover:text-white"
                        }`}
                      >
                        <HelpCircle className="w-7 h-7 text-emerald-400" />
                        <span className="text-sm font-bold tracking-tight">{cat.name}</span>
                      </button>
                    ))}
                  </motion.div>
                )}

                {/* Subcategory select stage */}
                {leadView === "subcategory" && (
                  <motion.div
                    key="lead-sub"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full"
                  >
                    {currentCategory?.subcategories?.map((sub: any) => (
                      <button
                        key={sub.id}
                        onClick={() => selectSubcategory(sub)}
                        className={`flex flex-col items-center gap-3 p-6 rounded-2xl border transition-all duration-300 bg-slate-950/40 text-center ${
                          subcategoryId === sub.id
                            ? "border-teal-400 bg-teal-500/10 text-white shadow-[0_0_15px_rgba(20,184,166,0.15)]"
                            : "border-white/5 hover:border-teal-500/25 hover:bg-slate-900/30 text-slate-300 hover:text-white"
                        }`}
                      >
                        <Zap className="w-7 h-7 text-teal-400" />
                        <span className="text-sm font-bold tracking-tight">{sub.name}</span>
                      </button>
                    ))}
                  </motion.div>
                )}

                {/* Question stage */}
                {leadView === "question" && (
                  <motion.div
                    key="lead-q"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    className="space-y-6 w-full"
                  >
                    {currentQuestion?.type === "checkbox" ? (
                      <div className="space-y-4 w-full">
                        <div className="grid grid-cols-1 gap-3">
                          {currentQuestion?.answers?.map((ans: any) => {
                            const isChecked = checkboxSelections.includes(ans.id);
                            return (
                              <button
                                key={ans.id}
                                onClick={() => handleCheckboxToggle(ans.id)}
                                className={`flex items-center gap-4 p-4 rounded-xl border text-left transition-all duration-300 bg-slate-950/40 hover:bg-slate-900/30 ${
                                  isChecked
                                    ? "border-emerald-400 bg-emerald-500/10 text-white"
                                    : "border-white/5 text-slate-300 hover:text-white"
                                }`}
                              >
                                <div className={`w-5 h-5 rounded border flex items-center justify-center transition-all duration-200 ${
                                  isChecked
                                    ? "border-emerald-400 bg-emerald-400 text-slate-950"
                                    : "border-slate-500 bg-transparent"
                                }`}>
                                  {isChecked && (
                                    <svg className="w-3.5 h-3.5 stroke-current stroke-2" fill="none" viewBox="0 0 24 24">
                                      <polyline points="20 6 9 17 4 12" />
                                    </svg>
                                  )}
                                </div>
                                <span className="text-sm font-semibold">{ans.answer_text}</span>
                              </button>
                            );
                          })}
                        </div>
                        <button
                          onClick={handleCheckboxSubmit}
                          className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 font-black text-xs uppercase tracking-widest shadow active:scale-98"
                        >
                          Weiter <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    ) : (currentQuestion?.type === "input" || currentQuestion?.type === "text") ? (
                      <div className="space-y-4 w-full">
                        <div className="space-y-2">
                          <input
                            type="text"
                            value={textInputValue}
                            onChange={(e) => setTextInputValue(e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") handleTextInputSubmit(textInputValue);
                            }}
                            placeholder="Ihre Antwort eingeben..."
                            className="bg-slate-900/60 border border-white/10 rounded-xl px-4 py-3.5 text-sm focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 w-full text-white placeholder-slate-500 focus:outline-none"
                            autoFocus
                          />
                        </div>
                        <button
                          onClick={() => handleTextInputSubmit(textInputValue)}
                          className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 font-black text-xs uppercase tracking-widest shadow active:scale-98"
                        >
                          Weiter <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    ) : currentQuestion?.type === "slider" ? (
                      <div className="space-y-8 w-full py-4 text-center animate-fadeIn">
                        <div className="space-y-2">
                          <span className="text-sm font-semibold text-slate-400">Ausgewählter Wert</span>
                          <div className="text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300 drop-shadow-[0_0_15px_rgba(52,211,153,0.2)]">
                            {sliderValue} <span className="text-2xl font-bold text-slate-500 ml-1">{currentQuestion.unit || ""}</span>
                          </div>
                        </div>

                        <div className="relative px-2 py-4">
                          <input
                            type="range"
                            min={currentQuestion.config?.min ?? 0}
                            max={currentQuestion.config?.max ?? 100}
                            step={currentQuestion.config?.step ?? 1}
                            value={sliderValue}
                            onChange={(e) => setSliderValue(Number(e.target.value))}
                            className="w-full h-2 bg-slate-900 rounded-lg appearance-none cursor-pointer accent-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                          />
                          <div className="flex justify-between text-[10px] font-black uppercase tracking-wider text-slate-500 mt-3 px-1">
                            <span>{currentQuestion.config?.min ?? 0} {currentQuestion.unit || ""}</span>
                            <span>{currentQuestion.config?.max ?? 100} {currentQuestion.unit || ""}</span>
                          </div>
                        </div>

                        <button
                          onClick={() => handleSliderSubmit(sliderValue)}
                          className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 font-black text-xs uppercase tracking-widest shadow active:scale-98"
                        >
                          Weiter <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    ) : (
                      /* radio, select, buttons, default */
                      <div className="grid grid-cols-1 gap-3 w-full animate-fadeIn">
                        {currentQuestion?.answers?.map((ans: any) => (
                          <button
                            key={ans.id}
                            onClick={() => handleAnswer(currentQuestion.id, ans.answer_text, ans.id, ans.next_question_id)}
                            className={`flex items-center gap-4 p-4 rounded-xl border text-left transition-all duration-300 bg-slate-950/40 ${
                              answers[currentQuestion.id]?.answerId === ans.id
                                ? "border-emerald-400 bg-emerald-500/10 text-white"
                                : "border-white/5 hover:border-white/15 hover:bg-slate-900/30 text-slate-300 hover:text-white"
                            }`}
                          >
                            <div className="w-4 h-4 rounded-full border border-emerald-400 flex items-center justify-center">
                              {answers[currentQuestion.id]?.answerId === ans.id && (
                                <div className="w-2 h-2 rounded-full bg-emerald-400" />
                              )}
                            </div>
                            <span className="text-sm font-semibold">{ans.answer_text}</span>
                          </button>
                        ))}
                      </div>
                    )}
                  </motion.div>
                )}

                {/* Contact form stage */}
                {leadView === "contact" && (
                  <motion.div
                    key="lead-contact"
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    variants={{
                      hidden: { opacity: 0 },
                      show: {
                        opacity: 1,
                        transition: { staggerChildren: 0.08 }
                      }
                    }}
                    className="space-y-5 w-full"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <motion.div 
                        variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
                        className="space-y-2"
                      >
                        <label className="text-[10px] uppercase font-black tracking-widest text-slate-400 ml-1">Name / Firma *</label>
                        <div className="bg-slate-950/60 border border-white/10 rounded-2xl flex items-center px-4 py-3.5 transition-all duration-300 focus-within:ring-2 focus-within:ring-emerald-500/20 focus-within:border-emerald-400 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
                          <User className="w-4 h-4 text-emerald-400 shrink-0" />
                          <input
                            type="text"
                            value={contactName}
                            onChange={(e) => setContactName(e.target.value)}
                            placeholder="Max Mustermann"
                            className="bg-transparent border-none outline-none focus:ring-0 focus:outline-none w-full text-white text-sm placeholder-slate-500 ml-3"
                          />
                        </div>
                      </motion.div>

                      <motion.div 
                        variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
                        className="space-y-2"
                      >
                        <label className="text-[10px] uppercase font-black tracking-widest text-slate-400 ml-1">E-Mail Adresse *</label>
                        <div className="bg-slate-950/60 border border-white/10 rounded-2xl flex items-center px-4 py-3.5 transition-all duration-300 focus-within:ring-2 focus-within:ring-emerald-500/20 focus-within:border-emerald-400 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
                          <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                          <input
                            type="email"
                            value={contactEmail}
                            onChange={(e) => setContactEmail(e.target.value)}
                            placeholder="max@beispiel.de"
                            className="bg-transparent border-none outline-none focus:ring-0 focus:outline-none w-full text-white text-sm placeholder-slate-500 ml-3"
                          />
                        </div>
                      </motion.div>
                    </div>

                    <motion.div 
                      variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
                      className="space-y-2"
                    >
                      <label className="text-[10px] uppercase font-black tracking-widest text-slate-400 ml-1">Telefonnummer</label>
                      <div className="bg-slate-950/60 border border-white/10 rounded-2xl flex items-center px-4 py-3.5 transition-all duration-300 focus-within:ring-2 focus-within:ring-emerald-500/20 focus-within:border-emerald-400 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
                        <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                        <input
                          type="tel"
                          value={contactPhone}
                          onChange={(e) => setContactPhone(e.target.value)}
                          placeholder="0172 1234567"
                          className="bg-transparent border-none outline-none focus:ring-0 focus:outline-none w-full text-white text-sm placeholder-slate-500 ml-3"
                        />
                      </div>
                    </motion.div>

                    <motion.div 
                      variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
                      className="space-y-2"
                    >
                      <label className="text-[10px] uppercase font-black tracking-widest text-slate-400 ml-1">Notizen / Anmerkungen</label>
                      <div className="bg-slate-950/60 border border-white/10 rounded-2xl flex items-start px-4 py-3.5 transition-all duration-300 focus-within:ring-2 focus-within:ring-emerald-500/20 focus-within:border-emerald-400 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
                        <MessageSquare className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                        <textarea
                          value={contactNotes}
                          onChange={(e) => setContactNotes(e.target.value)}
                          rows={3}
                          placeholder="Ihre Nachricht..."
                          className="bg-transparent border-none outline-none focus:ring-0 focus:outline-none w-full text-white text-sm placeholder-slate-500 ml-3 resize-none"
                        />
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Actions panel */}
            <div className="flex gap-4 pt-6 border-t border-white/5">
              {leadView !== "category" && (
                <button
                  onClick={handlePrev}
                  className="flex items-center justify-center gap-1.5 px-6 py-3.5 rounded-xl border border-white/10 bg-transparent text-slate-400 hover:text-white font-bold text-xs uppercase tracking-widest"
                >
                  <ArrowLeft className="w-4 h-4" /> Zurück
                </button>
              )}
              {leadView === "contact" ? (
                <button
                  onClick={handleLeadSubmit}
                  disabled={leadStatus === "loading"}
                  className="flex-1 flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 font-black text-xs uppercase tracking-widest shadow shadow-emerald-500/20 active:scale-98 disabled:opacity-50"
                >
                  Anfrage senden <Send className="w-4 h-4" />
                </button>
              ) : (
                <div className="flex-1 text-center text-xs text-slate-500 font-semibold italic flex items-center justify-center bg-slate-900/20 rounded-xl border border-dashed border-white/5">
                  {leadView === "question" && currentQuestion?.type === "checkbox"
                    ? "Mehrfachauswahl möglich. Klicken Sie auf Weiter."
                    : leadView === "question" && (currentQuestion?.type === "input" || currentQuestion?.type === "text")
                      ? "Geben Sie Ihre Antwort ein und klicken Sie auf Weiter."
                      : leadView === "question" && currentQuestion?.type === "slider"
                        ? "Passen Sie den Schieberegler an und klicken Sie auf Weiter."
                        : "Wählen Sie eine Option um fortzufahren."}
                </div>
              )}
            </div>

            {/* Lead Status Toasts */}
            {(leadStatus === "loading" || leadStatus === "error") && (
              <div 
                className={`p-4 rounded-xl border flex items-center gap-3 text-xs font-semibold ${
                  leadStatus === "error"
                    ? "bg-red-500/10 border-red-500/25 text-red-400"
                    : "bg-slate-900/40 border-white/5 text-slate-300"
                }`}
              >
                {leadStatus === "error" ? (
                  <AlertTriangle className="w-5 h-5 shrink-0" />
                ) : (
                  <Activity className="w-5 h-5 animate-spin text-emerald-400 shrink-0" />
                )}
                <span>{leadMessage}</span>
              </div>
            )}
              </>
            )}
          </div>
        )}

        {/* 2. WIZARD: SUPPORT (TICKETS) */}
        {activeTab === "support" && (
          <div className="space-y-8">
            {supStatus === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 space-y-6 max-w-md mx-auto relative z-10"
              >
                <div className="w-20 h-20 rounded-full bg-emerald-500/10 border border-emerald-400/30 flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(16,185,129,0.15)] animate-pulse">
                  <CheckCircle2 className="w-10 h-10 text-emerald-400" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-black text-white tracking-tight">Ticket erstellt!</h3>
                  <p className="text-slate-400 text-sm font-medium leading-relaxed">
                    Ihr technisches Anliegen wurde erfolgreich in unserem CRM registriert. Ein Servicetechniker wird sich schnellstmöglich mit Ihnen in Verbindung setzen.
                  </p>
                </div>
                
                <button
                  onClick={handleResetSupport}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 font-black text-xs uppercase tracking-widest shadow shadow-emerald-500/20 active:scale-98"
                >
                  Neues Ticket erstellen
                </button>
              </motion.div>
            ) : (
              <>
            {/* Header Stage */}
            <div className="text-center space-y-4">
              <div className="w-48 h-[3px] bg-white/5 rounded-full mx-auto overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-emerald-400 to-teal-300 transition-all duration-500"
                  style={{ width: `${supProgress}%` }}
                />
              </div>
              <span className="block text-[9px] font-black uppercase tracking-widest text-emerald-400">
                Support — Schritt {supStep + 1}
              </span>
              <h3 className="text-xl md:text-3xl font-black text-white tracking-tight leading-tight max-w-md mx-auto">
                {supTitle}
              </h3>
            </div>

            {/* Stage Body content rendering */}
            <div className="min-h-[220px] flex items-center justify-center">
              <AnimatePresence mode="wait">
                {/* Sup Step 0: Topic select */}
                {supStep === 0 && (
                  <motion.div
                    key="sup-step-0"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full"
                  >
                    {[
                      { topic: "Software-Problem", label: "Software / Steuerung", icon: Cpu },
                      { topic: "Technischer Defekt", label: "Defekt an Solaranlage", icon: Zap },
                      { topic: "Heizung & Pumpe", label: "Wärmepumpe Justierung", icon: HelpCircle },
                      { topic: "Sonstiges", label: "Generelle Anfrage", icon: Globe }
                    ].map((item) => (
                      <button
                        key={item.topic}
                        onClick={() => handleSelectSupTopic(item.topic)}
                        className={`flex flex-col items-center gap-3 p-6 rounded-2xl border transition-all duration-300 bg-slate-950/40 text-center ${
                          supTopic === item.topic
                            ? "border-emerald-400 bg-emerald-500/10 text-white shadow"
                            : "border-white/5 hover:border-emerald-500/20 hover:bg-slate-900/30 text-slate-300"
                        }`}
                      >
                        <item.icon className="w-7 h-7 text-emerald-400" />
                        <span className="text-sm font-bold tracking-tight">{item.label}</span>
                      </button>
                    ))}
                  </motion.div>
                )}

                {/* Sup Step 1: Subject and description */}
                {supStep === 1 && (
                  <motion.div
                    key="sup-step-1"
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    variants={{
                      hidden: { opacity: 0 },
                      show: {
                        opacity: 1,
                        transition: { staggerChildren: 0.08 }
                      }
                    }}
                    className="space-y-5 w-full"
                  >
                    <motion.div 
                      variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
                      className="space-y-2"
                    >
                      <label className="text-[10px] uppercase font-black tracking-widest text-slate-400 ml-1">Betreff *</label>
                      <div className="bg-slate-950/60 border border-white/10 rounded-2xl flex items-center px-4 py-3.5 transition-all duration-300 focus-within:ring-2 focus-within:ring-emerald-500/20 focus-within:border-emerald-400 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
                        <Tag className="w-4 h-4 text-emerald-400 shrink-0" />
                        <input
                          type="text"
                          value={supSubject}
                          onChange={(e) => setSupSubject(e.target.value)}
                          placeholder="Kurzer Betreff..."
                          className="bg-transparent border-none outline-none focus:ring-0 focus:outline-none w-full text-white text-sm placeholder-slate-500 ml-3"
                        />
                      </div>
                    </motion.div>

                    <motion.div 
                      variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
                      className="space-y-2"
                    >
                      <label className="text-[10px] uppercase font-black tracking-widest text-slate-400 ml-1">Detaillierte Beschreibung *</label>
                      <div className="bg-slate-950/60 border border-white/10 rounded-2xl flex items-start px-4 py-3.5 transition-all duration-300 focus-within:ring-2 focus-within:ring-emerald-500/20 focus-within:border-emerald-400 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
                        <ClipboardList className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                        <textarea
                          value={supDesc}
                          onChange={(e) => setSupDesc(e.target.value)}
                          rows={5}
                          placeholder="Bitte beschreiben Sie das Problem so genau wie möglich..."
                          className="bg-transparent border-none outline-none focus:ring-0 focus:outline-none w-full text-white text-sm placeholder-slate-500 ml-3 resize-none"
                        />
                      </div>
                    </motion.div>
                  </motion.div>
                )}

                {/* Sup Step 2: Contact info and Priority */}
                {supStep === 2 && (
                  <motion.div
                    key="sup-step-2"
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    variants={{
                      hidden: { opacity: 0 },
                      show: {
                        opacity: 1,
                        transition: { staggerChildren: 0.08 }
                      }
                    }}
                    className="space-y-5 w-full"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <motion.div 
                        variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
                        className="space-y-2"
                      >
                        <label className="text-[10px] uppercase font-black tracking-widest text-slate-400 ml-1">Ihr Name *</label>
                        <div className="bg-slate-950/60 border border-white/10 rounded-2xl flex items-center px-4 py-3.5 transition-all duration-300 focus-within:ring-2 focus-within:ring-emerald-500/20 focus-within:border-emerald-400 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
                          <User className="w-4 h-4 text-emerald-400 shrink-0" />
                          <input
                            type="text"
                            value={supName}
                            onChange={(e) => setSupName(e.target.value)}
                            placeholder="Max Mustermann"
                            className="bg-transparent border-none outline-none focus:ring-0 focus:outline-none w-full text-white text-sm placeholder-slate-500 ml-3"
                          />
                        </div>
                      </motion.div>

                      <motion.div 
                        variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
                        className="space-y-2"
                      >
                        <label className="text-[10px] uppercase font-black tracking-widest text-slate-400 ml-1">E-Mail Adresse *</label>
                        <div className="bg-slate-950/60 border border-white/10 rounded-2xl flex items-center px-4 py-3.5 transition-all duration-300 focus-within:ring-2 focus-within:ring-emerald-500/20 focus-within:border-emerald-400 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
                          <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                          <input
                            type="email"
                            value={supEmail}
                            onChange={(e) => setSupEmail(e.target.value)}
                            placeholder="max@beispiel.de"
                            className="bg-transparent border-none outline-none focus:ring-0 focus:outline-none w-full text-white text-sm placeholder-slate-500 ml-3"
                          />
                        </div>
                      </motion.div>
                    </div>

                    <motion.div 
                      variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
                      className="space-y-2"
                    >
                      <label className="text-[10px] uppercase font-black tracking-widest text-slate-400 ml-1">Priorität</label>
                      <div className="bg-slate-950/60 border border-white/10 rounded-2xl flex items-center px-4 py-3.5 transition-all duration-300 focus-within:ring-2 focus-within:ring-emerald-500/20 focus-within:border-emerald-400 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] relative">
                        <Activity className="w-4 h-4 text-emerald-400 shrink-0" />
                        <select
                          value={supPriority}
                          onChange={(e) => setSupPriority(e.target.value)}
                          className="bg-transparent border-none outline-none focus:ring-0 focus:outline-none w-full text-white text-sm cursor-pointer ml-3 appearance-none pr-8 relative z-10"
                        >
                          <option value="low" className="bg-slate-950">Niedrig</option>
                          <option value="normal" className="bg-slate-950">Normal</option>
                          <option value="high" className="bg-slate-950">Hoch</option>
                          <option value="urgent" className="bg-slate-950">Dringend</option>
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none text-xs">▼</div>
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Actions panel */}
            <div className="flex gap-4 pt-6 border-t border-white/5">
              {supStep !== 0 && (
                <button
                  onClick={() => setSupStep(supStep - 1)}
                  className="flex items-center justify-center gap-1.5 px-6 py-3.5 rounded-xl border border-white/10 bg-transparent text-slate-400 hover:text-white font-bold text-xs uppercase tracking-widest"
                >
                  <ArrowLeft className="w-4 h-4" /> Zurück
                </button>
              )}
              {supStep === 2 ? (
                <button
                  onClick={handleSupportSubmit}
                  disabled={supStatus === "loading"}
                  className="flex-1 flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 font-black text-xs uppercase tracking-widest shadow active:scale-98 disabled:opacity-50"
                >
                  Ticket senden <Send className="w-4 h-4" />
                </button>
              ) : supStep === 1 ? (
                <button
                  onClick={() => setSupStep(2)}
                  className="flex-1 flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 font-black text-xs uppercase tracking-widest shadow active:scale-98"
                >
                  Weiter <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <div className="flex-1 text-center text-xs text-slate-500 font-semibold italic flex items-center justify-center bg-slate-900/20 rounded-xl border border-dashed border-white/5">
                  Wählen Sie ein Supportthema.
                </div>
              )}
            </div>

            {/* Support Ticket Status Toasts */}
            {(supStatus === "loading" || supStatus === "error") && (
              <div 
                className={`p-4 rounded-xl border flex items-center gap-3 text-xs font-semibold ${
                  supStatus === "error"
                    ? "bg-red-500/10 border-red-500/25 text-red-400"
                    : "bg-slate-900/40 border-white/5 text-slate-300"
                }`}
              >
                {supStatus === "error" ? (
                  <AlertTriangle className="w-5 h-5 shrink-0" />
                ) : (
                  <Activity className="w-5 h-5 animate-spin text-emerald-400 shrink-0" />
                )}
                <span>{supMessage}</span>
              </div>
            )}
              </>
            )}
          </div>
        )}

      </div>

    </section>
  );
}
