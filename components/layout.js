import { ReactLenis } from '@studio-freight/react-lenis'

export default function Layout({ children }) {
    return (
        <ReactLenis root>
            <main>{children}</main>
        </ReactLenis>
    )
}
