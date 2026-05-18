"use client";

import { MapPin, Clock, Phone, MessageCircle, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

const infoItems = [
  {
    icon: MapPin,
    label: "Ubicación",
    value: "Ituzaingó 1572, B1980DTC Coronel Brandsen, Provincia de Buenos Aires",
    href: undefined,
  },
  {
    icon: Clock,
    label: "Horarios",
    value: "Lunes a sábados de 09:00 a 18:00",
    href: undefined,
  },
  {
    icon: Phone,
    label: "Reservas",
    value: "+54 1162297037",
    href: "tel:+541162297037",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+54 1152282070",
    href: "https://wa.me/+541152282070",
  },
];

export default function ContactSection() {
  return (
    <section
      id="contacto"
      style={{ backgroundColor: "rgb(22, 24, 83)" }}
      className="px-6 py-16"
    >
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <h2 className="mb-2 text-center text-[32px] font-bold text-white">
          ¡Contáctanos!
        </h2>
        <p
          className="mb-10 text-center text-base"
          style={{ color: "rgba(255,255,255,0.8)" }}
        >
          Déjanos tu consulta y te responderemos cuanto antes.
        </p>

        {/* Two-column layout */}
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-8">
          {/* Left: Contact Form — 60% */}
          <div className="lg:w-[60%]">
            <form
              action="mailto:info@energiasolarbrandsen.com"
              method="post"
              encType="text/plain"
              className="flex flex-col gap-5"
            >
              {/* Nombre */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="nombre"
                  className="text-sm font-semibold"
                  style={{ color: "rgba(255,255,255,0.85)" }}
                >
                  Nombre
                </label>
                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  placeholder="Nombre"
                  className={cn(
                    "w-full rounded px-4 py-3 text-[15px] text-white placeholder:text-white/50",
                    "border outline-none transition-all",
                    "focus:outline-2 focus:outline-white/60"
                  )}
                  style={{
                    border: "1px solid rgba(255,255,255,0.3)",
                    background: "rgba(255,255,255,0.1)",
                  }}
                />
              </div>

              {/* Correo electrónico */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="email"
                  className="text-sm font-semibold"
                  style={{ color: "rgba(255,255,255,0.85)" }}
                >
                  Correo electrónico
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Correo electrónico"
                  className={cn(
                    "w-full rounded px-4 py-3 text-[15px] text-white placeholder:text-white/50",
                    "border outline-none transition-all",
                    "focus:outline-2 focus:outline-white/60"
                  )}
                  style={{
                    border: "1px solid rgba(255,255,255,0.3)",
                    background: "rgba(255,255,255,0.1)",
                  }}
                />
              </div>

              {/* Mensaje */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="mensaje"
                  className="text-sm font-semibold"
                  style={{ color: "rgba(255,255,255,0.85)" }}
                >
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows={4}
                  placeholder="Mensaje"
                  className={cn(
                    "w-full resize-none rounded px-4 py-3 text-[15px] text-white placeholder:text-white/50",
                    "border outline-none transition-all",
                    "focus:outline-2 focus:outline-white/60"
                  )}
                  style={{
                    border: "1px solid rgba(255,255,255,0.3)",
                    background: "rgba(255,255,255,0.1)",
                  }}
                />
              </div>

              {/* Checkbox */}
              <label className="flex cursor-pointer items-start gap-3">
                <input
                  type="checkbox"
                  name="privacidad"
                  className="mt-0.5 shrink-0 accent-white"
                  style={{ width: 16, height: 16 }}
                />
                <span
                  className="text-sm leading-snug"
                  style={{ color: "rgba(255,255,255,0.8)" }}
                >
                  Acepto que mis datos serán utilizados con el objetivo de
                  brindarme servicios, productos y asistencia, conforme a la
                  política de privacidad.
                </span>
              </label>

              {/* Submit */}
              <div>
                <button
                  type="submit"
                  className={cn(
                    "cursor-pointer rounded px-8 py-3 text-[15px] font-bold transition-colors",
                    "hover:bg-white/90"
                  )}
                  style={{
                    background: "white",
                    color: "rgb(22, 24, 83)",
                    borderRadius: 4,
                  }}
                >
                  Enviar consulta
                </button>
              </div>
            </form>
          </div>

          {/* Right: Contact Info — 40% */}
          <div className="flex flex-col justify-start lg:w-[40%]">
            {infoItems.map(({ icon: Icon, label, value, href }) => (
              <div
                key={label}
                className="mb-6 flex items-start gap-4"
              >
                <Icon
                  className="mt-0.5 shrink-0 text-white"
                  size={24}
                />
                <div className="flex flex-col gap-0.5">
                  <span
                    className="text-xs font-semibold uppercase tracking-wider"
                    style={{ color: "rgba(255,255,255,0.7)" }}
                  >
                    {label}
                  </span>
                  {href ? (
                    <a
                      href={href}
                      className="text-[15px] font-medium text-white hover:underline"
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                    >
                      {value}
                    </a>
                  ) : (
                    <span className="text-[15px] font-medium text-white">
                      {value}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
