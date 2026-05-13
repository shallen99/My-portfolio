import { Document, Page, Text, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 11,
    lineHeight: 1.5,
  },

  title: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: "bold",
  },

  subtitle: {
    fontSize: 12,
    marginBottom: 15,
    color: "gray",
  },

  sectionTitle: {
    fontSize: 14,
    marginTop: 10,
    marginBottom: 5,
    fontWeight: "bold",
  },

  text: {
    marginBottom: 6,
  },

  box: {
    marginBottom: 10,
    padding: 8,
    border: "1px solid #ccc",
  },
});

const RateCardPDF = () => (
  <Document>
    <Page style={styles.page}>

      {/* HEADER */}
      <Text style={styles.title}>
        Shallen Mwende — Web Development Rate Card
      </Text>

      <Text style={styles.subtitle}>
        Frontend Web Developer | React | UI/UX Focused | Nairobi, Kenya
      </Text>

      <Text style={styles.text}>
        I design and develop modern, responsive, and high-performing websites focused on user experience,
        clean design, and business results. Below is a breakdown of my services and pricing structure.
      </Text>

      {/* SERVICES PROVIDED */}
      <Text style={styles.sectionTitle}>Services Provided</Text>

      <Text style={styles.text}>
        • Website design & development (React / modern frontend){"\n"}
        • Responsive mobile-first design{"\n"}
        • UI/UX design implementation{"\n"}
        • Landing pages & business websites{"\n"}
        • Portfolio websites{"\n"}
        • API integration{"\n"}
        • Contact forms (EmailJS / backend integration){"\n"}
        • SEO optimization (basic to advanced){"\n"}
        • Website maintenance & updates
      </Text>

      {/* BASIC */}
      <Text style={styles.sectionTitle}>
        BASIC / SIMPLE WEBSITE — KES 15,000 – 40,000
      </Text>

      <Text style={styles.text}>
        Ideal for individuals and small businesses starting their online presence.
      </Text>

      <Text style={styles.text}>
        Pages Included:
        {"\n"}• Home
        {"\n"}• About
        {"\n"}• Contact
        {"\n"}• Single Services Page (optional)
      </Text>

      <Text style={styles.text}>
        Features:
        {"\n"}• Responsive design (mobile & desktop)
        {"\n"}• Clean modern UI
        {"\n"}• Contact form
        {"\n"}• WhatsApp integration
        {"\n"}• Basic SEO setup
        {"\n"}• Social media links
      </Text>

      {/* INTERMEDIATE */}
      <Text style={styles.sectionTitle}>
        INTERMEDIATE / BUSINESS WEBSITE — KES 40,000 – 120,000
      </Text>

      <Text style={styles.text}>
        Ideal for SMEs, professionals, and growing brands.
      </Text>

      <Text style={styles.text}>
        Pages Included:
        {"\n"}• Home
        {"\n"}• About
        {"\n"}• Services (multi-page)
        {"\n"}• Portfolio / Projects
        {"\n"}• Contact
        {"\n"}• Blog (optional)
      </Text>

      <Text style={styles.text}>
        Features:
        {"\n"}• Custom UI design
        {"\n"}• Animations & modern UI interactions
        {"\n"}• Email contact form integration
        {"\n"}• Google Maps integration
        {"\n"}• SEO optimization
        {"\n"}• Performance optimization
        {"\n"}• Optional CMS-ready structure
      </Text>

      {/* PROFESSIONAL */}
      <Text style={styles.sectionTitle}>
        PROFESSIONAL / ADVANCED WEBSITE — KES 120,000 – 350,000+
      </Text>

      <Text style={styles.text}>
        Ideal for companies, SaaS platforms, and large-scale systems.
      </Text>

      <Text style={styles.text}>
        Pages Included:
        {"\n"}• Fully custom architecture (10–25+ pages)
        {"\n"}• Dashboard systems
        {"\n"}• Blog / CMS
        {"\n"}• Product or service systems
        {"\n"}• Contact & booking systems
      </Text>

      <Text style={styles.text}>
        Features:
        {"\n"}• Advanced UI/UX design system
        {"\n"}• Authentication systems
        {"\n"}• API integrations
        {"\n"}• Payment integration (M-Pesa / Stripe)
        {"\n"}• Advanced SEO & analytics
        {"\n"}• High performance optimization
        {"\n"}• Security improvements
      </Text>

      {/* ADDITIONAL SERVICES */}
      <Text style={styles.sectionTitle}>Additional Services</Text>

      <Text style={styles.text}>
        • UI/UX Design Only — KES 10,000 – 50,000{"\n"}
        • Website Maintenance — KES 5,000 – 20,000/month{"\n"}
        • Hosting Setup — KES 3,000 – 10,000{"\n"}
        • Domain Setup — KES 1,000 – 3,000
      </Text>

      {/* TERMS */}
      <Text style={styles.sectionTitle}>Terms</Text>

      <Text style={styles.text}>
        • 50% deposit before project start{"\n"}
        • 50% upon completion{"\n"}
        • Delivery time varies by project scope (3 days – 4 weeks){"\n"}
        • Changes beyond scope may attract additional cost
      </Text>

      {/* CONTACT */}
      <Text style={styles.sectionTitle}>Contact</Text>

      <Text style={styles.text}>
        Shallen Mwende{"\n"}
        Frontend Web Developer{"\n"}
        Nairobi, Kenya{"\n"}
        Email: your-email@example.com{"\n"}
        Phone: +254 75846102
      </Text>

    </Page>
  </Document>
);

export default RateCardPDF;