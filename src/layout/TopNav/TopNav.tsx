import {
  Header as Head,
  HeaderName,
  SkipToContent,
  HeaderNavigation,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SideNav,
  SideNavItems,
  HeaderSideNavItems,
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
import { navItems } from "../../../config";
import MenuItems from "./menuItem";
interface HeaderProps {
  onClickGrid: Function;
  gridOn?: boolean;
  devTools?: boolean;
}

export default function TopNav({ onClickGrid, devTools, gridOn }: HeaderProps) {
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
        <MenuItems navItems={navItems} />
      </HeaderNavigation>

      <HeaderGlobalBar>
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
        {devTools && (
          <HeaderGlobalAction
            aria-label="dev tools"
            isActive={toolMenuOpen}
            onClick={() => setToolMenuOpen(!toolMenuOpen)}
          >
            <Tools24 />
          </HeaderGlobalAction>
        )}
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
      </HeaderPanel>

      <SideNav
        aria-label="Side navigation"
        isPersistent={false}
        expanded={isSideNavExpanded}
        onOverlayClick={() => setIsSideNavExpanded(!isSideNavExpanded)}
      >
        <>
          <SideNavItems>
            <HeaderSideNavItems>
              <MenuItems navItems={navItems} />
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
