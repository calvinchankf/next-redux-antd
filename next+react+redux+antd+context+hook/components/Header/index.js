import Link from 'next/link'

import "./style.css"

export default () => <div className="header">
  <Link href="/">
    <a> Home </a>
  </Link >
  <Link href="/counter">
    <a> Counter </a>
  </Link>
  <Link href="/hacker">
    <a> Hacker </a>
  </Link>
</div>