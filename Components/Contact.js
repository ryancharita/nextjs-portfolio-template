import { Stack, Input, Textarea, useToast } from '@chakra-ui/react';
import { useState } from 'react';
import styles from '../styles/Contact.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { userinfo, headings, ctaTexts } from '../Constants/userinfo';

const Contact = ({ currentTheme }) => {
  const toast = useToast();
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const iconStyles = {
    backgroundColor: currentTheme.tertiary,
    color: '#101010',
    boxShadow: currentTheme.boxShadow,
  };

  const resetForm = () => {
    setForm({ name: '', email: '', phone: '', message: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      if (res.status === 200) {
        toast({
          description: 'You reached us!',
          status: 'success',
          duration: 5000,
          isClosable: true,
        });
        setSubmitted(true);
        resetForm();
      } else {
        toast({
          description: 'Something went wrong. Please try again later.',
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
      }
    } catch (error) {
      console.error('Submit error:', error);
    }
  };

  return (
    <div className={styles.contactWrapper}>
      <div className={styles.contactHeading}>
        <h2 className={styles.contact}>{headings.contact}</h2>
      </div>

      {/* <form
        onSubmit={handleSubmit}
        className={styles.form}
        style={{
          borderColor: currentTheme.text,
          backgroundColor: currentTheme.name === 'light' ? '#fafafa' : 'transparent',
        }}
      >
        <Stack spacing={4}>
          <Input
            type="text"
            name="name"
            value={form.name}
            aria-label="Name"
            placeholder="Your Name"
            isRequired
            autoComplete="off"
            focusBorderColor={currentTheme.tertiary}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <Input
            type="email"
            name="email"
            value={form.email}
            aria-label="Email"
            placeholder="yourname@email.com"
            isRequired
            autoComplete="off"
            focusBorderColor={currentTheme.tertiary}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <Input
            type="tel"
            name="phone"
            value={form.phone}
            aria-label="Phone"
            placeholder="Phone Number"
            isRequired
            autoComplete="off"
            focusBorderColor={currentTheme.tertiary}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />
          <Textarea
            placeholder="Message for me!"
            resize="vertical"
            isRequired
            name="message"
            value={form.message}
            aria-label="Message"
            autoComplete="off"
            focusBorderColor={currentTheme.tertiary}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />
          <div className={styles.submit} style={{ backgroundColor: currentTheme.tertiary }}>
            <button type="submit">{ctaTexts.submitBTN}</button>
          </div>
        </Stack>
      </form> */}

      <div style={{ textAlign: 'center', paddingTop: '0.5rem' }}>
        <Link href={`mailto:${userinfo.contact.email}`} passHref>
          {userinfo.contact.email}
        </Link>
      </div>

      {userinfo.contact.phone && (
        <div style={{ textAlign: 'center', paddingTop: '0.2rem', color: currentTheme.tertiary }}>
          <Link href={`tel:${userinfo.contact.countrycode}${userinfo.contact.phone}`} passHref>
            {`${userinfo.contact.countrycode}${userinfo.contact.phone}`}
          </Link>
        </div>
      )}

      <div className={styles.socialIconDiv}>
        {userinfo.socials?.map((social, key) => (
          <div className={styles.socialIcon} style={iconStyles} key={key}>
            <Link href={social.link} passHref>
              <FontAwesomeIcon icon={social.icon} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
