import { Layout } from "@/components/layout/Layout";
import { CheckCircle } from "lucide-react";
import hero3 from "@/assets/hero-3.jpg";
import hero1 from "@/assets/hero-1.jpg";

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 bg-navy">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: `url(${hero3})` }} />
        <div className="container-custom relative text-center">
          <span className="text-gold font-semibold uppercase tracking-wider text-sm">Who We Are</span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mt-2 mb-4">
            Our Story
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Discover the story behind Sree Sakthi Paper Tech and our commitment to excellence.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-gold font-semibold uppercase tracking-wider text-sm">Journey</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mt-2 mb-6">
                Building Trust in Paper Machinery Trade
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                <strong className="text-foreground">Sree Sakthi Paper Tech</strong> was founded with a vision
                to bridge the gap in the second-hand paper machinery market. Based in Coimbatore,
                the industrial hub of South India, we have grown to become one of the most trusted
                names in the paper machinery trading industry.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Under the leadership of our founder and proprietor, <strong className="text-foreground">Mr. N. Selvaraj</strong>,
                we have successfully served hundreds of paper mills across India. With over 15 years of
                experience in the industry, our team brings unmatched expertise and knowledge to every deal.
              </p>
              <div className="bg-muted p-4 rounded-lg border-l-4 border-gold mb-6">
                <h4 className="font-heading font-bold text-navy mb-2">Our Specialities</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-gold" /> Complete client satisfaction</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-gold" /> Ethical business policies</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-gold" /> Live In Touch With Our Customers</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-gold" /> Transparent dealings</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-gold" /> Wide connectivity</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-gold" /> We listen, We understand, We provide Solution</li>
                </ul>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                We specialize in buying and selling quality pre-owned paper machines, paper machine parts,
                finishing equipment, and spare parts. Our commitment to quality and customer satisfaction
                has earned us a reputation for reliability and excellence.
              </p>
            </div>
            <div className="relative">
              <img
                src={hero1}
                alt="Paper Machinery"
                className="rounded-2xl shadow-lg w-full h-[400px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-gold text-navy p-6 rounded-xl shadow-gold">
                <div className="text-4xl font-heading font-bold">2010</div>
                <div className="text-sm font-semibold uppercase tracking-wider">Established</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tamil Content Section */}
      <section className="section-padding bg-navy text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-gold font-semibold uppercase tracking-wider text-sm mb-2 block">வணக்கம்</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8">
              Sree Sakthi Paper Tech <span className="text-gold">📄</span>
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-blue-50/90">
              <p>
                <strong className="text-white">Sree Sakthi Paper Tech</strong> என்பது பேப்பர் இன்டஸ்ட்ரி துறையில் நம்பகமான மற்றும் அனுபவமிக்க நிறுவனம்.
                பயன்படுத்தப்பட்ட (Secondhand) பேப்பர் மெஷின்கள் வாங்கல், விற்பனை மற்றும் அவற்றிற்கான ஸ்பேர் பாகங்கள் வழங்கலில் சிறப்பு பெற்றுள்ளது.
                பல வருட அனுபவத்துடன், வாடிக்கையாளர்களின் தேவையை புரிந்து சிறந்த தீர்வுகளை வழங்கி வருகிறது.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mt-12 text-left">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:bg-white/15 transition-colors">
                <h3 className="font-heading text-xl font-bold text-gold mb-3">⚙️ Secondhand Paper Machine Buying</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">✔️ <span className="text-blue-50">நன்றாக செயல்படும் பயன்படுத்தப்பட்ட பேப்பர் மெஷின்களை சரியான மதிப்பில் வாங்குகிறோம்</span></li>
                  <li className="flex items-start gap-2">✔️ <span className="text-blue-50">மெஷின் நிலை, திறன் மற்றும் உற்பத்தி திறன் ஆகியவற்றை முழுமையாக மதிப்பாய்வு செய்கிறோம்</span></li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:bg-white/15 transition-colors">
                <h3 className="font-heading text-xl font-bold text-gold mb-3">🔄 Secondhand Paper Machine Selling</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">✔️ <span className="text-blue-50">தரமான மற்றும் சோதிக்கப்பட்ட பேப்பர் மெஷின்களை விற்பனை செய்கிறோம்</span></li>
                  <li className="flex items-start gap-2">✔️ <span className="text-blue-50">சிறிய முதல் பெரிய அளவிலான பேப்பர் மில்ல்களுக்கு ஏற்ற மெஷின்கள் கிடைக்கும்</span></li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:bg-white/15 transition-colors">
                <h3 className="font-heading text-xl font-bold text-gold mb-3">🧩 Paper Machine Spares Supply</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">✔️ <span className="text-blue-50">அனைத்து வகையான பேப்பர் மெஷின் ஸ்பேர் பாகங்கள் கிடைக்கும்</span></li>
                  <li className="flex items-start gap-2">✔️ <span className="text-blue-50">நீடித்த தரம் மற்றும் நம்பகமான செயல்திறன் உறுதி</span></li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:bg-white/15 transition-colors">
                <h3 className="font-heading text-xl font-bold text-gold mb-3">🛠️ Technical Support & Guidance</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">✔️ <span className="text-blue-50">மெஷின் தேர்வு, பயன்பாடு மற்றும் மாற்றம் குறித்த ஆலோசனை</span></li>
                  <li className="flex items-start gap-2">✔️ <span className="text-blue-50">வாடிக்கையாளர்களுக்கு முழுமையான தொழில்நுட்ப வழிகாட்டுதல்</span></li>
                </ul>
              </div>
            </div>

            <div className="mt-12 bg-gold/20 p-6 rounded-xl inline-block">
              <h3 className="font-bold text-xl text-white mb-2">🤝 Customer-Focused Service</h3>
              <p className="text-blue-50">வாடிக்கையாளர் திருப்தியே எங்கள் முதன்மை இலக்கு</p>
            </div>
          </div>
        </div>
      </section>
    </Layout >
  );
};

export default About;
