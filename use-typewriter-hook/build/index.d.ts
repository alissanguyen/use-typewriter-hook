export interface TypewriterConfig {
    targetText: string | string[];
    autoStartDelay: number;
    typingDelayMillis: number;
    wrapperClassName: string;
    loop: boolean;
    loopDelay: number;
}
export declare const useTypewriter: (config?: Partial<TypewriterConfig> | undefined) => {
    textValue: string;
    pause: () => void;
    start: () => void;
    wrapperClassName: string;
};
export declare function findCommonSubstring(string1: string, string2: string): string;
