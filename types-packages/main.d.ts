// atom-ide
// https://github.com/atom-ide-community/atom-ide-base

export * from "./busy-signal"
export * from "./code-actions"
export * from "./code-highlight"
export * from "./datatip"
export * from "./definitions"
export * from "./find-references"
export * from "./hyperclick"
export * from "./outline"
export * from "./sig-help"

import { CodeActionProvider } from "./code-actions"
import { CodeHighlightProvider } from "./code-highlight"
import { AnyDatatipProvider } from "./datatip"
import { DefinitionProvider } from "./definitions"
import { HyperclickProvider } from "./hyperclick"
import { OutlineProvider } from "./outline"
import { SignatureHelpProvider } from "./sig-help"

export interface ProviderCommon {
  // Providers with higher priorities will be preferred over lower ones.
  priority: number
  // Omitting grammarScopes implies that the provider applies to all grammars.
  grammarScopes?: Array<string>
}

export type Provider =
  | ProviderCommon
  | CodeActionProvider
  | CodeHighlightProvider
  | AnyDatatipProvider
  | DefinitionProvider
  | HyperclickProvider
  | OutlineProvider
  | SignatureHelpProvider
