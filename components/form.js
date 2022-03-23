export default function Form() {
  return (
    <>
      <form
        className="row gx-3 gy-3 align-items-center"
        name="contact"
        method="POST"
        netlify-honeypot="bot-field"
        data-netlify="true"
      >
        <p className="hidden">
          {/* style="display: none;" */}
          <label>
            Don’t fill this out if you’re human: <input name="bot-field" />
          </label>
        </p>
        <div className="col-sm-6">
          {/* <label className="visually-hidden" for="specificSizeInputName">Name</label> */}
          <input
            type="text"
            name="name"
            className="form-control"
            id="specificSizeInputName"
            placeholder="Name"
          />
        </div>
        <div className="col-sm-6">
          {/* <label className="visually-hidden" for="specificSizeInputGroupUsername">Email</label> */}
          <div className="input-group">
            <input
              type="text"
              name="email"
              className="form-control"
              id="specificSizeInputGroupEmail"
              placeholder="Email"
            />
          </div>
        </div>
        <div className="input-group">
          <textarea
            className="form-control"
            name="message"
            aria-label="With textarea"
            id="specificSizeInputGroupMessage"
            placeholder="Your Message"
            rows={5}
          ></textarea>
        </div>

        <div className="text-center">
          <button type="submit" className="btn btn-primary">
            SUBMIT
          </button>
        </div>
      </form>
    </>
  );
}
