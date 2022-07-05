import {FaPaperPlane} from 'react-icons/fa'

const Contact = () => {
  return (
    <div className="Contact">
        <form name="contact" onSubmit='mailto:msmadhhamg@gmai.com?subject=something' autoComplete="on">
            <div className="user-info-field">
                <h1>Contact Me</h1>
                <fieldset>
                    <legend><label htmlFor="name">Name</label></legend>
                    <input type="text" id="name" name="name" placeholder="Your name..." autoFocus autoComplete="name" required />
                </fieldset>
                <fieldset>
                    <legend><label htmlFor="email">Email</label></legend>
                    <input type="email" id="email" name="email" placeholder="Your email..." autoFocus autoComplete="email" required />
                </fieldset>
                <fieldset>
                    <legend><label htmlFor="file">Attachment (optional)</label></legend>
                    <input type="file" name="file" id="file" autoFocus />
                </fieldset>
            </div>
            <div className="user-comment-field">
                <fieldset>
                    <legend><label htmlFor="usercomment">What do you want to say?</label></legend>
                    <textarea name="message" id="message" cols="30" rows="10" placeholder="Your opinion..." autoFocus required></textarea>
                </fieldset>
                <button id="form-clear-btn" type="reset">Clear</button>
                <button id="form-submit-btn"><FaPaperPlane /> Send to Adhham</button>
            </div>
        </form>
    </div>
  )
}

export default Contact