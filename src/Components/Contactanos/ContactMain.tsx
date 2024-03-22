import ContactFormInfo from "./ContactFormInfo";
import ContactFormPlus from "./ContactFormPlus";

export default function ContactMain() {
  return (
    <div className="container p-4" data-aos="fade-down"
    data-aos-duration="2000"
    data-aos-offset="0">
      <div className="shadow p-3 mb-5 bg-white rounded container-fluid p-5">
        <h4>Contactanos...</h4>
        {/* Contenedor "Principal" */}
        <div className="row" style={{ fontFamily: 'Font-body' }}>
          <div className="custom-contact-column col-md-6">
            {/* Primera columna */}
            <div className="custom-first-row row">
              <ContactFormInfo />
            </div>
          </div>
          <div className="custom-contact-column col-md-6">
            <div className="ccustom-contact-row row">
              <ContactFormPlus />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
