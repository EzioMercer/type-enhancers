export type WhiteSpace = |
    // White Space (https://tc39.es/ecma262/multipage/ecmascript-language-lexical-grammar.html#table-white-space-code-points)
    '\u0009' | // CHARACTER TABULATION
    '\u000B' | // LINE TABULATION
    '\u000C' | // FORM FEED
    '\uFEFF' | // ZERO WIDTH NO-BREAK SPACE

    // Code points in the general category “Space_Separator” (https://util.unicode.org/UnicodeJsps/list-unicodeset.jsp?a=%5Cp%7BGeneral_Category%3DSpace_Separator%7D&g=&i=)
    '\u0020' | // SPACE
    '\u00A0' | // NO-BREAK SPACE
    '\u1680' | // OGHAM SPACE MARK
    '\u2000' | // EN QUAD
    '\u2001' | // EM QUAD
    '\u2002' | // EN SPACE
    '\u2003' | // EM SPACE
    '\u2004' | // THREE-PER-EM SPACE
    '\u2005' | // FOUR-PER-EM SPACE
    '\u2006' | // SIX-PER-EM SPACE
    '\u2007' | // FIGURE SPACE
    '\u2008' | // PUNCTUATION SPACE
    '\u2009' | // THIN SPACE
    '\u200A' | // HAIR SPACE
    '\u202F' | // NARROW NO-BREAK SPACE
    '\u205F' | // MEDIUM MATHEMATICAL SPACE
    '\u3000' | // IDEOGRAPHIC SPACE

    // Line Terminators (https://tc39.es/ecma262/multipage/ecmascript-language-lexical-grammar.html#table-line-terminator-code-points)
    '\u000A' | // LINE FEED
    '\u000D' | // CARRIAGE RETURN
    '\u2028' | // LINE SEPARATOR
    '\u2029' // PARAGRAPH SEPARATOR
    ;
