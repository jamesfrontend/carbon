import {
  Header as Head,
  HeaderName,
  SkipToContent,
  HeaderNavigation,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction,
  Toggle,
  SideNav,
  SideNavItems,
  HeaderSideNavItems,
  HeaderMenu,
  HeaderMenuButton,
  HeaderPanel,
  Switcher,
  SwitcherItem,
  SwitcherDivider,
} from "carbon-components-react";
import { TableSplit24, Tools24 } from "@carbon/icons-react";
import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";
interface HeaderProps {
  navItems: any;
  onClickGrid: Function;
  gridOn?: boolean;
}

export default function TopNav({ navItems, onClickGrid, gridOn }: HeaderProps) {
  const [isSideNavExpanded, setIsSideNavExpanded] = useState(false);
  const [toolMenuOpen, setToolMenuOpen] = useState(false);
  const [gitHubLogo, setGitHubLogo] = useState("/images/GitHub_Logo.png");

  function onClick() {
    onClickGrid();
  }

  return (
    <Head aria-label="MSK DigITs">
      <SkipToContent />
      <HeaderMenuButton
        aria-label="Open menu"
        onClick={() => setIsSideNavExpanded(!isSideNavExpanded)}
        isActive={isSideNavExpanded}
      />
      <HeaderName href="/" prefix="Subliminal">
        Stimuli
      </HeaderName>
      <HeaderNavigation aria-label="Portfolio">
        <HeaderMenuItem href="https://wvpioneers.github.io/one" target="_blank">
          Virtual Ventilator
        </HeaderMenuItem>
        <HeaderMenuItem href="https://wvpioneers.github.io/two" target="_blank">
          Digital Coloring Book
        </HeaderMenuItem>
        {/* {navItems.map((item: string) => (
          <HeaderMenuItem key={item} href={`/${item.toLowerCase()}`}>
            {item}
          </HeaderMenuItem>
        ))} */}
      </HeaderNavigation>
      <GitHubWrapper>
        <a
          href="https://github.com/jamesfrontend/carbon"
          rel="noreferrer"
          target="_blank"
          onMouseOver={() => setGitHubLogo("/images/GitHub_Logo_White.png")}
          onMouseOut={() => setGitHubLogo("/images/GitHub_Logo.png")}
        >
          <span className="dark-github">
            <Image
              layout="responsive"
              width={100}
              height={41}
              alt="GitHub Link"
              src={gitHubLogo}
            />
          </span>
        </a>
      </GitHubWrapper>
      {/* <HeaderGlobalBar>
        <HeaderGlobalAction
          aria-label="dev tools"
          isActive={toolMenuOpen}
          onClick={() => setToolMenuOpen(!toolMenuOpen)}
        >
          <Tools24 />
        </HeaderGlobalAction>
      </HeaderGlobalBar>
      <HeaderPanel aria-label="Header Panel" expanded={toolMenuOpen}>
        <Switcher aria-label="Switcher Container">
          <SwitcherItem
            aria-label="Link 1"
            isSelected={gridOn}
            onClick={onClick}
          >
            <GridToggle gridOn={gridOn}>
              <TableSplit24 />
            </GridToggle>
          </SwitcherItem>
          <SwitcherDivider />
        </Switcher>
      </HeaderPanel> */}
      <SideNav
        aria-label="Side navigation"
        isPersistent={false}
        expanded={isSideNavExpanded}
        onOverlayClick={() => setIsSideNavExpanded(!isSideNavExpanded)}
      >
        <>
          <SideNavItems>
            <HeaderSideNavItems>
              {/* {navItems.map((item: string) => (
              <HeaderMenuItem key={item} href={`/${item.toLowerCase()}`}>
                {item}
              </HeaderMenuItem>
            ))} */}
              <HeaderMenuItem
                href="https://wvpioneers.github.io/one"
                target="_blank"
              >
                Virtual Ventilator
              </HeaderMenuItem>
              <HeaderMenuItem
                href="https://wvpioneers.github.io/two"
                target="_blank"
              >
                Digital Coloring Book
              </HeaderMenuItem>
            </HeaderSideNavItems>
          </SideNavItems>
          <MenuGit>
            <a
              href="https://github.com/jamesfrontend/carbon"
              rel="noreferrer"
              target="_blank"
            >
              <Image
                width={80}
                height={32}
                alt="GitHub Link"
                src={"/images/GitHub_Logo.png"}
              />
            </a>
          </MenuGit>
        </>
      </SideNav>
    </Head>
  );
}

type GridType = {
  gridOn?: boolean;
};

const MenuGit = styled.div`
  height: 100px;
  text-align: center;
`;

const GitHubWrapper = styled.div`
  display: none;
  flex: 1 1 0%;
  justify-content: flex-end;
  height: 100%;

  .dark-github {
    width: 70px;
  }

  a {
    padding-inline: 2rem;
    height: 100%;
    display: flex;
    align-items: center;
    transition: background-color 110ms;

    &:hover {
      background-color: #2c2c2c;
    }
  }

  @media (min-width: 66rem) {
    display: flex;
  } ;
`;

const GridToggle = styled.span<GridType>`
  display: flex;
  align-items: center;
  height: 100%;
  &:after {
    content: ${({ gridOn }) => (gridOn ? `"Turn Grid Off"` : `"Turn Grid On"`)};
    padding-left: 1rem;
  }
`;
