import { Layout } from "@/components/layout/Layout";

const Team = () => {
    return (
        <Layout>
            {/* Hero Section */}
            <section className="relative py-24 bg-navy">
                <div className="absolute inset-0 bg-machinery-dark opacity-90" />
                <div className="container-custom relative text-center">
                    <span className="text-machinery-yellow font-semibold uppercase tracking-wider text-sm">Leadership</span>
                    <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mt-2 mb-4">
                        Our Team
                    </h1>
                    <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                        Meet the experts behind Sree Sakthi Paper Tech.
                    </p>
                </div>
            </section>

            {/* Team Section */}
            <section id="team" className="section-padding bg-white">
                <div className="container-custom">
                    <div className="max-w-md mx-auto">
                        <div className="bg-navy rounded-2xl p-8 text-center shadow-xl border-b-4 border-machinery-yellow">
                            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-machinery-yellow to-yellow-600 mx-auto mb-6 flex items-center justify-center shadow-lg">
                                <span className="text-4xl font-heading font-bold text-navy">NS</span>
                            </div>
                            <h3 className="font-heading text-2xl font-bold text-white mb-2">
                                N. Selvaraj
                            </h3>
                            <p className="text-machinery-yellow font-semibold mb-4 tracking-wide uppercase text-sm">Founder & Proprietor</p>
                            <div className="w-12 h-1 bg-machinery-yellow/30 mx-auto mb-4"></div>
                            <p className="text-gray-300 leading-relaxed">
                                With over 15 years of experience in the paper machinery industry, Mr. Selvaraj
                                has built Sree Sakthi Paper Tech into a trusted name in the market. His deep
                                understanding of the industry and commitment to customer satisfaction drives
                                our success.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Team;
