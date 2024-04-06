import { Link } from 'react-scroll';
import { useRef, useState } from 'react';
import './header.css';
import { Burger, useMantineTheme } from '@mantine/core';
import useOutsideClick from '../hook/useOutsideClick';
import { useMediaQuery } from '@mantine/hooks';

export default function Navbar() {
  const [opened, setOpened] = useState(false);
  const theme = useMantineTheme();
  const dropRef = useRef<HTMLDivElement | null>(null);
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

  useOutsideClick(dropRef, () => setOpened(false));

  return (
    <>
      <div>
        {isMobile ? (
          <>
            <Burger opened={opened} onClick={() => setOpened((o) => !o)} />
            {opened && (
              <nav ref={dropRef} className="dropdown">
                <Link
                  to="projects"
                  smooth={true}
                  duration={1000}
                  onClick={() => setOpened(false)}
                >
                  Projects
                </Link>
                <Link
                  to="expertise"
                  smooth={true}
                  duration={1000}
                  onClick={() => setOpened(false)}
                >
                  Expertise
                </Link>
                <Link
                  to="contact"
                  smooth={true}
                  duration={1000}
                  onClick={() => setOpened(false)}
                >
                  Contact
                </Link>
                <Link
                  to="about"
                  smooth={true}
                  duration={1000}
                  onClick={() => setOpened(false)}
                >
                  About
                </Link>
              </nav>
            )}
          </>
        ) : (
          <nav className="desk-nav">
            <Link
              to="projects"
              smooth={true}
              duration={1000}
              onClick={() => setOpened(false)}
            >
              Projects
            </Link>
            <Link
              to="expertise"
              smooth={true}
              duration={1000}
              onClick={() => setOpened(false)}
            >
              Expertise
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={1000}
              onClick={() => setOpened(false)}
            >
              Contact
            </Link>
            <Link
              to="about"
              smooth={true}
              duration={1000}
              onClick={() => setOpened(false)}
            >
              About
            </Link>
          </nav>
        )}
      </div>
    </>
  );
}
