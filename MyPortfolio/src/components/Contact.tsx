"use client";
import React, { FormEvent } from "react";

interface ContactProps {
    email: string;
    phone: string;
    location: string;
}

export default function Contact({ email, phone, location }: ContactProps) {
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert("Message sent! Thank you for reaching out. I will get back to you soon.");
        (e.target as HTMLFormElement).reset();
    };

    return (
        <section id="contact">
            <div className="section-header fade-in">
                <div className="section-label">Get in Touch</div>
                <h2 className="section-title">Let's Connect</h2>
                <p className="section-description">
                    Interested in collaboration or have a project in mind? I'd love to hear from you.
                </p>
            </div>
            <div className="contact-content fade-in">
                <div className="flex flex-col md:flex-row gap-6 mb-16 justify-center w-full max-w-5xl mx-auto">
                    {/* Email Card */}
                    <div className="flex flex-1 items-center gap-5 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(59,130,246,0.15)] hover:border-blue-500/30">
                        <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center rounded-full bg-blue-500/10 text-blue-400 text-xl border border-blue-500/20">
                            <i className="fa-solid fa-envelope"></i>
                        </div>
                        <div className="flex flex-col text-left overflow-hidden">
                            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--text-secondary)] mb-1">Email</span>
                            <a href={`mailto:${email}`} className="text-[var(--text-primary)] text-[13px] md:text-sm lg:text-base font-medium break-words hover:text-blue-400 transition-colors">
                                {email}
                            </a>
                        </div>
                    </div>

                    {/* Phone Card */}
                    <div className="flex flex-1 items-center gap-5 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(59,130,246,0.15)] hover:border-blue-500/30">
                        <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center rounded-full bg-blue-500/10 text-blue-400 text-xl border border-blue-500/20">
                            <i className="fa-solid fa-phone"></i>
                        </div>
                        <div className="flex flex-col text-left overflow-hidden">
                            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--text-secondary)] mb-1">Phone</span>
                            <a href={`tel:${phone.replace(/\s+/g, "")}`} className="text-[var(--text-primary)] text-[13px] md:text-sm lg:text-base font-medium hover:text-blue-400 transition-colors">
                                {phone}
                            </a>
                        </div>
                    </div>

                    {/* Location Card */}
                    <div className="flex flex-1 items-center gap-5 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(59,130,246,0.15)] hover:border-blue-500/30">
                        <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center rounded-full bg-blue-500/10 text-blue-400 text-xl border border-blue-500/20">
                            <i className="fa-solid fa-location-dot"></i>
                        </div>
                        <div className="flex flex-col text-left overflow-hidden">
                            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--text-secondary)] mb-1">Location</span>
                            <span className="text-[var(--text-primary)] text-[13px] md:text-sm lg:text-base font-medium">
                                {location}
                            </span>
                        </div>
                    </div>
                </div>

                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" required></textarea>
                    </div>
                    <button type="submit" className="btn btn-secondary form-submit">
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
}
