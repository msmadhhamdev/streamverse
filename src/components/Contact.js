import {FaPaperPlane} from 'react-icons/fa'

const Contact = () => {
  return (
    <div className="Contact">
        <form name="feedback" autoComplete="on">
            <input type="hidden" name="form-name" value="contact" />
            <div className="user-info-field">
                <h1>Contact Me</h1>
                <fieldset>
                    <legend><label htmlFor="username">Name</label></legend>
                    <input type="text" id="username" name="username" placeholder="Your name..." autoFocus autoComplete="name" required />
                </fieldset>
                <fieldset>
                    <legend><label htmlFor="useremail">Email</label></legend>
                    <input type="email" id="useremail" name="useremail" placeholder="Your email..." autoFocus autoComplete="email" required />
                </fieldset>
                <fieldset>
                    <legend><label htmlFor="userattachment">Attachment (optional)</label></legend>
                    <input type="file" name="userattachment" id="userattachment" autoFocus />
                </fieldset>
            </div>
            <div className="user-comment-field">
                <fieldset>
                    <legend><label htmlFor="usercomment">What do you want to say?</label></legend>
                    <textarea name="usercomment" id="usercomment" cols="30" rows="10" placeholder="Your opinion..." autoFocus required></textarea>
                </fieldset>
                <button id="form-clear-btn" type="reset">Clear</button>
                <button id="form-submit-btn"><FaPaperPlane /> Send to Adhham</button>
            </div>
        </form>
    </div>
  )
}

export default Contact