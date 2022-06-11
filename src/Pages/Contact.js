const Contact = () => {
  return (
    <div id="contacts">
      <h1 className="lg:text-4xl text-3xl font-bold mb-6">CONTACT ME</h1>
      <div className="card w-full shadow-2xl bg-base-100 col-span-5 lg:col-span-3">
        <form
          action="https://formsubmit.co/hasanrokib1997@gmail.com"
          method="POST"
          className="card-body"
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Name</span>
            </label>
            <input
              type="text"
              placeholder="Your Email"
              name="name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Your Email"
              name="email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Body</span>
            </label>
            <textarea
              type="text"
              placeholder="Your message"
              name="message"
              className="input input-bordered"
            />
          </div>
          <div className="form-control mt-6">
            <input
              type="submit"
              className="btn btn-primary"
              value="Send Email"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
