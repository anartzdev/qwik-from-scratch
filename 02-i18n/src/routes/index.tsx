import { component$ } from '@builder.io/qwik';
import {
  $translate as t,
  formatDate as fd,
  formatNumber as fn,
  Speak,
} from 'qwik-speak';

export const Home = component$(() => {
  return (
    <>
      <h1>{t('app.title@@{{name}} demo', { name: 'Qwik Speak' })}</h1>

      <h3>{t('home.dates@@Dates')}</h3>
      <p>{fd(Date.now(), { dateStyle: 'full', timeStyle: 'short' })}</p>

      <h3>{t('home.numbers@@Numbers')}</h3>
      <p>{fn(1000000, { style: 'currency' })}</p>
    </>
  );
});

export default component$(() => {
  return (
    <Speak assets={['home']}>
      <Home />
    </Speak>
  );
});