import React from "react";
import TestimonialCmp from "./TestimonialCmp";

const Testimonials = () => {
  return (
    <div className="section" id="testimonials">
      <h2 className="mb-8">
        What Our <span className="text-green-500">Clients</span> Say
      </h2>
      <div className="sm:flex sm:flex-col sm:gap-4 md:grid md:grid-cols-3 md:gap-4">
        <TestimonialCmp
          personName="Jane Doe"
          opinion="I couldn't be happier with the transformation Green Garden Landscaping made to my backyard. From the initial consultation to the final touches, the team was professional, attentive, and truly understood my vision. They created a beautiful, serene space that has become my favorite place to relax. Their attention to detail and quality craftsmanship exceeded my expectations. Highly recommend!"
          rating={5}
        />
        <TestimonialCmp
          personName="John Smith"
          rating={4}
          opinion="Green Garden Landscaping did an amazing job on our garden renovation. We wanted a functional and beautiful space for our family, and they delivered beyond our hopes. The team was reliable, communicated well, and their expertise was evident in every aspect of the project. The garden maintenance service they provide has kept everything looking perfect, and we've received so many compliments from neighbors and friends."
        />
        <TestimonialCmp
          personName="Jane Doe"
          rating={5}
          opinion="The design and construction work done by Green Garden Landscaping were exceptional. They listened to my ideas and created a plan that perfectly matched what I envisioned. The construction team was efficient, respectful, and left the site clean every day. The final result is a stunning garden that looks like something out of a magazine. Their ongoing maintenance service has been fantastic as well, ensuring everything stays in top condition."
        />
      </div>
    </div>
  );
};

export default Testimonials;
