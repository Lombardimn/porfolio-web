const contactOptions = [
  {
    icon: <i className="ph-duotone ph-envelope" style={{ fontSize: "32px" }} />, title: "Correo", 
    description: "Enviame un email directo.",
    action: () => window.open("mailto:matiiaslombardi@gmail.com", "_blank")
  },
  {
    icon: <i className="ph-duotone ph-linkedin-logo" style={{ fontSize: "32px" }} />, title: "LinkedIn", 
    description: "Conectemos en LinkedIn.",
    action: () => window.open("https://linkedin.com/in/mnlombardi", "_blank")
  },
  {
    icon: <i className="ph-duotone ph-github-logo" style={{ fontSize: "32px" }} />, title: "GitHub", 
    description: "Mirá mis proyectos.",
    action: () => window.open("https://github.com/Lombardimn", "_blank")
  },
  {
    icon: <i className="ph-duotone ph-calendar-plus" style={{ fontSize: "32px" }} />, title: "Reunión", 
    description: "Agendá una videollamada.",
    action: () => window.open("https://calendar.app.google/byKdJz5hqphvwSPj9", "_blank")
  },
  {
    icon: <i className="ph-duotone ph-whatsapp-logo" style={{ fontSize: "32px" }} />, title: "WhatsApp", 
    description: "Escribime directamente.",
    action: () => window.open("https://wa.me/5493513611381", "_blank")
  },
  {
    icon: <i className="ph-duotone ph-file" style={{ fontSize: "32px" }} />, title: "CV", 
    description: "Descargá mi CV.",
    action: () => window.open("/attachments/cv-matias-2025.pdf", "_blank")
  },
];

const interestMap = [
  {
    icon: <i className="ph-duotone ph-code" style={{ fontSize: "32px" }} />, label: "Desarrollo Web", 
    description: "Frontend, Backend y Fullstack.",
    actionText: "Ver proyectos",
    action: () => window.open("/projects", "_self")
  },
  {
    icon: <i className="ph-duotone ph-puzzle-piece" style={{ fontSize: "32px" }} />, label: "Análisis funcional", 
    description: "Documentación, UX y lógica de negocio.",
    actionText: "Leer casos de uso",
    action: () => window.open("/functional-analysis", "_self")
  },
  {
    icon: <i className="ph-duotone ph-briefcase" style={{ fontSize: "32px" }} />, label: "Gestión Agile", 
    description: "Scrum, planificación y backlog.",
    actionText: "Explorar procesos",
    action: () => window.open("/methodologys", "_self")
  },
];

export default function ChannelMatrix() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-4 space-y-12">
      <section>
        <h2 className="text-2xl font-bold mb-4">Conectemos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {
            contactOptions.map((opt, idx) => (
              <div 
                key={idx}
                onClick={opt.action}
                className="rounded-2xl border-[0.5px] border-solid border-slate-900/10 bg-white dark:bg-slate-900 shadow-sm hover:shadow-lg transition cursor-pointer hover:text-teal-500 hover:border-teal-500"
              >
                <div className="p-4 flex flex-col gap-2 items-start">
                  {opt.icon}
                  <h3 className="font-semibold text-lg">{opt.title}</h3>
                  <p className="text-sm text-muted-foreground">{opt.description}</p>
                </div>
              </div>
            ))
          }
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">¿En qué estás interesado?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {
            interestMap.map((area, idx) => (
              <div 
                key={idx}
                onClick={area.action}
                className="rounded-2xl border-[0.5px] border-solid border-slate-900/10 bg-white dark:bg-slate-900 shadow-sm hover:shadow-lg transition cursor-pointer hover:text-teal-500 hover:border-teal-500"
              >
                <div className="p-4 space-y-3">
                  <div className="flex items-center gap-2">
                    {area.icon}
                    <span className="font-semibold text-lg">{area.label}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{area.description}</p>
                  <button onClick={area.action} className="text-sm mt-2">{area.actionText}</button>
                </div>
              </div>
            ))
          }
        </div>
      </section>
    </div>
  );
}
