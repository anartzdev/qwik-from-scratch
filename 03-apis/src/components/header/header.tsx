import { component$, useStylesScoped$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import { QwikLogo } from '../icons/qwik';
import styles from './header.css?inline';

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <header>
      <div class='logo'>
        <Link href='/'>
          <QwikLogo />
        </Link>
      </div>
      <ul>
        <li>
          <Link href='/rest/github/'>Github</Link>
        </li>
        <li>
          <a
            href='https://qwik.builder.io/examples/introduction/hello-world/'
            target='_blank'
          >
            Examples
          </a>
        </li>
        <li>
          <a
            href='https://qwik.builder.io/tutorial/welcome/overview/'
            target='_blank'
          >
            Tutorials
          </a>
        </li>
      </ul>
    </header>
  );
});
