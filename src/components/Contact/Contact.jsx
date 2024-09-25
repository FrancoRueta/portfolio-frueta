import styles from './ContactStyles.module.css'

function Contact() {
  return (
    <section className={styles.container}>
        <h1 className='sectionTitle'>Contact</h1>
        <form action="">
        <div className='formGroup'>
                <label htmlFor="name" hidden>
                    Name
                </label>
                <input 
                    type="text"
                    id="name"
                    name="name"
                    placeholder='name'
                    required
                />
            </div>
            <div className='formGroup'>
                <label htmlFor="email" hidden>
                    Email
                </label>
                <input 
                    type="text"
                    id="email"
                    name="email"
                    placeholder='Email'
                    required
                />
            </div>
            <div className='formGroup'>
                <label htmlFor="message" hidden>
                    Message
                </label>
                <textarea 
                    type="text"
                    id="message"
                    name="message"
                    placeholder='Message'
                    required></textarea>
            </div>
            <input className='hover btn' type='submit' value='submit'/>
        </form>
    </section>
  )
}

export default Contact