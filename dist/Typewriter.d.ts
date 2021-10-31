/// <reference types="react" />
export interface TypewriterProps {
    children: string;
    delay?: number;
    stopBlinkinOnComplete?: any;
    className?: string;
    onComplete: () => void;
    cursor?: string;
    cursorClassName?: string;
    TextWrapper: any;
}
export declare function Typewriter({ TextWrapper, delay, children, stopBlinkinOnComplete, className, onComplete, cursor, cursorClassName }: TypewriterProps): JSX.Element;
