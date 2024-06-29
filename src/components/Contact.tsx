import React from "react";

const Contact = () => {
  return (
    <div className="section" id="contact">
      <h2 className="mb-4">
        Get in <span className="text-green-500">Touch</span>
      </h2>
      <div className="sm:flex sm:flex-col-reverse sm:gap-4 md:grid md:grid-cols-2 md:gap-4">
        <div>
          <h3>Contact Information</h3>
          <p>Address: 123 Green Street, Gardenville, GA 30101</p>{" "}
          <p>Phone Number: (123) 456-7890</p>
          <p>Email: contact@greengardenlandscaping.com</p>
        </div>
        <form className="flex flex-col gap-2">
          <div>
            <h3>Contact form</h3>
            <p className="mb-1 text-sm">Contact us anytime!</p>
          </div>

          <input type="text" placeholder="Name..." />
          <input type="email" placeholder="Email..." />
          <input type="phone" placeholder="Phone number..." />
          <textarea
            placeholder="Message..."
            className=" resize-none"
            rows={5}></textarea>
          <button>Send</button>
        </form>
      </div>
      <h3 className="mt-6">Where to find us?</h3>
      <iframe
        className="rounded-md mt-2"
        width="100%"
        height="500"
        frameBorder="0"
        scrolling="no"
        marginHeight={0}
        marginWidth={0}
        id="gmap_canvas"
        src="https://maps.google.com/maps?width=700&amp;height=500&amp;hl=en&amp;q=%20New%20York+(Where%20to%20find%20us?)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>{" "}
      <a href="http://maps-generator.com/pl">Maps-Generator.com PL</a>{" "}
      <script
        async
        type="text/javascript"
        src="https://embedmaps.com/google-maps-authorization/script.js?id=953a16493ed276f8b6efc5ea04e6b153ae92255b"></script>
      <script
        async
        type="text/javascript"
        src="https://embedmaps.com/google-maps-authorization/script.js?id=098b9b556c2441b7853cbffef0f1dc0262432569"></script>
    </div>
  );
};

export default Contact;
