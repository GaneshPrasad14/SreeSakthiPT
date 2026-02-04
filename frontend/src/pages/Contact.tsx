import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Send, CreditCard } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent!",
      description: "Thank you for your inquiry. We'll get back to you within 24 hours.",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 bg-navy">
        <div className="container-custom relative text-center">
          <span className="text-gold font-semibold uppercase tracking-wider text-sm">Get In Touch</span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mt-2 mb-4">
            Contact Us
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Have questions or need assistance? We're here to help you find the right machinery solutions.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-card rounded-xl p-6 shadow-soft border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-navy mb-2">Phone</h3>
                    <a href="tel:9003839621" className="block text-muted-foreground hover:text-gold transition-colors">
                      +91 90038 39621
                    </a>
                    <a href="tel:6381447913" className="block text-muted-foreground hover:text-gold transition-colors">
                      +91 63814 47913
                    </a>
                    <a href="tel:8754020062" className="block text-muted-foreground hover:text-gold transition-colors">
                      +91 87540 20062
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-xl p-6 shadow-soft border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-navy mb-2">Email</h3>
                    <a href="mailto:sreesakthitec@gmail.com" className="block text-muted-foreground hover:text-gold transition-colors text-sm">
                      sreesakthitec@gmail.com
                    </a>
                    <a href="mailto:selva2010cbe@yahoo.com" className="block text-muted-foreground hover:text-gold transition-colors text-sm">
                      selva2010cbe@yahoo.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-xl p-6 shadow-soft border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-navy mb-2">Address</h3>
                    <p className="text-muted-foreground text-sm">
                      5/15 A, Popular Garden Extension,<br />
                      Pallapalayam post, Pappampatti Pirivu,<br />
                      Coimbatore 641016
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-xl p-6 shadow-soft border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-navy mb-2">Business Hours</h3>
                    <p className="text-muted-foreground text-sm">
                      Monday - Saturday<br />
                      9:00 AM - 6:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-card rounded-2xl p-8 shadow-soft border border-border">
                <h2 className="font-heading text-2xl font-bold text-navy mb-6">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Full Name *</label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                        className="bg-background"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email Address *</label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        required
                        className="bg-background"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone Number</label>
                      <Input
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 XXXXXXXXXX"
                        className="bg-background"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Subject *</label>
                      <Input
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="How can we help?"
                        required
                        className="bg-background"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Message *</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your requirements..."
                      rows={6}
                      required
                      className="bg-background resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="bg-gold text-navy hover:bg-gold-dark font-semibold w-full md:w-auto px-12"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 w-5 h-5" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-10">
            <span className="text-gold font-semibold uppercase tracking-wider text-sm">Transaction Details</span>
            <h2 className="font-heading text-3xl font-bold text-navy mt-2">Running Payment Options</h2>
          </div>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="bg-card rounded-xl p-8 shadow-soft border border-border">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                  <CreditCard className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-heading text-xl font-bold text-navy">Digital Payments</h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-border pb-3">
                  <span className="font-semibold text-navy">Paytm</span>
                  <span className="text-muted-foreground">+91 90038 39621</span>
                </div>
                <div className="flex justify-between items-center border-b border-border pb-3">
                  <span className="font-semibold text-navy">PhonePe</span>
                  <span className="text-muted-foreground">+91 90038 39621</span>
                </div>
                <div className="flex justify-between items-center pb-3">
                  <span className="font-semibold text-navy">Google Pay</span>
                  <span className="text-muted-foreground">+91 90038 39621</span>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-xl p-8 shadow-soft border border-border flex flex-col justify-center text-center">
              <h3 className="font-heading text-xl font-bold text-navy mb-4">Bank Transfer</h3>
              <p className="text-muted-foreground mb-6">
                For NEFT/RTGS bank transfers, please contact us directly for our current account details.
              </p>
              <a href="tel:9003839621" className="inline-flex items-center justify-center gap-2 text-gold font-semibold hover:underline">
                <Phone className="w-4 h-4" />
                Call for Bank Details
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="pb-16">
        <div className="container-custom">
          <div className="rounded-2xl overflow-hidden shadow-lg h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.123456789!2d76.95!3d11.05!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDAzJzAwLjAiTiA3NsKwNTcnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Location Map"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
