'use client';
import Link from 'next/link';
import Button from '../Button';
import { useState } from 'react';
import './Form.scss';

const Form = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});
  const [sended, setSended] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: { name?: string; phone?: string } = {};
    if (!name.trim()) newErrors.name = 'Вкажіть ваше ім’я';
    if (!phone.trim()) newErrors.phone = 'Вкажіть номер телефону';

    setErrors(newErrors);

    // Успішна валідація
    if (Object.keys(newErrors).length === 0) {
      console.log('Форма надіслана:', { name, phone });
      setSended(true);
      setName('');
      setPhone('');
    }
  };

  return (
    <div className="form-wrap">
      {!sended ? (
        <form className="form" onSubmit={handleSubmit}>
          <h4 className="title">
            Вітаю!
            <br />
            Мене звати Марія
          </h4>
          <p className="slogan text-lg">
            Залиште свій номер телефону — я зателефоную вам і розповім усі деталі.
          </p>

          <ul className="form__list">
            <li>
              <input
                type="tel"
                name="your-phone"
                value={phone}
                onChange={e => setPhone(e.target.value)}
                placeholder="Введіть ваш номер телефону"
                className={errors.phone ? 'error' : ''}
              />
              {errors.phone && <p className="error-text">{errors.phone}</p>}
            </li>
            <li>
              <input
                type="text"
                name="your-name"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Як до вас звертатися?"
                className={errors.name ? 'error' : ''}
              />
              {errors.name && <p className="error-text">{errors.name}</p>}
            </li>
          </ul>

          <div className="terms text-md">
            <p>
              Натискаючи кнопку «Записатися», ви надаєте згоду на обробку ваших персональних даних.
            </p>
            <Link href="#">Політика конфіденційності</Link>
          </div>

          <div className="btn-wrap">
            <Button color="white" type="submit">
              Записатися
            </Button>
          </div>
        </form>
      ) : (
        <div className="thank-you-form">
          <h4>Дякуємо!</h4>
          <p className="slogan text-lg">Ваші дані успішно надіслані.</p>
          <p className="text">
            Найближчим часом я зателефоную вам і надам усю необхідну інформацію.
          </p>
        </div>
      )}
    </div>
  );
};

export default Form;
