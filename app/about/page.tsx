import { Building, Award, Users, CheckCircle } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About Voltmax Power Solution | Solar Experts in Bettiah',
    description: 'We are one of the youngest and fastest growing companies in the field of Solar Power Solutions in India. We design, install, and commission Solar Power Plants.',
    keywords: 'about voltmax power solution, solar bettiah, electrical works bettiah, solar power plants india, lt panels bettiah',
    openGraph: {
        title: 'About Voltmax Power Solution - Solar & Electrical Excellence',
        description: 'Voltmax Power Solution is staffed by technically qualified professionals with hands-on industry experience.',
        type: 'website',
    },
    alternates: {
        canonical: 'https://voltmaxpower.in/about',
    },
};

export default function AboutPage() {
    return (
        <div className="pt-32 pb-20 bg-bg-deep min-h-screen">
            <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Powering India with <span className="text-primary">Solar Innovation</span></h1>
                    <p className="text-xl text-slate-400">Voltmax Power Solution is one of the youngest and fastest growing companies in the field of Solar Power Solutions in India.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-20">
                    <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
                        <Building className="w-12 h-12 text-primary mb-6" />
                        <h3 className="text-xl font-bold text-white mb-3">Our Mission</h3>
                        <p className="text-slate-400">To design, install, and commission high-efficiency Solar Power Plants for our customers across India.</p>
                    </div>
                    <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
                        <Award className="w-12 h-12 text-accent-green mb-6" />
                        <h3 className="text-xl font-bold text-white mb-3">Expert Team</h3>
                        <p className="text-slate-400">Staffed by technically qualified professionals with hands-on industry experience in Electrical and Solar projects.</p>
                    </div>
                    <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
                        <Users className="w-12 h-12 text-yellow-500 mb-6" />
                        <h3 className="text-xl font-bold text-white mb-3">Diverse Solutions</h3>
                        <p className="text-slate-400">Expertise in Solar Power Plants, LT Panels, AC Works, and comprehensive Electrical Works.</p>
                    </div>
                </div>

                <div className="bg-primary/10 rounded-[2rem] p-8 md:p-12 border border-primary/20">
                    <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Specialized Services</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            "Design & Installation of Solar Plants",
                            "On-Grid, Off-Grid & Hybrid Solar Systems",
                            "LT Panel Manufacturing & Installation",
                            "Comprehensive Electrical & AC Works",
                            "Technical Site Feasibility Surveys",
                            "Maintenance & Post-Installation Support"
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                                <span className="text-white font-medium">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
