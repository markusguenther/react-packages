import React from 'react';

import { Link } from '../Link';

interface Props {
  href?: string;
}

const PasswordLostLabel = ({ href }: Props) => (
  <Link
    href={href || 'https://t3n.de/account/lostpassword'}
    title="Passwort vergessen?"
    underline="always"
  >
    Passwort vergessen?
  </Link>
);

export default PasswordLostLabel;
