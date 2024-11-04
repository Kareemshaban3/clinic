
import React from "react";
import PageChang from "../PageChang/PageChang";
import LatestNews from "../Latest News/LatestNews";
import "./FAQ.css";

export default function FAQ() {
  return (
    <>
      <PageChang title="Faq's" />

      <section id='Faq'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 col-sm-12 '>
              <div className='content'>
                <div class='accordion' id='accordionPanelsStayOpenExample'>
                  <div class='accordion-item'>
                    <h2 class='accordion-header' id='panelsStayOpen-headingOne'>
                      <button
                        class='accordion-button'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#panelsStayOpen-collapseOne'
                        aria-expanded='true'
                        aria-controls='panelsStayOpen-collapseOne'
                      >
                        How Doctor Can Ease Your Pain?
                      </button>
                    </h2>
                    <div
                      id='panelsStayOpen-collapseOne'
                      class='accordion-collapse collapse show'
                      aria-labelledby='panelsStayOpen-headingOne'
                    >
                      <div class='accordion-body'>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                      </div>
                    </div>
                  </div>
                  <div class='accordion-item'>
                    <h2 class='accordion-header' id='panelsStayOpen-headingTwo'>
                      <button
                        class='accordion-button collapsed'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#panelsStayOpen-collapseTwo'
                        aria-expanded='false'
                        aria-controls='panelsStayOpen-collapseTwo'
                      >
                        How do I withdraw from a subject?
                      </button>
                    </h2>
                    <div
                      id='panelsStayOpen-collapseTwo'
                      class='accordion-collapse collapse'
                      aria-labelledby='panelsStayOpen-headingTwo'
                    >
                      <div class='accordion-body'>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                      </div>
                    </div>
                  </div>
                  <div class='accordion-item'>
                    <h2
                      class='accordion-header'
                      id='panelsStayOpen-headingThree'
                    >
                      <button
                        class='accordion-button collapsed'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#panelsStayOpen-collapseThree'
                        aria-expanded='false'
                        aria-controls='panelsStayOpen-collapseThree'
                      >
                        Understand Doctor Before You Regret?
                      </button>
                    </h2>
                    <div
                      id='panelsStayOpen-collapseThree'
                      class='accordion-collapse collapse'
                      aria-labelledby='panelsStayOpen-headingThree'
                    >
                      <div class='accordion-body'>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class='accordion accordion-flush'
                  id='accordionFlushExample'
                >
                  <div class='accordion-item'>
                    <h2 class='accordion-header' id='flush-headingOne'>
                      <button
                        class='accordion-button collapsed'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#flush-collapseOne'
                        aria-expanded='false'
                        aria-controls='flush-collapseOne'
                      >
                        What types of systems do you support?
                      </button>
                    </h2>
                    <div
                      id='flush-collapseOne'
                      class='accordion-collapse collapse'
                      aria-labelledby='flush-headingOne'
                      data-bs-parent='#accordionFlushExample'
                    >
                      <div class='accordion-body'>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                      </div>
                    </div>
                  </div>
                  <div class='accordion-item'>
                    <h2 class='accordion-header' id='flush-headingTwo'>
                      <button
                        class='accordion-button collapsed'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#flush-collapseTwo'
                        aria-expanded='false'
                        aria-controls='flush-collapseTwo'
                      >
                        We Teach You How To Feel Better?
                      </button>
                    </h2>
                    <div
                      id='flush-collapseTwo'
                      class='accordion-collapse collapse'
                      aria-labelledby='flush-headingTwo'
                      data-bs-parent='#accordionFlushExample'
                    >
                      <div class='accordion-body'>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                      </div>
                    </div>
                  </div>
                  <div class='accordion-item'>
                    <h2 class='accordion-header' id='flush-headingThree'>
                      <button
                        class='accordion-button collapsed'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#flush-collapseThree'
                        aria-expanded='false'
                        aria-controls='flush-collapseThree'
                      >
                        How Can I Contact You?
                      </button>
                    </h2>
                    <div
                      id='flush-collapseThree'
                      class='accordion-collapse collapse'
                      aria-labelledby='flush-headingThree'
                      data-bs-parent='#accordionFlushExample'
                    >
                      <div class='accordion-body'>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-6 col-sm-12 '>
              <div className='content'>
                <div class='accordion' id='accordionExample'>
                  <div class='accordion-item'>
                    <h2 class='accordion-header' id='headingOne'>
                      <button
                        class='accordion-button'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#collapseOne'
                        aria-expanded='true'
                        aria-controls='collapseOne'
                      >
                        How do I withdraw from a subject?
                      </button>
                    </h2>
                    <div
                      id='collapseOne'
                      class='accordion-collapse collapse show'
                      aria-labelledby='headingOne'
                      data-bs-parent='#accordionExample'
                    >
                      <div class='accordion-body'>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                      </div>
                    </div>
                  </div>
                  <div class='accordion-item'>
                    <h2 class='accordion-header' id='headingTwo'>
                      <button
                        class='accordion-button collapsed'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#collapseTwo'
                        aria-expanded='false'
                        aria-controls='collapseTwo'
                      >
                        What’s a payment statement?
                      </button>
                    </h2>
                    <div
                      id='collapseTwo'
                      class='accordion-collapse collapse'
                      aria-labelledby='headingTwo'
                      data-bs-parent='#accordionExample'
                    >
                      <div class='accordion-body'>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                      </div>
                    </div>
                  </div>
                  <div class='accordion-item'>
                    <h2 class='accordion-header' id='headingThree'>
                      <button
                        class='accordion-button collapsed'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#collapseThree'
                        aria-expanded='false'
                        aria-controls='collapseThree'
                      >
                        How Can I Contact You?
                      </button>
                    </h2>
                    <div
                      id='collapseThree'
                      class='accordion-collapse collapse'
                      aria-labelledby='headingThree'
                      data-bs-parent='#accordionExample'
                    >
                      <div class='accordion-body'>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                      </div>
                    </div>
                  </div>
                </div>
                <div class='accordion' id='accordionPanelsStayOpenExample'>
                  <div class='accordion-item'>
                    <h2 class='accordion-header' id='panelsStayOpen-headingOne'>
                      <button
                        class='accordion-button'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#panelsStayOpen-collapseOne'
                        aria-expanded='true'
                        aria-controls='panelsStayOpen-collapseOne'
                      >
                        How do I withdraw from a subject?
                      </button>
                    </h2>
                    <div
                      id='panelsStayOpen-collapseOne'
                      class='accordion-collapse collapse show'
                      aria-labelledby='panelsStayOpen-headingOne'
                    >
                      <div class='accordion-body'>
                        <strong>
                          This is the first item's accordion body.
                        </strong>{" "}
                        It is shown by default, until the collapse plugin adds
                        the appropriate classes that we use to style each
                        element. These classes control the overall appearance,
                        as well as the showing and hiding via CSS transitions.
                        You can modify any of this with custom CSS or overriding
                        our default variables. It's also worth noting that just
                        about any HTML can go within the{" "}
                        <code>.accordion-body</code>, though the transition does
                        limit overflow.
                      </div>
                    </div>
                  </div>
                  <div class='accordion-item'>
                    <h2 class='accordion-header' id='panelsStayOpen-headingTwo'>
                      <button
                        class='accordion-button collapsed'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#panelsStayOpen-collapseTwo'
                        aria-expanded='false'
                        aria-controls='panelsStayOpen-collapseTwo'
                      >
                      Understand Doctor Before You Regret?
                      </button>
                    </h2>
                    <div
                      id='panelsStayOpen-collapseTwo'
                      class='accordion-collapse collapse'
                      aria-labelledby='panelsStayOpen-headingTwo'
                    >
                      <div class='accordion-body'>
                        <strong>
                          This is the second item's accordion body.
                        </strong>{" "}
                        It is hidden by default, until the collapse plugin adds
                        the appropriate classes that we use to style each
                        element. These classes control the overall appearance,
                        as well as the showing and hiding via CSS transitions.
                        You can modify any of this with custom CSS or overriding
                        our default variables. It's also worth noting that just
                        about any HTML can go within the{" "}
                        <code>.accordion-body</code>, though the transition does
                        limit overflow.
                      </div>
                    </div>
                  </div>
                  <div class='accordion-item'>
                    <h2
                      class='accordion-header'
                      id='panelsStayOpen-headingThree'
                    >
                      <button
                        class='accordion-button collapsed'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#panelsStayOpen-collapseThree'
                        aria-expanded='false'
                        aria-controls='panelsStayOpen-collapseThree'
                      >
                        How Doctor Can Ease Your Pain?
                      </button>
                    </h2>
                    <div
                      id='panelsStayOpen-collapseThree'
                      class='accordion-collapse collapse'
                      aria-labelledby='panelsStayOpen-headingThree'
                    >
                      <div class='accordion-body'>
                        <strong>
                          This is the third item's accordion body.
                        </strong>{" "}
                        It is hidden by default, until the collapse plugin adds
                        the appropriate classes that we use to style each
                        element. These classes control the overall appearance,
                        as well as the showing and hiding via CSS transitions.
                        You can modify any of this with custom CSS or overriding
                        our default variables. It's also worth noting that just
                        about any HTML can go within the{" "}
                        <code>.accordion-body</code>, though the transition does
                        limit overflow.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <LatestNews />
    </>
  );
}
