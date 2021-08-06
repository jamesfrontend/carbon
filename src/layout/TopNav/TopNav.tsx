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
} from "carbon-components-react"
import { TableSplit24, Tools24 } from "@carbon/icons-react"
import styled from "styled-components"
import { useState } from "react"
interface HeaderProps {
  navItems: any
  onClickGrid: Function
  gridOn?: boolean
}

export default function TopNav({ navItems, onClickGrid, gridOn }: HeaderProps) {
  const [isSideNavExpanded, setIsSideNavExpanded] = useState(false)
  const [toolMenuOpen, setToolMenuOpen] = useState(false)

  function onClick() {
    onClickGrid()
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
      {/* <HeaderGlobalBar>
        <HeaderGlobalAction
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
      </SideNav>
    </Head>
  )
}

type GridType = {
  gridOn?: boolean
}
const GridToggle = styled.span<GridType>`
  display: flex;
  align-items: center;
  height: 100%;
  &:after {
    content: ${({ gridOn }) => (gridOn ? `"Turn Grid Off"` : `"Turn Grid On"`)};
    padding-left: 1rem;
  }
`
