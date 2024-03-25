
import { useSpring, animated } from 'react-spring';
import { Store } from './Store';

export function Home() {
    const fade = useSpring({ opacity: 1, from: { opacity: 0 } });
    const slide = useSpring({ transform: 'translateX(0)', from: { transform: 'translateX(-100%)' } });

    return (
        <animated.div style={fade}>
            <h1>Welcome to our Website!</h1>
            <p>Check out our amazing products and learn more about us.</p>
            <animated.div style={slide}>
            <Store />
            </animated.div>
        </animated.div>
    );
}

