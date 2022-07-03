const Contact = () => {
  return (
    <div className="Contact">
        <form name="feedback" autoComplete="on" encType="multipart/form-data" netlify>
            <input type="hidden" name="subject" value="Adhham Safwan from Streamverse" />
            <fieldset>
                <label htmlFor="username"><legend>Name</legend></label>
                <input type="text" id="username" name="username" placeholder="Your name..." autoFocus autoComplete="name" required />
            </fieldset>
            <fieldset>
                <label htmlFor="useremail"><legend>Email</legend></label>
                <input type="email" id="useremail" name="useremail" placeholder="Your email..." autoFocus autoComplete="email" required />
            </fieldset>
            <fieldset>
                <label htmlFor="usercomment"><legend>What do you want to say?</legend></label>
                <textarea name="usercomment" id="usercomment" cols="30" rows="10" placeholder="Your opinion..." autoFocus required></textarea>
            </fieldset>
            <fieldset>
                <label htmlFor="userattachment"><legend>Attachment (optional)</legend></label>
                <input type="file" name="userattachment" id="userattachment" autoFocus />
            </fieldset>
            <button id="form-clear-btn" type="reset">Clear</button>
            <button id="form-submit-btn">Send to Adhham</button>
        </form>
    </div>
  )
}

export default Contact