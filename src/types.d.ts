export interface TypewriterConfig {
  /**
   * Strings to type out when using this tool
   */
  targetText: string | string[];
  /**
   * Amout of milliseconds delay at the start of the typewriter effect
   */
  autoStartDelay: number;
  /**
   * Amount of milliseconds delay beteen each char.
   */
  typingDelayMillis: number;
  /**
   * Warpper classname, use for styling
   */
  wrapperClassName: string;
  /**
   * Option to loop
   */
  loop: boolean;
  /**
   * The duration between each loop if `loop` option is true
   */
  loopDelay: number;
}
