import { Layout } from "@/components/layout/Layout";
import { Target, Eye, Users, Award, CheckCircle } from "lucide-react";

const values = [
    {
        icon: Award,
        title: "Quality Assurance",
        description: "Every machine is thoroughly inspected and tested before sale.",
    },
    {
        icon: Users,
        title: "Customer First",
        description: "We prioritize customer satisfaction in every transaction.",
    },
    {
        icon: CheckCircle,
        title: "Transparency",
        description: "Honest dealings with clear communication at every step.",
    },
];

const Mission = () => {
    return (
        <Layout>
            {/* Hero Section */}
            <section className="relative py-24 bg-navy">
                <div className="absolute inset-0 bg-machinery-dark opacity-90" />
                <div className="container-custom relative text-center">
                    <span className="text-machinery-yellow font-semibold uppercase tracking-wider text-sm">Our Purpose</span>
                    <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mt-2 mb-4">
                        Mission & Vision
                    </h1>
                    <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                        Guiding principles that drive Sree Sakthi Paper Tech towards excellence.
                    </p>
                </div>
            </section>

            {/* Mission & Vision */}
            <section id="mission" className="section-padding bg-muted/30">
                <div className="container-custom">
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Mission */}
                        <div className="bg-card rounded-2xl p-8 shadow-soft border border-border">
                            <div className="w-16 h-16 rounded-xl bg-navy flex items-center justify-center mb-6">
                                <Target className="w-8 h-8 text-machinery-yellow" />
                            </div>
                            <h3 className="font-heading text-2xl font-bold text-navy mb-4">Our Mission</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                To provide high-quality, reliable second-hand paper machinery and equipment at competitive
                                prices while ensuring exceptional customer service and technical support. We aim to be the
                                first choice for paper mills looking for cost-effective machinery solutions.
                            </p>
                        </div>

                        {/* Vision */}
                        <div className="bg-card rounded-2xl p-8 shadow-soft border border-border">
                            <div className="w-16 h-16 rounded-xl bg-navy flex items-center justify-center mb-6">
                                <Eye className="w-8 h-8 text-machinery-yellow" />
                            </div>
                            <h3 className="font-heading text-2xl font-bold text-navy mb-4">Our Vision</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                To become the leading supplier of second-hand paper machinery in India and expand our reach
                                globally. We envision creating a sustainable marketplace that helps paper mills optimize their
                                investments while promoting the reuse of quality machinery.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Values */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <span className="text-machinery-yellow font-semibold uppercase tracking-wider text-sm">What We Stand For</span>
                        <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mt-2">
                            Our Core Values
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {values.map((value) => (
                            <div key={value.title} className="text-center">
                                <div className="w-20 h-20 rounded-full bg-machinery-yellow/10 flex items-center justify-center mx-auto mb-6">
                                    <value.icon className="w-10 h-10 text-machinery-yellow" />
                                </div>
                                <h3 className="font-heading text-xl font-bold text-navy mb-3">{value.title}</h3>
                                <p className="text-muted-foreground">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Mission;
