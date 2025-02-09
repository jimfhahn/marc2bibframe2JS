(function () {
  var ba;
  function ca(a) {
    var b = 0;
    return function () {
      return b < a.length ? { done: !1, value: a[b++] } : { done: !0 };
    };
  }
  var da =
      "function" == typeof Object.defineProperties
        ? Object.defineProperty
        : function (a, b, d) {
            a != Array.prototype && a != Object.prototype && (a[b] = d.value);
          },
    ea =
      "undefined" != typeof window && window === this
        ? this
        : "undefined" != typeof global && null != global
        ? global
        : this;
  function ha() {
    ha = function () {};
    ea.Symbol || (ea.Symbol = na);
  }
  var na = (function () {
    var a = 0;
    return function (b) {
      return "jscomp_symbol_" + (b || "") + a++;
    };
  })();
  function pa() {
    ha();
    var a = ea.Symbol.iterator;
    a || (a = ea.Symbol.iterator = ea.Symbol("iterator"));
    "function" != typeof Array.prototype[a] &&
      da(Array.prototype, a, {
        configurable: !0,
        writable: !0,
        value: function () {
          return qa(ca(this));
        },
      });
    pa = function () {};
  }
  function qa(a) {
    pa();
    a = { next: a };
    a[ea.Symbol.iterator] = function () {
      return this;
    };
    return a;
  }
  function sa(a) {
    var b =
      "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
    return b ? b.call(a) : { next: ca(a) };
  }
  var ta =
      "function" == typeof Object.create
        ? Object.create
        : function (a) {
            function b() {}
            b.prototype = a;
            return new b();
          },
    va;
  if ("function" == typeof Object.setPrototypeOf) va = Object.setPrototypeOf;
  else {
    var wa;
    a: {
      var ya = { a: !0 },
        Aa = {};
      try {
        Aa.__proto__ = ya;
        wa = Aa.a;
        break a;
      } catch (a) {}
      wa = !1;
    }
    va = wa
      ? function (a, b) {
          a.__proto__ = b;
          if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
          return a;
        }
      : null;
  }
  var Ca = va;
  function n(a, b) {
    a.prototype = ta(b.prototype);
    a.prototype.constructor = a;
    if (Ca) Ca(a, b);
    else
      for (var d in b)
        if ("prototype" != d)
          if (Object.defineProperties) {
            var m = Object.getOwnPropertyDescriptor(b, d);
            m && Object.defineProperty(a, d, m);
          } else a[d] = b[d];
    a.tr = b.prototype;
  }
  Resources = {
    regexCategories: {
      IsBasicLatin: [["0000", "007F"]],
      "IsLatin-1Supplement": [["0080", "00FF"]],
      "IsLatinExtended-A": [["0100", "017F"]],
      "IsLatinExtended-B": [["0180", "024F"]],
      IsIPAExtensions: [["0250", "02AF"]],
      IsSpacingModifierLetters: [["02B0", "02FF"]],
      IsCombiningDiacriticalMarks: [["0300", "036F"]],
      IsGreek: [["0370", "03FF"]],
      IsGreekandCoptic: [["0370", "03FF"]],
      IsCyrillic: [["0400", "04FF"]],
      IsCyrillicSupplementary: [["0500", "052F"]],
      IsCyrillicSupplement: [["0500", "052F"]],
      IsArmenian: [["0530", "058F"]],
      IsHebrew: [["0590", "05FF"]],
      IsArabic: [["0600", "06FF"]],
      IsSyriac: [["0700", "074F"]],
      IsArabicSupplement: [["0750", "077F"]],
      IsThaana: [["0780", "07BF"]],
      IsNKo: [["07C0", "07FF"]],
      IsSamaritan: [["0800", "083F"]],
      IsMandaic: [["0840", "085F"]],
      IsDevanagari: [["0900", "097F"]],
      IsBengali: [["0980", "09FF"]],
      IsGurmukhi: [["0A00", "0A7F"]],
      IsGujarati: [["0A80", "0AFF"]],
      IsOriya: [["0B00", "0B7F"]],
      IsTamil: [["0B80", "0BFF"]],
      IsTelugu: [["0C00", "0C7F"]],
      IsKannada: [["0C80", "0CFF"]],
      IsMalayalam: [["0D00", "0D7F"]],
      IsSinhala: [["0D80", "0DFF"]],
      IsThai: [["0E00", "0E7F"]],
      IsLao: [["0E80", "0EFF"]],
      IsTibetan: [["0F00", "0FFF"]],
      IsMyanmar: [["1000", "109F"]],
      IsGeorgian: [["10A0", "10FF"]],
      IsHangulJamo: [["1100", "11FF"]],
      IsEthiopic: [["1200", "137F"]],
      IsEthiopicSupplement: [["1380", "139F"]],
      IsCherokee: [["13A0", "13FF"]],
      IsUnifiedCanadianAboriginalSyllabics: [["1400", "167F"]],
      IsOgham: [["1680", "169F"]],
      IsRunic: [["16A0", "16FF"]],
      IsTagalog: [["1700", "171F"]],
      IsHanunoo: [["1720", "173F"]],
      IsBuhid: [["1740", "175F"]],
      IsTagbanwa: [["1760", "177F"]],
      IsKhmer: [["1780", "17FF"]],
      IsMongolian: [["1800", "18AF"]],
      IsUnifiedCanadianAboriginalSyllabicsExtended: [["18B0", "18FF"]],
      IsLimbu: [["1900", "194F"]],
      IsTaiLe: [["1950", "197F"]],
      IsNewTaiLue: [["1980", "19DF"]],
      IsKhmerSymbols: [["19E0", "19FF"]],
      IsBuginese: [["1A00", "1A1F"]],
      IsTaiTham: [["1A20", "1AAF"]],
      IsBalinese: [["1B00", "1B7F"]],
      IsSundanese: [["1B80", "1BBF"]],
      IsBatak: [["1BC0", "1BFF"]],
      IsLepcha: [["1C00", "1C4F"]],
      IsOlChiki: [["1C50", "1C7F"]],
      IsVedicExtensions: [["1CD0", "1CFF"]],
      IsPhoneticExtensions: [["1D00", "1D7F"]],
      IsPhoneticExtensionsSupplement: [["1D80", "1DBF"]],
      IsCombiningDiacriticalMarksSupplement: [["1DC0", "1DFF"]],
      IsLatinExtendedAdditional: [["1E00", "1EFF"]],
      IsGreekExtended: [["1F00", "1FFF"]],
      IsGeneralPunctuation: [["2000", "206F"]],
      IsSuperscriptsandSubscripts: [["2070", "209F"]],
      IsCurrencySymbols: [["20A0", "20CF"]],
      IsCombiningMarksforSymbols: [["20D0", "20FF"]],
      IsCombiningDiacriticalMarksforSymbols: [["20D0", "20FF"]],
      IsLetterlikeSymbols: [["2100", "214F"]],
      IsNumberForms: [["2150", "218F"]],
      IsArrows: [["2190", "21FF"]],
      IsMathematicalOperators: [["2200", "22FF"]],
      IsMiscellaneousTechnical: [["2300", "23FF"]],
      IsControlPictures: [["2400", "243F"]],
      IsOpticalCharacterRecognition: [["2440", "245F"]],
      IsEnclosedAlphanumerics: [["2460", "24FF"]],
      IsBoxDrawing: [["2500", "257F"]],
      IsBlockElements: [["2580", "259F"]],
      IsGeometricShapes: [["25A0", "25FF"]],
      IsMiscellaneousSymbols: [["2600", "26FF"]],
      IsDingbats: [["2700", "27BF"]],
      "IsMiscellaneousMathematicalSymbols-A": [["27C0", "27EF"]],
      "IsSupplementalArrows-A": [["27F0", "27FF"]],
      IsBraillePatterns: [["2800", "28FF"]],
      "IsSupplementalArrows-B": [["2900", "297F"]],
      "IsMiscellaneousMathematicalSymbols-B": [["2980", "29FF"]],
      IsSupplementalMathematicalOperators: [["2A00", "2AFF"]],
      IsMiscellaneousSymbolsandArrows: [["2B00", "2BFF"]],
      IsGlagolitic: [["2C00", "2C5F"]],
      "IsLatinExtended-C": [["2C60", "2C7F"]],
      IsCoptic: [["2C80", "2CFF"]],
      IsGeorgianSupplement: [["2D00", "2D2F"]],
      IsTifinagh: [["2D30", "2D7F"]],
      IsEthiopicExtended: [["2D80", "2DDF"]],
      "IsCyrillicExtended-A": [["2DE0", "2DFF"]],
      IsSupplementalPunctuation: [["2E00", "2E7F"]],
      IsCJKRadicalsSupplement: [["2E80", "2EFF"]],
      IsKangxiRadicals: [["2F00", "2FDF"]],
      IsIdeographicDescriptionCharacters: [["2FF0", "2FFF"]],
      IsCJKSymbolsandPunctuation: [["3000", "303F"]],
      IsHiragana: [["3040", "309F"]],
      IsKatakana: [["30A0", "30FF"]],
      IsBopomofo: [["3100", "312F"]],
      IsHangulCompatibilityJamo: [["3130", "318F"]],
      IsKanbun: [["3190", "319F"]],
      IsBopomofoExtended: [["31A0", "31BF"]],
      IsCJKStrokes: [["31C0", "31EF"]],
      IsKatakanaPhoneticExtensions: [["31F0", "31FF"]],
      IsEnclosedCJKLettersandMonths: [["3200", "32FF"]],
      IsCJKCompatibility: [["3300", "33FF"]],
      IsCJKUnifiedIdeographsExtensionA: [["3400", "4DBF"]],
      IsYijingHexagramSymbols: [["4DC0", "4DFF"]],
      IsCJKUnifiedIdeographs: [["4E00", "9FFF"]],
      IsYiSyllables: [["A000", "A48F"]],
      IsYiRadicals: [["A490", "A4CF"]],
      IsLisu: [["A4D0", "A4FF"]],
      IsVai: [["A500", "A63F"]],
      "IsCyrillicExtended-B": [["A640", "A69F"]],
      IsBamum: [["A6A0", "A6FF"]],
      IsModifierToneLetters: [["A700", "A71F"]],
      "IsLatinExtended-D": [["A720", "A7FF"]],
      IsSylotiNagri: [["A800", "A82F"]],
      IsCommonIndicNumberForms: [["A830", "A83F"]],
      "IsPhags-pa": [["A840", "A87F"]],
      IsSaurashtra: [["A880", "A8DF"]],
      IsDevanagariExtended: [["A8E0", "A8FF"]],
      IsKayahLi: [["A900", "A92F"]],
      IsRejang: [["A930", "A95F"]],
      "IsHangulJamoExtended-A": [["A960", "A97F"]],
      IsJavanese: [["A980", "A9DF"]],
      IsCham: [["AA00", "AA5F"]],
      "IsMyanmarExtended-A": [["AA60", "AA7F"]],
      IsTaiViet: [["AA80", "AADF"]],
      "IsEthiopicExtended-A": [["AB00", "AB2F"]],
      IsMeeteiMayek: [["ABC0", "ABFF"]],
      IsHangulSyllables: [["AC00", "D7AF"]],
      "IsHangulJamoExtended-B": [["D7B0", "D7FF"]],
      IsHighSurrogates: [["D800", "DB7F"]],
      IsHighPrivateUseSurrogates: [["DB80", "DBFF"]],
      IsLowSurrogates: [["DC00", "DFFF"]],
      IsPrivateUse: [
        ["E000", "F8FF"],
        ["F0000", "FFFFD"],
        ["100000", "10FFFD"],
      ],
      IsPrivateUseArea: [["E000", "F8FF"]],
      IsCJKCompatibilityIdeographs: [["F900", "FAFF"]],
      IsAlphabeticPresentationForms: [["FB00", "FB4F"]],
      "IsArabicPresentationForms-A": [["FB50", "FDFF"]],
      IsVariationSelectors: [["FE00", "FE0F"]],
      IsVerticalForms: [["FE10", "FE1F"]],
      IsCombiningHalfMarks: [["FE20", "FE2F"]],
      IsCJKCompatibilityForms: [["FE30", "FE4F"]],
      IsSmallFormVariants: [["FE50", "FE6F"]],
      "IsArabicPresentationForms-B": [["FE70", "FEFF"]],
      IsHalfwidthandFullwidthForms: [["FF00", "FFEF"]],
      IsSpecials: [
        ["FEFF", "FEFF"],
        ["FFF0", "FFFF"],
      ],
      IsLinearBSyllabary: [["10000", "1007F"]],
      IsLinearBIdeograms: [["10080", "100FF"]],
      IsAegeanNumbers: [["10100", "1013F"]],
      IsAncientGreekNumbers: [["10140", "1018F"]],
      IsAncientSymbols: [["10190", "101CF"]],
      IsPhaistosDisc: [["101D0", "101FF"]],
      IsLycian: [["10280", "1029F"]],
      IsCarian: [["102A0", "102DF"]],
      IsOldItalic: [["10300", "1032F"]],
      IsGothic: [["10330", "1034F"]],
      IsUgaritic: [["10380", "1039F"]],
      IsOldPersian: [["103A0", "103DF"]],
      IsDeseret: [["10400", "1044F"]],
      IsShavian: [["10450", "1047F"]],
      IsOsmanya: [["10480", "104AF"]],
      IsCypriotSyllabary: [["10800", "1083F"]],
      IsImperialAramaic: [["10840", "1085F"]],
      IsPhoenician: [["10900", "1091F"]],
      IsLydian: [["10920", "1093F"]],
      IsKharoshthi: [["10A00", "10A5F"]],
      IsOldSouthArabian: [["10A60", "10A7F"]],
      IsAvestan: [["10B00", "10B3F"]],
      IsInscriptionalParthian: [["10B40", "10B5F"]],
      IsInscriptionalPahlavi: [["10B60", "10B7F"]],
      IsOldTurkic: [["10C00", "10C4F"]],
      IsRumiNumeralSymbols: [["10E60", "10E7F"]],
      IsBrahmi: [["11000", "1107F"]],
      IsKaithi: [["11080", "110CF"]],
      IsCuneiform: [["12000", "123FF"]],
      IsCuneiformNumbersandPunctuation: [["12400", "1247F"]],
      IsEgyptianHieroglyphs: [["13000", "1342F"]],
      IsBamumSupplement: [["16800", "16A3F"]],
      IsKanaSupplement: [["1B000", "1B0FF"]],
      IsByzantineMusicalSymbols: [["1D000", "1D0FF"]],
      IsMusicalSymbols: [["1D100", "1D1FF"]],
      IsAncientGreekMusicalNotation: [["1D200", "1D24F"]],
      IsTaiXuanJingSymbols: [["1D300", "1D35F"]],
      IsCountingRodNumerals: [["1D360", "1D37F"]],
      IsMathematicalAlphanumericSymbols: [["1D400", "1D7FF"]],
      IsMahjongTiles: [["1F000", "1F02F"]],
      IsDominoTiles: [["1F030", "1F09F"]],
      IsPlayingCards: [["1F0A0", "1F0FF"]],
      IsEnclosedAlphanumericSupplement: [["1F100", "1F1FF"]],
      IsEnclosedIdeographicSupplement: [["1F200", "1F2FF"]],
      IsMiscellaneousSymbolsAndPictographs: [["1F300", "1F5FF"]],
      IsEmoticons: [["1F600", "1F64F"]],
      IsTransportAndMapSymbols: [["1F680", "1F6FF"]],
      IsAlchemicalSymbols: [["1F700", "1F77F"]],
      IsCJKUnifiedIdeographsExtensionB: [["20000", "2A6DF"]],
      IsCJKUnifiedIdeographsExtensionC: [["2A700", "2B73F"]],
      IsCJKUnifiedIdeographsExtensionD: [["2B740", "2B81F"]],
      IsCJKCompatibilityIdeographsSupplement: [["2F800", "2FA1F"]],
      IsTags: [["E0000", "E007F"]],
      IsVariationSelectorsSupplement: [["E0100", "E01EF"]],
      "IsSupplementaryPrivateUseArea-A": [["F0000", "FFFFF"]],
      "IsSupplementaryPrivateUseArea-B": [["100000", "10FFFF"]],
      C: "Cc|Cf|Cn|Co",
      Cc: [
        ["0", "1F"],
        ["7F", "9F"],
      ],
      Cf: [
        ["AD", "AD"],
        ["600", "604"],
        ["6DD", "6DD"],
        ["70F", "70F"],
        ["200B", "200F"],
        ["202A", "202E"],
        ["2060", "2064"],
        ["206A", "206F"],
        ["FEFF", "FEFF"],
        ["FFF9", "FFFB"],
        ["110BD", "110BD"],
        ["1D173", "1D17A"],
        ["E0001", "E0001"],
        ["E0020", "E007F"],
      ],
      Cn: [
        ["378", "379"],
        ["37F", "383"],
        ["38B", "38B"],
        ["38D", "38D"],
        ["3A2", "3A2"],
        ["528", "52F"],
        ["530", "530"],
        ["557", "558"],
        ["560", "560"],
        ["588", "588"],
        ["58B", "58E"],
        ["590", "590"],
        ["5C8", "5CF"],
        ["5EB", "5EF"],
        ["5F5", "5FF"],
        ["605", "605"],
        ["61C", "61D"],
        ["70E", "70E"],
        ["74B", "74C"],
        ["7B2", "7BF"],
        ["7FB", "7FF"],
        ["82E", "82F"],
        ["83F", "83F"],
        ["85C", "85D"],
        ["85F", "85F"],
        ["860", "89F"],
        ["8A1", "8A1"],
        ["8AD", "8E3"],
        ["8FF", "8FF"],
        ["978", "978"],
        ["980", "980"],
        ["984", "984"],
        ["98D", "98E"],
        ["991", "992"],
        ["9A9", "9A9"],
        ["9B1", "9B1"],
        ["9B3", "9B5"],
        ["9BA", "9BB"],
        ["9C5", "9C6"],
        ["9C9", "9CA"],
        ["9CF", "9D6"],
        ["9D8", "9DB"],
        ["9DE", "9DE"],
        ["9E4", "9E5"],
        ["9FC", "9FF"],
        ["A00", "A00"],
        ["A04", "A04"],
        ["A0B", "A0E"],
        ["A11", "A12"],
        ["A29", "A29"],
        ["A31", "A31"],
        ["A34", "A34"],
        ["A37", "A37"],
        ["A3A", "A3B"],
        ["A3D", "A3D"],
        ["A43", "A46"],
        ["A49", "A4A"],
        ["A4E", "A50"],
        ["A52", "A58"],
        ["A5D", "A5D"],
        ["A5F", "A65"],
        ["A76", "A7F"],
        ["A80", "A80"],
        ["A84", "A84"],
        ["A8E", "A8E"],
        ["A92", "A92"],
        ["AA9", "AA9"],
        ["AB1", "AB1"],
        ["AB4", "AB4"],
        ["ABA", "ABB"],
        ["AC6", "AC6"],
        ["ACA", "ACA"],
        ["ACE", "ACF"],
        ["AD1", "ADF"],
        ["AE4", "AE5"],
        ["AF2", "AFF"],
        ["B00", "B00"],
        ["B04", "B04"],
        ["B0D", "B0E"],
        ["B11", "B12"],
        ["B29", "B29"],
        ["B31", "B31"],
        ["B34", "B34"],
        ["B3A", "B3B"],
        ["B45", "B46"],
        ["B49", "B4A"],
        ["B4E", "B55"],
        ["B58", "B5B"],
        ["B5E", "B5E"],
        ["B64", "B65"],
        ["B78", "B7F"],
        ["B80", "B81"],
        ["B84", "B84"],
        ["B8B", "B8D"],
        ["B91", "B91"],
        ["B96", "B98"],
        ["B9B", "B9B"],
        ["B9D", "B9D"],
        ["BA0", "BA2"],
        ["BA5", "BA7"],
        ["BAB", "BAD"],
        ["BBA", "BBD"],
        ["BC3", "BC5"],
        ["BC9", "BC9"],
        ["BCE", "BCF"],
        ["BD1", "BD6"],
        ["BD8", "BE5"],
        ["BFB", "BFF"],
        ["C00", "C00"],
        ["C04", "C04"],
        ["C0D", "C0D"],
        ["C11", "C11"],
        ["C29", "C29"],
        ["C34", "C34"],
        ["C3A", "C3C"],
        ["C45", "C45"],
        ["C49", "C49"],
        ["C4E", "C54"],
        ["C57", "C57"],
        ["C5A", "C5F"],
        ["C64", "C65"],
        ["C70", "C77"],
        ["C80", "C81"],
        ["C84", "C84"],
        ["C8D", "C8D"],
        ["C91", "C91"],
        ["CA9", "CA9"],
        ["CB4", "CB4"],
        ["CBA", "CBB"],
        ["CC5", "CC5"],
        ["CC9", "CC9"],
        ["CCE", "CD4"],
        ["CD7", "CDD"],
        ["CDF", "CDF"],
        ["CE4", "CE5"],
        ["CF0", "CF0"],
        ["CF3", "CFF"],
        ["D00", "D01"],
        ["D04", "D04"],
        ["D0D", "D0D"],
        ["D11", "D11"],
        ["D3B", "D3C"],
        ["D45", "D45"],
        ["D49", "D49"],
        ["D4F", "D56"],
        ["D58", "D5F"],
        ["D64", "D65"],
        ["D76", "D78"],
        ["D80", "D81"],
        ["D84", "D84"],
        ["D97", "D99"],
        ["DB2", "DB2"],
        ["DBC", "DBC"],
        ["DBE", "DBF"],
        ["DC7", "DC9"],
        ["DCB", "DCE"],
        ["DD5", "DD5"],
        ["DD7", "DD7"],
        ["DE0", "DF1"],
        ["DF5", "DFF"],
        ["E00", "E00"],
        ["E3B", "E3E"],
        ["E5C", "E7F"],
        ["E80", "E80"],
        ["E83", "E83"],
        ["E85", "E86"],
        ["E89", "E89"],
        ["E8B", "E8C"],
        ["E8E", "E93"],
        ["E98", "E98"],
        ["EA0", "EA0"],
        ["EA4", "EA4"],
        ["EA6", "EA6"],
        ["EA8", "EA9"],
        ["EAC", "EAC"],
        ["EBA", "EBA"],
        ["EBE", "EBF"],
        ["EC5", "EC5"],
        ["EC7", "EC7"],
        ["ECE", "ECF"],
        ["EDA", "EDB"],
        ["EE0", "EFF"],
        ["F48", "F48"],
        ["F6D", "F70"],
        ["F98", "F98"],
        ["FBD", "FBD"],
        ["FCD", "FCD"],
        ["FDB", "FFF"],
        ["10C6", "10C6"],
        ["10C8", "10CC"],
        ["10CE", "10CF"],
        ["1249", "1249"],
        ["124E", "124F"],
        ["1257", "1257"],
        ["1259", "1259"],
        ["125E", "125F"],
        ["1289", "1289"],
        ["128E", "128F"],
        ["12B1", "12B1"],
        ["12B6", "12B7"],
        ["12BF", "12BF"],
        ["12C1", "12C1"],
        ["12C6", "12C7"],
        ["12D7", "12D7"],
        ["1311", "1311"],
        ["1316", "1317"],
        ["135B", "135C"],
        ["137D", "137F"],
        ["139A", "139F"],
        ["13F5", "13FF"],
        ["169D", "169F"],
        ["16F1", "16FF"],
        ["170D", "170D"],
        ["1715", "171F"],
        ["1737", "173F"],
        ["1754", "175F"],
        ["176D", "176D"],
        ["1771", "1771"],
        ["1774", "177F"],
        ["17DE", "17DF"],
        ["17EA", "17EF"],
        ["17FA", "17FF"],
        ["180F", "180F"],
        ["181A", "181F"],
        ["1878", "187F"],
        ["18AB", "18AF"],
        ["18F6", "18FF"],
        ["191D", "191F"],
        ["192C", "192F"],
        ["193C", "193F"],
        ["1941", "1943"],
        ["196E", "196F"],
        ["1975", "197F"],
        ["19AC", "19AF"],
        ["19CA", "19CF"],
        ["19DB", "19DD"],
        ["1A1C", "1A1D"],
        ["1A5F", "1A5F"],
        ["1A7D", "1A7E"],
        ["1A8A", "1A8F"],
        ["1A9A", "1A9F"],
        ["1AAE", "1AAF"],
        ["1AB0", "1AFF"],
        ["1B4C", "1B4F"],
        ["1B7D", "1B7F"],
        ["1BF4", "1BFB"],
        ["1C38", "1C3A"],
        ["1C4A", "1C4C"],
        ["1C80", "1CBF"],
        ["1CC8", "1CCF"],
        ["1CF7", "1CFF"],
        ["1DE7", "1DFB"],
        ["1F16", "1F17"],
        ["1F1E", "1F1F"],
        ["1F46", "1F47"],
        ["1F4E", "1F4F"],
        ["1F58", "1F58"],
        ["1F5A", "1F5A"],
        ["1F5C", "1F5C"],
        ["1F5E", "1F5E"],
        ["1F7E", "1F7F"],
        ["1FB5", "1FB5"],
        ["1FC5", "1FC5"],
        ["1FD4", "1FD5"],
        ["1FDC", "1FDC"],
        ["1FF0", "1FF1"],
        ["1FF5", "1FF5"],
        ["1FFF", "1FFF"],
        ["2065", "2069"],
        ["2072", "2073"],
        ["208F", "208F"],
        ["209D", "209F"],
        ["20BB", "20CF"],
        ["20F1", "20FF"],
        ["218A", "218F"],
        ["23F4", "23FF"],
        ["2427", "243F"],
        ["244B", "245F"],
        ["2700", "2700"],
        ["2B4D", "2B4F"],
        ["2B5A", "2BFF"],
        ["2C2F", "2C2F"],
        ["2C5F", "2C5F"],
        ["2CF4", "2CF8"],
        ["2D26", "2D26"],
        ["2D28", "2D2C"],
        ["2D2E", "2D2F"],
        ["2D68", "2D6E"],
        ["2D71", "2D7E"],
        ["2D97", "2D9F"],
        ["2DA7", "2DA7"],
        ["2DAF", "2DAF"],
        ["2DB7", "2DB7"],
        ["2DBF", "2DBF"],
        ["2DC7", "2DC7"],
        ["2DCF", "2DCF"],
        ["2DD7", "2DD7"],
        ["2DDF", "2DDF"],
        ["2E3C", "2E7F"],
        ["2E9A", "2E9A"],
        ["2EF4", "2EFF"],
        ["2FD6", "2FDF"],
        ["2FE0", "2FEF"],
        ["2FFC", "2FFF"],
        ["3040", "3040"],
        ["3097", "3098"],
        ["3100", "3104"],
        ["312E", "312F"],
        ["3130", "3130"],
        ["318F", "318F"],
        ["31BB", "31BF"],
        ["31E4", "31EF"],
        ["321F", "321F"],
        ["32FF", "32FF"],
        ["4DB6", "4DBF"],
        ["9FCD", "9FFF"],
        ["A48D", "A48F"],
        ["A4C7", "A4CF"],
        ["A62C", "A63F"],
        ["A698", "A69E"],
        ["A6F8", "A6FF"],
        ["A78F", "A78F"],
        ["A794", "A79F"],
        ["A7AB", "A7F7"],
        ["A82C", "A82F"],
        ["A83A", "A83F"],
        ["A878", "A87F"],
        ["A8C5", "A8CD"],
        ["A8DA", "A8DF"],
        ["A8FC", "A8FF"],
        ["A954", "A95E"],
        ["A97D", "A97F"],
        ["A9CE", "A9CE"],
        ["A9DA", "A9DD"],
        ["A9E0", "A9FF"],
        ["AA37", "AA3F"],
        ["AA4E", "AA4F"],
        ["AA5A", "AA5B"],
        ["AA7C", "AA7F"],
        ["AAC3", "AADA"],
        ["AAF7", "AAFF"],
        ["AB00", "AB00"],
        ["AB07", "AB08"],
        ["AB0F", "AB10"],
        ["AB17", "AB1F"],
        ["AB27", "AB27"],
        ["AB2F", "AB2F"],
        ["AB30", "ABBF"],
        ["ABEE", "ABEF"],
        ["ABFA", "ABFF"],
        ["D7A4", "D7AF"],
        ["D7C7", "D7CA"],
        ["D7FC", "D7FF"],
        ["FA6E", "FA6F"],
        ["FADA", "FAFF"],
        ["FB07", "FB12"],
        ["FB18", "FB1C"],
        ["FB37", "FB37"],
        ["FB3D", "FB3D"],
        ["FB3F", "FB3F"],
        ["FB42", "FB42"],
        ["FB45", "FB45"],
        ["FBC2", "FBD2"],
        ["FD40", "FD4F"],
        ["FD90", "FD91"],
        ["FDC8", "FDCF"],
        ["FDD0", "FDEF"],
        ["FDFE", "FDFF"],
        ["FE1A", "FE1F"],
        ["FE27", "FE2F"],
        ["FE53", "FE53"],
        ["FE67", "FE67"],
        ["FE6C", "FE6F"],
        ["FE75", "FE75"],
        ["FEFD", "FEFE"],
        ["FF00", "FF00"],
        ["FFBF", "FFC1"],
        ["FFC8", "FFC9"],
        ["FFD0", "FFD1"],
        ["FFD8", "FFD9"],
        ["FFDD", "FFDF"],
        ["FFE7", "FFE7"],
        ["FFEF", "FFEF"],
        ["FFF0", "FFF8"],
        ["FFFE", "FFFF"],
        ["1000C", "1000C"],
        ["10027", "10027"],
        ["1003B", "1003B"],
        ["1003E", "1003E"],
        ["1004E", "1004F"],
        ["1005E", "1007F"],
        ["100FB", "100FF"],
        ["10103", "10106"],
        ["10134", "10136"],
        ["1018B", "1018F"],
        ["1019C", "101CF"],
        ["101FE", "101FF"],
        ["10200", "1027F"],
        ["1029D", "1029F"],
        ["102D1", "102DF"],
        ["102E0", "102FF"],
        ["1031F", "1031F"],
        ["10324", "1032F"],
        ["1034B", "1034F"],
        ["10350", "1037F"],
        ["1039E", "1039E"],
        ["103C4", "103C7"],
        ["103D6", "103DF"],
        ["103E0", "103FF"],
        ["1049E", "1049F"],
        ["104AA", "104AF"],
        ["104B0", "107FF"],
        ["10806", "10807"],
        ["10809", "10809"],
        ["10836", "10836"],
        ["10839", "1083B"],
        ["1083D", "1083E"],
        ["10856", "10856"],
        ["10860", "108FF"],
        ["1091C", "1091E"],
        ["1093A", "1093E"],
        ["10940", "1097F"],
        ["109B8", "109BD"],
        ["109C0", "109FF"],
        ["10A04", "10A04"],
        ["10A07", "10A0B"],
        ["10A14", "10A14"],
        ["10A18", "10A18"],
        ["10A34", "10A37"],
        ["10A3B", "10A3E"],
        ["10A48", "10A4F"],
        ["10A59", "10A5F"],
        ["10A80", "10AFF"],
        ["10B36", "10B38"],
        ["10B56", "10B57"],
        ["10B73", "10B77"],
        ["10B80", "10BFF"],
        ["10C49", "10C4F"],
        ["10C50", "10E5F"],
        ["10E7F", "10E7F"],
        ["10E80", "10FFF"],
        ["1104E", "11051"],
        ["11070", "1107F"],
        ["110C2", "110CF"],
        ["110E9", "110EF"],
        ["110FA", "110FF"],
        ["11135", "11135"],
        ["11144", "1114F"],
        ["11150", "1117F"],
        ["111C9", "111CF"],
        ["111DA", "111DF"],
        ["111E0", "1167F"],
        ["116B8", "116BF"],
        ["116CA", "116CF"],
        ["116D0", "11FFF"],
        ["1236F", "123FF"],
        ["12463", "1246F"],
        ["12474", "1247F"],
        ["12480", "12FFF"],
        ["1342F", "1342F"],
        ["13430", "167FF"],
        ["16A39", "16A3F"],
        ["16A40", "16EFF"],
        ["16F45", "16F4F"],
        ["16F7F", "16F8E"],
        ["16FA0", "1AFFF"],
        ["1B002", "1B0FF"],
        ["1B100", "1CFFF"],
        ["1D0F6", "1D0FF"],
        ["1D127", "1D128"],
        ["1D1DE", "1D1FF"],
        ["1D246", "1D24F"],
        ["1D250", "1D2FF"],
        ["1D357", "1D35F"],
        ["1D372", "1D37F"],
        ["1D380", "1D3FF"],
        ["1D455", "1D455"],
        ["1D49D", "1D49D"],
        ["1D4A0", "1D4A1"],
        ["1D4A3", "1D4A4"],
        ["1D4A7", "1D4A8"],
        ["1D4AD", "1D4AD"],
        ["1D4BA", "1D4BA"],
        ["1D4BC", "1D4BC"],
        ["1D4C4", "1D4C4"],
        ["1D506", "1D506"],
        ["1D50B", "1D50C"],
        ["1D515", "1D515"],
        ["1D51D", "1D51D"],
        ["1D53A", "1D53A"],
        ["1D53F", "1D53F"],
        ["1D545", "1D545"],
        ["1D547", "1D549"],
        ["1D551", "1D551"],
        ["1D6A6", "1D6A7"],
        ["1D7CC", "1D7CD"],
        ["1D800", "1E7FF"],
        ["1E800", "1EDFF"],
        ["1EE04", "1EE04"],
        ["1EE20", "1EE20"],
        ["1EE23", "1EE23"],
        ["1EE25", "1EE26"],
        ["1EE28", "1EE28"],
        ["1EE33", "1EE33"],
        ["1EE38", "1EE38"],
        ["1EE3A", "1EE3A"],
        ["1EE3C", "1EE41"],
        ["1EE43", "1EE46"],
        ["1EE48", "1EE48"],
        ["1EE4A", "1EE4A"],
        ["1EE4C", "1EE4C"],
        ["1EE50", "1EE50"],
        ["1EE53", "1EE53"],
        ["1EE55", "1EE56"],
        ["1EE58", "1EE58"],
        ["1EE5A", "1EE5A"],
        ["1EE5C", "1EE5C"],
        ["1EE5E", "1EE5E"],
        ["1EE60", "1EE60"],
        ["1EE63", "1EE63"],
        ["1EE65", "1EE66"],
        ["1EE6B", "1EE6B"],
        ["1EE73", "1EE73"],
        ["1EE78", "1EE78"],
        ["1EE7D", "1EE7D"],
        ["1EE7F", "1EE7F"],
        ["1EE8A", "1EE8A"],
        ["1EE9C", "1EEA0"],
        ["1EEA4", "1EEA4"],
        ["1EEAA", "1EEAA"],
        ["1EEBC", "1EEEF"],
        ["1EEF2", "1EEFF"],
        ["1EF00", "1EFFF"],
        ["1F02C", "1F02F"],
        ["1F094", "1F09F"],
        ["1F0AF", "1F0B0"],
        ["1F0BF", "1F0C0"],
        ["1F0D0", "1F0D0"],
        ["1F0E0", "1F0FF"],
        ["1F10B", "1F10F"],
        ["1F12F", "1F12F"],
        ["1F16C", "1F16F"],
        ["1F19B", "1F1E5"],
        ["1F203", "1F20F"],
        ["1F23B", "1F23F"],
        ["1F249", "1F24F"],
        ["1F252", "1F2FF"],
        ["1F321", "1F32F"],
        ["1F336", "1F336"],
        ["1F37D", "1F37F"],
        ["1F394", "1F39F"],
        ["1F3C5", "1F3C5"],
        ["1F3CB", "1F3DF"],
        ["1F3F1", "1F3FF"],
        ["1F43F", "1F43F"],
        ["1F441", "1F441"],
        ["1F4F8", "1F4F8"],
        ["1F4FD", "1F4FF"],
        ["1F53E", "1F53F"],
        ["1F544", "1F54F"],
        ["1F568", "1F5FA"],
        ["1F641", "1F644"],
        ["1F650", "1F67F"],
        ["1F6C6", "1F6FF"],
        ["1F774", "1F77F"],
        ["1F780", "1FFFD"],
        ["1FFFE", "1FFFF"],
        ["2A6D7", "2A6DF"],
        ["2A6E0", "2A6FF"],
        ["2B735", "2B73F"],
        ["2B81E", "2B81F"],
        ["2B820", "2F7FF"],
        ["2FA1E", "2FA1F"],
        ["2FA20", "2FFFD"],
        ["2FFFE", "2FFFF"],
        ["30000", "3FFFD"],
        ["3FFFE", "3FFFF"],
        ["40000", "4FFFD"],
        ["4FFFE", "4FFFF"],
        ["50000", "5FFFD"],
        ["5FFFE", "5FFFF"],
        ["60000", "6FFFD"],
        ["6FFFE", "6FFFF"],
        ["70000", "7FFFD"],
        ["7FFFE", "7FFFF"],
        ["80000", "8FFFD"],
        ["8FFFE", "8FFFF"],
        ["90000", "9FFFD"],
        ["9FFFE", "9FFFF"],
        ["A0000", "AFFFD"],
        ["AFFFE", "AFFFF"],
        ["B0000", "BFFFD"],
        ["BFFFE", "BFFFF"],
        ["C0000", "CFFFD"],
        ["CFFFE", "CFFFF"],
        ["D0000", "DFFFD"],
        ["DFFFE", "DFFFF"],
        ["E0000", "E0000"],
        ["E0002", "E001F"],
        ["E0080", "E00FF"],
        ["E01F0", "E0FFF"],
        ["E1000", "EFFFD"],
        ["EFFFE", "EFFFF"],
        ["FFFFE", "FFFFF"],
        ["10FFFE", "10FFFF"],
      ],
      Co: [
        ["E000", "F8FF"],
        ["F0000", "FFFFD"],
        ["100000", "10FFFD"],
      ],
      L: "Ll|Lm|Lo|Lt|Lu",
      Ll: [
        ["61", "7A"],
        ["B5", "B5"],
        ["DF", "F6"],
        ["F8", "FF"],
        ["101", "101"],
        ["103", "103"],
        ["105", "105"],
        ["107", "107"],
        ["109", "109"],
        ["10B", "10B"],
        ["10D", "10D"],
        ["10F", "10F"],
        ["111", "111"],
        ["113", "113"],
        ["115", "115"],
        ["117", "117"],
        ["119", "119"],
        ["11B", "11B"],
        ["11D", "11D"],
        ["11F", "11F"],
        ["121", "121"],
        ["123", "123"],
        ["125", "125"],
        ["127", "127"],
        ["129", "129"],
        ["12B", "12B"],
        ["12D", "12D"],
        ["12F", "12F"],
        ["131", "131"],
        ["133", "133"],
        ["135", "135"],
        ["137", "138"],
        ["13A", "13A"],
        ["13C", "13C"],
        ["13E", "13E"],
        ["140", "140"],
        ["142", "142"],
        ["144", "144"],
        ["146", "146"],
        ["148", "149"],
        ["14B", "14B"],
        ["14D", "14D"],
        ["14F", "14F"],
        ["151", "151"],
        ["153", "153"],
        ["155", "155"],
        ["157", "157"],
        ["159", "159"],
        ["15B", "15B"],
        ["15D", "15D"],
        ["15F", "15F"],
        ["161", "161"],
        ["163", "163"],
        ["165", "165"],
        ["167", "167"],
        ["169", "169"],
        ["16B", "16B"],
        ["16D", "16D"],
        ["16F", "16F"],
        ["171", "171"],
        ["173", "173"],
        ["175", "175"],
        ["177", "177"],
        ["17A", "17A"],
        ["17C", "17C"],
        ["17E", "180"],
        ["183", "183"],
        ["185", "185"],
        ["188", "188"],
        ["18C", "18D"],
        ["192", "192"],
        ["195", "195"],
        ["199", "19B"],
        ["19E", "19E"],
        ["1A1", "1A1"],
        ["1A3", "1A3"],
        ["1A5", "1A5"],
        ["1A8", "1A8"],
        ["1AA", "1AB"],
        ["1AD", "1AD"],
        ["1B0", "1B0"],
        ["1B4", "1B4"],
        ["1B6", "1B6"],
        ["1B9", "1BA"],
        ["1BD", "1BF"],
        ["1C6", "1C6"],
        ["1C9", "1C9"],
        ["1CC", "1CC"],
        ["1CE", "1CE"],
        ["1D0", "1D0"],
        ["1D2", "1D2"],
        ["1D4", "1D4"],
        ["1D6", "1D6"],
        ["1D8", "1D8"],
        ["1DA", "1DA"],
        ["1DC", "1DD"],
        ["1DF", "1DF"],
        ["1E1", "1E1"],
        ["1E3", "1E3"],
        ["1E5", "1E5"],
        ["1E7", "1E7"],
        ["1E9", "1E9"],
        ["1EB", "1EB"],
        ["1ED", "1ED"],
        ["1EF", "1F0"],
        ["1F3", "1F3"],
        ["1F5", "1F5"],
        ["1F9", "1F9"],
        ["1FB", "1FB"],
        ["1FD", "1FD"],
        ["1FF", "1FF"],
        ["201", "201"],
        ["203", "203"],
        ["205", "205"],
        ["207", "207"],
        ["209", "209"],
        ["20B", "20B"],
        ["20D", "20D"],
        ["20F", "20F"],
        ["211", "211"],
        ["213", "213"],
        ["215", "215"],
        ["217", "217"],
        ["219", "219"],
        ["21B", "21B"],
        ["21D", "21D"],
        ["21F", "21F"],
        ["221", "221"],
        ["223", "223"],
        ["225", "225"],
        ["227", "227"],
        ["229", "229"],
        ["22B", "22B"],
        ["22D", "22D"],
        ["22F", "22F"],
        ["231", "231"],
        ["233", "239"],
        ["23C", "23C"],
        ["23F", "240"],
        ["242", "242"],
        ["247", "247"],
        ["249", "249"],
        ["24B", "24B"],
        ["24D", "24D"],
        ["24F", "293"],
        ["295", "2AF"],
        ["371", "371"],
        ["373", "373"],
        ["377", "377"],
        ["37B", "37D"],
        ["390", "390"],
        ["3AC", "3CE"],
        ["3D0", "3D1"],
        ["3D5", "3D7"],
        ["3D9", "3D9"],
        ["3DB", "3DB"],
        ["3DD", "3DD"],
        ["3DF", "3DF"],
        ["3E1", "3E1"],
        ["3E3", "3E3"],
        ["3E5", "3E5"],
        ["3E7", "3E7"],
        ["3E9", "3E9"],
        ["3EB", "3EB"],
        ["3ED", "3ED"],
        ["3EF", "3F3"],
        ["3F5", "3F5"],
        ["3F8", "3F8"],
        ["3FB", "3FC"],
        ["430", "45F"],
        ["461", "461"],
        ["463", "463"],
        ["465", "465"],
        ["467", "467"],
        ["469", "469"],
        ["46B", "46B"],
        ["46D", "46D"],
        ["46F", "46F"],
        ["471", "471"],
        ["473", "473"],
        ["475", "475"],
        ["477", "477"],
        ["479", "479"],
        ["47B", "47B"],
        ["47D", "47D"],
        ["47F", "47F"],
        ["481", "481"],
        ["48B", "48B"],
        ["48D", "48D"],
        ["48F", "48F"],
        ["491", "491"],
        ["493", "493"],
        ["495", "495"],
        ["497", "497"],
        ["499", "499"],
        ["49B", "49B"],
        ["49D", "49D"],
        ["49F", "49F"],
        ["4A1", "4A1"],
        ["4A3", "4A3"],
        ["4A5", "4A5"],
        ["4A7", "4A7"],
        ["4A9", "4A9"],
        ["4AB", "4AB"],
        ["4AD", "4AD"],
        ["4AF", "4AF"],
        ["4B1", "4B1"],
        ["4B3", "4B3"],
        ["4B5", "4B5"],
        ["4B7", "4B7"],
        ["4B9", "4B9"],
        ["4BB", "4BB"],
        ["4BD", "4BD"],
        ["4BF", "4BF"],
        ["4C2", "4C2"],
        ["4C4", "4C4"],
        ["4C6", "4C6"],
        ["4C8", "4C8"],
        ["4CA", "4CA"],
        ["4CC", "4CC"],
        ["4CE", "4CF"],
        ["4D1", "4D1"],
        ["4D3", "4D3"],
        ["4D5", "4D5"],
        ["4D7", "4D7"],
        ["4D9", "4D9"],
        ["4DB", "4DB"],
        ["4DD", "4DD"],
        ["4DF", "4DF"],
        ["4E1", "4E1"],
        ["4E3", "4E3"],
        ["4E5", "4E5"],
        ["4E7", "4E7"],
        ["4E9", "4E9"],
        ["4EB", "4EB"],
        ["4ED", "4ED"],
        ["4EF", "4EF"],
        ["4F1", "4F1"],
        ["4F3", "4F3"],
        ["4F5", "4F5"],
        ["4F7", "4F7"],
        ["4F9", "4F9"],
        ["4FB", "4FB"],
        ["4FD", "4FD"],
        ["4FF", "4FF"],
        ["501", "501"],
        ["503", "503"],
        ["505", "505"],
        ["507", "507"],
        ["509", "509"],
        ["50B", "50B"],
        ["50D", "50D"],
        ["50F", "50F"],
        ["511", "511"],
        ["513", "513"],
        ["515", "515"],
        ["517", "517"],
        ["519", "519"],
        ["51B", "51B"],
        ["51D", "51D"],
        ["51F", "51F"],
        ["521", "521"],
        ["523", "523"],
        ["525", "525"],
        ["527", "527"],
        ["561", "587"],
        ["1D00", "1D2B"],
        ["1D6B", "1D77"],
        ["1D79", "1D9A"],
        ["1E01", "1E01"],
        ["1E03", "1E03"],
        ["1E05", "1E05"],
        ["1E07", "1E07"],
        ["1E09", "1E09"],
        ["1E0B", "1E0B"],
        ["1E0D", "1E0D"],
        ["1E0F", "1E0F"],
        ["1E11", "1E11"],
        ["1E13", "1E13"],
        ["1E15", "1E15"],
        ["1E17", "1E17"],
        ["1E19", "1E19"],
        ["1E1B", "1E1B"],
        ["1E1D", "1E1D"],
        ["1E1F", "1E1F"],
        ["1E21", "1E21"],
        ["1E23", "1E23"],
        ["1E25", "1E25"],
        ["1E27", "1E27"],
        ["1E29", "1E29"],
        ["1E2B", "1E2B"],
        ["1E2D", "1E2D"],
        ["1E2F", "1E2F"],
        ["1E31", "1E31"],
        ["1E33", "1E33"],
        ["1E35", "1E35"],
        ["1E37", "1E37"],
        ["1E39", "1E39"],
        ["1E3B", "1E3B"],
        ["1E3D", "1E3D"],
        ["1E3F", "1E3F"],
        ["1E41", "1E41"],
        ["1E43", "1E43"],
        ["1E45", "1E45"],
        ["1E47", "1E47"],
        ["1E49", "1E49"],
        ["1E4B", "1E4B"],
        ["1E4D", "1E4D"],
        ["1E4F", "1E4F"],
        ["1E51", "1E51"],
        ["1E53", "1E53"],
        ["1E55", "1E55"],
        ["1E57", "1E57"],
        ["1E59", "1E59"],
        ["1E5B", "1E5B"],
        ["1E5D", "1E5D"],
        ["1E5F", "1E5F"],
        ["1E61", "1E61"],
        ["1E63", "1E63"],
        ["1E65", "1E65"],
        ["1E67", "1E67"],
        ["1E69", "1E69"],
        ["1E6B", "1E6B"],
        ["1E6D", "1E6D"],
        ["1E6F", "1E6F"],
        ["1E71", "1E71"],
        ["1E73", "1E73"],
        ["1E75", "1E75"],
        ["1E77", "1E77"],
        ["1E79", "1E79"],
        ["1E7B", "1E7B"],
        ["1E7D", "1E7D"],
        ["1E7F", "1E7F"],
        ["1E81", "1E81"],
        ["1E83", "1E83"],
        ["1E85", "1E85"],
        ["1E87", "1E87"],
        ["1E89", "1E89"],
        ["1E8B", "1E8B"],
        ["1E8D", "1E8D"],
        ["1E8F", "1E8F"],
        ["1E91", "1E91"],
        ["1E93", "1E93"],
        ["1E95", "1E9D"],
        ["1E9F", "1E9F"],
        ["1EA1", "1EA1"],
        ["1EA3", "1EA3"],
        ["1EA5", "1EA5"],
        ["1EA7", "1EA7"],
        ["1EA9", "1EA9"],
        ["1EAB", "1EAB"],
        ["1EAD", "1EAD"],
        ["1EAF", "1EAF"],
        ["1EB1", "1EB1"],
        ["1EB3", "1EB3"],
        ["1EB5", "1EB5"],
        ["1EB7", "1EB7"],
        ["1EB9", "1EB9"],
        ["1EBB", "1EBB"],
        ["1EBD", "1EBD"],
        ["1EBF", "1EBF"],
        ["1EC1", "1EC1"],
        ["1EC3", "1EC3"],
        ["1EC5", "1EC5"],
        ["1EC7", "1EC7"],
        ["1EC9", "1EC9"],
        ["1ECB", "1ECB"],
        ["1ECD", "1ECD"],
        ["1ECF", "1ECF"],
        ["1ED1", "1ED1"],
        ["1ED3", "1ED3"],
        ["1ED5", "1ED5"],
        ["1ED7", "1ED7"],
        ["1ED9", "1ED9"],
        ["1EDB", "1EDB"],
        ["1EDD", "1EDD"],
        ["1EDF", "1EDF"],
        ["1EE1", "1EE1"],
        ["1EE3", "1EE3"],
        ["1EE5", "1EE5"],
        ["1EE7", "1EE7"],
        ["1EE9", "1EE9"],
        ["1EEB", "1EEB"],
        ["1EED", "1EED"],
        ["1EEF", "1EEF"],
        ["1EF1", "1EF1"],
        ["1EF3", "1EF3"],
        ["1EF5", "1EF5"],
        ["1EF7", "1EF7"],
        ["1EF9", "1EF9"],
        ["1EFB", "1EFB"],
        ["1EFD", "1EFD"],
        ["1EFF", "1F07"],
        ["1F10", "1F15"],
        ["1F20", "1F27"],
        ["1F30", "1F37"],
        ["1F40", "1F45"],
        ["1F50", "1F57"],
        ["1F60", "1F67"],
        ["1F70", "1F7D"],
        ["1F80", "1F87"],
        ["1F90", "1F97"],
        ["1FA0", "1FA7"],
        ["1FB0", "1FB4"],
        ["1FB6", "1FB7"],
        ["1FBE", "1FBE"],
        ["1FC2", "1FC4"],
        ["1FC6", "1FC7"],
        ["1FD0", "1FD3"],
        ["1FD6", "1FD7"],
        ["1FE0", "1FE7"],
        ["1FF2", "1FF4"],
        ["1FF6", "1FF7"],
        ["210A", "210A"],
        ["210E", "210F"],
        ["2113", "2113"],
        ["212F", "212F"],
        ["2134", "2134"],
        ["2139", "2139"],
        ["213C", "213D"],
        ["2146", "2149"],
        ["214E", "214E"],
        ["2184", "2184"],
        ["2C30", "2C5E"],
        ["2C61", "2C61"],
        ["2C65", "2C66"],
        ["2C68", "2C68"],
        ["2C6A", "2C6A"],
        ["2C6C", "2C6C"],
        ["2C71", "2C71"],
        ["2C73", "2C74"],
        ["2C76", "2C7B"],
        ["2C81", "2C81"],
        ["2C83", "2C83"],
        ["2C85", "2C85"],
        ["2C87", "2C87"],
        ["2C89", "2C89"],
        ["2C8B", "2C8B"],
        ["2C8D", "2C8D"],
        ["2C8F", "2C8F"],
        ["2C91", "2C91"],
        ["2C93", "2C93"],
        ["2C95", "2C95"],
        ["2C97", "2C97"],
        ["2C99", "2C99"],
        ["2C9B", "2C9B"],
        ["2C9D", "2C9D"],
        ["2C9F", "2C9F"],
        ["2CA1", "2CA1"],
        ["2CA3", "2CA3"],
        ["2CA5", "2CA5"],
        ["2CA7", "2CA7"],
        ["2CA9", "2CA9"],
        ["2CAB", "2CAB"],
        ["2CAD", "2CAD"],
        ["2CAF", "2CAF"],
        ["2CB1", "2CB1"],
        ["2CB3", "2CB3"],
        ["2CB5", "2CB5"],
        ["2CB7", "2CB7"],
        ["2CB9", "2CB9"],
        ["2CBB", "2CBB"],
        ["2CBD", "2CBD"],
        ["2CBF", "2CBF"],
        ["2CC1", "2CC1"],
        ["2CC3", "2CC3"],
        ["2CC5", "2CC5"],
        ["2CC7", "2CC7"],
        ["2CC9", "2CC9"],
        ["2CCB", "2CCB"],
        ["2CCD", "2CCD"],
        ["2CCF", "2CCF"],
        ["2CD1", "2CD1"],
        ["2CD3", "2CD3"],
        ["2CD5", "2CD5"],
        ["2CD7", "2CD7"],
        ["2CD9", "2CD9"],
        ["2CDB", "2CDB"],
        ["2CDD", "2CDD"],
        ["2CDF", "2CDF"],
        ["2CE1", "2CE1"],
        ["2CE3", "2CE4"],
        ["2CEC", "2CEC"],
        ["2CEE", "2CEE"],
        ["2CF3", "2CF3"],
        ["2D00", "2D25"],
        ["2D27", "2D27"],
        ["2D2D", "2D2D"],
        ["A641", "A641"],
        ["A643", "A643"],
        ["A645", "A645"],
        ["A647", "A647"],
        ["A649", "A649"],
        ["A64B", "A64B"],
        ["A64D", "A64D"],
        ["A64F", "A64F"],
        ["A651", "A651"],
        ["A653", "A653"],
        ["A655", "A655"],
        ["A657", "A657"],
        ["A659", "A659"],
        ["A65B", "A65B"],
        ["A65D", "A65D"],
        ["A65F", "A65F"],
        ["A661", "A661"],
        ["A663", "A663"],
        ["A665", "A665"],
        ["A667", "A667"],
        ["A669", "A669"],
        ["A66B", "A66B"],
        ["A66D", "A66D"],
        ["A681", "A681"],
        ["A683", "A683"],
        ["A685", "A685"],
        ["A687", "A687"],
        ["A689", "A689"],
        ["A68B", "A68B"],
        ["A68D", "A68D"],
        ["A68F", "A68F"],
        ["A691", "A691"],
        ["A693", "A693"],
        ["A695", "A695"],
        ["A697", "A697"],
        ["A723", "A723"],
        ["A725", "A725"],
        ["A727", "A727"],
        ["A729", "A729"],
        ["A72B", "A72B"],
        ["A72D", "A72D"],
        ["A72F", "A731"],
        ["A733", "A733"],
        ["A735", "A735"],
        ["A737", "A737"],
        ["A739", "A739"],
        ["A73B", "A73B"],
        ["A73D", "A73D"],
        ["A73F", "A73F"],
        ["A741", "A741"],
        ["A743", "A743"],
        ["A745", "A745"],
        ["A747", "A747"],
        ["A749", "A749"],
        ["A74B", "A74B"],
        ["A74D", "A74D"],
        ["A74F", "A74F"],
        ["A751", "A751"],
        ["A753", "A753"],
        ["A755", "A755"],
        ["A757", "A757"],
        ["A759", "A759"],
        ["A75B", "A75B"],
        ["A75D", "A75D"],
        ["A75F", "A75F"],
        ["A761", "A761"],
        ["A763", "A763"],
        ["A765", "A765"],
        ["A767", "A767"],
        ["A769", "A769"],
        ["A76B", "A76B"],
        ["A76D", "A76D"],
        ["A76F", "A76F"],
        ["A771", "A778"],
        ["A77A", "A77A"],
        ["A77C", "A77C"],
        ["A77F", "A77F"],
        ["A781", "A781"],
        ["A783", "A783"],
        ["A785", "A785"],
        ["A787", "A787"],
        ["A78C", "A78C"],
        ["A78E", "A78E"],
        ["A791", "A791"],
        ["A793", "A793"],
        ["A7A1", "A7A1"],
        ["A7A3", "A7A3"],
        ["A7A5", "A7A5"],
        ["A7A7", "A7A7"],
        ["A7A9", "A7A9"],
        ["A7FA", "A7FA"],
        ["FB00", "FB06"],
        ["FB13", "FB17"],
        ["FF41", "FF5A"],
        ["10428", "1044F"],
        ["1D41A", "1D433"],
        ["1D44E", "1D454"],
        ["1D456", "1D467"],
        ["1D482", "1D49B"],
        ["1D4B6", "1D4B9"],
        ["1D4BB", "1D4BB"],
        ["1D4BD", "1D4C3"],
        ["1D4C5", "1D4CF"],
        ["1D4EA", "1D503"],
        ["1D51E", "1D537"],
        ["1D552", "1D56B"],
        ["1D586", "1D59F"],
        ["1D5BA", "1D5D3"],
        ["1D5EE", "1D607"],
        ["1D622", "1D63B"],
        ["1D656", "1D66F"],
        ["1D68A", "1D6A5"],
        ["1D6C2", "1D6DA"],
        ["1D6DC", "1D6E1"],
        ["1D6FC", "1D714"],
        ["1D716", "1D71B"],
        ["1D736", "1D74E"],
        ["1D750", "1D755"],
        ["1D770", "1D788"],
        ["1D78A", "1D78F"],
        ["1D7AA", "1D7C2"],
        ["1D7C4", "1D7C9"],
        ["1D7CB", "1D7CB"],
      ],
      Lm: [
        ["2B0", "2C1"],
        ["2C6", "2D1"],
        ["2E0", "2E4"],
        ["2EC", "2EC"],
        ["2EE", "2EE"],
        ["374", "374"],
        ["37A", "37A"],
        ["559", "559"],
        ["640", "640"],
        ["6E5", "6E6"],
        ["7F4", "7F5"],
        ["7FA", "7FA"],
        ["81A", "81A"],
        ["824", "824"],
        ["828", "828"],
        ["971", "971"],
        ["E46", "E46"],
        ["EC6", "EC6"],
        ["10FC", "10FC"],
        ["17D7", "17D7"],
        ["1843", "1843"],
        ["1AA7", "1AA7"],
        ["1C78", "1C7D"],
        ["1D2C", "1D6A"],
        ["1D78", "1D78"],
        ["1D9B", "1DBF"],
        ["2071", "2071"],
        ["207F", "207F"],
        ["2090", "209C"],
        ["2C7C", "2C7D"],
        ["2D6F", "2D6F"],
        ["2E2F", "2E2F"],
        ["3005", "3005"],
        ["3031", "3035"],
        ["303B", "303B"],
        ["309D", "309E"],
        ["30FC", "30FE"],
        ["A015", "A015"],
        ["A4F8", "A4FD"],
        ["A60C", "A60C"],
        ["A67F", "A67F"],
        ["A717", "A71F"],
        ["A770", "A770"],
        ["A788", "A788"],
        ["A7F8", "A7F9"],
        ["A9CF", "A9CF"],
        ["AA70", "AA70"],
        ["AADD", "AADD"],
        ["AAF3", "AAF4"],
        ["FF70", "FF70"],
        ["FF9E", "FF9F"],
        ["16F93", "16F9F"],
      ],
      Lo: [
        ["AA", "AA"],
        ["BA", "BA"],
        ["1BB", "1BB"],
        ["1C0", "1C3"],
        ["294", "294"],
        ["5D0", "5EA"],
        ["5F0", "5F2"],
        ["620", "63F"],
        ["641", "64A"],
        ["66E", "66F"],
        ["671", "6D3"],
        ["6D5", "6D5"],
        ["6EE", "6EF"],
        ["6FA", "6FC"],
        ["6FF", "6FF"],
        ["710", "710"],
        ["712", "72F"],
        ["74D", "7A5"],
        ["7B1", "7B1"],
        ["7CA", "7EA"],
        ["800", "815"],
        ["840", "858"],
        ["8A0", "8A0"],
        ["8A2", "8AC"],
        ["904", "939"],
        ["93D", "93D"],
        ["950", "950"],
        ["958", "961"],
        ["972", "977"],
        ["979", "97F"],
        ["985", "98C"],
        ["98F", "990"],
        ["993", "9A8"],
        ["9AA", "9B0"],
        ["9B2", "9B2"],
        ["9B6", "9B9"],
        ["9BD", "9BD"],
        ["9CE", "9CE"],
        ["9DC", "9DD"],
        ["9DF", "9E1"],
        ["9F0", "9F1"],
        ["A05", "A0A"],
        ["A0F", "A10"],
        ["A13", "A28"],
        ["A2A", "A30"],
        ["A32", "A33"],
        ["A35", "A36"],
        ["A38", "A39"],
        ["A59", "A5C"],
        ["A5E", "A5E"],
        ["A72", "A74"],
        ["A85", "A8D"],
        ["A8F", "A91"],
        ["A93", "AA8"],
        ["AAA", "AB0"],
        ["AB2", "AB3"],
        ["AB5", "AB9"],
        ["ABD", "ABD"],
        ["AD0", "AD0"],
        ["AE0", "AE1"],
        ["B05", "B0C"],
        ["B0F", "B10"],
        ["B13", "B28"],
        ["B2A", "B30"],
        ["B32", "B33"],
        ["B35", "B39"],
        ["B3D", "B3D"],
        ["B5C", "B5D"],
        ["B5F", "B61"],
        ["B71", "B71"],
        ["B83", "B83"],
        ["B85", "B8A"],
        ["B8E", "B90"],
        ["B92", "B95"],
        ["B99", "B9A"],
        ["B9C", "B9C"],
        ["B9E", "B9F"],
        ["BA3", "BA4"],
        ["BA8", "BAA"],
        ["BAE", "BB9"],
        ["BD0", "BD0"],
        ["C05", "C0C"],
        ["C0E", "C10"],
        ["C12", "C28"],
        ["C2A", "C33"],
        ["C35", "C39"],
        ["C3D", "C3D"],
        ["C58", "C59"],
        ["C60", "C61"],
        ["C85", "C8C"],
        ["C8E", "C90"],
        ["C92", "CA8"],
        ["CAA", "CB3"],
        ["CB5", "CB9"],
        ["CBD", "CBD"],
        ["CDE", "CDE"],
        ["CE0", "CE1"],
        ["CF1", "CF2"],
        ["D05", "D0C"],
        ["D0E", "D10"],
        ["D12", "D3A"],
        ["D3D", "D3D"],
        ["D4E", "D4E"],
        ["D60", "D61"],
        ["D7A", "D7F"],
        ["D85", "D96"],
        ["D9A", "DB1"],
        ["DB3", "DBB"],
        ["DBD", "DBD"],
        ["DC0", "DC6"],
        ["E01", "E30"],
        ["E32", "E33"],
        ["E40", "E45"],
        ["E81", "E82"],
        ["E84", "E84"],
        ["E87", "E88"],
        ["E8A", "E8A"],
        ["E8D", "E8D"],
        ["E94", "E97"],
        ["E99", "E9F"],
        ["EA1", "EA3"],
        ["EA5", "EA5"],
        ["EA7", "EA7"],
        ["EAA", "EAB"],
        ["EAD", "EB0"],
        ["EB2", "EB3"],
        ["EBD", "EBD"],
        ["EC0", "EC4"],
        ["EDC", "EDF"],
        ["F00", "F00"],
        ["F40", "F47"],
        ["F49", "F6C"],
        ["F88", "F8C"],
        ["1000", "102A"],
        ["103F", "103F"],
        ["1050", "1055"],
        ["105A", "105D"],
        ["1061", "1061"],
        ["1065", "1066"],
        ["106E", "1070"],
        ["1075", "1081"],
        ["108E", "108E"],
        ["10D0", "10FA"],
        ["10FD", "1248"],
        ["124A", "124D"],
        ["1250", "1256"],
        ["1258", "1258"],
        ["125A", "125D"],
        ["1260", "1288"],
        ["128A", "128D"],
        ["1290", "12B0"],
        ["12B2", "12B5"],
        ["12B8", "12BE"],
        ["12C0", "12C0"],
        ["12C2", "12C5"],
        ["12C8", "12D6"],
        ["12D8", "1310"],
        ["1312", "1315"],
        ["1318", "135A"],
        ["1380", "138F"],
        ["13A0", "13F4"],
        ["1401", "166C"],
        ["166F", "167F"],
        ["1681", "169A"],
        ["16A0", "16EA"],
        ["1700", "170C"],
        ["170E", "1711"],
        ["1720", "1731"],
        ["1740", "1751"],
        ["1760", "176C"],
        ["176E", "1770"],
        ["1780", "17B3"],
        ["17DC", "17DC"],
        ["1820", "1842"],
        ["1844", "1877"],
        ["1880", "18A8"],
        ["18AA", "18AA"],
        ["18B0", "18F5"],
        ["1900", "191C"],
        ["1950", "196D"],
        ["1970", "1974"],
        ["1980", "19AB"],
        ["19C1", "19C7"],
        ["1A00", "1A16"],
        ["1A20", "1A54"],
        ["1B05", "1B33"],
        ["1B45", "1B4B"],
        ["1B83", "1BA0"],
        ["1BAE", "1BAF"],
        ["1BBA", "1BE5"],
        ["1C00", "1C23"],
        ["1C4D", "1C4F"],
        ["1C5A", "1C77"],
        ["1CE9", "1CEC"],
        ["1CEE", "1CF1"],
        ["1CF5", "1CF6"],
        ["2135", "2138"],
        ["2D30", "2D67"],
        ["2D80", "2D96"],
        ["2DA0", "2DA6"],
        ["2DA8", "2DAE"],
        ["2DB0", "2DB6"],
        ["2DB8", "2DBE"],
        ["2DC0", "2DC6"],
        ["2DC8", "2DCE"],
        ["2DD0", "2DD6"],
        ["2DD8", "2DDE"],
        ["3006", "3006"],
        ["303C", "303C"],
        ["3041", "3096"],
        ["309F", "309F"],
        ["30A1", "30FA"],
        ["30FF", "30FF"],
        ["3105", "312D"],
        ["3131", "318E"],
        ["31A0", "31BA"],
        ["31F0", "31FF"],
        ["3400", "4DB5"],
        ["4E00", "9FCC"],
        ["A000", "A014"],
        ["A016", "A48C"],
        ["A4D0", "A4F7"],
        ["A500", "A60B"],
        ["A610", "A61F"],
        ["A62A", "A62B"],
        ["A66E", "A66E"],
        ["A6A0", "A6E5"],
        ["A7FB", "A801"],
        ["A803", "A805"],
        ["A807", "A80A"],
        ["A80C", "A822"],
        ["A840", "A873"],
        ["A882", "A8B3"],
        ["A8F2", "A8F7"],
        ["A8FB", "A8FB"],
        ["A90A", "A925"],
        ["A930", "A946"],
        ["A960", "A97C"],
        ["A984", "A9B2"],
        ["AA00", "AA28"],
        ["AA40", "AA42"],
        ["AA44", "AA4B"],
        ["AA60", "AA6F"],
        ["AA71", "AA76"],
        ["AA7A", "AA7A"],
        ["AA80", "AAAF"],
        ["AAB1", "AAB1"],
        ["AAB5", "AAB6"],
        ["AAB9", "AABD"],
        ["AAC0", "AAC0"],
        ["AAC2", "AAC2"],
        ["AADB", "AADC"],
        ["AAE0", "AAEA"],
        ["AAF2", "AAF2"],
        ["AB01", "AB06"],
        ["AB09", "AB0E"],
        ["AB11", "AB16"],
        ["AB20", "AB26"],
        ["AB28", "AB2E"],
        ["ABC0", "ABE2"],
        ["AC00", "D7A3"],
        ["D7B0", "D7C6"],
        ["D7CB", "D7FB"],
        ["F900", "FA6D"],
        ["FA70", "FAD9"],
        ["FB1D", "FB1D"],
        ["FB1F", "FB28"],
        ["FB2A", "FB36"],
        ["FB38", "FB3C"],
        ["FB3E", "FB3E"],
        ["FB40", "FB41"],
        ["FB43", "FB44"],
        ["FB46", "FBB1"],
        ["FBD3", "FD3D"],
        ["FD50", "FD8F"],
        ["FD92", "FDC7"],
        ["FDF0", "FDFB"],
        ["FE70", "FE74"],
        ["FE76", "FEFC"],
        ["FF66", "FF6F"],
        ["FF71", "FF9D"],
        ["FFA0", "FFBE"],
        ["FFC2", "FFC7"],
        ["FFCA", "FFCF"],
        ["FFD2", "FFD7"],
        ["FFDA", "FFDC"],
        ["10000", "1000B"],
        ["1000D", "10026"],
        ["10028", "1003A"],
        ["1003C", "1003D"],
        ["1003F", "1004D"],
        ["10050", "1005D"],
        ["10080", "100FA"],
        ["10280", "1029C"],
        ["102A0", "102D0"],
        ["10300", "1031E"],
        ["10330", "10340"],
        ["10342", "10349"],
        ["10380", "1039D"],
        ["103A0", "103C3"],
        ["103C8", "103CF"],
        ["10450", "1049D"],
        ["10800", "10805"],
        ["10808", "10808"],
        ["1080A", "10835"],
        ["10837", "10838"],
        ["1083C", "1083C"],
        ["1083F", "10855"],
        ["10900", "10915"],
        ["10920", "10939"],
        ["10980", "109B7"],
        ["109BE", "109BF"],
        ["10A00", "10A00"],
        ["10A10", "10A13"],
        ["10A15", "10A17"],
        ["10A19", "10A33"],
        ["10A60", "10A7C"],
        ["10B00", "10B35"],
        ["10B40", "10B55"],
        ["10B60", "10B72"],
        ["10C00", "10C48"],
        ["11003", "11037"],
        ["11083", "110AF"],
        ["110D0", "110E8"],
        ["11103", "11126"],
        ["11183", "111B2"],
        ["111C1", "111C4"],
        ["11680", "116AA"],
        ["12000", "1236E"],
        ["13000", "1342E"],
        ["16800", "16A38"],
        ["16F00", "16F44"],
        ["16F50", "16F50"],
        ["1B000", "1B001"],
        ["1EE00", "1EE03"],
        ["1EE05", "1EE1F"],
        ["1EE21", "1EE22"],
        ["1EE24", "1EE24"],
        ["1EE27", "1EE27"],
        ["1EE29", "1EE32"],
        ["1EE34", "1EE37"],
        ["1EE39", "1EE39"],
        ["1EE3B", "1EE3B"],
        ["1EE42", "1EE42"],
        ["1EE47", "1EE47"],
        ["1EE49", "1EE49"],
        ["1EE4B", "1EE4B"],
        ["1EE4D", "1EE4F"],
        ["1EE51", "1EE52"],
        ["1EE54", "1EE54"],
        ["1EE57", "1EE57"],
        ["1EE59", "1EE59"],
        ["1EE5B", "1EE5B"],
        ["1EE5D", "1EE5D"],
        ["1EE5F", "1EE5F"],
        ["1EE61", "1EE62"],
        ["1EE64", "1EE64"],
        ["1EE67", "1EE6A"],
        ["1EE6C", "1EE72"],
        ["1EE74", "1EE77"],
        ["1EE79", "1EE7C"],
        ["1EE7E", "1EE7E"],
        ["1EE80", "1EE89"],
        ["1EE8B", "1EE9B"],
        ["1EEA1", "1EEA3"],
        ["1EEA5", "1EEA9"],
        ["1EEAB", "1EEBB"],
        ["20000", "2A6D6"],
        ["2A700", "2B734"],
        ["2B740", "2B81D"],
        ["2F800", "2FA1D"],
      ],
      Lt: [
        ["1C5", "1C5"],
        ["1C8", "1C8"],
        ["1CB", "1CB"],
        ["1F2", "1F2"],
        ["1F88", "1F8F"],
        ["1F98", "1F9F"],
        ["1FA8", "1FAF"],
        ["1FBC", "1FBC"],
        ["1FCC", "1FCC"],
        ["1FFC", "1FFC"],
      ],
      Lu: [
        ["41", "5A"],
        ["C0", "D6"],
        ["D8", "DE"],
        ["100", "100"],
        ["102", "102"],
        ["104", "104"],
        ["106", "106"],
        ["108", "108"],
        ["10A", "10A"],
        ["10C", "10C"],
        ["10E", "10E"],
        ["110", "110"],
        ["112", "112"],
        ["114", "114"],
        ["116", "116"],
        ["118", "118"],
        ["11A", "11A"],
        ["11C", "11C"],
        ["11E", "11E"],
        ["120", "120"],
        ["122", "122"],
        ["124", "124"],
        ["126", "126"],
        ["128", "128"],
        ["12A", "12A"],
        ["12C", "12C"],
        ["12E", "12E"],
        ["130", "130"],
        ["132", "132"],
        ["134", "134"],
        ["136", "136"],
        ["139", "139"],
        ["13B", "13B"],
        ["13D", "13D"],
        ["13F", "13F"],
        ["141", "141"],
        ["143", "143"],
        ["145", "145"],
        ["147", "147"],
        ["14A", "14A"],
        ["14C", "14C"],
        ["14E", "14E"],
        ["150", "150"],
        ["152", "152"],
        ["154", "154"],
        ["156", "156"],
        ["158", "158"],
        ["15A", "15A"],
        ["15C", "15C"],
        ["15E", "15E"],
        ["160", "160"],
        ["162", "162"],
        ["164", "164"],
        ["166", "166"],
        ["168", "168"],
        ["16A", "16A"],
        ["16C", "16C"],
        ["16E", "16E"],
        ["170", "170"],
        ["172", "172"],
        ["174", "174"],
        ["176", "176"],
        ["178", "179"],
        ["17B", "17B"],
        ["17D", "17D"],
        ["181", "182"],
        ["184", "184"],
        ["186", "187"],
        ["189", "18B"],
        ["18E", "191"],
        ["193", "194"],
        ["196", "198"],
        ["19C", "19D"],
        ["19F", "1A0"],
        ["1A2", "1A2"],
        ["1A4", "1A4"],
        ["1A6", "1A7"],
        ["1A9", "1A9"],
        ["1AC", "1AC"],
        ["1AE", "1AF"],
        ["1B1", "1B3"],
        ["1B5", "1B5"],
        ["1B7", "1B8"],
        ["1BC", "1BC"],
        ["1C4", "1C4"],
        ["1C7", "1C7"],
        ["1CA", "1CA"],
        ["1CD", "1CD"],
        ["1CF", "1CF"],
        ["1D1", "1D1"],
        ["1D3", "1D3"],
        ["1D5", "1D5"],
        ["1D7", "1D7"],
        ["1D9", "1D9"],
        ["1DB", "1DB"],
        ["1DE", "1DE"],
        ["1E0", "1E0"],
        ["1E2", "1E2"],
        ["1E4", "1E4"],
        ["1E6", "1E6"],
        ["1E8", "1E8"],
        ["1EA", "1EA"],
        ["1EC", "1EC"],
        ["1EE", "1EE"],
        ["1F1", "1F1"],
        ["1F4", "1F4"],
        ["1F6", "1F8"],
        ["1FA", "1FA"],
        ["1FC", "1FC"],
        ["1FE", "1FE"],
        ["200", "200"],
        ["202", "202"],
        ["204", "204"],
        ["206", "206"],
        ["208", "208"],
        ["20A", "20A"],
        ["20C", "20C"],
        ["20E", "20E"],
        ["210", "210"],
        ["212", "212"],
        ["214", "214"],
        ["216", "216"],
        ["218", "218"],
        ["21A", "21A"],
        ["21C", "21C"],
        ["21E", "21E"],
        ["220", "220"],
        ["222", "222"],
        ["224", "224"],
        ["226", "226"],
        ["228", "228"],
        ["22A", "22A"],
        ["22C", "22C"],
        ["22E", "22E"],
        ["230", "230"],
        ["232", "232"],
        ["23A", "23B"],
        ["23D", "23E"],
        ["241", "241"],
        ["243", "246"],
        ["248", "248"],
        ["24A", "24A"],
        ["24C", "24C"],
        ["24E", "24E"],
        ["370", "370"],
        ["372", "372"],
        ["376", "376"],
        ["386", "386"],
        ["388", "38A"],
        ["38C", "38C"],
        ["38E", "38F"],
        ["391", "3A1"],
        ["3A3", "3AB"],
        ["3CF", "3CF"],
        ["3D2", "3D4"],
        ["3D8", "3D8"],
        ["3DA", "3DA"],
        ["3DC", "3DC"],
        ["3DE", "3DE"],
        ["3E0", "3E0"],
        ["3E2", "3E2"],
        ["3E4", "3E4"],
        ["3E6", "3E6"],
        ["3E8", "3E8"],
        ["3EA", "3EA"],
        ["3EC", "3EC"],
        ["3EE", "3EE"],
        ["3F4", "3F4"],
        ["3F7", "3F7"],
        ["3F9", "3FA"],
        ["3FD", "42F"],
        ["460", "460"],
        ["462", "462"],
        ["464", "464"],
        ["466", "466"],
        ["468", "468"],
        ["46A", "46A"],
        ["46C", "46C"],
        ["46E", "46E"],
        ["470", "470"],
        ["472", "472"],
        ["474", "474"],
        ["476", "476"],
        ["478", "478"],
        ["47A", "47A"],
        ["47C", "47C"],
        ["47E", "47E"],
        ["480", "480"],
        ["48A", "48A"],
        ["48C", "48C"],
        ["48E", "48E"],
        ["490", "490"],
        ["492", "492"],
        ["494", "494"],
        ["496", "496"],
        ["498", "498"],
        ["49A", "49A"],
        ["49C", "49C"],
        ["49E", "49E"],
        ["4A0", "4A0"],
        ["4A2", "4A2"],
        ["4A4", "4A4"],
        ["4A6", "4A6"],
        ["4A8", "4A8"],
        ["4AA", "4AA"],
        ["4AC", "4AC"],
        ["4AE", "4AE"],
        ["4B0", "4B0"],
        ["4B2", "4B2"],
        ["4B4", "4B4"],
        ["4B6", "4B6"],
        ["4B8", "4B8"],
        ["4BA", "4BA"],
        ["4BC", "4BC"],
        ["4BE", "4BE"],
        ["4C0", "4C1"],
        ["4C3", "4C3"],
        ["4C5", "4C5"],
        ["4C7", "4C7"],
        ["4C9", "4C9"],
        ["4CB", "4CB"],
        ["4CD", "4CD"],
        ["4D0", "4D0"],
        ["4D2", "4D2"],
        ["4D4", "4D4"],
        ["4D6", "4D6"],
        ["4D8", "4D8"],
        ["4DA", "4DA"],
        ["4DC", "4DC"],
        ["4DE", "4DE"],
        ["4E0", "4E0"],
        ["4E2", "4E2"],
        ["4E4", "4E4"],
        ["4E6", "4E6"],
        ["4E8", "4E8"],
        ["4EA", "4EA"],
        ["4EC", "4EC"],
        ["4EE", "4EE"],
        ["4F0", "4F0"],
        ["4F2", "4F2"],
        ["4F4", "4F4"],
        ["4F6", "4F6"],
        ["4F8", "4F8"],
        ["4FA", "4FA"],
        ["4FC", "4FC"],
        ["4FE", "4FE"],
        ["500", "500"],
        ["502", "502"],
        ["504", "504"],
        ["506", "506"],
        ["508", "508"],
        ["50A", "50A"],
        ["50C", "50C"],
        ["50E", "50E"],
        ["510", "510"],
        ["512", "512"],
        ["514", "514"],
        ["516", "516"],
        ["518", "518"],
        ["51A", "51A"],
        ["51C", "51C"],
        ["51E", "51E"],
        ["520", "520"],
        ["522", "522"],
        ["524", "524"],
        ["526", "526"],
        ["531", "556"],
        ["10A0", "10C5"],
        ["10C7", "10C7"],
        ["10CD", "10CD"],
        ["1E00", "1E00"],
        ["1E02", "1E02"],
        ["1E04", "1E04"],
        ["1E06", "1E06"],
        ["1E08", "1E08"],
        ["1E0A", "1E0A"],
        ["1E0C", "1E0C"],
        ["1E0E", "1E0E"],
        ["1E10", "1E10"],
        ["1E12", "1E12"],
        ["1E14", "1E14"],
        ["1E16", "1E16"],
        ["1E18", "1E18"],
        ["1E1A", "1E1A"],
        ["1E1C", "1E1C"],
        ["1E1E", "1E1E"],
        ["1E20", "1E20"],
        ["1E22", "1E22"],
        ["1E24", "1E24"],
        ["1E26", "1E26"],
        ["1E28", "1E28"],
        ["1E2A", "1E2A"],
        ["1E2C", "1E2C"],
        ["1E2E", "1E2E"],
        ["1E30", "1E30"],
        ["1E32", "1E32"],
        ["1E34", "1E34"],
        ["1E36", "1E36"],
        ["1E38", "1E38"],
        ["1E3A", "1E3A"],
        ["1E3C", "1E3C"],
        ["1E3E", "1E3E"],
        ["1E40", "1E40"],
        ["1E42", "1E42"],
        ["1E44", "1E44"],
        ["1E46", "1E46"],
        ["1E48", "1E48"],
        ["1E4A", "1E4A"],
        ["1E4C", "1E4C"],
        ["1E4E", "1E4E"],
        ["1E50", "1E50"],
        ["1E52", "1E52"],
        ["1E54", "1E54"],
        ["1E56", "1E56"],
        ["1E58", "1E58"],
        ["1E5A", "1E5A"],
        ["1E5C", "1E5C"],
        ["1E5E", "1E5E"],
        ["1E60", "1E60"],
        ["1E62", "1E62"],
        ["1E64", "1E64"],
        ["1E66", "1E66"],
        ["1E68", "1E68"],
        ["1E6A", "1E6A"],
        ["1E6C", "1E6C"],
        ["1E6E", "1E6E"],
        ["1E70", "1E70"],
        ["1E72", "1E72"],
        ["1E74", "1E74"],
        ["1E76", "1E76"],
        ["1E78", "1E78"],
        ["1E7A", "1E7A"],
        ["1E7C", "1E7C"],
        ["1E7E", "1E7E"],
        ["1E80", "1E80"],
        ["1E82", "1E82"],
        ["1E84", "1E84"],
        ["1E86", "1E86"],
        ["1E88", "1E88"],
        ["1E8A", "1E8A"],
        ["1E8C", "1E8C"],
        ["1E8E", "1E8E"],
        ["1E90", "1E90"],
        ["1E92", "1E92"],
        ["1E94", "1E94"],
        ["1E9E", "1E9E"],
        ["1EA0", "1EA0"],
        ["1EA2", "1EA2"],
        ["1EA4", "1EA4"],
        ["1EA6", "1EA6"],
        ["1EA8", "1EA8"],
        ["1EAA", "1EAA"],
        ["1EAC", "1EAC"],
        ["1EAE", "1EAE"],
        ["1EB0", "1EB0"],
        ["1EB2", "1EB2"],
        ["1EB4", "1EB4"],
        ["1EB6", "1EB6"],
        ["1EB8", "1EB8"],
        ["1EBA", "1EBA"],
        ["1EBC", "1EBC"],
        ["1EBE", "1EBE"],
        ["1EC0", "1EC0"],
        ["1EC2", "1EC2"],
        ["1EC4", "1EC4"],
        ["1EC6", "1EC6"],
        ["1EC8", "1EC8"],
        ["1ECA", "1ECA"],
        ["1ECC", "1ECC"],
        ["1ECE", "1ECE"],
        ["1ED0", "1ED0"],
        ["1ED2", "1ED2"],
        ["1ED4", "1ED4"],
        ["1ED6", "1ED6"],
        ["1ED8", "1ED8"],
        ["1EDA", "1EDA"],
        ["1EDC", "1EDC"],
        ["1EDE", "1EDE"],
        ["1EE0", "1EE0"],
        ["1EE2", "1EE2"],
        ["1EE4", "1EE4"],
        ["1EE6", "1EE6"],
        ["1EE8", "1EE8"],
        ["1EEA", "1EEA"],
        ["1EEC", "1EEC"],
        ["1EEE", "1EEE"],
        ["1EF0", "1EF0"],
        ["1EF2", "1EF2"],
        ["1EF4", "1EF4"],
        ["1EF6", "1EF6"],
        ["1EF8", "1EF8"],
        ["1EFA", "1EFA"],
        ["1EFC", "1EFC"],
        ["1EFE", "1EFE"],
        ["1F08", "1F0F"],
        ["1F18", "1F1D"],
        ["1F28", "1F2F"],
        ["1F38", "1F3F"],
        ["1F48", "1F4D"],
        ["1F59", "1F59"],
        ["1F5B", "1F5B"],
        ["1F5D", "1F5D"],
        ["1F5F", "1F5F"],
        ["1F68", "1F6F"],
        ["1FB8", "1FBB"],
        ["1FC8", "1FCB"],
        ["1FD8", "1FDB"],
        ["1FE8", "1FEC"],
        ["1FF8", "1FFB"],
        ["2102", "2102"],
        ["2107", "2107"],
        ["210B", "210D"],
        ["2110", "2112"],
        ["2115", "2115"],
        ["2119", "211D"],
        ["2124", "2124"],
        ["2126", "2126"],
        ["2128", "2128"],
        ["212A", "212D"],
        ["2130", "2133"],
        ["213E", "213F"],
        ["2145", "2145"],
        ["2183", "2183"],
        ["2C00", "2C2E"],
        ["2C60", "2C60"],
        ["2C62", "2C64"],
        ["2C67", "2C67"],
        ["2C69", "2C69"],
        ["2C6B", "2C6B"],
        ["2C6D", "2C70"],
        ["2C72", "2C72"],
        ["2C75", "2C75"],
        ["2C7E", "2C80"],
        ["2C82", "2C82"],
        ["2C84", "2C84"],
        ["2C86", "2C86"],
        ["2C88", "2C88"],
        ["2C8A", "2C8A"],
        ["2C8C", "2C8C"],
        ["2C8E", "2C8E"],
        ["2C90", "2C90"],
        ["2C92", "2C92"],
        ["2C94", "2C94"],
        ["2C96", "2C96"],
        ["2C98", "2C98"],
        ["2C9A", "2C9A"],
        ["2C9C", "2C9C"],
        ["2C9E", "2C9E"],
        ["2CA0", "2CA0"],
        ["2CA2", "2CA2"],
        ["2CA4", "2CA4"],
        ["2CA6", "2CA6"],
        ["2CA8", "2CA8"],
        ["2CAA", "2CAA"],
        ["2CAC", "2CAC"],
        ["2CAE", "2CAE"],
        ["2CB0", "2CB0"],
        ["2CB2", "2CB2"],
        ["2CB4", "2CB4"],
        ["2CB6", "2CB6"],
        ["2CB8", "2CB8"],
        ["2CBA", "2CBA"],
        ["2CBC", "2CBC"],
        ["2CBE", "2CBE"],
        ["2CC0", "2CC0"],
        ["2CC2", "2CC2"],
        ["2CC4", "2CC4"],
        ["2CC6", "2CC6"],
        ["2CC8", "2CC8"],
        ["2CCA", "2CCA"],
        ["2CCC", "2CCC"],
        ["2CCE", "2CCE"],
        ["2CD0", "2CD0"],
        ["2CD2", "2CD2"],
        ["2CD4", "2CD4"],
        ["2CD6", "2CD6"],
        ["2CD8", "2CD8"],
        ["2CDA", "2CDA"],
        ["2CDC", "2CDC"],
        ["2CDE", "2CDE"],
        ["2CE0", "2CE0"],
        ["2CE2", "2CE2"],
        ["2CEB", "2CEB"],
        ["2CED", "2CED"],
        ["2CF2", "2CF2"],
        ["A640", "A640"],
        ["A642", "A642"],
        ["A644", "A644"],
        ["A646", "A646"],
        ["A648", "A648"],
        ["A64A", "A64A"],
        ["A64C", "A64C"],
        ["A64E", "A64E"],
        ["A650", "A650"],
        ["A652", "A652"],
        ["A654", "A654"],
        ["A656", "A656"],
        ["A658", "A658"],
        ["A65A", "A65A"],
        ["A65C", "A65C"],
        ["A65E", "A65E"],
        ["A660", "A660"],
        ["A662", "A662"],
        ["A664", "A664"],
        ["A666", "A666"],
        ["A668", "A668"],
        ["A66A", "A66A"],
        ["A66C", "A66C"],
        ["A680", "A680"],
        ["A682", "A682"],
        ["A684", "A684"],
        ["A686", "A686"],
        ["A688", "A688"],
        ["A68A", "A68A"],
        ["A68C", "A68C"],
        ["A68E", "A68E"],
        ["A690", "A690"],
        ["A692", "A692"],
        ["A694", "A694"],
        ["A696", "A696"],
        ["A722", "A722"],
        ["A724", "A724"],
        ["A726", "A726"],
        ["A728", "A728"],
        ["A72A", "A72A"],
        ["A72C", "A72C"],
        ["A72E", "A72E"],
        ["A732", "A732"],
        ["A734", "A734"],
        ["A736", "A736"],
        ["A738", "A738"],
        ["A73A", "A73A"],
        ["A73C", "A73C"],
        ["A73E", "A73E"],
        ["A740", "A740"],
        ["A742", "A742"],
        ["A744", "A744"],
        ["A746", "A746"],
        ["A748", "A748"],
        ["A74A", "A74A"],
        ["A74C", "A74C"],
        ["A74E", "A74E"],
        ["A750", "A750"],
        ["A752", "A752"],
        ["A754", "A754"],
        ["A756", "A756"],
        ["A758", "A758"],
        ["A75A", "A75A"],
        ["A75C", "A75C"],
        ["A75E", "A75E"],
        ["A760", "A760"],
        ["A762", "A762"],
        ["A764", "A764"],
        ["A766", "A766"],
        ["A768", "A768"],
        ["A76A", "A76A"],
        ["A76C", "A76C"],
        ["A76E", "A76E"],
        ["A779", "A779"],
        ["A77B", "A77B"],
        ["A77D", "A77E"],
        ["A780", "A780"],
        ["A782", "A782"],
        ["A784", "A784"],
        ["A786", "A786"],
        ["A78B", "A78B"],
        ["A78D", "A78D"],
        ["A790", "A790"],
        ["A792", "A792"],
        ["A7A0", "A7A0"],
        ["A7A2", "A7A2"],
        ["A7A4", "A7A4"],
        ["A7A6", "A7A6"],
        ["A7A8", "A7A8"],
        ["A7AA", "A7AA"],
        ["FF21", "FF3A"],
        ["10400", "10427"],
        ["1D400", "1D419"],
        ["1D434", "1D44D"],
        ["1D468", "1D481"],
        ["1D49C", "1D49C"],
        ["1D49E", "1D49F"],
        ["1D4A2", "1D4A2"],
        ["1D4A5", "1D4A6"],
        ["1D4A9", "1D4AC"],
        ["1D4AE", "1D4B5"],
        ["1D4D0", "1D4E9"],
        ["1D504", "1D505"],
        ["1D507", "1D50A"],
        ["1D50D", "1D514"],
        ["1D516", "1D51C"],
        ["1D538", "1D539"],
        ["1D53B", "1D53E"],
        ["1D540", "1D544"],
        ["1D546", "1D546"],
        ["1D54A", "1D550"],
        ["1D56C", "1D585"],
        ["1D5A0", "1D5B9"],
        ["1D5D4", "1D5ED"],
        ["1D608", "1D621"],
        ["1D63C", "1D655"],
        ["1D670", "1D689"],
        ["1D6A8", "1D6C0"],
        ["1D6E2", "1D6FA"],
        ["1D71C", "1D734"],
        ["1D756", "1D76E"],
        ["1D790", "1D7A8"],
        ["1D7CA", "1D7CA"],
      ],
      M: "Mc|Me|Mn",
      Mc: [
        ["903", "903"],
        ["93B", "93B"],
        ["93E", "940"],
        ["949", "94C"],
        ["94E", "94F"],
        ["982", "983"],
        ["9BE", "9C0"],
        ["9C7", "9C8"],
        ["9CB", "9CC"],
        ["9D7", "9D7"],
        ["A03", "A03"],
        ["A3E", "A40"],
        ["A83", "A83"],
        ["ABE", "AC0"],
        ["AC9", "AC9"],
        ["ACB", "ACC"],
        ["B02", "B03"],
        ["B3E", "B3E"],
        ["B40", "B40"],
        ["B47", "B48"],
        ["B4B", "B4C"],
        ["B57", "B57"],
        ["BBE", "BBF"],
        ["BC1", "BC2"],
        ["BC6", "BC8"],
        ["BCA", "BCC"],
        ["BD7", "BD7"],
        ["C01", "C03"],
        ["C41", "C44"],
        ["C82", "C83"],
        ["CBE", "CBE"],
        ["CC0", "CC4"],
        ["CC7", "CC8"],
        ["CCA", "CCB"],
        ["CD5", "CD6"],
        ["D02", "D03"],
        ["D3E", "D40"],
        ["D46", "D48"],
        ["D4A", "D4C"],
        ["D57", "D57"],
        ["D82", "D83"],
        ["DCF", "DD1"],
        ["DD8", "DDF"],
        ["DF2", "DF3"],
        ["F3E", "F3F"],
        ["F7F", "F7F"],
        ["102B", "102C"],
        ["1031", "1031"],
        ["1038", "1038"],
        ["103B", "103C"],
        ["1056", "1057"],
        ["1062", "1064"],
        ["1067", "106D"],
        ["1083", "1084"],
        ["1087", "108C"],
        ["108F", "108F"],
        ["109A", "109C"],
        ["17B6", "17B6"],
        ["17BE", "17C5"],
        ["17C7", "17C8"],
        ["1923", "1926"],
        ["1929", "192B"],
        ["1930", "1931"],
        ["1933", "1938"],
        ["19B0", "19C0"],
        ["19C8", "19C9"],
        ["1A19", "1A1B"],
        ["1A55", "1A55"],
        ["1A57", "1A57"],
        ["1A61", "1A61"],
        ["1A63", "1A64"],
        ["1A6D", "1A72"],
        ["1B04", "1B04"],
        ["1B35", "1B35"],
        ["1B3B", "1B3B"],
        ["1B3D", "1B41"],
        ["1B43", "1B44"],
        ["1B82", "1B82"],
        ["1BA1", "1BA1"],
        ["1BA6", "1BA7"],
        ["1BAA", "1BAA"],
        ["1BAC", "1BAD"],
        ["1BE7", "1BE7"],
        ["1BEA", "1BEC"],
        ["1BEE", "1BEE"],
        ["1BF2", "1BF3"],
        ["1C24", "1C2B"],
        ["1C34", "1C35"],
        ["1CE1", "1CE1"],
        ["1CF2", "1CF3"],
        ["302E", "302F"],
        ["A823", "A824"],
        ["A827", "A827"],
        ["A880", "A881"],
        ["A8B4", "A8C3"],
        ["A952", "A953"],
        ["A983", "A983"],
        ["A9B4", "A9B5"],
        ["A9BA", "A9BB"],
        ["A9BD", "A9C0"],
        ["AA2F", "AA30"],
        ["AA33", "AA34"],
        ["AA4D", "AA4D"],
        ["AA7B", "AA7B"],
        ["AAEB", "AAEB"],
        ["AAEE", "AAEF"],
        ["AAF5", "AAF5"],
        ["ABE3", "ABE4"],
        ["ABE6", "ABE7"],
        ["ABE9", "ABEA"],
        ["ABEC", "ABEC"],
        ["11000", "11000"],
        ["11002", "11002"],
        ["11082", "11082"],
        ["110B0", "110B2"],
        ["110B7", "110B8"],
        ["1112C", "1112C"],
        ["11182", "11182"],
        ["111B3", "111B5"],
        ["111BF", "111C0"],
        ["116AC", "116AC"],
        ["116AE", "116AF"],
        ["116B6", "116B6"],
        ["16F51", "16F7E"],
        ["1D165", "1D166"],
        ["1D16D", "1D172"],
      ],
      Me: [
        ["488", "489"],
        ["20DD", "20E0"],
        ["20E2", "20E4"],
        ["A670", "A672"],
      ],
      Mn: [
        ["300", "36F"],
        ["483", "487"],
        ["591", "5BD"],
        ["5BF", "5BF"],
        ["5C1", "5C2"],
        ["5C4", "5C5"],
        ["5C7", "5C7"],
        ["610", "61A"],
        ["64B", "65F"],
        ["670", "670"],
        ["6D6", "6DC"],
        ["6DF", "6E4"],
        ["6E7", "6E8"],
        ["6EA", "6ED"],
        ["711", "711"],
        ["730", "74A"],
        ["7A6", "7B0"],
        ["7EB", "7F3"],
        ["816", "819"],
        ["81B", "823"],
        ["825", "827"],
        ["829", "82D"],
        ["859", "85B"],
        ["8E4", "8FE"],
        ["900", "902"],
        ["93A", "93A"],
        ["93C", "93C"],
        ["941", "948"],
        ["94D", "94D"],
        ["951", "957"],
        ["962", "963"],
        ["981", "981"],
        ["9BC", "9BC"],
        ["9C1", "9C4"],
        ["9CD", "9CD"],
        ["9E2", "9E3"],
        ["A01", "A02"],
        ["A3C", "A3C"],
        ["A41", "A42"],
        ["A47", "A48"],
        ["A4B", "A4D"],
        ["A51", "A51"],
        ["A70", "A71"],
        ["A75", "A75"],
        ["A81", "A82"],
        ["ABC", "ABC"],
        ["AC1", "AC5"],
        ["AC7", "AC8"],
        ["ACD", "ACD"],
        ["AE2", "AE3"],
        ["B01", "B01"],
        ["B3C", "B3C"],
        ["B3F", "B3F"],
        ["B41", "B44"],
        ["B4D", "B4D"],
        ["B56", "B56"],
        ["B62", "B63"],
        ["B82", "B82"],
        ["BC0", "BC0"],
        ["BCD", "BCD"],
        ["C3E", "C40"],
        ["C46", "C48"],
        ["C4A", "C4D"],
        ["C55", "C56"],
        ["C62", "C63"],
        ["CBC", "CBC"],
        ["CBF", "CBF"],
        ["CC6", "CC6"],
        ["CCC", "CCD"],
        ["CE2", "CE3"],
        ["D41", "D44"],
        ["D4D", "D4D"],
        ["D62", "D63"],
        ["DCA", "DCA"],
        ["DD2", "DD4"],
        ["DD6", "DD6"],
        ["E31", "E31"],
        ["E34", "E3A"],
        ["E47", "E4E"],
        ["EB1", "EB1"],
        ["EB4", "EB9"],
        ["EBB", "EBC"],
        ["EC8", "ECD"],
        ["F18", "F19"],
        ["F35", "F35"],
        ["F37", "F37"],
        ["F39", "F39"],
        ["F71", "F7E"],
        ["F80", "F84"],
        ["F86", "F87"],
        ["F8D", "F97"],
        ["F99", "FBC"],
        ["FC6", "FC6"],
        ["102D", "1030"],
        ["1032", "1037"],
        ["1039", "103A"],
        ["103D", "103E"],
        ["1058", "1059"],
        ["105E", "1060"],
        ["1071", "1074"],
        ["1082", "1082"],
        ["1085", "1086"],
        ["108D", "108D"],
        ["109D", "109D"],
        ["135D", "135F"],
        ["1712", "1714"],
        ["1732", "1734"],
        ["1752", "1753"],
        ["1772", "1773"],
        ["17B4", "17B5"],
        ["17B7", "17BD"],
        ["17C6", "17C6"],
        ["17C9", "17D3"],
        ["17DD", "17DD"],
        ["180B", "180D"],
        ["18A9", "18A9"],
        ["1920", "1922"],
        ["1927", "1928"],
        ["1932", "1932"],
        ["1939", "193B"],
        ["1A17", "1A18"],
        ["1A56", "1A56"],
        ["1A58", "1A5E"],
        ["1A60", "1A60"],
        ["1A62", "1A62"],
        ["1A65", "1A6C"],
        ["1A73", "1A7C"],
        ["1A7F", "1A7F"],
        ["1B00", "1B03"],
        ["1B34", "1B34"],
        ["1B36", "1B3A"],
        ["1B3C", "1B3C"],
        ["1B42", "1B42"],
        ["1B6B", "1B73"],
        ["1B80", "1B81"],
        ["1BA2", "1BA5"],
        ["1BA8", "1BA9"],
        ["1BAB", "1BAB"],
        ["1BE6", "1BE6"],
        ["1BE8", "1BE9"],
        ["1BED", "1BED"],
        ["1BEF", "1BF1"],
        ["1C2C", "1C33"],
        ["1C36", "1C37"],
        ["1CD0", "1CD2"],
        ["1CD4", "1CE0"],
        ["1CE2", "1CE8"],
        ["1CED", "1CED"],
        ["1CF4", "1CF4"],
        ["1DC0", "1DE6"],
        ["1DFC", "1DFF"],
        ["20D0", "20DC"],
        ["20E1", "20E1"],
        ["20E5", "20F0"],
        ["2CEF", "2CF1"],
        ["2D7F", "2D7F"],
        ["2DE0", "2DFF"],
        ["302A", "302D"],
        ["3099", "309A"],
        ["A66F", "A66F"],
        ["A674", "A67D"],
        ["A69F", "A69F"],
        ["A6F0", "A6F1"],
        ["A802", "A802"],
        ["A806", "A806"],
        ["A80B", "A80B"],
        ["A825", "A826"],
        ["A8C4", "A8C4"],
        ["A8E0", "A8F1"],
        ["A926", "A92D"],
        ["A947", "A951"],
        ["A980", "A982"],
        ["A9B3", "A9B3"],
        ["A9B6", "A9B9"],
        ["A9BC", "A9BC"],
        ["AA29", "AA2E"],
        ["AA31", "AA32"],
        ["AA35", "AA36"],
        ["AA43", "AA43"],
        ["AA4C", "AA4C"],
        ["AAB0", "AAB0"],
        ["AAB2", "AAB4"],
        ["AAB7", "AAB8"],
        ["AABE", "AABF"],
        ["AAC1", "AAC1"],
        ["AAEC", "AAED"],
        ["AAF6", "AAF6"],
        ["ABE5", "ABE5"],
        ["ABE8", "ABE8"],
        ["ABED", "ABED"],
        ["FB1E", "FB1E"],
        ["FE00", "FE0F"],
        ["FE20", "FE26"],
        ["101FD", "101FD"],
        ["10A01", "10A03"],
        ["10A05", "10A06"],
        ["10A0C", "10A0F"],
        ["10A38", "10A3A"],
        ["10A3F", "10A3F"],
        ["11001", "11001"],
        ["11038", "11046"],
        ["11080", "11081"],
        ["110B3", "110B6"],
        ["110B9", "110BA"],
        ["11100", "11102"],
        ["11127", "1112B"],
        ["1112D", "11134"],
        ["11180", "11181"],
        ["111B6", "111BE"],
        ["116AB", "116AB"],
        ["116AD", "116AD"],
        ["116B0", "116B5"],
        ["116B7", "116B7"],
        ["16F8F", "16F92"],
        ["1D167", "1D169"],
        ["1D17B", "1D182"],
        ["1D185", "1D18B"],
        ["1D1AA", "1D1AD"],
        ["1D242", "1D244"],
        ["E0100", "E01EF"],
      ],
      N: "Nd|Nl|No",
      Nd: [
        ["30", "39"],
        ["660", "669"],
        ["6F0", "6F9"],
        ["7C0", "7C9"],
        ["966", "96F"],
        ["9E6", "9EF"],
        ["A66", "A6F"],
        ["AE6", "AEF"],
        ["B66", "B6F"],
        ["BE6", "BEF"],
        ["C66", "C6F"],
        ["CE6", "CEF"],
        ["D66", "D6F"],
        ["E50", "E59"],
        ["ED0", "ED9"],
        ["F20", "F29"],
        ["1040", "1049"],
        ["1090", "1099"],
        ["17E0", "17E9"],
        ["1810", "1819"],
        ["1946", "194F"],
        ["19D0", "19D9"],
        ["1A80", "1A89"],
        ["1A90", "1A99"],
        ["1B50", "1B59"],
        ["1BB0", "1BB9"],
        ["1C40", "1C49"],
        ["1C50", "1C59"],
        ["A620", "A629"],
        ["A8D0", "A8D9"],
        ["A900", "A909"],
        ["A9D0", "A9D9"],
        ["AA50", "AA59"],
        ["ABF0", "ABF9"],
        ["FF10", "FF19"],
        ["104A0", "104A9"],
        ["11066", "1106F"],
        ["110F0", "110F9"],
        ["11136", "1113F"],
        ["111D0", "111D9"],
        ["116C0", "116C9"],
        ["1D7CE", "1D7FF"],
      ],
      Nl: [
        ["16EE", "16F0"],
        ["2160", "2182"],
        ["2185", "2188"],
        ["3007", "3007"],
        ["3021", "3029"],
        ["3038", "303A"],
        ["A6E6", "A6EF"],
        ["10140", "10174"],
        ["10341", "10341"],
        ["1034A", "1034A"],
        ["103D1", "103D5"],
        ["12400", "12462"],
      ],
      No: [
        ["B2", "B3"],
        ["B9", "B9"],
        ["BC", "BE"],
        ["9F4", "9F9"],
        ["B72", "B77"],
        ["BF0", "BF2"],
        ["C78", "C7E"],
        ["D70", "D75"],
        ["F2A", "F33"],
        ["1369", "137C"],
        ["17F0", "17F9"],
        ["19DA", "19DA"],
        ["2070", "2070"],
        ["2074", "2079"],
        ["2080", "2089"],
        ["2150", "215F"],
        ["2189", "2189"],
        ["2460", "249B"],
        ["24EA", "24FF"],
        ["2776", "2793"],
        ["2CFD", "2CFD"],
        ["3192", "3195"],
        ["3220", "3229"],
        ["3248", "324F"],
        ["3251", "325F"],
        ["3280", "3289"],
        ["32B1", "32BF"],
        ["A830", "A835"],
        ["10107", "10133"],
        ["10175", "10178"],
        ["1018A", "1018A"],
        ["10320", "10323"],
        ["10858", "1085F"],
        ["10916", "1091B"],
        ["10A40", "10A47"],
        ["10A7D", "10A7E"],
        ["10B58", "10B5F"],
        ["10B78", "10B7F"],
        ["10E60", "10E7E"],
        ["11052", "11065"],
        ["1D360", "1D371"],
        ["1F100", "1F10A"],
      ],
      P: "Pc|Pd|Pe|Pf|Pi|Po|Ps",
      Pc: [
        ["5F", "5F"],
        ["203F", "2040"],
        ["2054", "2054"],
        ["FE33", "FE34"],
        ["FE4D", "FE4F"],
        ["FF3F", "FF3F"],
      ],
      Pd: [
        ["2D", "2D"],
        ["58A", "58A"],
        ["5BE", "5BE"],
        ["1400", "1400"],
        ["1806", "1806"],
        ["2010", "2015"],
        ["2E17", "2E17"],
        ["2E1A", "2E1A"],
        ["2E3A", "2E3B"],
        ["301C", "301C"],
        ["3030", "3030"],
        ["30A0", "30A0"],
        ["FE31", "FE32"],
        ["FE58", "FE58"],
        ["FE63", "FE63"],
        ["FF0D", "FF0D"],
      ],
      Pe: [
        ["29", "29"],
        ["5D", "5D"],
        ["7D", "7D"],
        ["F3B", "F3B"],
        ["F3D", "F3D"],
        ["169C", "169C"],
        ["2046", "2046"],
        ["207E", "207E"],
        ["208E", "208E"],
        ["232A", "232A"],
        ["2769", "2769"],
        ["276B", "276B"],
        ["276D", "276D"],
        ["276F", "276F"],
        ["2771", "2771"],
        ["2773", "2773"],
        ["2775", "2775"],
        ["27C6", "27C6"],
        ["27E7", "27E7"],
        ["27E9", "27E9"],
        ["27EB", "27EB"],
        ["27ED", "27ED"],
        ["27EF", "27EF"],
        ["2984", "2984"],
        ["2986", "2986"],
        ["2988", "2988"],
        ["298A", "298A"],
        ["298C", "298C"],
        ["298E", "298E"],
        ["2990", "2990"],
        ["2992", "2992"],
        ["2994", "2994"],
        ["2996", "2996"],
        ["2998", "2998"],
        ["29D9", "29D9"],
        ["29DB", "29DB"],
        ["29FD", "29FD"],
        ["2E23", "2E23"],
        ["2E25", "2E25"],
        ["2E27", "2E27"],
        ["2E29", "2E29"],
        ["3009", "3009"],
        ["300B", "300B"],
        ["300D", "300D"],
        ["300F", "300F"],
        ["3011", "3011"],
        ["3015", "3015"],
        ["3017", "3017"],
        ["3019", "3019"],
        ["301B", "301B"],
        ["301E", "301F"],
        ["FD3F", "FD3F"],
        ["FE18", "FE18"],
        ["FE36", "FE36"],
        ["FE38", "FE38"],
        ["FE3A", "FE3A"],
        ["FE3C", "FE3C"],
        ["FE3E", "FE3E"],
        ["FE40", "FE40"],
        ["FE42", "FE42"],
        ["FE44", "FE44"],
        ["FE48", "FE48"],
        ["FE5A", "FE5A"],
        ["FE5C", "FE5C"],
        ["FE5E", "FE5E"],
        ["FF09", "FF09"],
        ["FF3D", "FF3D"],
        ["FF5D", "FF5D"],
        ["FF60", "FF60"],
        ["FF63", "FF63"],
      ],
      Pf: [
        ["BB", "BB"],
        ["2019", "2019"],
        ["201D", "201D"],
        ["203A", "203A"],
        ["2E03", "2E03"],
        ["2E05", "2E05"],
        ["2E0A", "2E0A"],
        ["2E0D", "2E0D"],
        ["2E1D", "2E1D"],
        ["2E21", "2E21"],
      ],
      Pi: [
        ["AB", "AB"],
        ["2018", "2018"],
        ["201B", "201C"],
        ["201F", "201F"],
        ["2039", "2039"],
        ["2E02", "2E02"],
        ["2E04", "2E04"],
        ["2E09", "2E09"],
        ["2E0C", "2E0C"],
        ["2E1C", "2E1C"],
        ["2E20", "2E20"],
      ],
      Po: [
        ["21", "23"],
        ["25", "27"],
        ["2A", "2A"],
        ["2C", "2C"],
        ["2E", "2F"],
        ["3A", "3B"],
        ["3F", "40"],
        ["5C", "5C"],
        ["A1", "A1"],
        ["A7", "A7"],
        ["B6", "B7"],
        ["BF", "BF"],
        ["37E", "37E"],
        ["387", "387"],
        ["55A", "55F"],
        ["589", "589"],
        ["5C0", "5C0"],
        ["5C3", "5C3"],
        ["5C6", "5C6"],
        ["5F3", "5F4"],
        ["609", "60A"],
        ["60C", "60D"],
        ["61B", "61B"],
        ["61E", "61F"],
        ["66A", "66D"],
        ["6D4", "6D4"],
        ["700", "70D"],
        ["7F7", "7F9"],
        ["830", "83E"],
        ["85E", "85E"],
        ["964", "965"],
        ["970", "970"],
        ["AF0", "AF0"],
        ["DF4", "DF4"],
        ["E4F", "E4F"],
        ["E5A", "E5B"],
        ["F04", "F12"],
        ["F14", "F14"],
        ["F85", "F85"],
        ["FD0", "FD4"],
        ["FD9", "FDA"],
        ["104A", "104F"],
        ["10FB", "10FB"],
        ["1360", "1368"],
        ["166D", "166E"],
        ["16EB", "16ED"],
        ["1735", "1736"],
        ["17D4", "17D6"],
        ["17D8", "17DA"],
        ["1800", "1805"],
        ["1807", "180A"],
        ["1944", "1945"],
        ["1A1E", "1A1F"],
        ["1AA0", "1AA6"],
        ["1AA8", "1AAD"],
        ["1B5A", "1B60"],
        ["1BFC", "1BFF"],
        ["1C3B", "1C3F"],
        ["1C7E", "1C7F"],
        ["1CC0", "1CC7"],
        ["1CD3", "1CD3"],
        ["2016", "2017"],
        ["2020", "2027"],
        ["2030", "2038"],
        ["203B", "203E"],
        ["2041", "2043"],
        ["2047", "2051"],
        ["2053", "2053"],
        ["2055", "205E"],
        ["2CF9", "2CFC"],
        ["2CFE", "2CFF"],
        ["2D70", "2D70"],
        ["2E00", "2E01"],
        ["2E06", "2E08"],
        ["2E0B", "2E0B"],
        ["2E0E", "2E16"],
        ["2E18", "2E19"],
        ["2E1B", "2E1B"],
        ["2E1E", "2E1F"],
        ["2E2A", "2E2E"],
        ["2E30", "2E39"],
        ["3001", "3003"],
        ["303D", "303D"],
        ["30FB", "30FB"],
        ["A4FE", "A4FF"],
        ["A60D", "A60F"],
        ["A673", "A673"],
        ["A67E", "A67E"],
        ["A6F2", "A6F7"],
        ["A874", "A877"],
        ["A8CE", "A8CF"],
        ["A8F8", "A8FA"],
        ["A92E", "A92F"],
        ["A95F", "A95F"],
        ["A9C1", "A9CD"],
        ["A9DE", "A9DF"],
        ["AA5C", "AA5F"],
        ["AADE", "AADF"],
        ["AAF0", "AAF1"],
        ["ABEB", "ABEB"],
        ["FE10", "FE16"],
        ["FE19", "FE19"],
        ["FE30", "FE30"],
        ["FE45", "FE46"],
        ["FE49", "FE4C"],
        ["FE50", "FE52"],
        ["FE54", "FE57"],
        ["FE5F", "FE61"],
        ["FE68", "FE68"],
        ["FE6A", "FE6B"],
        ["FF01", "FF03"],
        ["FF05", "FF07"],
        ["FF0A", "FF0A"],
        ["FF0C", "FF0C"],
        ["FF0E", "FF0F"],
        ["FF1A", "FF1B"],
        ["FF1F", "FF20"],
        ["FF3C", "FF3C"],
        ["FF61", "FF61"],
        ["FF64", "FF65"],
        ["10100", "10102"],
        ["1039F", "1039F"],
        ["103D0", "103D0"],
        ["10857", "10857"],
        ["1091F", "1091F"],
        ["1093F", "1093F"],
        ["10A50", "10A58"],
        ["10A7F", "10A7F"],
        ["10B39", "10B3F"],
        ["11047", "1104D"],
        ["110BB", "110BC"],
        ["110BE", "110C1"],
        ["11140", "11143"],
        ["111C5", "111C8"],
        ["12470", "12473"],
      ],
      Ps: [
        ["28", "28"],
        ["5B", "5B"],
        ["7B", "7B"],
        ["F3A", "F3A"],
        ["F3C", "F3C"],
        ["169B", "169B"],
        ["201A", "201A"],
        ["201E", "201E"],
        ["2045", "2045"],
        ["207D", "207D"],
        ["208D", "208D"],
        ["2329", "2329"],
        ["2768", "2768"],
        ["276A", "276A"],
        ["276C", "276C"],
        ["276E", "276E"],
        ["2770", "2770"],
        ["2772", "2772"],
        ["2774", "2774"],
        ["27C5", "27C5"],
        ["27E6", "27E6"],
        ["27E8", "27E8"],
        ["27EA", "27EA"],
        ["27EC", "27EC"],
        ["27EE", "27EE"],
        ["2983", "2983"],
        ["2985", "2985"],
        ["2987", "2987"],
        ["2989", "2989"],
        ["298B", "298B"],
        ["298D", "298D"],
        ["298F", "298F"],
        ["2991", "2991"],
        ["2993", "2993"],
        ["2995", "2995"],
        ["2997", "2997"],
        ["29D8", "29D8"],
        ["29DA", "29DA"],
        ["29FC", "29FC"],
        ["2E22", "2E22"],
        ["2E24", "2E24"],
        ["2E26", "2E26"],
        ["2E28", "2E28"],
        ["3008", "3008"],
        ["300A", "300A"],
        ["300C", "300C"],
        ["300E", "300E"],
        ["3010", "3010"],
        ["3014", "3014"],
        ["3016", "3016"],
        ["3018", "3018"],
        ["301A", "301A"],
        ["301D", "301D"],
        ["FD3E", "FD3E"],
        ["FE17", "FE17"],
        ["FE35", "FE35"],
        ["FE37", "FE37"],
        ["FE39", "FE39"],
        ["FE3B", "FE3B"],
        ["FE3D", "FE3D"],
        ["FE3F", "FE3F"],
        ["FE41", "FE41"],
        ["FE43", "FE43"],
        ["FE47", "FE47"],
        ["FE59", "FE59"],
        ["FE5B", "FE5B"],
        ["FE5D", "FE5D"],
        ["FF08", "FF08"],
        ["FF3B", "FF3B"],
        ["FF5B", "FF5B"],
        ["FF5F", "FF5F"],
        ["FF62", "FF62"],
      ],
      S: "Sc|Sk|Sm|So",
      Sc: [
        ["24", "24"],
        ["A2", "A5"],
        ["58F", "58F"],
        ["60B", "60B"],
        ["9F2", "9F3"],
        ["9FB", "9FB"],
        ["AF1", "AF1"],
        ["BF9", "BF9"],
        ["E3F", "E3F"],
        ["17DB", "17DB"],
        ["20A0", "20BA"],
        ["A838", "A838"],
        ["FDFC", "FDFC"],
        ["FE69", "FE69"],
        ["FF04", "FF04"],
        ["FFE0", "FFE1"],
        ["FFE5", "FFE6"],
      ],
      Sk: [
        ["5E", "5E"],
        ["60", "60"],
        ["A8", "A8"],
        ["AF", "AF"],
        ["B4", "B4"],
        ["B8", "B8"],
        ["2C2", "2C5"],
        ["2D2", "2DF"],
        ["2E5", "2EB"],
        ["2ED", "2ED"],
        ["2EF", "2FF"],
        ["375", "375"],
        ["384", "385"],
        ["1FBD", "1FBD"],
        ["1FBF", "1FC1"],
        ["1FCD", "1FCF"],
        ["1FDD", "1FDF"],
        ["1FED", "1FEF"],
        ["1FFD", "1FFE"],
        ["309B", "309C"],
        ["A700", "A716"],
        ["A720", "A721"],
        ["A789", "A78A"],
        ["FBB2", "FBC1"],
        ["FF3E", "FF3E"],
        ["FF40", "FF40"],
        ["FFE3", "FFE3"],
      ],
      Sm: [
        ["2B", "2B"],
        ["3C", "3E"],
        ["7C", "7C"],
        ["7E", "7E"],
        ["AC", "AC"],
        ["B1", "B1"],
        ["D7", "D7"],
        ["F7", "F7"],
        ["3F6", "3F6"],
        ["606", "608"],
        ["2044", "2044"],
        ["2052", "2052"],
        ["207A", "207C"],
        ["208A", "208C"],
        ["2118", "2118"],
        ["2140", "2144"],
        ["214B", "214B"],
        ["2190", "2194"],
        ["219A", "219B"],
        ["21A0", "21A0"],
        ["21A3", "21A3"],
        ["21A6", "21A6"],
        ["21AE", "21AE"],
        ["21CE", "21CF"],
        ["21D2", "21D2"],
        ["21D4", "21D4"],
        ["21F4", "22FF"],
        ["2308", "230B"],
        ["2320", "2321"],
        ["237C", "237C"],
        ["239B", "23B3"],
        ["23DC", "23E1"],
        ["25B7", "25B7"],
        ["25C1", "25C1"],
        ["25F8", "25FF"],
        ["266F", "266F"],
        ["27C0", "27C4"],
        ["27C7", "27E5"],
        ["27F0", "27FF"],
        ["2900", "2982"],
        ["2999", "29D7"],
        ["29DC", "29FB"],
        ["29FE", "2AFF"],
        ["2B30", "2B44"],
        ["2B47", "2B4C"],
        ["FB29", "FB29"],
        ["FE62", "FE62"],
        ["FE64", "FE66"],
        ["FF0B", "FF0B"],
        ["FF1C", "FF1E"],
        ["FF5C", "FF5C"],
        ["FF5E", "FF5E"],
        ["FFE2", "FFE2"],
        ["FFE9", "FFEC"],
        ["1D6C1", "1D6C1"],
        ["1D6DB", "1D6DB"],
        ["1D6FB", "1D6FB"],
        ["1D715", "1D715"],
        ["1D735", "1D735"],
        ["1D74F", "1D74F"],
        ["1D76F", "1D76F"],
        ["1D789", "1D789"],
        ["1D7A9", "1D7A9"],
        ["1D7C3", "1D7C3"],
        ["1EEF0", "1EEF1"],
      ],
      So: [
        ["A6", "A6"],
        ["A9", "A9"],
        ["AE", "AE"],
        ["B0", "B0"],
        ["482", "482"],
        ["60E", "60F"],
        ["6DE", "6DE"],
        ["6E9", "6E9"],
        ["6FD", "6FE"],
        ["7F6", "7F6"],
        ["9FA", "9FA"],
        ["B70", "B70"],
        ["BF3", "BF8"],
        ["BFA", "BFA"],
        ["C7F", "C7F"],
        ["D79", "D79"],
        ["F01", "F03"],
        ["F13", "F13"],
        ["F15", "F17"],
        ["F1A", "F1F"],
        ["F34", "F34"],
        ["F36", "F36"],
        ["F38", "F38"],
        ["FBE", "FC5"],
        ["FC7", "FCC"],
        ["FCE", "FCF"],
        ["FD5", "FD8"],
        ["109E", "109F"],
        ["1390", "1399"],
        ["1940", "1940"],
        ["19DE", "19FF"],
        ["1B61", "1B6A"],
        ["1B74", "1B7C"],
        ["2100", "2101"],
        ["2103", "2106"],
        ["2108", "2109"],
        ["2114", "2114"],
        ["2116", "2117"],
        ["211E", "2123"],
        ["2125", "2125"],
        ["2127", "2127"],
        ["2129", "2129"],
        ["212E", "212E"],
        ["213A", "213B"],
        ["214A", "214A"],
        ["214C", "214D"],
        ["214F", "214F"],
        ["2195", "2199"],
        ["219C", "219F"],
        ["21A1", "21A2"],
        ["21A4", "21A5"],
        ["21A7", "21AD"],
        ["21AF", "21CD"],
        ["21D0", "21D1"],
        ["21D3", "21D3"],
        ["21D5", "21F3"],
        ["2300", "2307"],
        ["230C", "231F"],
        ["2322", "2328"],
        ["232B", "237B"],
        ["237D", "239A"],
        ["23B4", "23DB"],
        ["23E2", "23F3"],
        ["2400", "2426"],
        ["2440", "244A"],
        ["249C", "24E9"],
        ["2500", "25B6"],
        ["25B8", "25C0"],
        ["25C2", "25F7"],
        ["2600", "266E"],
        ["2670", "26FF"],
        ["2701", "2767"],
        ["2794", "27BF"],
        ["2800", "28FF"],
        ["2B00", "2B2F"],
        ["2B45", "2B46"],
        ["2B50", "2B59"],
        ["2CE5", "2CEA"],
        ["2E80", "2E99"],
        ["2E9B", "2EF3"],
        ["2F00", "2FD5"],
        ["2FF0", "2FFB"],
        ["3004", "3004"],
        ["3012", "3013"],
        ["3020", "3020"],
        ["3036", "3037"],
        ["303E", "303F"],
        ["3190", "3191"],
        ["3196", "319F"],
        ["31C0", "31E3"],
        ["3200", "321E"],
        ["322A", "3247"],
        ["3250", "3250"],
        ["3260", "327F"],
        ["328A", "32B0"],
        ["32C0", "32FE"],
        ["3300", "33FF"],
        ["4DC0", "4DFF"],
        ["A490", "A4C6"],
        ["A828", "A82B"],
        ["A836", "A837"],
        ["A839", "A839"],
        ["AA77", "AA79"],
        ["FDFD", "FDFD"],
        ["FFE4", "FFE4"],
        ["FFE8", "FFE8"],
        ["FFED", "FFEE"],
        ["FFFC", "FFFD"],
        ["10137", "1013F"],
        ["10179", "10189"],
        ["10190", "1019B"],
        ["101D0", "101FC"],
        ["1D000", "1D0F5"],
        ["1D100", "1D126"],
        ["1D129", "1D164"],
        ["1D16A", "1D16C"],
        ["1D183", "1D184"],
        ["1D18C", "1D1A9"],
        ["1D1AE", "1D1DD"],
        ["1D200", "1D241"],
        ["1D245", "1D245"],
        ["1D300", "1D356"],
        ["1F000", "1F02B"],
        ["1F030", "1F093"],
        ["1F0A0", "1F0AE"],
        ["1F0B1", "1F0BE"],
        ["1F0C1", "1F0CF"],
        ["1F0D1", "1F0DF"],
        ["1F110", "1F12E"],
        ["1F130", "1F16B"],
        ["1F170", "1F19A"],
        ["1F1E6", "1F202"],
        ["1F210", "1F23A"],
        ["1F240", "1F248"],
        ["1F250", "1F251"],
        ["1F300", "1F320"],
        ["1F330", "1F335"],
        ["1F337", "1F37C"],
        ["1F380", "1F393"],
        ["1F3A0", "1F3C4"],
        ["1F3C6", "1F3CA"],
        ["1F3E0", "1F3F0"],
        ["1F400", "1F43E"],
        ["1F440", "1F440"],
        ["1F442", "1F4F7"],
        ["1F4F9", "1F4FC"],
        ["1F500", "1F53D"],
        ["1F540", "1F543"],
        ["1F550", "1F567"],
        ["1F5FB", "1F640"],
        ["1F645", "1F64F"],
        ["1F680", "1F6C5"],
        ["1F700", "1F773"],
      ],
      Z: "Zl|Zp|Zs",
      Zl: [["2028", "2028"]],
      Zp: [["2029", "2029"]],
      Zs: [
        ["20", "20"],
        ["A0", "A0"],
        ["1680", "1680"],
        ["180E", "180E"],
        ["2000", "200A"],
        ["202F", "202F"],
        ["205F", "205F"],
        ["3000", "3000"],
      ],
      "~i": [
        ["3A", "3A"],
        ["41", "5A"],
        ["5F", "5F"],
        ["61", "7A"],
        ["C0", "D6"],
        ["D8", "F6"],
        ["F8", "2FF"],
        ["370", "37D"],
        ["37F", "1FFF"],
        ["200C", "200D"],
        ["2070", "218F"],
        ["2C00", "2FEF"],
        ["3001", "D7FF"],
        ["F900", "FDCF"],
        ["FDF0", "FFFD"],
        ["10000", "EFFFF"],
      ],
      "~c": [
        ["2D", "2E"],
        ["30", "3A"],
        ["41", "5A"],
        ["5F", "5F"],
        ["61", "7A"],
        ["B7", "B7"],
        ["C0", "D6"],
        ["D8", "F6"],
        ["F8", "37D"],
        ["37F", "1FFF"],
        ["200C", "200D"],
        ["203F", "2040"],
        ["2070", "218F"],
        ["2C00", "2FEF"],
        ["3001", "D7FF"],
        ["F900", "FDCF"],
        ["FDF0", "FFFD"],
        ["10000", "EFFFF"],
      ],
      w: "Ll|Lm|Lo|Lt|Lu|Mc|Me|Mn|Nd|Nl|No|Sc|Sk|Sm|So",
    },
    functions: {
      "http://www.w3.org/2005/xpath-functions": {
        QName: [2],
        abs: [1],
        "accumulator-after": [1],
        "accumulator-before": [1],
        "adjust-date-to-timezone": [1, 2],
        "adjust-dateTime-to-timezone": [1, 2],
        "adjust-time-to-timezone": [1, 2],
        "analyze-string": [2, 3],
        apply: [2],
        "available-environment-variables": [0],
        "available-system-properties": [0],
        avg: [1],
        "base-uri": [0, 1],
        boolean: [1],
        ceiling: [1],
        "codepoint-equal": [2],
        "codepoints-to-string": [1],
        "collation-key": [1, 2],
        collection: [0, 1],
        compare: [2, 3],
        concat: [3],
        contains: [2, 3],
        "contains-token": [2, 3],
        "copy-of": [0, 1],
        count: [1],
        current: [0],
        "current-date": [0],
        "current-dateTime": [0],
        "current-group": [0],
        "current-grouping-key": [0],
        "current-merge-group": [0, 1],
        "current-merge-key": [0],
        "current-output-uri": [0],
        "current-time": [0],
        data: [0, 1],
        dateTime: [2],
        "day-from-date": [1],
        "day-from-dateTime": [1],
        "days-from-duration": [1],
        "deep-equal": [2, 3],
        "default-collation": [0],
        "default-language": [0],
        "distinct-values": [1, 2],
        doc: [1],
        "doc-available": [1],
        document: [1, 2],
        "document-uri": [0, 1],
        "element-available": [1],
        "element-with-id": [1, 2],
        empty: [1],
        "encode-for-uri": [1],
        "ends-with": [2, 3],
        "environment-variable": [1],
        error: [0, 1, 2, 3],
        "escape-html-uri": [1],
        "exactly-one": [1],
        exists: [1],
        false: [0],
        filter: [2],
        floor: [1],
        "fold-left": [3],
        "fold-right": [3],
        "for-each": [2],
        "for-each-pair": [3],
        "format-date": [2, 5],
        "format-dateTime": [2, 5],
        "format-integer": [2, 3],
        "format-number": [2, 3],
        "format-time": [2, 5],
        "function-arity": [1],
        "function-available": [1, 2],
        "function-lookup": [2],
        "function-name": [1],
        "generate-id": [0, 1],
        "has-children": [0, 1],
        head: [1],
        "hours-from-dateTime": [1],
        "hours-from-duration": [1],
        "hours-from-time": [1],
        id: [1, 2],
        idref: [1, 2],
        "implicit-timezone": [0],
        "in-scope-prefixes": [1],
        "index-of": [2, 3],
        innermost: [1],
        "insert-before": [3],
        "iri-to-uri": [1],
        "json-doc": [1, 2],
        "json-to-xml": [1, 2],
        key: [2, 3],
        lang: [1, 2],
        last: [0],
        "load-xquery-module": [1, 2],
        "local-name": [0, 1],
        "local-name-from-QName": [1],
        "lower-case": [1],
        matches: [2, 3],
        max: [1, 2],
        min: [1, 2],
        "minutes-from-dateTime": [1],
        "minutes-from-duration": [1],
        "minutes-from-time": [1],
        "month-from-date": [1],
        "month-from-dateTime": [1],
        "months-from-duration": [1],
        name: [0, 1],
        "namespace-uri": [0, 1],
        "namespace-uri-for-prefix": [2],
        "namespace-uri-from-QName": [1],
        nilled: [0, 1],
        "node-name": [0, 1],
        "normalize-space": [0, 1],
        "normalize-unicode": [1, 2],
        not: [1],
        number: [0, 1],
        "one-or-more": [1],
        outermost: [1],
        "parse-ietf-date": [1],
        "parse-json": [1, 2],
        "parse-xml": [1],
        "parse-xml-fragment": [1],
        path: [0, 1],
        position: [0],
        "prefix-from-QName": [1],
        put: [2],
        "random-number-generator": [0, 1],
        "regex-group": [1],
        remove: [2],
        replace: [3, 4],
        "resolve-QName": [2],
        "resolve-uri": [1, 2],
        reverse: [1],
        root: [0, 1],
        round: [1, 2],
        "round-half-to-even": [1, 2],
        "seconds-from-dateTime": [1],
        "seconds-from-duration": [1],
        "seconds-from-time": [1],
        serialize: [1, 2],
        "serialize-json": [1, 2],
        snapshot: [0, 1],
        sort: [1, 3],
        "starts-with": [2, 3],
        "static-base-uri": [0],
        "stream-available": [1],
        string: [0, 1],
        "string-join": [1, 2],
        "string-length": [0, 1],
        "string-to-codepoints": [1],
        subsequence: [2, 3],
        substring: [2, 3],
        "substring-after": [2, 3],
        "substring-before": [2, 3],
        sum: [1, 2],
        "system-property": [1],
        tail: [1],
        "timezone-from-date": [1],
        "timezone-from-dateTime": [1],
        "timezone-from-time": [1],
        tokenize: [1, 2, 3],
        trace: [1, 2],
        transform: [1],
        translate: [3],
        true: [0],
        "type-available": [1],
        unordered: [1],
        "unparsed-entity-public-id": [1, 2],
        "unparsed-entity-uri": [1, 2],
        "unparsed-text": [1, 2],
        "unparsed-text-available": [1, 2],
        "unparsed-text-lines": [1, 2],
        "upper-case": [1],
        "uri-collection": [0, 1],
        "xml-to-json": [1, 2],
        "year-from-date": [1],
        "year-from-dateTime": [1],
        "years-from-duration": [1],
        "zero-or-one": [1],
      },
      "http://www.w3.org/2005/xpath-functions/array": {
        append: [2],
        filter: [2],
        flatten: [1],
        "fold-left": [3],
        "fold-right": [3],
        "for-each": [2],
        "for-each-pair": [3],
        get: [2],
        head: [1],
        "insert-before": [3],
        join: [1],
        remove: [2],
        reverse: [1],
        size: [1],
        sort: [1, 2],
        subarray: [2, 3],
        tail: [1],
      },
      "http://www.w3.org/2005/xpath-functions/map": {
        contains: [2],
        entry: [2],
        "for-each": [2],
        get: [2],
        keys: [1],
        merge: [1],
        put: [3],
        remove: [2],
        size: [1],
      },
      "http://www.w3.org/2005/xpath-functions/math": {
        acos: [1],
        asin: [1],
        atan: [1],
        atan2: [2],
        cos: [1],
        exp: [1],
        exp10: [1],
        log: [1],
        log10: [1],
        pi: [0],
        pow: [2],
        sin: [1],
        sqrt: [1],
        tan: [1],
      },
      "http://www.w3.org/2001/XMLSchema": {
        numeric: [1],
        string: [1],
        boolean: [1],
        duration: [1],
        dateTime: [1],
        date: [1],
        time: [1],
        gYearMonth: [1],
        gMonth: [1],
        gMonthDay: [1],
        gYear: [1],
        gDay: [1],
        hexBinary: [1],
        base64Binary: [1],
        anyURI: [1],
        QName: [1],
        untypedAtomic: [1],
        decimal: [1],
        float: [1],
        double: [1],
        integer: [1],
        nonPositiveInteger: [1],
        negativeInteger: [1],
        long: [1],
        int: [1],
        short: [1],
        byte: [1],
        nonNegativeInteger: [1],
        positiveInteger: [1],
        unsignedLong: [1],
        unsignedInt: [1],
        unsignedShort: [1],
        unsignedByte: [1],
        yearMonthDuration: [1],
        dayTimeDuration: [1],
        dateTimeStamp: [1],
        normalizedString: [1],
        token: [1],
        language: [1],
        Name: [1],
        NMTOKEN: [1],
        NCName: [1],
        ID: [1],
        IDREF: [1],
        ENTITY: [1],
        NMTOKENS: [1],
        ENTITIES: [1],
        IDREFS: [1],
        error: [1],
      },
      "http://saxonica.com/ns/interactiveXSLT": {
        apply: [2],
        call: [3],
        contains: [2],
        eval: [1],
        event: [0],
        get: [2],
        location: [0],
        page: [0],
        "query-params": [0],
        source: [0],
        style: [1],
        window: [0],
      },
    },
    elements: {
      accept: {},
      accumulator: {},
      "accumulator-rule": {},
      "analyze-string": {},
      "apply-imports": {},
      "apply-templates": {},
      assert: {},
      attribute: {},
      "attribute-set": {},
      break: {},
      "call-template": {},
      catch: {},
      "character-map": {},
      choose: {},
      comment: {},
      "context-item": {},
      copy: {},
      "copy-of": {},
      "decimal-format": {},
      document: {},
      element: {},
      evaluate: {},
      expose: {},
      fallback: {},
      "for-each": {},
      "for-each-group": {},
      fork: {},
      function: {},
      "global-context-item": {},
      if: {},
      import: {},
      include: {},
      iterate: {},
      key: {},
      map: {},
      "map-entry": {},
      "matching-substring": {},
      merge: {},
      "merge-action": {},
      "merge-key": {},
      "merge-source": {},
      message: {},
      mode: {},
      namespace: {},
      "namespace-alias": {},
      "next-iteration": {},
      "next-match": {},
      "non-matching-substring": {},
      number: {},
      "on-completion": {},
      "on-empty": {},
      "on-non-empty": {},
      otherwise: {},
      output: {},
      "output-character": {},
      override: {},
      package: {},
      param: {},
      "perform-sort": {},
      "preserve-space": {},
      "processing-instruction": {},
      "result-document": {},
      sequence: {},
      sort: {},
      "source-document": {},
      "strip-space": {},
      stylesheet: {},
      template: {},
      text: {},
      transform: {},
      try: {},
      "use-package": {},
      "value-of": {},
      variable: {},
      when: {},
      "where-populated": {},
      "with-param": {},
    },
    compiler: {},
  };
  var Da = (function () {
    var a;
    return {
      Ol: function () {
        return a;
      },
      Fp: function (b) {
        a = b;
      },
      pn: function (b, d, m, c) {
        return a.addMultipleDocs(b, d, m, c);
      },
      createDocument: function () {
        return a.createDocument();
      },
      Il: function () {
        return a.getDefaultDeliverMessage();
      },
      Af: function () {
        return a.inBrowser();
      },
      Fd: function (b) {
        return a.isHTMLElement(b);
      },
      Zq: function (b, d) {
        return a.makeBuffer(b, d);
      },
      Uo: function (b, d, m) {
        return a.makeHttpRequest(b, d, m);
      },
      parseXmlFromString: function (b, d) {
        return a.parseXmlFromString(b, d);
      },
      readFile: function (b, d) {
        return a.readFile(b, d);
      },
      Qi: function (b) {
        return a.resource(b);
      },
      lr: function (b) {
        return a.resourcePromise(b);
      },
      $c: function (b, d) {
        return a.resolveUri(b, d);
      },
      Gb: function (b) {
        return a.saxonPrint(b);
      },
      qr: function (b) {
        return a.setBaseUri(b);
      },
      newURL: function (b, d) {
        return a.newURL(b, d);
      },
      fileURL: function (b) {
        return a.fileURL(b);
      },
      ur: function () {
        return {
          version: "3.0",
          vendor: "Saxonica",
          "vendor-url": "http://www.saxonica.com/",
          "product-name": "Saxon-JS",
          "product-version": "2.0",
          "is-schema-aware": "no",
          "supports-serialization": "yes",
          "supports-backwards-compatibility": "yes",
          "supports-namespace-axis": "yes",
          "supports-streaming": "no",
          "supports-dynamic-evaluation": "yes",
          "supports-higher-order-functions": "yes",
          "xpath-version": "3.1",
          "xsd-version": "1.1",
        };
      },
      Wn: function () {
        return a.extraProperties;
      },
    };
  })();
  function q(a, b, d) {
    d = void 0 === d ? null : d;
    var m = Error.call(this);
    this.message = m.message;
    "stack" in m && (this.stack = m.stack);
    this.name = "XError";
    this.message = void 0 === a ? "Saxon-JS run-time error" : a;
    this.code = void 0 === b ? "FORG0001" : b;
    d && Ea(this, d);
  }
  n(q, Error);
  ba = q.prototype;
  ba.toString = function () {
    return this.name + ":" + this.message + "; code:" + this.code;
  };
  function Ea(a, b) {
    function d(a, b) {
      for (var c = a; c; ) {
        if (c[b]) return c[b];
        c = c.parentNode;
      }
      return null;
    }
    a.oe = d(b, "line");
    a.vk = d(b, "module");
  }
  ba.ui = function () {
    return typeof this.context ? this.context.ui() : "";
  };
  ba.gg = function () {
    var a = "Error " + this.code;
    null != this.oe && (a += " at " + this.vk + "#" + this.oe);
    return (a += "\n    " + this.message);
  };
  ba.code = null;
  ba.bb = null;
  ba.Rn = null;
  ba.oe = null;
  ba.vk = null;
  ba.yi = !1;
  ba.context = null;
  var B = (function () {
    function a(a) {
      c("Internal error: " + a + "\n" + Error().stack);
      throw new q("Internal error: " + a, "SXJS0004");
    }
    function b(a) {
      if (null === a) return "#null";
      if ("undefined" === typeof a) return "#undefined";
      if (a.oa) return a.oa();
      if (a.N) return "expression " + a.N;
      if (l && l.da(a)) {
        if (l.jh(a)) return "attribute @" + a.name + "='" + a.value + "'";
        if (l.og(a)) return "ns:" + a.prefix + "=" + a.uri;
        var f = {
          1: "element <" + a.tagName + ">",
          2: "attribute @" + a.name,
          3: "text:" + (a.nodeValue ? a.nodeValue.substring(0, 8) : "''"),
          7: "pi: " + a.target + "(" + a.tagName + ")",
          8: "comment (" + a.nodeValue + ")",
          9:
            "document " +
            (a._saxonDocumentNumber
              ? "#" + a._saxonDocumentNumber
              : "(No nr / #0)"),
          11: "docFrag",
        }[a.nodeType];
        if ("9" === a.nodeType || "11" === a.nodeType) {
          var k;
          for (k = 0; k < a.childNodes.length; k++)
            f += "~>" + b(a.childNodes[k]);
        }
        return f;
      }
      if (a.type)
        return "string" === a.type
          ? 'xdm:"' + a.toString() + '"'
          : "integer" === a.type
          ? "xdm:" + a.Pa().toFixed()
          : "boolean" === a.type
          ? "xdm:" + a.toString()
          : "xs:" + a.type + "('" + a.toString() + "')";
      if ("object" === typeof a && "length" in a) {
        if (1 === a.length) return b(a[0]);
        f = "(";
        for (k = 0; k < a.length && 3 > k; k++)
          0 !== k && (f += ","), (f += b(a[k]));
        4 <= a.length && (f += ",...(" + a.length + ")");
        return f + ")";
      }
      return "function" === typeof a ? a.toString() : "(" + typeof a + ") " + a;
    }
    function d(a) {
      return (
        "{'N':'" +
        a.N +
        "','C':[" +
        (a.C || [])
          .map(function (a) {
            return d(a);
          })
          .join(",") +
        "]}"
      );
    }
    function m(a, f) {
      for (var b = a; b; ) {
        if (b[f]) return b[f];
        b = b.parentNode;
      }
      return null;
    }
    function c(a, b) {
      (void 0 === b ? 1 : b) <= f && Da.Ol().saxonPrint(a);
    }
    var l,
      f = 1;
    Error.stackTraceLimit = 100;
    return {
      assert: function (f, b) {
        f || a(void 0 === b ? "assertion failed" : b);
      },
      ra: a,
      location: function (a) {
        return m(a, "module") + "#" + m(a, "line");
      },
      qp: function (a) {
        l = a;
      },
      Gb: c,
      oa: b,
      ym: function (a) {
        return a.oa
          ? a.oa()
          : l && l.da(a)
          ? b(a)
          : a.type
          ? "string" === a.type
            ? '"' + a.toString() + '"'
            : "integer" === a.type
            ? a.Pa().toFixed()
            : "boolean" === a.type
            ? a.toString() + "()"
            : "xs:" + a.type + "('" + a.toString() + "')"
          : a.io
          ? a.toString()
          : "(" + typeof a + ") " + a;
      },
      Ip: function (a) {
        if (!a) return "null expr";
        var f = a.N || "?",
          b;
        for (b in a)
          a.hasOwnProperty(b) &&
            !["C", "N", "parentNode", "ELAB", "PUSH"].includes(b) &&
            (f += " " + b + "=" + a[b]);
        a.C &&
          (f +=
            " (" +
            a.C.map(function (a) {
              return a.N;
            }).join(",") +
            ")");
        return (f += " at " + this.location(a));
      },
      rr: d,
      vm: function (a) {
        "number" == typeof a && (f = a);
      },
      Bi: f,
    };
  })();
  var Ha = (function () {
    function a() {
      function f(b) {
        if (!(this instanceof f)) return void 0 === b ? a() : new f(b);
        if (b instanceof f)
          (this.Aa = b.Aa), (this.e = b.e), (this.c = b.c.slice());
        else {
          var r, k, c;
          0 === b && 0 > 1 / b ? (b = "-0") : l.test((b = "" + b)) || m(NaN);
          this.Aa = "-" == b.charAt(0) ? ((b = b.slice(1)), -1) : 1;
          -1 < (r = b.indexOf(".")) && (b = b.replace(".", ""));
          0 < (k = b.search(/e/i))
            ? (0 > r && (r = k),
              (r += +b.slice(k + 1)),
              (b = b.substring(0, k)))
            : 0 > r && (r = b.length);
          for (k = 0; "0" == b.charAt(k); k++);
          if (k == (c = b.length)) this.c = [(this.e = 0)];
          else {
            for (; "0" == b.charAt(--c); );
            this.e = r - k - 1;
            this.c = [];
            for (r = 0; k <= c; this.c[r++] = +b.charAt(k++));
          }
        }
        this.constructor = f;
      }
      f.prototype = c;
      f.Og = 20;
      f.Ph = 1;
      f.Pg = -7;
      f.Kh = 21;
      return f;
    }
    function b(a, b, r) {
      var f = a.constructor,
        k = b - (a = new f(a)).e,
        c = a.c;
      c.length > ++b && d(a, k, f.Ph);
      c[0] ? (r ? (k = b) : ((c = a.c), (k = a.e + k + 1))) : ++k;
      for (; c.length < k; c.push(0));
      k = a.e;
      return 1 === r || (r && (b <= k || k <= f.Pg))
        ? (0 > a.Aa && c[0] ? "-" : "") +
            (1 < c.length ? c[0] + "." + c.join("").slice(1) : c[0]) +
            (0 > k ? "e" : "e+") +
            k
        : a.toString();
    }
    function d(a, b, r, c) {
      c = void 0 === c ? !1 : c;
      var f = a.c,
        k = a.e + b + 1;
      1 === r
        ? (c = 5 <= f[k])
        : 2 === r
        ? (c =
            5 < f[k] ||
            (5 == f[k] && (c || 0 > k || void 0 !== f[k + 1] || f[k - 1] & 1)))
        : 3 === r
        ? (c = c || void 0 !== f[k] || 0 > k)
        : ((c = !1), 0 !== r && m("!Big.RM!"));
      if (1 > k || !f[0]) c ? ((a.e = -b), (a.c = [1])) : (a.c = [(a.e = 0)]);
      else {
        f.length = k--;
        if (c) for (; 9 < ++f[k]; ) (f[k] = 0), k-- || (++a.e, f.unshift(1));
        for (k = f.length; !f[--k]; f.pop());
      }
      return a;
    }
    function m(a) {
      a = Error(a);
      a.name = "BigError";
      throw a;
    }
    var c = {},
      l = /^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;
    c.abs = function () {
      var a = new this.constructor(this);
      a.Aa = 1;
      return a;
    };
    c.cmp = function (a) {
      var b = this.c,
        f = (a = new this.constructor(a)).c,
        c = this.Aa,
        d = a.Aa,
        l = this.e,
        t = a.e;
      if (!b[0] || !f[0]) return b[0] ? c : f[0] ? -d : 0;
      if (c != d) return c;
      a = 0 > c;
      if (l != t) return (l > t) ^ a ? 1 : -1;
      c = -1;
      for (d = (l = b.length) < (t = f.length) ? l : t; ++c < d; )
        if (b[c] != f[c]) return (b[c] > f[c]) ^ a ? 1 : -1;
      return l == t ? 0 : (l > t) ^ a ? 1 : -1;
    };
    c.pd = function (a, b, r) {
      var f = this.constructor,
        c = this.c,
        k = (a = new f(a)).c,
        t = this.Aa === a.Aa ? 1 : -1;
      b = "undefined" !== typeof b ? b : f.Og;
      r = "undefined" !== typeof r ? r : f.Ph;
      (b !== ~~b || 0 > b || 1e6 < b) && m("!Big.DP!");
      if (!c[0] || !k[0])
        return c[0] == k[0] && m(NaN), k[0] || m(t / 0), new f(0 * t);
      var g,
        l = k.slice(),
        A = (f = k.length),
        x = c.length,
        e = c.slice(0, f),
        h = e.length,
        p = a,
        y = (p.c = []),
        u = 0,
        L = b + (p.e = this.e - a.e) + 1;
      p.Aa = t;
      t = 0 > L ? 0 : L;
      for (l.unshift(0); h++ < f; e.push(0));
      do {
        for (g = 0; 10 > g; g++) {
          if (f != (h = e.length)) var O = f > h ? 1 : -1;
          else {
            var fa = -1;
            for (O = 0; ++fa < f; )
              if (k[fa] != e[fa]) {
                O = k[fa] > e[fa] ? 1 : -1;
                break;
              }
          }
          if (0 > O) {
            for (a = h == f ? k : l; h; ) {
              if (e[--h] < a[h]) {
                for (fa = h; fa && !e[--fa]; e[fa] = 9);
                --e[fa];
                e[h] += 10;
              }
              e[h] -= a[h];
            }
            for (; !e[0]; e.shift());
          } else break;
        }
        y[u++] = O ? g : ++g;
        e[0] && O ? (e[h] = c[A] || 0) : (e = [c[A]]);
      } while ((A++ < x || void 0 !== e[0]) && t--);
      y[0] || 1 == u || (y.shift(), p.e--);
      u > L && d(p, b, r, void 0 !== e[0]);
      return p;
    };
    c.On = function () {
      var a = Ha(0);
      return !this.cmp(a);
    };
    c.Nq = function (a) {
      return 0 < this.cmp(a);
    };
    c.Oq = function (a) {
      return -1 < this.cmp(a);
    };
    c.Qo = function () {
      var a = Ha(2).pow(52);
      return 0 > this.cmp(a);
    };
    c.Yq = function (a) {
      return 1 > this.cmp(a);
    };
    c.sub = c.oh = function (a) {
      var b = this.constructor;
      var f = this.Aa,
        c = (a = new b(a)).Aa;
      if (f != c) return (a.Aa = -c), this.uh(a);
      var d = this.c.slice();
      var l = this.e;
      var t = a.c,
        g = a.e;
      if (!d[0] || !t[0])
        return t[0] ? ((a.Aa = -c), a) : new b(d[0] ? this : 0);
      if ((f = l - g)) {
        (b = 0 > f) ? ((f = -f), (l = d)) : ((g = l), (l = t));
        l.reverse();
        for (c = f; c--; l.push(0));
        l.reverse();
      } else
        for (
          l = ((b = d.length < t.length) ? d : t).length, f = c = 0;
          c < l;
          c++
        )
          if (d[c] != t[c]) {
            b = d[c] < t[c];
            break;
          }
      b && ((l = d), (d = t), (t = l), (a.Aa = -a.Aa));
      if (0 < (c = (l = t.length) - (b = d.length))) for (; c--; d[b++] = 0);
      for (c = b; l > f; ) {
        if (d[--l] < t[l]) {
          for (b = l; b && !d[--b]; d[b] = 9);
          --d[b];
          d[l] += 10;
        }
        d[l] -= t[l];
      }
      for (; 0 === d[--c]; d.pop());
      for (; 0 === d[0]; ) d.shift(), --g;
      d[0] || ((a.Aa = 1), (d = [(g = 0)]));
      a.c = d;
      a.e = g;
      return a;
    };
    c.Ei = function (a) {
      var b = this,
        f = b.constructor,
        c = b.Aa,
        d = (a = new f(a)).Aa;
      a.c[0] || m(NaN);
      b.Aa = a.Aa = 1;
      var l = 1 == a.cmp(b);
      b.Aa = c;
      a.Aa = d;
      if (l) return new f(b);
      b = b.pd(a, 0, 0);
      return this.oh(b.ke(a));
    };
    c.add = c.uh = function (a) {
      var b = this.constructor;
      var f = this.Aa,
        c = (a = new b(a)).Aa;
      if (f != c) return (a.Aa = -c), this.oh(a);
      c = this.e;
      var d = this.c,
        l = a.e,
        t = a.c;
      if (!d[0] || !t[0]) return t[0] ? a : new b(d[0] ? this : 0 * f);
      d = d.slice();
      if ((f = c - l)) {
        0 < f ? ((l = c), (b = t)) : ((f = -f), (b = d));
        for (b.reverse(); f--; b.push(0));
        b.reverse();
      }
      0 > d.length - t.length && ((b = t), (t = d), (d = b));
      f = t.length;
      for (c = 0; f; )
        (c = ((d[--f] = d[f] + t[f] + c) / 10) | 0), (d[f] %= 10);
      c && (d.unshift(c), ++l);
      for (f = d.length; 0 === d[--f]; d.pop());
      a.c = d;
      a.e = l;
      return a;
    };
    c.pow = function (a) {
      var b = this,
        f = new b.constructor(1),
        c = f,
        d = 0 > a;
      (a !== ~~a || -1e6 > a || 1e6 < a) && m("!pow!");
      for (a = d ? -a : a; ; ) {
        a & 1 && (c = c.ke(b));
        a >>= 1;
        if (!a) break;
        b = b.ke(b);
      }
      return d ? f.pd(c) : c;
    };
    c.round = function (a, b) {
      var f = this,
        c = f.constructor;
      null == a ? (a = 0) : (a !== ~~a || 0 > a || 1e6 < a) && m("!round!");
      d((f = new c(f)), a, null == b ? c.Ph : b);
      return f;
    };
    c.sqrt = function () {
      var a = this.constructor;
      var b = this.c;
      var c = this.Aa;
      var l = this.e;
      var w = new a("0.5");
      if (!b[0]) return new a(this);
      0 > c && m(NaN);
      c = Math.sqrt(this.toString());
      0 === c || c === 1 / 0
        ? ((c = b.join("")),
          (c.length + l) & 1 || (c += "0"),
          (b = new a(Math.sqrt(c).toString())),
          (b.e = (((l + 1) / 2) | 0) - (0 > l || l & 1)))
        : (b = new a(c.toString()));
      c = b.e + (a.Og += 4);
      do (l = b), (b = w.ke(l.uh(this.pd(l))));
      while (l.c.slice(0, c).join("") !== b.c.slice(0, c).join(""));
      d(b, (a.Og -= 4), a.Ph);
      return b;
    };
    c.fr = c.ke = function (a) {
      var b = this.constructor;
      var f = this.c,
        c = (a = new b(a)).c,
        d = f.length,
        l = c.length,
        t = this.e,
        g = a.e;
      a.Aa = this.Aa == a.Aa ? 1 : -1;
      if (!f[0] || !c[0]) return new b(0 * a.Aa);
      a.e = t + g;
      d < l && ((b = f), (f = c), (c = b), (g = d), (d = l), (l = g));
      for (b = Array((g = d + l)); g--; b[g] = 0);
      for (t = l; t--; ) {
        l = 0;
        for (g = d + t; g > t; )
          (l = b[g] + c[t] * f[g - t - 1] + l),
            (b[g--] = l % 10),
            (l = (l / 10) | 0);
        b[g] = (b[g] + l) % 10;
      }
      l && ++a.e;
      b[0] || b.shift();
      for (t = b.length; !b[--t]; b.pop());
      a.c = b;
      return a;
    };
    c.toString =
      c.valueOf =
      c.toJSON =
        function () {
          var a = this.constructor,
            b = this.e,
            c = this.c.join(""),
            d = c.length;
          if (b <= a.Pg || b >= a.Kh)
            c =
              c.charAt(0) +
              (1 < d ? "." + c.slice(1) : "") +
              (0 > b ? "e" : "e+") +
              b;
          else if (0 > b) {
            for (; ++b; c = "0" + c);
            c = "0." + c;
          } else if (0 < b)
            if (++b > d) for (b -= d; b--; c += "0");
            else b < d && (c = c.slice(0, b) + "." + c.slice(b));
          else 1 < d && (c = c.charAt(0) + "." + c.slice(1));
          return 0 > this.Aa && this.c[0] ? "-" + c : c;
        };
    c.toExponential = function (a) {
      null == a
        ? (a = this.c.length - 1)
        : (a !== ~~a || 0 > a || 1e6 < a) && m("!toExp!");
      return b(this, a, 1);
    };
    c.toFixed = function (a) {
      var c = this.constructor,
        f = c.Pg,
        d = c.Kh;
      c.Pg = -(c.Kh = 1 / 0);
      if (null == a) var l = this.toString();
      else
        a === ~~a &&
          0 <= a &&
          1e6 >= a &&
          ((l = b(this, this.e + a)),
          0 > this.Aa && this.c[0] && 0 > l.indexOf("-") && (l = "-" + l));
      c.Pg = f;
      c.Kh = d;
      l || m("!toFix!");
      return l;
    };
    c.toPrecision = function (a) {
      if (null == a) return this.toString();
      (a !== ~~a || 1 > a || 1e6 < a) && m("!toPre!");
      return b(this, a - 1, 2);
    };
    return a();
  })();
  var Ma = (function () {
    function a(a) {
      for (var b = 0; b < a.length; b++) {
        var c = a.charCodeAt(b);
        if (55296 <= c && 56319 >= c) return !0;
      }
      return !1;
    }
    function b(a) {
      for (var b = [], c = 0; c < a.length; c++) {
        var d = a.charCodeAt(c);
        b.push(
          55296 <= d && 56319 >= d
            ? 1024 * (d - 55296) + (a.charCodeAt(++c) - 56320) + 65536
            : d
        );
      }
      return b;
    }
    return {
      Xg: function (d, m) {
        if (a(d) || a(m)) {
          a: {
            var c = b(d.toString());
            for (var l = b(m.toString()), f = 0; ; ) {
              if (f === c.length) {
                c = f === l.length ? 0 : -1;
                break a;
              }
              if (f === l.length) {
                c = 1;
                break a;
              }
              if (c[f] !== l[f]) {
                c = c[f] - l[f];
                break a;
              }
              f++;
            }
          }
          return 0 > c ? -1 : 0 === c ? 0 : 1;
        }
        return d < m ? -1 : d === m ? 0 : 1;
      },
      ld: function (a) {
        var b = "";
        a.forEach(function (a) {
          if (
            (32 > a && ![9, 10, 13].includes(a)) ||
            (55295 < a && 57344 > a) ||
            (65533 < a && 65536 > a) ||
            1114111 < a
          )
            throw new q(
              "Invalid XML character 0x" + a.toString(16),
              "FOCH0001"
            );
          return (b +=
            65536 > a
              ? String.fromCharCode(a)
              : String.fromCharCode(((a - 65536) >> 10) + 55296) +
                String.fromCharCode(((a - 65536) & 1023) + 56320));
        });
        return b;
      },
      zo: a,
      Bc: b,
      dd: function (a) {
        return a.replace(/[ \n\r\t]+/g, " ").replace(/^[ ]|[ ]$/g, "");
      },
    };
  })();
  var Na = (function () {
    function a() {
      null === d && (d = Da.Qi("regexCategories"));
      return d;
    }
    function b(b, c, d, l) {
      function f(e, b) {
        function g(a) {
          for (a = a.toString(16); 4 > a.length; ) a = "0" + a;
          return "\\u" + (m && 4 < a.length ? "{" + a + "}" : a);
        }
        function c(a, e, b) {
          if (b) {
            b = a;
            a = [];
            0 !== b[0][0] && a.push([0, b[0][0] - 1]);
            for (var h = 1; h < b.length; h++)
              a.push([b[h - 1][1] + 1, b[h][0] - 1]);
            b = b[b.length - 1][1];
            (m || 65535 > b) && a.push([b + 1, m ? 1114111 : 65535]);
          }
          b = "";
          for (h = 0; h < a.length; h++)
            if (m || 65536 > a[h][1])
              (b += g(a[h][0])), a[h][1] > a[h][0] && (b += "-" + g(a[h][1]));
          a = b;
          e || (a = "[" + a + "]");
          return a;
        }
        function f(a) {
          return a.sort(function (a, e) {
            return a[0] - e[0];
          });
        }
        function d(a, e, b, h) {
          var g = [];
          Array.isArray(a) || t("Ranges must be array");
          a.forEach(function (a) {
            g.push([parseInt(a[0], 16), parseInt(a[1], 16)]);
          });
          b && h && f(g);
          return c(g, e, b);
        }
        var N = e.charAt(b + 1);
        0 > "nrt\\|.-^?*+{}()[]pPsSiIcCdDwW$".indexOf(N) &&
          (0 !== y || !/[0-9]/.test(N)) &&
          t("\\" + N + " is not allowed in XPath regular expressions");
        switch (N) {
          case "p":
          case "P":
            var u = e.indexOf("}", b),
              l = e.substring(b + 3, u);
            r("x") && (l = l.replace(/[ \n\r\t]+/g, ""));
            var w = a(),
              S = w[l];
            S || t("Unknown category " + l);
            if (1 === l.length) {
              var ma = [];
              S.split("|").forEach(function (a) {
                ma = ma.concat(w[a]);
              });
            } else ma = S;
            k += d(ma, 0 < y, "P" === N, 1 === l.length);
            b = u;
            break;
          case "d":
            k += d(a().Nd, 0 < y, !1, !1);
            b++;
            break;
          case "i":
            k += c(v, 0 < y, !1);
            b++;
            break;
          case "c":
            k += c(x, 0 < y, !1);
            b++;
            break;
          case "I":
            k += c(v, 0 < y, !0);
            b++;
            break;
          case "C":
            k += c(x, 0 < y, !0);
            b++;
            break;
          case "w":
          case "W":
            var A = a(),
              xa = [];
            A.w.split("|").forEach(function (a) {
              xa = xa.concat(A[a]);
            });
            k += d(xa, 0 < y, "W" === N, !0);
            b++;
            break;
          case "-":
            0 < y && (k += "\\");
            k += N;
            b++;
            break;
          default:
            /[0-9]/.test(N)
              ? 0 < y
                ? t("Numeric escape within charclass")
                : (h[parseInt(N, 10)] || t("No capturing expression #" + N),
                  (k += "\\" + N),
                  9 >= p && /[0-9]/.test(e.charAt(b + 2)) && (k += "(?:)"),
                  b++)
              : ((k += "\\" + N), b++);
        }
        return { Ii: k, i: b };
      }
      function r(a) {
        return 0 <= c.indexOf(a);
      }
      function t(a) {
        throw new q("Invalid XPath regular expression: " + a, "FORX0002");
      }
      d = void 0 === d ? null : d;
      l = void 0 === l ? null : l;
      var g = 0;
      c = c ? c.toString() : "";
      if (!m && d && Ma.zo(d))
        throw new q(
          "Cannot handle non-BMP characters with regular expressions in this browser",
          "SXJS0002"
        );
      d =
        (r("i") ? "i" : "") +
        (r("m") ? "m" : "") +
        (r("g") ? "g" : "") +
        (m ? "u" : "");
      if (r("j")) return new RegExp(b, c.replace("j", ""));
      if (r("q"))
        return new RegExp(
          b.replace(/[\[\]\/\{\}\(\)\*\+\?\.\\^$|]/g, "\\$&"),
          d
        );
      for (
        var k = "",
          v = [
            [58, 58],
            [65, 90],
            [95, 95],
            [97, 122],
            [192, 214],
            [216, 246],
            [248, 767],
            [880, 893],
            [895, 8191],
            [8204, 8205],
            [8304, 8591],
            [11264, 12271],
            [12289, 55295],
            [63744, 64975],
            [65008, 65533],
            [65536, 983039],
          ],
          x = [
            [45, 46],
            [48, 58],
            [65, 90],
            [95, 95],
            [97, 122],
            [183, 183],
            [192, 214],
            [216, 246],
            [248, 893],
            [895, 8191],
            [8204, 8205],
            [8255, 8256],
            [8304, 8591],
            [11264, 12271],
            [12289, 55295],
            [63744, 64975],
            [65008, 65533],
            [65536, 983039],
          ],
          e = [],
          h = [],
          p = 1,
          y = 0,
          u = !1,
          L = !1,
          O = 0;
        O < b.length;
        O++
      ) {
        var fa = b.charAt(O);
        switch (fa) {
          case "[":
            0 < y && t("Nested square brackets");
            for (var Y = !1, N = !1, S = O + 2; S < b.length - 3; S++) {
              if (!Y && "-[" === b.substring(S, S + 2)) {
                Y = b.substring(O + 1, S);
                var ma = (N = void 0);
                for (ma = S + 2; ma < b.length; ma++)
                  if ("]" === b.charAt(ma) && "\\" !== b.charAt(ma - 1)) {
                    N = b.substring(S + 2, ma + 1);
                    break;
                  }
                "^" === Y && t("Invalid subtraction");
                b =
                  b.substring(0, O) +
                  "(?![" +
                  N +
                  ")[" +
                  Y +
                  "]" +
                  b.substring(ma + 2);
                O--;
                N = !0;
                break;
              } else if (!Y && "]" === b.charAt(S)) break;
              Y = "\\" === b.charAt(S) && !Y;
            }
            if (N) {
              u = !0;
              break;
            }
            "]" === b.charAt(O + 1)
              ? t("Character group is empty")
              : "[^]" === b.substring(O, O + 3) &&
                t("Invalid character group [^]");
            y++;
            k += fa;
            break;
          case "]":
            0 === y && t("Unmatched ']'");
            y--;
            k += fa;
            L = !0;
            break;
          case "(":
            0 === y &&
              ((S = !0),
              O + 2 < b.length &&
                "?" === b.charAt(O + 1) &&
                (":" === b.charAt(O + 2) || (u && "!" === b.charAt(O + 2))
                  ? (S = !1)
                  : t("'(?' must be followed by ':'")),
              e.push(S ? p++ : -1),
              (L = !1),
              S && g++);
            k += fa;
            break;
          case ")":
            0 === y &&
              (0 === e.length && t("Unmatched ')'"),
              (L = e.pop()),
              0 < L && (h[L] = !0));
            k += fa;
            L = !0;
            break;
          case ".":
            k = 0 === y && r("s") ? k + "[^]" : k + fa;
            break;
          case "{":
            0 === y &&
              (L || t("'{' not allowed here"),
              (L = b.indexOf("}", O + 1)),
              (0 > L || !/^[0-9]+(,[0-9]*)?$/.test(b.substring(O + 1, L))) &&
                t("Invalid quantifier {" + b.substring(O + 1, L + 1)),
              (L = !1));
            k += fa;
            break;
          case " ":
          case "\n":
          case "\r":
          case "\t":
            if (!r("x") || 0 < y) k += fa;
            break;
          case "\\":
            if (r("q")) k += "\\\\";
            else if (O + 1 < b.length)
              r("x") && /\s/.test(b.charAt(O + 1)) && O++,
                (O = f(b, O)),
                (k = O.Ii),
                (O = O.i);
            else
              throw new q(
                "No character for escape code in XPath regex",
                "FORX0002"
              );
            L = !0;
            break;
          default:
            (L = !0), (k += fa);
        }
      }
      0 < y && t("Unmatched '['");
      0 !== e.length && t("Unmatched '(");
      l && l(g);
      try {
        return new RegExp(k, d);
      } catch (xa) {
        if (/^[imsxjqg]*$/.test(c))
          throw (
            ((l = /Invalid |Range out/.test(xa.message)
              ? xa.message.lastIndexOf(":")
              : 0),
            new q(
              "Invalid regular expression /" +
                b +
                "/: " +
                xa.message.substring(l),
              "FORX0002"
            ))
          );
        throw new q("Invalid regex flags: " + c, "FORX0001");
      }
    }
    var d = null,
      m = !1;
    try {
      m = 1 === "\ud83d\ude80".match(new RegExp(/./, "gu")).length;
    } catch (f) {
      m = !1;
    }
    var c = null,
      l = null;
    return {
      ff: function () {
        c = b("^\\i\\c*$", "");
        l = b("^\\c+$", "");
      },
      ep: a,
      wh: b,
      Fn: function (a, b, c) {
        b = b.toString();
        if (/j/.test(b)) return a;
        if (/q/.test(b)) return a.replace(/\$/g, "$$$$");
        if (/(^|[^\\])\$([^0-9]|$)/.test(a) || /(^|[^\\])\\([^\\$]|$)/.test(a))
          throw new q("Invalid replacement string: " + a, "FORX0004");
        var f = (b = !1),
          d = "",
          r;
        for (r = 0; r < a.length; r++) {
          var t = a.charAt(r);
          switch (t) {
            case "\\":
              b && (d += t);
              b = !b;
              break;
            case "$":
              b ? ((d += "$$"), (b = !b)) : (f = !0);
              break;
            case "0":
              f ? ((d += "$&"), (f = !1)) : (d += t);
              break;
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
              f ? parseInt(t, 10) <= c && ((d += "$" + t), (f = !1)) : (d += t);
              break;
            default:
              d += t;
          }
        }
        return d;
      },
      Yc: function (a) {
        return c.test(a) && !/:/.test(a);
      },
      Io: function (a) {
        return c.test(a);
      },
      Ho: function (a) {
        return l.test(a);
      },
      Wl: function (a) {
        return c.test(a) && /^[^:]+(:[^:]+)?$/.test(a);
      },
      trim: function (a) {
        return a.replace(/^[ \t\r\n]+|[ \t\r\n]+$/g, "");
      },
      collapse: function (a) {
        return this.trim(a).replace(/^[ \t\r\n]+/g, " ");
      },
    };
  })();
  var C = (function () {
    function a() {
      function e() {
        return !0;
      }
      function b(a) {
        for (var e = M[a]; e.Bb; )
          (Ja[a + "<" + (void 0 !== e.Bb.name ? e.Bb.name : e.Bb)] = 1),
            (e = e.Bb);
        if ("decimal" === e || "double" === e || "float" === e)
          Ja[a + "<numeric"] = 1;
      }
      function h(a, e, ua, g) {
        var h = M[e],
          f = (M[a] = {
            name: a,
            code: ua,
            Bb: h,
            matches: function (e) {
              return c(e.type, a);
            },
            Yd: function (e) {
              g(e) || k(e.toString(), a);
              e.type = a;
              return e;
            },
            g: function (a) {
              return f.Yd(h.g(a));
            },
            aa: function (a) {
              return f.Yd(h.aa(a));
            },
          });
        Qa[ua] = f;
        b(a);
      }
      function g(a, e, b, ua) {
        h(a, e, b, ua);
        var g = M[a],
          c = M[e];
        g.g = function (e) {
          /INF|NaN/.test(e) && k(e, a, null, "FOCA0002");
          return g.Yd(c.g(e));
        };
        g.fa = function (e) {
          e = c.fa(e);
          var b = e.J();
          isFinite(b) || k(e.toString(), a, null, "FOCA0002");
          ua(e) || k(e.toString(), a);
          e.type = a;
          return e;
        };
      }
      function f(a, e, b, ua, g) {
        h(a, e, b, ua);
        var c = M[a],
          f = M[e];
        c.Yd = function (e) {
          e = g(e.toString());
          ua(e) || k(e, a);
          return new K(e, a);
        };
        c.g = function (a) {
          return c.Yd(f.g(g(a)));
        };
      }
      function d(a, e, b, ua) {
        h(a, e, b, ua);
        var g = M[a],
          c = M[e];
        g.Yd = function (e) {
          if (e instanceof L)
            return new L(
              "yearMonthDuration" === a ? e.Eb : 0,
              "dayTimeDuration" === a ? e.wb : 0,
              a
            );
          ua(e) || k(e.toString(), a);
          e.type = a;
          return e;
        };
        g.rd = function (a, e) {
          return g.Yd(c.rd(a, e));
        };
        g.aa = function (e) {
          return c.matches(e)
            ? g.Yd(e)
            : H.T.matches(e) || H.Ua.matches(e)
            ? xa(e.toString(), a)
            : g.Yd(c.aa(e));
        };
      }
      O("gYear", "AG");
      O("gYearMonth", "AH");
      O("gMonth", "AI");
      O("gMonthDay", "AJ");
      O("gDay", "AK");
      g("nonPositiveInteger", "integer", "ADIN", function (a) {
        return 0 >= a.J();
      });
      g("negativeInteger", "nonPositiveInteger", "ADINN", function (a) {
        return 0 > a.J();
      });
      g("long", "integer", "ADIL", function (a) {
        a = a.Pa();
        return (
          0 <= a.cmp(Ha("-9223372036854775808")) &&
          0 >= a.cmp(Ha("9223372036854775807"))
        );
      });
      g("int", "long", "ADILI", function (a) {
        return -2147483648 <= a.J() && 2147483647 >= a.J();
      });
      g("short", "int", "ADILIS", function (a) {
        return -32768 <= a.J() && 32767 >= a.J();
      });
      g("byte", "short", "ADILISB", function (a) {
        return -128 <= a.J() && 127 >= a.J();
      });
      g("nonNegativeInteger", "integer", "ADIP", function (a) {
        return 0 <= a.J();
      });
      g("positiveInteger", "nonNegativeInteger", "ADIPP", function (a) {
        return 0 < a.J();
      });
      g("unsignedLong", "nonNegativeInteger", "ADIPL", function (a) {
        return 0 <= a.J() && 0 >= a.Pa().cmp(Ha("18446744073709551615"));
      });
      g("unsignedInt", "unsignedLong", "ADIPLI", function (a) {
        return 0 <= a.J() && 0 >= a.Pa().cmp(Ha("4294967295"));
      });
      g("unsignedShort", "unsignedInt", "ADIPLIS", function (a) {
        return 0 <= a.J() && 65535 >= a.J();
      });
      g("unsignedByte", "unsignedShort", "ADIPLISB", function (a) {
        return 0 <= a.J() && 255 >= a.J();
      });
      f("normalizedString", "string", "ASN", e, function (a) {
        return a.replace(/[ \r\t\n]/g, " ");
      });
      f("token", "normalizedString", "ASNT", e, Ma.dd);
      f(
        "language",
        "token",
        "ASNTL",
        function (a) {
          return /^[a-zA-Z]{1,8}(-[a-zA-Z0-9]{1,8})*$/.test(a);
        },
        Ma.dd
      );
      f("NMTOKEN", "token", "ASNTK", Na.Ho, Ma.dd);
      f("Name", "token", "ASNTN", Na.Io, Ma.dd);
      f("NCName", "Name", "ASNTNC", Na.Yc, Ma.dd);
      f("ID", "NCName", "ASNTNCI", Na.Yc, Ma.dd);
      f("IDREF", "NCName", "ASNTNCR", Na.Yc, Ma.dd);
      f("ENTITY", "NCName", "ASNTNCE", Na.Yc, Ma.dd);
      d("yearMonthDuration", "duration", "ARY", function (a) {
        return 0 === a.wb;
      });
      d("dayTimeDuration", "duration", "ARD", function (a) {
        return 0 === a.Eb;
      });
      M.dayTimeDuration.Bl = function (a) {
        return new L(0, 6e4 * a, "dayTimeDuration");
      };
      H.language = M.language;
      H.Dk = M.NCName;
      H.ac = M.dayTimeDuration;
      H.ed = M.yearMonthDuration;
      H.Hl = M.gYearMonth;
      H.Gl = M.gYear;
      H.Fl = M.gMonthDay;
      H.El = M.gMonth;
      H.Dl = M.gDay;
      for (var p in M) {
        var t = M[p];
        t.vr = function () {
          return this.code;
        };
        Qa[t.code] = t;
      }
      a = function () {};
    }
    function b(a, e) {
      return e ? -a : a;
    }
    function d(a, e) {
      return e * (void 0 === a ? 0 : Math.round(1e3 * parseFloat(a)));
    }
    function m(a, e) {
      return e * (void 0 === a ? 0 : parseInt(a, 10));
    }
    function c(a, e) {
      return a === e || 1 === Ja[a + "<" + e];
    }
    function l(a) {
      return a.Bb && !["ADI", "ARY", "ARD"].includes(a.code) ? l(a.Bb) : a;
    }
    function f(a, e) {
      throw new q(
        "Casting from xs:" + a.type + " to xs:" + e + " is not allowed",
        "XPTY0004"
      );
    }
    function k(a, e, b, g) {
      b = void 0 === b ? null : b;
      throw new q(
        'Supplied value "' +
          a +
          '" is not a valid xs:' +
          e +
          (b ? " (" + b + ")" : ""),
        void 0 === g ? "FORG0001" : g
      );
    }
    function r(a, e) {
      throw new q("Cannot compare xs:" + a + " with xs:" + e, "XPTY0004");
    }
    function v(a, e) {
      a = Na.trim(a);
      /.\.$/.test(a) && (a += "0");
      if (/^[-+]?([0-9]+(\.[0-9]*)?|\.[0-9]+)([Ee][-+]?[0-9]+)?$/.test(a))
        return parseFloat(a);
      if (/^NaN$/.test(a)) return NaN;
      if (/^-INF$/.test(a)) return -Infinity;
      if (/^(\+)?INF$/.test(a)) return Infinity;
      e && k(a, "double");
      return NaN;
    }
    function w(a) {
      return Number.isInteger(a) && Math.abs(a) < Math.pow(2, 52)
        ? a.toString(36)
        : aa.fa(a).toString().substring(0, 8);
    }
    function z(a) {
      a = a.replace(/\s/g, "");
      /^(....)*$/.test(a) ||
        k(a, "base64Binary", "length must be a multiple of 4");
      /^[A-Za-z0-9+/]*=?=?$/.test(a) ||
        k(a, "base64Binary", "only [A-Za-z0-9+/] allowed, or '=' at the end");
      /^([^=]*|.*[AQgw]==|.*[AEIMQUYcgkosw048]=)$/.test(a) ||
        k(a, "base64Binary", "invalid characters before '='");
      var e = 0,
        b = 0,
        ua = [];
      if (0 === a.length) return a;
      a += "";
      do {
        var g =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(
            a.charAt(e++)
          );
        var h =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(
            a.charAt(e++)
          );
        var c =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(
            a.charAt(e++)
          );
        var f =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(
            a.charAt(e++)
          );
        var d = (g << 18) | (h << 12) | (c << 6) | f;
        g = (d >> 16) & 255;
        h = (d >> 8) & 255;
        d &= 255;
        64 === c
          ? (ua[b++] = String.fromCharCode(g))
          : 64 === f
          ? (ua[b++] = String.fromCharCode(g, h))
          : (ua[b++] = String.fromCharCode(g, h, d));
      } while (e < a.length);
      return ua.join("");
    }
    function t(a) {
      var e = "";
      Ma.Bc(a).forEach(function (a) {
        e += (a + 256).toString(16).substring(1).toUpperCase();
      });
      return e;
    }
    function g(a) {
      a = Na.trim(a);
      /^([a-fA-F0-9][a-fA-F0-9])*$/.test(a) || k(a, "hexBinary");
      var e,
        b = [];
      for (e = 0; e < a.length; e += 2)
        b.push(String.fromCharCode(parseInt(a.substring(e, e + 2), 16)));
      return b.join("");
    }
    function K(a, e) {
      null === a && (a = "");
      this.value = a;
      this.type = void 0 === e ? "string" : e;
      "string" !== typeof a &&
        B.ra("bad input to string constructor " + B.oa(a));
    }
    function A(a, e) {
      this.value = a;
      this.type = e;
    }
    function x(a, e) {
      e = void 0 === e ? "double" : e;
      "number" !== typeof a &&
        B.ra("type of value supplied to XdmDouble is not number: " + typeof a);
      this.value = a;
      this.type = e;
    }
    function e(a, e) {
      e = void 0 === e ? "integer" : e;
      "number" !== typeof a &&
        B.ra("type of value supplied to XdmInteger is not number: " + typeof a);
      this.value = a;
      this.type = e;
    }
    function h(a, e) {
      e = void 0 === e ? "decimal" : e;
      this.value = new Ha(a);
      this.type = e;
    }
    function p(a) {
      this.value = a;
      "boolean" !== typeof a &&
        B.ra(
          "type of value supplied to XdmBoolean is not boolean: " + typeof a
        );
    }
    function y(a, e, b) {
      this.prefix = a = a ? a : "";
      this.uri = e ? e : "";
      this.local = b;
      if ("" !== a && !Na.Yc(a))
        throw new q("Invalid prefix: '" + a + "'", "FORG0001");
      if (!Na.Yc(b))
        throw new q(
          "Invalid local name: '" +
            b +
            "' (prefix='" +
            a +
            "', uri='" +
            e +
            "')",
          "FORG0001"
        );
    }
    function u(a, e, b) {
      this.ub = a;
      this.zb = e;
      this.type = b || "dateTime";
      a instanceof Date ||
        B.ra("type of UTCdate supplied to XdmDateTime is not Date");
      e &&
        "number" !== typeof e &&
        B.ra(
          "type of value for timezone offset supplied to XdmDateTime is not number: " +
            typeof e
        );
    }
    function L(a, e, b) {
      this.Eb = a;
      this.wb = e;
      ("number" === typeof a && "number" === typeof e) ||
        B.ra(
          "type of value supplied to XdmDuration is not number: " +
            typeof a +
            ", " +
            typeof e
        );
      if ((0 < a && 0 > e) || (0 > a && 0 < e))
        throw new q(
          "Months/seconds must both be negative or both positive",
          "FORG0001"
        );
      this.type = b || "duration";
    }
    function O(a, e) {
      M[a] = {
        name: a,
        code: e,
        matches: function (e) {
          return e instanceof u && e.type === a;
        },
        g: function (e) {
          return S(e, a);
        },
        Sb: function (e, b) {
          return new u(e, b, a);
        },
        aa: function (e) {
          if (M[a].matches(e)) return e;
          if (H.dateTime.matches(e) || H.nd.matches(e)) {
            var b = M[a];
            return b.g(b.Sb(e.ub, e.zb).toString());
          }
          if (H.T.matches(e) || H.Ua.matches(e)) return M[a].g(e.toString());
          f(e, a);
        },
      };
    }
    function fa(a) {
      if (-1 !== a.indexOf(".", a.length - 4)) {
        a = a.split(".");
        for (var e = a[1]; 3 > e.length; ) e += "0";
        a = a[0] + "." + e;
      }
      return a;
    }
    function Y(a) {
      var e = a[0],
        b = a[1],
        ua = a[2],
        g = a[3],
        h = a[4];
      a = a[5];
      return !(
        1 > b ||
        12 < b ||
        1 > ua ||
        ua >
          [
            31,
            0 !== e % 4 || (0 === e % 100 && 0 !== e % 400) ? 28 : 29,
            31,
            30,
            31,
            30,
            31,
            31,
            30,
            31,
            30,
            31,
          ][b - 1] ||
        24 <= g ||
        60 <= h ||
        60 <= a
      );
    }
    function N(a, e) {
      var b = a.split(/[\-T:]/).map(function (a) {
          return parseFloat(a);
        }),
        ua = b[0];
      if (1 > ua || 9999 < ua)
        throw new q("Year " + ua + " is out of range", "FODT0001");
      Y(b) || k(e, "dateTime");
    }
    function S(a, e) {
      var b = a.match(E[e]);
      null === b && k(a, e);
      var ua = b[2] ? b[2] : "",
        g = bb[e](b[1]) + ua;
      /24:00:00(\.0+)?([Z\+\-]|$)/.test(g) &&
        (g =
          "time" === e
            ? g.substring(0, 10) + "T00:00:00"
            : S(g.substring(0, 10), "date").uj(1440) + "T00:00:00");
      if ("-" === g.charAt(0)) {
        N(g.substring(1, 20), a);
        g = g
          .substr(1)
          .split(/[\-T:]/)
          .map(function (a) {
            return parseFloat(a);
          });
        var h = new Date(Date.UTC(-g[0], g[1] - 1, g[2], g[3], g[4], g[5]));
      } else {
        N(g.substring(0, 19), a);
        var c = g.split(/[\-T:]/);
        g = g.split(/[\-T:]/).map(function (a) {
          return parseFloat(a);
        });
        h = g[5];
        h = new Date(
          Date.UTC(
            c[0],
            g[1] - 1,
            g[2],
            g[3],
            g[4],
            h,
            Math.round(1e3 * (h - Math.floor(h)))
          )
        );
        100 > g[0] && h.setUTCFullYear(c[0]);
      }
      h =
        "" === ua
          ? new Date(h.getTime() + 6e4 * new Date().getTimezoneOffset())
          : new Date(h.getTime() - 6e4 * ma(ua));
      return new u(h, ma(b[2] ? b[2] : ""), e);
    }
    function ma(a) {
      if ("" === a) return null;
      if ("Z" === a) return 0;
      var e = a.split(":"),
        b = parseInt(e[0], 10),
        ua = /^\-.*/.test(e[0]);
      b = Math.abs(b);
      e = parseInt(e[1], 10);
      if (14 < b || 59 < e) throw new q("Invalid timezone " + a, "FORG0001");
      return (ua ? -1 : 1) * (60 * b + e);
    }
    function xa(a, e) {
      var b = a.match(E[e]);
      (null !== b && /\d/.test(a) && !/T$/.test(a)) || k(a, e);
      return new L(V[Ga[e][0]](b, a), V[Ga[e][1]](b, a), e);
    }
    var Ja = {
      "integer<decimal": 1,
      "decimal<numeric": 1,
      "double<numeric": 1,
      "float<numeric": 1,
      "integer<numeric": 1,
      "dateTimeStamp<dateTime": 1,
    };
    K.prototype = {
      value: null,
      type: "string",
      Ok: 0,
      toString: function () {
        return this.value;
      },
      ab: function (a) {
        if (a instanceof K) return Ma.Xg(this.value, a.value);
        r(this.type, a.type);
      },
      ia: function (a) {
        return 0 === this.ab(a);
      },
      bc: function () {
        if (6 >= this.value.length) return this.value;
        var a = this.Ok,
          e = this.value.length;
        if (0 === a && 0 < e) {
          for (var b = 0; b < e; b++) a = 31 * a + this.value.charCodeAt(b++);
          this.Ok = a &= 16777215;
        }
        return w(a);
      },
      Gd: function () {
        return "s" + this.toString();
      },
    };
    A.prototype = {
      value: null,
      type: "hexBinary",
      toString: function () {
        if ("hexBinary" === this.type) var a = t(this.value);
        else {
          a = this.value;
          var e = 0,
            b = 0,
            g = [];
          if (a) {
            do {
              var h = a.charCodeAt(e++);
              var c = a.charCodeAt(e++);
              var f = a.charCodeAt(e++);
              var d = (h << 16) | (c << 8) | f;
              h = (d >> 18) & 63;
              c = (d >> 12) & 63;
              f = (d >> 6) & 63;
              d &= 63;
              g[b++] =
                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(
                  h
                ) +
                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(
                  c
                ) +
                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(
                  f
                ) +
                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(
                  d
                );
            } while (e < a.length);
            e = g.join("");
            a = a.length % 3;
            a = (a ? e.slice(0, a - 3) : e) + "===".slice(a || 3);
          }
        }
        return a;
      },
      ab: function (a) {
        if (a instanceof A && this.type === a.type)
          return Ma.Xg(this.value, a.value);
        r(this.type, a.type);
      },
      ia: function (a) {
        return 0 === this.ab(a);
      },
      bc: function () {
        return new K(this.value).bc();
      },
      Gd: function () {
        return ("hexBinary" === this.type ? "h" : "i") + this.toString();
      },
    };
    x.prototype = {
      value: 0,
      type: "double",
      toString: function () {
        if (0 === this.value) return 0 > 1 / this.value ? "-0" : "0";
        if (this.value === Number.POSITIVE_INFINITY) return "INF";
        if (this.value === Number.NEGATIVE_INFINITY) return "-INF";
        var a = this.value,
          e = Math.abs(a);
        if (1e6 <= e || 1e-6 > e) {
          a = a.toExponential();
          var b = a.indexOf("e");
          e = a.substring(0, b);
          a = a.substring(b + 1);
          "float" === this.type &&
            ((e = parseFloat(e)),
            (e = (0 > e ? e - 5e-8 : e + 5e-8).toString()),
            (b = e.indexOf(".")),
            (e = e.substring(0, b + 8)),
            (e = e.replace(/\.?0+$/, "")));
          e.includes(".") || (e += ".0");
          return e + "E" + a.replace("+", "");
        }
        return "float" === this.type && 0 !== a % 1
          ? ((a = (0 > a ? a - 5e-8 : a + 5e-8).toString()),
            (e = a.indexOf(".")),
            (a = a.substring(0, e + 6)),
            a.replace(/0+$/, ""))
          : a.toString();
      },
      ia: function (a) {
        return 0 === this.ab(a);
      },
      ab: function (a) {
        if (a.J)
          return (
            (a =
              "float" === this.type && Math.fround
                ? Math.fround(a.J())
                : a.J()),
            this.value < a ? -1 : this.value === a ? 0 : 1
          );
        r(this.type, a.type);
      },
      mk: function (a) {
        return a instanceof x || a instanceof e
          ? this.value === a.value || (isNaN(this.value) && isNaN(a.value))
          : a instanceof h
          ? aa.aa(this).ia(a)
          : !1;
      },
      bc: function () {
        return isNaN(this.value)
          ? "NaN"
          : isFinite(this.value)
          ? w(this.value)
          : 0 > this.value
          ? "-INF"
          : "INF";
      },
      Gd: function () {
        return "n" + this.bc();
      },
      J: function () {
        return this.value;
      },
      Jg: function () {
        return this;
      },
      abs: function () {
        return new x(Math.abs(this.value), this.type);
      },
      Gi: function () {
        return new x(-this.value, this.type);
      },
      yj: function () {
        return new x(Math.ceil(this.value), this.type);
      },
      floor: function () {
        return new x(Math.floor(this.value), this.type);
      },
      round: function (a) {
        0 === a
          ? (a = Math.round(this.value))
          : ((a = Math.pow(10, -a)), (a *= Math.round(this.value / a)));
        return new x(a, this.type);
      },
      Ri: function (a) {
        return isFinite(this.value)
          ? ((a = new h(Ha(this.value)).Ri(a)),
            0 === a.J() && 0 > this.value && (a = H.za.g("-0")),
            C.type[this.type].aa(a))
          : this;
      },
    };
    e.prototype = {
      value: 0,
      type: "integer",
      toString: function () {
        return this.value.toString();
      },
      ia: function (a) {
        return 0 === this.ab(a);
      },
      ab: function (a) {
        if (a.J) return this.value - a.J();
        r(this.type, a.type);
      },
      bc: function () {
        return w(this.value);
      },
      mk: function (a) {
        return a instanceof x || a instanceof e
          ? this.value === a.value
          : a instanceof h
          ? aa.aa(this).ia(a)
          : !1;
      },
      Gd: function () {
        return "n" + this.bc();
      },
      Jg: function () {
        return new x(this.value);
      },
      J: function () {
        return this.value;
      },
      Pa: function () {
        return new Ha(this.value);
      },
      abs: function () {
        return new e(Math.abs(this.value));
      },
      Gi: function () {
        return new e(-this.value);
      },
      yj: function () {
        return this;
      },
      floor: function () {
        return this;
      },
      round: function (a) {
        return 0 > a
          ? ((a = Math.pow(10, -a)), new e(Math.round(this.value / a) * a))
          : this;
      },
      Ri: function (a) {
        return 0 > a
          ? ((a = Math.pow(10, -a)),
            new e(parseInt(Ha(this.value).pd(a, 100, 2).round(0, 2).ke(a), 10)))
          : this;
      },
    };
    h.prototype = {
      value: null,
      type: "decimal",
      toString: function () {
        return this.value.toFixed();
      },
      ia: function (a) {
        return 0 === this.ab(a);
      },
      ab: function (a) {
        if (a instanceof h) return this.value.cmp(a.value);
        if (a.Pa) return this.value.cmp(a.Pa());
        if (a.Jg) return this.value.cmp(new Ha(a.Jg()));
        r(this.type, a.type);
      },
      bc: function () {
        var a = this.value;
        return a.Ei(Ha(1)).On() && a.abs().Qo()
          ? this.J().toString(36)
          : this.toString().substring(0, 8);
      },
      mk: function (a) {
        return a instanceof x || a instanceof e
          ? 0 === this.ab(aa.aa(a))
          : a instanceof h
          ? 0 === this.ab(a)
          : !1;
      },
      Gd: function () {
        return "n" + this.bc();
      },
      Pa: function () {
        return this.value;
      },
      Jg: function () {
        return new x(parseFloat(this.value.toFixed()));
      },
      J: function () {
        return parseFloat(this.value.toFixed());
      },
      abs: function () {
        return new h(this.value.abs(), this.type);
      },
      Gi: function () {
        var a = Ha(this.value);
        a.Aa = -a.Aa;
        return new h(a, "decimal" === this.type ? "decimal" : "integer");
      },
      yj: function () {
        return new h(this.value.round(0, 0 > this.value.Aa ? 0 : 3), this.type);
      },
      floor: function () {
        return new h(this.value.round(0, 0 > this.value.Aa ? 3 : 0), this.type);
      },
      round: function (a) {
        function e(a, e) {
          var b = new Ha(a);
          b.e += e;
          return b;
        }
        var b = this.value,
          g = 0;
        0 > a && ((g = a), (a = 0), (b = e(b, g)));
        var c = 0 < b.Aa ? Ha(0) : this.floor().abs();
        b = b.uh(c).round(a, 1).oh(c);
        0 !== g && (b = e(b, -g));
        return new h(b, "decimal" === this.type ? "decimal" : "integer");
      },
      Ri: function (a) {
        0 > a
          ? ((a = Ha(10).pow(-a)),
            (a = this.value.pd(a, 100, 2).round(0, 2).ke(a)))
          : (a = this.value.round(a, 2));
        return new h(a, "decimal" === this.type ? "decimal" : "integer");
      },
    };
    p.prototype = {
      value: null,
      type: "boolean",
      toString: function () {
        return this.value.toString();
      },
      ab: function (a) {
        if (a instanceof p) return (this.value ? 1 : 0) - (a.value ? 1 : 0);
        r(this.type, a.type);
      },
      ia: function (a) {
        return 0 === this.ab(a);
      },
      bc: function () {
        return this.value.toString();
      },
      Gd: function () {
        return "b" + this.toString();
      },
    };
    y.prototype = {
      prefix: null,
      uri: null,
      local: null,
      type: "QName",
      ha: function () {
        return "Q{" + this.uri + "}" + this.local;
      },
      toString: function () {
        return (0 < this.prefix.length ? this.prefix + ":" : "") + this.local;
      },
      ia: function (a) {
        a instanceof y || r(this.type, a.type);
        return a instanceof y && this.local === a.local && this.uri === a.uri;
      },
      ab: function () {
        throw new q("QNames are not ordered", "FORG0006");
      },
      bc: function () {
        return (
          this.uri.substring(this.uri.length - 3) + ":" + new K(this.local).bc()
        );
      },
      Gd: function () {
        return "q" + this.ha();
      },
      zf: function (a) {
        return this.uri === a;
      },
      me: function (a) {
        return new y(a, this.uri, this.local);
      },
    };
    u.prototype = {
      type: "dateTime",
      ub: null,
      timezoneOffset: null,
      proxy: function () {
        var a = new Date();
        return new Date(
          this.ub.getTime() +
            6e4 * (this.zb || 0 === this.zb ? this.zb : -a.getTimezoneOffset())
        );
      },
      jn: function (a) {
        a = a.substr(0, a.length - 1);
        if (0 === this.ub.getUTCMilliseconds()) a = a.replace(".000", "");
        else
          for (; "0" === a.charAt(a.length - 1); )
            a = a.substr(0, a.length - 1);
        a = a.replace(/^-0?0?/, "-");
        return (a = a.replace(/^\+0?0?/, ""));
      },
      toString: function () {
        var a = this.jn(this.proxy().toISOString()),
          e = "-" === a.charAt(0) ? 1 : 0;
        return (
          (function (b) {
            switch (b) {
              case "dateTime":
              case "dateTimeStamp":
                return a;
              case "date":
                return a.substring(0, 10 + e);
              case "time":
                return a.substring(11 + e);
              case "gYearMonth":
                return a.substring(0, 7 + e);
              case "gYear":
                return a.substring(0, 4 + e);
              case "gMonthDay":
                return "-" + a.substring(4 + e, 10 + e);
              case "gMonth":
                return "-" + a.substring(4 + e, 7 + e);
              case "gDay":
                return "--" + a.substring(7 + e, 10 + e);
              default:
                throw "type not recognised " + b;
            }
          })(this.type) + this.Xi()
        );
      },
      ab: function (a) {
        (/^g/.test(this.type) || /^g/.test(a.type)) && r(this.type, a.type);
        return this.Nk(a);
      },
      Nk: function (a) {
        if (a instanceof u && (c(a.type, this.type) || c(this.type, a.type)))
          return +this.ub.getTime() - a.ub.getTime();
        r(this.type, a.type);
      },
      ia: function (a) {
        return 0 === this.Nk(a);
      },
      bc: function () {
        return w(this.ub.getTime() - 1454346732296);
      },
      Gd: function () {
        return "t" + this.bc();
      },
      uj: function (a) {
        return H.dateTime.Sb(new Date(this.ub.getTime() + 6e4 * a), this.zb);
      },
      Vk: function (a) {
        var e = this.toString(),
          b = parseInt(e.substring(0, 4), 10),
          g = parseInt(e.substring(5, 7), 10),
          h = parseInt(e.substring(8, 10), 10);
        b += Math.floor((g + a - 1) / 12);
        a = ((g + a - 1) % 12) + 1;
        for (0 >= a && (a += 12); !Y([b, a, h, 0, 0, 0]); ) --h;
        return C.type[this.type].g(
          (0 > b
            ? "-" + (1e4 + -b).toString().substring(1)
            : (1e4 + b).toString().substring(1)) +
            "-" +
            (100 + a).toString().substring(1) +
            "-" +
            (100 + h).toString().substring(1) +
            e.substring(10)
        );
      },
      Xi: function () {
        var a = this.zb;
        if (a) {
          var e = Math.abs(a);
          return (
            (0 > a ? "-" : "+") +
            (100 + Math.floor(e / 60)).toString().substring(1) +
            ":" +
            (100 + (e % 60)).toString().substring(1)
          );
        }
        return 0 === a ? "Z" : "";
      },
    };
    L.prototype = {
      type: "duration",
      Eb: 0,
      wb: 0,
      gk: function () {
        function a(a, b) {
          b.forEach(function (b) {
            1e3 !== b ? (e.push(Math.floor(a / b)), (a %= b)) : e.push(a / b);
          });
        }
        var e = [];
        a(Math.abs(this.Eb), [12, 1]);
        a(Math.abs(this.wb), [864e5, 36e5, 6e4, 1e3]);
        return e;
      },
      nk: function () {
        var a = this.Eb + this.wb;
        return 0 > a ? -1 : 0 < a ? 1 : 0;
      },
      toString: function () {
        var a = this.nk();
        if (0 === a) var e = "yearMonthDuration" === this.type ? "P0M" : "PT0S";
        else
          (e = 0 > a ? "-P" : "P"),
            this.gk().forEach(function (a, b) {
              3 === b && (e += "T");
              0 !== a &&
                (e =
                  6 === b
                    ? e + (a / 1e3 + "S")
                    : e + (a + "YMDHMS".split("")[b]));
            }),
            (e = e.replace(/T$/, ""));
        return e;
      },
      ab: function (a) {
        if (a instanceof L) {
          if (H.ed.matches(this) && H.ed.matches(a)) return this.Eb - a.Eb;
          if (H.ac.matches(this) && H.ac.matches(a)) return this.wb - a.wb;
          throw new q(
            "Cannot compare durations that mix months and seconds",
            "XPTY0004"
          );
        }
        r(this.type, a.type);
      },
      ia: function (a) {
        a instanceof L || r(this.type, a.type);
        return a instanceof L && this.Eb === a.Eb && this.wb === a.wb;
      },
      bc: function () {
        return this.Eb.toString() + ":" + this.wb.toString();
      },
      Gd: function () {
        return "d" + this.bc();
      },
    };
    var za = {
        name: "anyAtomicType",
        code: "A",
        matches: function (a) {
          return (
            a instanceof K ||
            a instanceof h ||
            a instanceof e ||
            a instanceof x ||
            a instanceof A ||
            a instanceof p ||
            a instanceof L ||
            a instanceof u ||
            a instanceof y
          );
        },
      },
      Ka = {
        name: "untypedAtomic",
        code: "AZ",
        g: function (a) {
          return new K(a, "untypedAtomic");
        },
        matches: function (a) {
          return "untypedAtomic" === a.type;
        },
        aa: function (a) {
          return new K(a.toString(), "untypedAtomic");
        },
      },
      Va = {
        name: "string",
        code: "AS",
        g: function (a) {
          return new K(a, "string");
        },
        matches: function (a) {
          return c(a.type, "string");
        },
        aa: function (a) {
          return new K(a.toString(), "string");
        },
        Fe: function (a) {
          return a instanceof K;
        },
      },
      Ba = {
        name: "anyURI",
        code: "AU",
        g: function (a) {
          a = a.replace(/[ \r\t\n]+/g, " ").replace(/^[ ]|[ ]$/g, "");
          return new K(a, "anyURI");
        },
        matches: function (a) {
          return "anyURI" === a.type;
        },
        aa: function (a) {
          if (a instanceof K) return H.kc.g(a.toString());
          f(a, "anyURI");
        },
      },
      ja = {
        name: "double",
        code: "AO",
        g: function (a) {
          return new x(v(a, !0));
        },
        oi: function (a) {
          return new x(v(a, !1));
        },
        fa: function (a) {
          return new x(a);
        },
        matches: function (a) {
          return "double" === a.type;
        },
        aa: function (a) {
          if (null === a || "undefined" == typeof a) return H.za.fa(NaN);
          if (H.T.matches(a) || H.Ua.matches(a)) return H.za.g(a.toString());
          if (H.numeric.matches(a)) return H.za.fa(a.J());
          if (H.Ea.matches(a)) return H.za.fa(a.value ? 1 : 0);
          if ("number" === typeof a) return H.za.fa(a);
          f(a, "double");
        },
        NaN: null,
      };
    ja.NaN = ja.fa(NaN);
    var aa = {
        name: "decimal",
        code: "AD",
        g: function (a) {
          a = Na.trim(a).replace(/^\+/, "");
          if (/^[-+]?([0-9]+(\.[0-9]*)?|\.[0-9]+)$/.test(a))
            return new h(new Ha(a));
          k(a, "decimal");
        },
        wc: function (a) {
          return new h(a);
        },
        fa: function (a) {
          isFinite(a) || k(a, "decimal", null, "FOCA0002");
          return new h(new Ha(a));
        },
        matches: function (a) {
          return a instanceof h || a instanceof e;
        },
        aa: function (a) {
          if (H.od.matches(a)) return new h(a.value, "decimal");
          if (H.T.matches(a) || H.Ua.matches(a)) return H.od.g(a.toString());
          if (H.numeric.matches(a)) return H.od.fa(a.J());
          if (H.Ea.matches(a)) return H.od.g(a.value ? "1" : "0");
          f(a, "decimal");
        },
      },
      ra = {
        name: "float",
        code: "AF",
        g: function (a) {
          return H.qd.fa(v(a, !0));
        },
        fa: function (a) {
          Math.fround && (a = Math.fround(a));
          return new x(a, "float");
        },
        matches: function (a) {
          return "float" === a.type;
        },
        aa: function (a) {
          return H.qd.fa(H.za.aa(a).J());
        },
      },
      Z = {
        name: "boolean",
        code: "AB",
        cf: new p(!0),
        Qg: new p(!1),
        g: function (a) {
          switch (Na.trim(a)) {
            case "true":
            case "1":
              return this.cf;
            case "false":
            case "0":
              return this.Qg;
            default:
              k(a, "boolean");
          }
        },
        Dd: function (a) {
          return a ? this.cf : this.Qg;
        },
        matches: function (a) {
          return a instanceof p;
        },
        aa: function (a) {
          if (H.T.matches(a) || H.Ua.matches(a)) return H.Ea.g(a.toString());
          if (H.numeric.matches(a))
            return H.Ea.Dd(0 !== a.J() && !isNaN(a.J()));
          if (H.Ea.matches(a)) return a;
          if ("boolean" === typeof a) return H.Ea.Dd(a);
          f(a, "boolean");
        },
      },
      U = {
        name: "integer",
        code: "ADI",
        Bb: "decimal",
        matches: function (a) {
          return c(a.type, "integer");
        },
        g: function (a) {
          if (/^\s*[-+]?[0-9]+\s*$/.test(a))
            return 9 < a.length ? new h(a, "integer") : new e(parseInt(a, 10));
          k(a, "integer");
        },
        fa: function (a) {
          isFinite(a) || k(a, "integer", null, "FOCA0002");
          a = Math.trunc(a);
          if (Math.abs(a) > Number.MAX_SAFE_INTEGER)
            throw new q(
              "Integer constant '" + a + "' out of range",
              "FOCA0003"
            );
          return new e(a);
        },
        wc: function (a) {
          return new h(a, "integer");
        },
        valid: function (a) {
          return 0 === a.value.Ei(1);
        },
        aa: function (a) {
          if (H.T.matches(a) || H.Ua.matches(a)) return H.Ma.g(a.toString());
          if (H.numeric.matches(a)) return H.Ma.fa(a.J());
          if (H.Ea.matches(a)) return H.Ma.fa(a.value ? 1 : 0);
          f(a, "integer");
        },
        Bq: function (a) {
          return "number" === typeof a
            ? H.Ma.fa(a)
            : "boolean" === typeof a
            ? H.Ma.fa(a ? 1 : 0)
            : "string" === typeof a
            ? H.Ma.g(a)
            : H.Ma.g(a.toString());
        },
      },
      X = {
        name: "numeric",
        code: "Anumeric",
        cr: ["double", "decimal", "float"],
        matches: function (a) {
          return a instanceof x || a instanceof e || a instanceof h;
        },
        aa: function (a) {
          if (H.T.matches(a) || H.Ua.matches(a)) return H.za.g(a.toString());
          if (H.numeric.matches(a)) return a;
          if (H.Ea.matches(a)) return H.za.fa(a.value ? 1 : 0);
          f(a, "numeric");
        },
        qh: function (a) {
          var e = H.za;
          if (null === a) return e.fa(Number.NaN);
          if (H.Ea.matches(a)) return e.fa(a.value ? 1 : 0);
          if (H.numeric.matches(a)) return e.aa(a);
          if (H.T.matches(a) || H.Ua.matches(a))
            try {
              return e.g(a.toString());
            } catch (Za) {
              return e.fa(Number.NaN);
            }
          else return e.fa(Number.NaN);
        },
      },
      T = {
        name: "QName",
        code: "AQ",
        matches: function (a) {
          return a instanceof y;
        },
        xa: function (a, e, b) {
          return new y(a, e, b);
        },
        g: function (a, e) {
          a = Na.trim(a);
          if ("Q{" === a.substring(0, 2)) return H.X.rb(a);
          Na.Wl(a) || k(a, "QName");
          var b = a.split(":");
          if (1 === b.length) return H.X.xa("", e(""), b[0]);
          var g = e(b[0]);
          if (null === g) throw new q("Undeclared prefix: " + b[0], "FONS0004");
          return H.X.xa(b[0], g, b[1]);
        },
        rb: function (a) {
          var e = a.indexOf("{"),
            b = a.indexOf("}");
          e = Ma.dd(a.substring(e + 1, b));
          if ("http://www.w3.org/2000/xmlns/" === e)
            throw new q("Use of reserved namespace: " + e, "XQST0070");
          return H.X.xa("", e, a.substring(b + 1));
        },
        aa: function (a, e) {
          if (H.T.matches(a) || H.Ua.matches(a)) {
            if (e) return H.X.g(a.toString(), e);
            throw new q(
              "Casting to QName requires a namespace resolver",
              "XPTY0117"
            );
          }
          if (H.X.matches(a)) return a;
          f(a, "QName");
        },
      },
      oa = {
        name: "notation",
        code: "AN",
        g: function (a) {
          return this.aa(a);
        },
        matches: function () {
          return !1;
        },
        aa: function () {
          throw new q("Casting to xs:NOTATION is not possible", "XPST0080");
        },
      },
      ka = {
        name: "dateTime",
        code: "AM",
        matches: function (a) {
          return c(a.type, "dateTime");
        },
        g: function (a) {
          return S(a, "dateTime");
        },
        Sb: function (a, e) {
          return new u(a, void 0 === e ? null : e, "dateTime");
        },
        aa: function (a) {
          if (H.dateTime.matches(a)) return a;
          if (H.nd.matches(a)) return H.dateTime.Sb(a.ub, a.zb);
          if (H.T.matches(a) || H.Ua.matches(a))
            return H.dateTime.g(a.toString());
          f(a, "dateTime");
        },
      },
      Ya = {
        name: "date",
        code: "AA",
        matches: function (a) {
          return a instanceof u && "date" === a.type;
        },
        g: function (a) {
          return S(a, "date");
        },
        Sb: function (a, e) {
          var b = new u(a, e, "date").toString(),
            g = "-" === b.charAt(0) ? 11 : 10;
          b = H.dateTime.g(b.substring(0, g) + "T00:00:00" + b.substring(g));
          return new u(b.ub, e, "date");
        },
        aa: function (a) {
          if (H.nd.matches(a)) return a;
          if (H.dateTime.matches(a)) return H.nd.Sb(a.ub, a.zb);
          if (H.T.matches(a) || H.Ua.matches(a)) return H.nd.g(a.toString());
          f(a, "date");
        },
      },
      Fa = {
        name: "time",
        code: "AT",
        matches: function (a) {
          return a instanceof u && "time" === a.type;
        },
        g: function (a) {
          return S(a, "time");
        },
        Sb: function (a, e) {
          var b = new u(a, e, "time");
          b = H.dateTime.g("1972-01-01T" + b.toString());
          return new u(b.ub, e, "time");
        },
        aa: function (a) {
          if (H.time.matches(a)) return a;
          if (H.dateTime.matches(a)) return H.time.Sb(a.ub, a.zb);
          if (H.T.matches(a) || H.Ua.matches(a)) return H.time.g(a.toString());
          f(a, "time");
        },
      },
      ia = {
        name: "dateTimeStamp",
        code: "AMP",
        matches: function (a) {
          return a instanceof u && "dateTimeStamp" === a.type;
        },
        g: function (a) {
          return S(a, "dateTimeStamp");
        },
        Sb: function (a, e) {
          return new u(a, e, "dateTimeStamp");
        },
        aa: function (a) {
          if (H.cg.matches(a)) return a;
          if (H.dateTime.matches(a) || H.nd.matches(a))
            return H.cg.Sb(a.ub, a.zb);
          if (H.T.matches(a) || H.Ua.matches(a)) return H.cg.g(a.toString());
          f(a, "dateTimeStamp");
        },
      },
      Ia = {
        name: "duration",
        code: "AR",
        matches: function (a) {
          return c(a.type, "duration");
        },
        g: function (a) {
          return xa(a, "duration");
        },
        rd: function (a, e) {
          return new L(a, e, "duration");
        },
        aa: function (a) {
          if (H.duration.matches(a)) return a;
          if (H.T.matches(a) || H.Ua.matches(a))
            return H.duration.g(a.toString());
          f(a, "duration");
        },
      },
      la = {
        name: "hexBinary",
        code: "AX",
        matches: function (a) {
          return "hexBinary" === a.type;
        },
        g: function (a) {
          return new A(g(a), "hexBinary");
        },
        aa: function (a) {
          if (a instanceof A) return new A(a.value, "hexBinary");
          if (H.T.matches(a) || H.Ua.matches(a))
            return new A(g(a.toString()), "hexBinary");
          f(a, "hexBinary");
        },
      },
      La = {
        name: "base64Binary",
        code: "A2",
        matches: function (a) {
          return "base64Binary" === a.type;
        },
        g: function (a) {
          return new A(z(a), "base64Binary");
        },
        Nn: function (a) {
          return new A(a, "base64Binary");
        },
        aa: function (a) {
          if (a instanceof A) return new A(a.value, "base64Binary");
          if (H.T.matches(a) || H.Ua.matches(a))
            return new A(z(a.toString()), "base64Binary");
          f(a, "base64Binary");
        },
      },
      M = {
        anyAtomicType: za,
        untypedAtomic: Ka,
        string: Va,
        anyURI: Ba,
        double: ja,
        decimal: aa,
        float: ra,
        boolean: Z,
        integer: U,
        NOTATION: oa,
        numeric: X,
        QName: T,
        dateTime: ka,
        date: Ya,
        time: Fa,
        dateTimeStamp: ia,
        duration: Ia,
        hexBinary: la,
        base64Binary: La,
      },
      Qa = {},
      E = {
        dateTime:
          /^\s*(-?(?:[1-9][0-9]{4,}|[0-9]{4})-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}(?:\.[0-9]+)?)(Z|(\+|-)[0-9]{2}:[0-9]{2})?\s*$/,
        date: /^\s*(-?(?:[1-9][0-9]{4,}|[0-9]{4})-[0-9]{2}-[0-9]{2})(Z|(\+|-)[0-9]{2}:[0-9]{2})?\s*$/,
        time: /^\s*([0-9]{2}:[0-9]{2}:[0-9]{2}(?:\.[0-9]+)?)(Z|(\+|-)[0-9]{2}:[0-9]{2})?\s*$/,
        dateTimeStamp:
          /^\s*(-?[0-9]+-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}(?:\.[0-9]+)?)(Z|(\+|-)[0-9]{2}:[0-9]{2})\s*$/,
        gYearMonth:
          /^\s*(-?(?:[1-9][0-9]{4,}|[0-9]{4})-[0-9]{2})(Z|(\+|-)[0-9]{2}:[0-9]{2})?\s*$/,
        gYear:
          /^\s*(-?[1-9][0-9]{4,}|-?[0-9]{4})(Z|(\+|-)[0-9]{2}:[0-9]{2})?\s*$/,
        gMonthDay: /^\s*--([0-9]{2}-[0-9]{2})(Z|(\+|-)[0-9]{2}:[0-9]{2})?\s*$/,
        gMonth: /^\s*--([0-9]{2})(Z|(\+|-)[0-9]{2}:[0-9]{2})?\s*$/,
        gDay: /^\s*---([0-9]{2})(Z|(\+|-)[0-9]{2}:[0-9]{2})?\s*$/,
        duration:
          /^\s*\-?P(?:([0-9]+)Y)?(?:([0-9]+)M)?(?:([0-9]+)D)?(?:T(?:([0-9]+)H)?(?:([0-9]+)M)?(?:([0-9]+(?:\.[0-9]*)?)S)?)?\s*$/,
        dayTimeDuration:
          /^\s*\-?P(?:([0-9]+)D)?(?:T(?:([0-9]+)H)?(?:([0-9]+)M)?(?:([0-9]+(?:\.[0-9]*)?)S)?)?\s*$/,
        yearMonthDuration: /^\s*\-?P(?:([0-9]+)Y)?(?:([0-9]+)M)?\s*$/,
      },
      bb = {
        dateTime: function (a) {
          return fa(a);
        },
        date: function (a) {
          return a + "T00:00:00";
        },
        time: function (a) {
          return "1972-01-01T" + fa(a);
        },
        dateTimeStamp: function (a) {
          return fa(a);
        },
        gYearMonth: function (a) {
          return a + "-01T00:00:00";
        },
        gYear: function (a) {
          return a + "-01-01T00:00:00";
        },
        gMonthDay: function (a) {
          return "1972-" + a + "T00:00:00";
        },
        gMonth: function (a) {
          return "1972-" + a + "-01T00:00:00";
        },
        gDay: function (a) {
          return "1972-01-" + a + "T00:00:00";
        },
      },
      V = [
        function (a, e) {
          return b(m(a[1], 12) + m(a[2], 1), e.match(/^\s*\-.*/));
        },
        function (a, e) {
          return b(
            m(a[3], 864e5) + m(a[4], 36e5) + m(a[5], 6e4) + d(a[6], 1),
            e.match(/^\s*\-.*/)
          );
        },
        function (a, e) {
          return b(
            m(a[1], 864e5) + m(a[2], 36e5) + m(a[3], 6e4) + d(a[4], 1),
            e.match(/^\s*\-.*/)
          );
        },
        function () {
          return 0;
        },
      ],
      Ga = {
        duration: [0, 1],
        dayTimeDuration: [3, 2],
        yearMonthDuration: [0, 3],
      },
      H = {
        wj: za,
        kc: Ba,
        Yk: La,
        Ea: Z,
        nd: Ya,
        dateTime: ka,
        cg: ia,
        ac: null,
        od: aa,
        za: ja,
        duration: Ia,
        qd: ra,
        Dl: null,
        El: null,
        Fl: null,
        Gl: null,
        Hl: null,
        po: la,
        Ma: U,
        language: null,
        Dk: null,
        jq: oa,
        numeric: X,
        X: T,
        T: Va,
        time: Fa,
        Ua: Ka,
        ed: null,
      };
    return {
      ff: a,
      Ga: function (a) {
        return za.matches(a);
      },
      Xl: c,
      pp: l,
      Wj: function (a, e, b, g) {
        if (a instanceof h || e instanceof h) return U.wc(g(a.Pa(), e.Pa()));
        b = b(a.J(), e.J());
        return Math.abs(b) < Math.pow(2, 52)
          ? U.fa(b)
          : U.wc(g(a.Pa(), e.Pa()));
      },
      lk: function (a, e) {
        if (C.type[e].matches(a)) return a;
        if (
          H.od.matches(a)
            ? "decimal" === e || "float" === e || "double" === e
            : H.qd.matches(a) && ("float" === e || "double" === e)
        )
          return C.type[e].aa(a);
        throw new q(
          "Incompatible operands: " +
            a.type +
            " (" +
            a.toString() +
            ") and " +
            e,
          "XPTY0004"
        );
      },
      type: M,
      te: Qa,
      O: H,
    };
  })();
  var Pa = (function () {
    function a(a) {
      return Math.abs(a) < Math.pow(2, 52);
    }
    function b(a, b) {
      return v.matches(a) && v.matches(b) ? v : r;
    }
    function d(a) {
      throw new q("Division by zero", void 0 === a ? "FOAR0001" : a);
    }
    function m(a) {
      throw new q("Numeric overflow/underflow", void 0 === a ? "FOAR0002" : a);
    }
    function c(a, b, c) {
      throw new q(
        "Arithmetic operation '" +
          c +
          "' not available for operands " +
          a.type +
          " and " +
          b.type,
        "XPTY0004"
      );
    }
    function l(a, b, d) {
      function g(a) {
        return f.dateTime.matches(a) || f.nd.matches(a) || f.time.matches(a);
      }
      var t = f.Ua,
        e = f.ac,
        h = f.ed;
      if (t.matches(a)) return (a = f.za.g(a.value)), l(a, b, d);
      if (t.matches(b)) return (b = f.za.g(b.value)), l(a, b, d);
      if ((e.matches(a) || h.matches(a)) && f.numeric.matches(b)) {
        var p = "u" + d + "n";
        var y = a.type;
        var u = b.type;
      } else
        (e.matches(b) || h.matches(b)) && f.numeric.matches(a)
          ? ((p = "n" + d + "u"), (y = a.type), (u = b.type))
          : v.matches(a) && v.matches(b)
          ? ((p = "i" + d + "i"), (y = u = "integer"))
          : k.matches(a) || k.matches(b)
          ? ((p = "d" + d + "d"), (y = u = "double"))
          : w.matches(a) || w.matches(b)
          ? ((p = "f" + d + "f"), (y = u = "float"))
          : r.matches(a) || r.matches(b)
          ? ((p = "c" + d + "c"), (y = u = "decimal"))
          : g(a) && g(b)
          ? ((p = "t" + d + "t"), (y = a.type), (u = b.type))
          : g(a) && (e.matches(b) || h.matches(b))
          ? ((p = "t" + d + "u"), (y = a.type), (u = b.type))
          : (e.matches(a) || h.matches(a)) && g(b)
          ? ((p = "u" + d + "t"), (y = a.type), (u = b.type))
          : (e.matches(a) && e.matches(b)) || (h.matches(a) && h.matches(b))
          ? ((p = "u" + d + "u"), (y = u = a.type))
          : c(d, a, b);
      z[p] || c(d, a, b);
      return z[p](C.lk(a, y), C.lk(b, u));
    }
    var f = C.O,
      k = f.za,
      r = f.od,
      v = f.Ma,
      w = f.qd,
      z = {
        "d+d": function (a, b) {
          var g = a.J(),
            c = b.J();
          return k.fa(g + c);
        },
        "d-d": function (a, b) {
          var g = a.J(),
            c = b.J();
          return k.fa(g - c);
        },
        "d*d": function (a, b) {
          var g = a.J(),
            c = b.J();
          return k.fa(g * c);
        },
        "d/d": function (a, b) {
          var g = a.J(),
            c = b.J();
          return k.fa(g / c);
        },
        "d%d": function (a, b) {
          var g = a.J(),
            c = b.J();
          return !isFinite(g) || isNaN(c) || 0 === c
            ? k.fa(NaN)
            : isFinite(c) && 0 !== g
            ? k.fa(g % c)
            : a;
        },
        "d~d": function (b, g) {
          var c = b.J(),
            f = g.J();
          0 === f && d();
          ((!isFinite(c) && isFinite(f)) || isNaN(c) || isNaN(f)) && m();
          c = Math.trunc(c / f);
          isFinite(c) || m();
          return a(c) ? v.fa(c) : k.fa(c);
        },
        "f+f": function (a, b) {
          var g = a.J(),
            c = b.J();
          return w.fa(g + c);
        },
        "f-f": function (a, b) {
          var g = a.J(),
            c = b.J();
          return w.fa(g - c);
        },
        "f*f": function (a, b) {
          var g = a.J(),
            c = b.J();
          return w.fa(g * c);
        },
        "f/f": function (a, b) {
          var g = a.J(),
            c = b.J();
          return w.fa(g / c);
        },
        "f%f": function (a, b) {
          var g = a.J(),
            c = b.J();
          if (!isFinite(g) || isNaN(c) || 0 === c) return w.fa(NaN);
          if (!isFinite(c) || 0 === g) return a;
          g %= c;
          isFinite(g) || d();
          return w.fa(g);
        },
        "f~f": function (b, g) {
          var c = b.J(),
            f = g.J();
          0 === f && d();
          ((!isFinite(c) && isFinite(f)) || isNaN(c) || isNaN(f)) && m();
          c = Math.trunc(c / f);
          isFinite(c) || m();
          return a(c) ? v.fa(c) : w.fa(c);
        },
        "i+i": function (a, b) {
          return C.Wj(
            a,
            b,
            function (a, b) {
              return a + b;
            },
            function (a, b) {
              return a.uh(b);
            }
          );
        },
        "i-i": function (a, b) {
          return C.Wj(
            a,
            b,
            function (a, b) {
              return a - b;
            },
            function (a, b) {
              return a.oh(b);
            }
          );
        },
        "i*i": function (a, b) {
          return C.Wj(
            a,
            b,
            function (a, b) {
              return a * b;
            },
            function (a, b) {
              return a.ke(b);
            }
          );
        },
        "i/i": function (a, b) {
          b.ia(C.O.Ma.fa(0)) && d();
          var g = a.Pa(),
            c = b.Pa();
          return r.wc(g.pd(c));
        },
        "i%i": function (b, g) {
          var c = b.J(),
            f = g.J();
          if (!isFinite(c) || isNaN(f) || 0 === f)
            return 0 === f && d(), v.fa(NaN);
          if (!isFinite(f) || 0 === c) return b;
          c = b.J() % g.J();
          isFinite(c) || d();
          return a(c) ? v.fa(c) : v.wc(Ha(b.Pa().Ei(g.Pa())));
        },
        "i~i": function (b, c) {
          var g = b.J() / c.J();
          isFinite(g) || d();
          return a(g)
            ? v.fa(Math.trunc(g))
            : v.wc(Ha(b.Pa().pd(c.Pa())).round(0, 0));
        },
        "c+c": function (a, c) {
          var g = a.Pa(),
            f = c.Pa();
          return b(a, c).wc(g.uh(f));
        },
        "c-c": function (a, c) {
          var g = a.Pa(),
            f = c.Pa();
          return b(a, c).wc(g.oh(f));
        },
        "c*c": function (a, c) {
          var g = a.Pa(),
            f = c.Pa();
          return b(a, c).wc(g.ke(f));
        },
        "c/c": function (a, b) {
          try {
            var c = a.Pa(),
              g = b.Pa();
            return r.wc(c.pd(g));
          } catch (x) {
            d();
          }
        },
        "c%c": function (a, b) {
          try {
            var c = a.Pa(),
              g = b.Pa();
            return r.wc(c.Ei(g));
          } catch (x) {
            d();
          }
        },
        "c~c": function (b, c) {
          try {
            var g = b.Pa(),
              f = c.Pa(),
              k = g.pd(f).round(0, 0);
            return a(k) ? v.fa(k) : r.wc(k);
          } catch (e) {
            d();
          }
        },
        "a+a": function (a, b) {
          return l(a, b, "+");
        },
        "a-a": function (a, b) {
          return l(a, b, "-");
        },
        "a*a": function (a, b) {
          return l(a, b, "*");
        },
        "a/a": function (a, b) {
          return l(a, b, "/");
        },
        "a%a": function (a, b) {
          return l(a, b, "%");
        },
        "a~a": function (a, b) {
          return l(a, b, "~");
        },
        "u+u": function (a, b) {
          var g = f.ac,
            d = f.ed;
          (g.matches(a) && g.matches(b)) ||
            (d.matches(a) && d.matches(b)) ||
            c(a, b, "+");
          return d.matches(a) ? d.rd(a.Eb + b.Eb, 0) : g.rd(0, a.wb + b.wb);
        },
        "u-u": function (a, b) {
          var g = f.ac,
            d = f.ed;
          (g.matches(a) && g.matches(b)) ||
            (d.matches(a) && d.matches(b)) ||
            c(a, b, "-");
          return d.matches(a) ? d.rd(a.Eb - b.Eb, 0) : g.rd(0, a.wb - b.wb);
        },
        "u*n": function (a, b) {
          var g = f.ac,
            d = f.ed;
          g.matches(a) || d.matches(a) || c(a, b, "*");
          var r = b.J();
          if (!isFinite(r))
            throw new q(
              "Cannot multiply duration by " + isNaN(r) ? "NaN" : "+/-INF",
              isNaN(r) ? "FOCA0005" : "FODT0002"
            );
          return d.matches(a)
            ? d.rd(Math.round(a.Eb * r), 0)
            : g.rd(0, Math.round(a.wb * r));
        },
        "n*u": function (a, b) {
          return Pa["u*n"](b, a);
        },
        "u/n": function (a, b) {
          var g = f.ac,
            r = f.ed;
          g.matches(a) || r.matches(a) || c(a, b, "/");
          var k = b.J();
          0 === k && d("FODT0002");
          if (isNaN(k))
            throw new q("Cannot divide duration by NaN", "FOCA0005");
          k = r.matches(a) ? a.Eb / k : a.wb / k;
          isFinite(k) || m("FODT0002");
          return r.matches(a) ? r.rd(Math.round(k), 0) : g.rd(0, Math.round(k));
        },
        "u/u": function (a, b) {
          var g = f.ac,
            k = f.ed;
          (g.matches(a) && g.matches(b)) ||
            (k.matches(a) && k.matches(b)) ||
            c(a, b, "/");
          g = new Ha(0);
          var x = new Ha(k.matches(a) ? a.Eb : a.wb);
          k = new Ha(k.matches(b) ? b.Eb : b.wb);
          0 === k.cmp(g) && d();
          try {
            return r.wc(x.pd(k));
          } catch (e) {
            m();
          }
        },
        "t+u": function (a, b) {
          var g = f.ac,
            d = f.ed;
          g.matches(b) || d.matches(b) || c(a, b, "+");
          return g.matches(b)
            ? C.type[a.type].Sb(new Date(a.ub.getTime() + b.wb), a.zb)
            : a.Vk(b.Eb);
        },
        "u+t": function (a, b) {
          return Pa["t+u"](b, a);
        },
        "t-u": function (a, b) {
          var g = f.ac,
            d = f.ed;
          g.matches(b) || d.matches(b) || c(a, b, "-");
          return g.matches(b)
            ? C.type[a.type].Sb(new Date(a.ub.getTime() - b.wb), a.zb)
            : a.Vk(-b.Eb);
        },
        "t-t": function (a, b) {
          return f.ac.rd(0, a.ub.getTime() - b.ub.getTime());
        },
      };
    return z;
  })();
  function Ra(a) {
    function b() {
      function l(b) {
        throw new q("In alphaCode '" + a + "' @ " + m + ": " + b);
      }
      function f(b) {
        var c = m >= a.length ? -1 : a.charAt(m++);
        c !== b && l("Expected '" + b + "', found '" + c + "'");
      }
      function k() {
        for (var b = 0, c = m; m < a.length; )
          switch (a.charAt(m++)) {
            case "{":
              b++;
              break;
            case "}":
              b--;
              break;
            case "]":
            case ",":
              if (0 === b) return a.substring(c, --m);
              break;
            case " ":
              if (0 === b) return a.substring(c, m - 1);
          }
        return a.substring(c, m);
      }
      "string" !== typeof a && B.ra("No input to alphaParser");
      var r = {};
      c.push(m);
      var v = a.charAt(m);
      /[01+?*]/.test(v) ? (m++, d.Fg(r, "o", v)) : d.Fg(r, "o", "1");
      if ((v = k()) && !/^[ANFE]/.test(v))
        throw B.ra("Invalid alphaCode '" + a + "'");
      for (d.Fg(r, "p", v); m < a.length; )
        switch (((v = a.charAt(m)), v)) {
          case "]":
          case ",":
            return (v = a.substring(c.pop(), m)), d.Fg(r, "code", v), r;
          case " ":
            m++;
            break;
          case "n":
          case "c":
            m++;
            var w = k();
            /^~/.test(w) &&
              (w = "Q{http://www.w3.org/2001/XMLSchema}" + w.substring(1));
            d.Fg(r, v, w);
            break;
          case "k":
          case "r":
          case "v":
          case "e":
            m++;
            f("[");
            w = b();
            f("]");
            d.Hp(r, v, w);
            break;
          case "a":
          case "m":
          case "u":
          case "i":
          case "d":
            m++;
            f("[");
            w = [];
            if ("]" === a.charAt(m)) m++, d.wm(r, v, w);
            else
              for (;;) {
                var z = b();
                w.push(z);
                if ("," === a.charAt(m)) m++;
                else {
                  f("]");
                  d.wm(r, v, w);
                  break;
                }
              }
            break;
          case "t":
            l("Tuple types not yet implemented");
            break;
          default:
            l("Expected one of n|c|t|k|r|v|a|u, found '" + v + "'");
        }
      v = a.substring(c.pop(), m);
      d.Fg(r, "code", v);
      c.pop();
      return r;
    }
    var d = Sa,
      m = 0,
      c = [];
    this.mp = b;
  }
  var Sa = {
    $q: function () {
      return {};
    },
    Fg: function (a, b, d) {
      a[b] = d;
    },
    Hp: function (a, b, d) {
      a[b] = d;
    },
    wm: function (a, b, d) {
      a[b] = d;
    },
  };
  function Ua(a) {
    return new Ra(a).mp();
  }
  function Wa(a) {
    var b = (a.o || "1") + a.p;
    a.n && (b += " n" + a.n);
    a.c && (b += " c" + a.c);
    a.k && (b += " k[" + Wa(a.k) + "]");
    a.v && (b += " v[" + Wa(a.v) + "]");
    a.r && (b += " r[" + Wa(a.r) + "]");
    if (a.a) {
      b += " a";
      for (var d = 0; d < a.a.length; d++)
        b += (0 === d ? "[" : ",") + Wa(a.a[d]);
      b += "]";
    }
    if (a.m) {
      b += " m";
      for (d = 0; d < a.m.length; d++) b += (0 === d ? "[" : ",") + Wa(a.m[d]);
      b += "]";
    }
    return b;
  }
  function Xa(a, b) {
    if (a.startsWith(b)) return b;
    if (b.startsWith(a)) return a;
    for (var d = Math.min(a.length, b.length); 0 < d; ) {
      if (a.substring(0, d) === b.substring(0, d)) return a.substring(0, d);
      d--;
    }
    return "";
  }
  var D = (function () {
    function a() {}
    function b(a) {
      if (!(this instanceof b)) return new b(a);
      this.gf = a;
    }
    function d(a) {
      if (!(this instanceof d)) return new d(a);
      Array.isArray(a) ||
        B.ra("ForArray expects array. Supplied value: " + B.oa(a));
      this.df = a;
    }
    function m(a, b) {
      if (!(this instanceof m)) return new m(a, b);
      this.Pb = a;
      (this.Qk = b) || B.ra("Filter iterator undefined predicate");
    }
    function c(a, b) {
      if (!(this instanceof c)) return new c(a, b);
      this.Pb = a;
      this.Wf = b;
    }
    function l(a, b) {
      if (!(this instanceof l)) return new l(a, b);
      this.Pb = a;
      ("object" === typeof a && "next" in a) || B.ra("Base not an iterator");
      this.Wf = b;
    }
    function f(a, b) {
      if (!(this instanceof f)) return new f(a, b);
      this.Xh = a;
      this.Tk = b;
    }
    function k(a) {
      if (!(this instanceof k)) return new k(a);
      Array.isArray(a) || B.ra("Join iterator expects array");
      this.Uh = a;
    }
    function r(a, b, c) {
      if (!(this instanceof r)) return new r(a, b, c);
      this.Qb = D.fd(a);
      this.Wb = D.fd(b);
      this.se = c;
    }
    function v(a, b, c) {
      if (!(this instanceof v)) return new v(a, b, c);
      this.Qb = D.fd(a);
      this.Wb = D.fd(b);
      this.se = c;
    }
    function w(a, b, c) {
      if (!(this instanceof w)) return new w(a, b, c);
      this.Qb = D.fd(a);
      this.Wb = D.fd(b);
      this.se = c;
    }
    function z(a) {
      if ("peek" in a) return a;
      if (!(this instanceof z)) return new z(a);
      this.Pb = a;
      this.rj = a.next();
    }
    function t(a) {
      if (!(this instanceof t)) return new t(a);
      this.Pb = a;
    }
    function g(a) {
      if (!(this instanceof g)) return new g(a);
      this.current = a;
    }
    function K(a, b) {
      if (!(this instanceof K)) return new K(a, b);
      Array.isArray(a) || B.ra("Block iterator expects array");
      this.Th = a.slice();
      this.Tg = null;
      this.Yb = b;
    }
    var A = C.O;
    a.prototype = {
      filter: function (a) {
        return new m(this, a);
      },
      Ia: function (a) {
        return new l(this, a);
      },
      Ya: function (a) {
        return new c(this, a);
      },
      sa: function (a) {
        for (var e; null !== (e = this.next()); ) a(e);
      },
      some: function (a) {
        for (var e; null !== (e = this.next()); ) if (a(e)) return !0;
        return !1;
      },
      every: function (a) {
        for (var e; null !== (e = this.next()); ) if (!a(e)) return !1;
        return !0;
      },
      count: function () {
        var a = 0;
        this.sa(function () {
          a++;
        });
        return a;
      },
      expand: function () {
        var a = [];
        this.sa(function (e) {
          a.push(e);
        });
        return a;
      },
      oa: function () {
        return "Iterator";
      },
    };
    b.prototype = Object.create(a.prototype);
    b.prototype.constructor = b;
    b.prototype.gf = null;
    b.prototype.next = function () {
      var a = this.gf;
      this.gf = null;
      return a;
    };
    b.prototype.Oa = function () {
      return this.gf;
    };
    b.prototype.expand = function () {
      return null === this.gf ? [] : [this.gf];
    };
    b.prototype.oa = function () {
      return "Iter-1 over " + B.oa(this.gf);
    };
    var x = {
      next: function () {
        return null;
      },
      Oa: function () {
        return null;
      },
      expand: function () {
        return [];
      },
      count: function () {
        return 0;
      },
      filter: function () {
        return x;
      },
      Ia: function () {
        return x;
      },
      Ya: function () {
        return x;
      },
      sa: function () {},
      some: function () {
        return !1;
      },
    };
    d.prototype = Object.create(a.prototype);
    d.prototype.constructor = d;
    d.prototype.df = null;
    d.prototype.ef = 0;
    d.prototype.next = function () {
      return this.ef < this.df.length ? this.df[this.ef++] : null;
    };
    d.prototype.Oa = function () {
      return this.ef < this.df.length ? this.df[this.ef] : null;
    };
    d.prototype.expand = function () {
      return this.df;
    };
    d.prototype.count = function () {
      return this.df.length;
    };
    m.prototype = Object.create(a.prototype);
    m.prototype.constructor = m;
    m.prototype.Pb = null;
    m.prototype.Qk = null;
    m.prototype.next = function () {
      for (;;) {
        var a = this.Pb.next();
        if (!a) return null;
        if (this.Qk(a)) return a;
      }
    };
    c.prototype = Object.create(a.prototype);
    c.prototype.constructor = c;
    c.prototype.Pb = null;
    c.prototype.Wf = null;
    c.prototype.Sg = null;
    c.prototype.next = function () {
      for (;;) {
        if (null !== this.Sg) {
          var a = this.Sg.next();
          if (a) return a;
        }
        a = this.Pb.next();
        if (null === a) return null;
        (this.Sg = this.Wf(a)) &&
          !this.Sg.next &&
          B.ra("Result of mapper is not an iterator, mapper = " + this.Wf);
      }
    };
    l.prototype = Object.create(a.prototype);
    l.prototype.constructor = l;
    l.prototype.Pb = null;
    l.prototype.Wf = null;
    l.prototype.ln = 0;
    l.prototype.next = function () {
      for (;;) {
        var a = this.Pb.next();
        if (null === a) return null;
        if ((a = this.Wf(a, this.ln++))) return a;
      }
    };
    f.prototype = Object.create(a.prototype);
    f.prototype.constructor = f;
    f.prototype.Tk = null;
    f.prototype.Xh = null;
    f.prototype.next = function () {
      var a = this.Xh;
      return a ? ((this.Xh = this.Tk(a)), a) : null;
    };
    f.prototype.Oa = function () {
      return this.Xh;
    };
    k.prototype = Object.create(a.prototype);
    k.prototype.constructor = k;
    k.prototype.Uh = [];
    k.prototype.current = null;
    k.prototype.next = function () {
      for (;;) {
        if (0 === this.Uh.length) return (this.current = null);
        var a = this.Uh[0].next();
        if (null === a) this.Uh.shift();
        else return (this.current = a);
      }
    };
    r.prototype = Object.create(a.prototype);
    r.prototype.constructor = r;
    r.prototype.Qb = null;
    r.prototype.Wb = null;
    r.prototype.se = null;
    r.prototype.current = null;
    r.prototype.next = function () {
      var a = this.Qb.Oa(),
        b = this.Wb.Oa();
      return a && b
        ? ((a = this.se(a, b)),
          0 > a
            ? (this.current = this.Qb.next())
            : 0 < a
            ? (this.current = this.Wb.next())
            : ((this.current = this.Qb.next()), this.Wb.next()),
          this.current)
        : a
        ? (this.current = this.Qb.next())
        : b
        ? (this.current = this.Wb.next())
        : (this.current = null);
    };
    v.prototype = Object.create(a.prototype);
    v.prototype.constructor = v;
    v.prototype.Qb = null;
    v.prototype.Wb = null;
    v.prototype.se = null;
    v.prototype.current = null;
    v.prototype.next = function () {
      for (var a = this.Qb.Oa(), b = this.Wb.Oa(); a && b; ) {
        var c = this.se(a, b);
        if (0 > c) this.Qb.next(), (a = this.Qb.Oa());
        else if (0 < c) this.Wb.next(), (b = this.Wb.Oa());
        else
          return (this.current = this.Qb.next()), this.Wb.next(), this.current;
      }
      return (this.current = null);
    };
    w.prototype = Object.create(a.prototype);
    w.prototype.constructor = w;
    w.prototype.Qb = null;
    w.prototype.Wb = null;
    w.prototype.se = null;
    w.prototype.current = null;
    w.prototype.next = function () {
      for (var a = this.Qb.Oa(), b = this.Wb.Oa(); a && b; ) {
        b = this.se(a, b);
        if (0 > b) return (this.current = this.Qb.next());
        0 < b
          ? this.Wb.next()
          : (this.Qb.next(), this.Wb.next(), (a = this.Qb.Oa()));
        b = this.Wb.Oa();
      }
      return a && !b ? (this.current = this.Qb.next()) : (this.current = null);
    };
    z.prototype = Object.create(a.prototype);
    z.prototype.constructor = z;
    z.prototype.Pb = null;
    z.prototype.next = function () {
      var a = this.rj;
      a && (this.rj = this.Pb.next());
      return a;
    };
    z.prototype.Oa = function () {
      return this.rj;
    };
    t.prototype = Object.create(a.prototype);
    t.prototype.constructor = t;
    t.prototype.Pb = null;
    t.prototype.Wh = -1;
    t.prototype.position = 0;
    t.prototype.current = null;
    t.prototype.yh = [];
    t.prototype.next = function () {
      this.position++;
      this.current = this.Pb.next();
      null === this.current && (this.position = -1);
      return this.current;
    };
    t.prototype.zi = function () {
      if (0 > this.Wh)
        if (this.Pb instanceof d) this.Wh = this.Pb.expand().length;
        else {
          for (var a = [], b; null !== (b = this.Pb.next()); ) a.push(b);
          this.Wh = this.position + a.length;
          this.Pb = D.K(a);
        }
      return this.Wh;
    };
    g.prototype = Object.create(a.prototype);
    g.prototype.constructor = g;
    g.prototype.position = 1;
    g.prototype.current = null;
    g.prototype.next = function () {
      return null;
    };
    g.prototype.zi = function () {
      return 1;
    };
    K.prototype = Object.create(a.prototype);
    K.prototype.constructor = K;
    K.prototype.Th = [];
    K.prototype.Tg = null;
    K.prototype.Yb = null;
    K.prototype.current = null;
    K.prototype.next = function () {
      for (;;) {
        if (null === this.Tg) {
          if (0 === this.Th.length) return (this.current = null);
          this.Tg = this.Th[0](this.Yb);
        }
        var a = this.Tg.next();
        if (null !== a) return (this.current = a);
        this.Th.shift();
        this.Tg = null;
      }
    };
    return {
      R: x,
      l: b,
      Rc: k,
      Uf: f,
      fd: z,
      Da: t,
      jc: g,
      K: d,
      qj: r,
      Ym: v,
      Rm: w,
      Yp: a,
      Om: K,
      ua: function (a) {
        return D.l(A.T.g(a));
      },
      Vb: function (a) {
        return D.l(A.Ma.fa(a));
      },
      gp: function (a) {
        return D.l(A.za.fa(a));
      },
      jr: function (a) {
        return D.l(A.qd.fa(a));
      },
      bk: function (a) {
        return D.l(A.od.wc(a));
      },
      ka: function (a) {
        return D.l(A.Ea.Dd(a));
      },
    };
  })();
  var F = {
    Ve: "http://www.w3.org/1999/XSL/Transform",
    cb: "http://www.w3.org/2005/xpath-functions",
    cm: "http://www.w3.org/2005/xpath-functions/math",
    map: "http://www.w3.org/2005/xpath-functions/map",
    kf: "http://www.w3.org/2005/xpath-functions/array",
    xml: "http://www.w3.org/XML/1998/namespace",
    Rd: "http://www.w3.org/2001/XMLSchema",
    xr: "http://www.w3.org/2001/XMLSchema-instance",
    Qn: "http://www.w3.org/2005/xqt-errors",
    sg: "http://saxonica.com/ns/interactiveXSLT",
    am: "http://saxonica.com/ns/globalJS",
    Jc: "http://saxon.sf.net/",
    Un: "http://ns.saxonica.com/xslt/export",
    me: {
      xsl: "http://www.w3.org/1999/XSL/Transform",
      fn: "http://www.w3.org/2005/xpath-functions",
      math: "http://www.w3.org/2005/xpath-functions/math",
      map: "http://www.w3.org/2005/xpath-functions/map",
      array: "http://www.w3.org/2005/xpath-functions/array",
      xml: "http://www.w3.org/XML/1998/namespace",
      xs: "http://www.w3.org/2001/XMLSchema",
      xsi: "http://www.w3.org/2001/XMLSchema-instance",
      err: "http://www.w3.org/2005/xqt-errors",
      ixsl: "http://saxonica.com/ns/interactiveXSLT",
      js: "http://saxonica.com/ns/globalJS",
      saxon: "http://saxon.sf.net/",
      ex: "http://ns.saxonica.com/xslt/export",
    },
    wk: "http://ns.saxonica.com/anonymous-type",
  };
  var G = (function () {
    var a = C.O,
      b = 1,
      d = {
        jf: function (a) {
          switch (a.nodeType) {
            case 9:
            case 11:
              return D.R;
            case 2:
              return a.parent
                ? D.Uf(a.parent, function (a) {
                    return a.parentNode;
                  })
                : D.R;
            default:
              return (a = a.parentNode)
                ? D.Uf(a, function (a) {
                    return a.parentNode;
                  })
                : D.R;
          }
        },
        Ib: function (a) {
          return D.Rc([D.l(a), d.jf(a)]);
        },
        ob: function (b) {
          if (1 === b.nodeType) {
            for (var c = b.attributes, f = [], d = 0; d < c.length; d++) {
              var r = c[d].name;
              ("xmlns" !== r.substring(0, 5) ||
                (5 !== r.length && ":" !== r.charAt(5))) &&
                f.push(
                  new $a(
                    a.X.xa(c[d].prefix, c[d].namespaceURI, c[d].localName),
                    c[d].value,
                    b
                  )
                );
            }
            return D.K(f);
          }
          return D.R;
        },
        pb: function (a) {
          function b(a) {
            return D.Uf(a.firstChild, function (a) {
              return a.nextSibling;
            });
          }
          if (null === a) return D.R;
          switch (a.nodeType) {
            case 9:
              return b(a).filter(function (a) {
                return !(
                  (7 === a.nodeType && "xml" === a.target) ||
                  3 === a.nodeType
                );
              });
            case 11:
            case 1:
              return b(a);
            default:
              return D.R;
          }
        },
        li: function (a) {
          return d.pb(a).Ya(function (a) {
            return d.bh(a);
          });
        },
        bh: function (a) {
          return D.Rc([D.l(a), d.li(a)]);
        },
        yl: function (a) {
          switch (a.nodeType) {
            case 9:
            case 11:
              return D.R;
            case 2:
            case 13:
              return (a = G.hc(a)), null === a ? D.R : D.Rc([d.li(a), d.yl(a)]);
            default:
              return d.Ib(a).Ya(function (a) {
                return d.zl(a).Ya(d.bh);
              });
          }
        },
        zl: function (a) {
          switch (a.nodeType) {
            case 9:
            case 11:
            case 2:
            case 13:
              return D.R;
            default:
              return D.Uf(a.nextSibling, function (a) {
                return a.nextSibling;
              });
          }
        },
        Hc: function (a) {
          return 1 === a.nodeType
            ? D.K(
                G.De(a).map(function (b) {
                  return new ab(b.prefix, b.uri, a);
                })
              )
            : D.R;
        },
        parent: function (a) {
          return D.l(G.hc(a));
        },
        kk: function (a) {
          return d.Ib(a).Ya(function (a) {
            return d.Oe(a).Ya(function (a) {
              return D.K(d.bh(a).expand().reverse());
            });
          });
        },
        Oe: function (a) {
          switch (a.nodeType) {
            case 9:
            case 11:
            case 2:
            case 13:
              return D.R;
            default:
              return D.Uf(a.previousSibling, function (a) {
                return a.previousSibling;
              });
          }
        },
        self: function (a) {
          return D.l(a);
        },
      },
      m = {
        Ab: d,
        Xk: {
          ancestor: d.jf,
          "ancestor-or-self": d.Ib,
          attribute: d.ob,
          child: d.pb,
          descendant: d.li,
          "descendant-or-self": d.bh,
          following: d.yl,
          "following-sibling": d.zl,
          namespace: d.Hc,
          parent: d.parent,
          preceding: d.kk,
          "preceding-sibling": d.Oe,
          self: d.self,
        },
        be: function (a) {
          return d.Ib(a).expand().pop();
        },
        fe: function (a) {
          a._saxonDocumentNumber || (a._saxonDocumentNumber = b++);
          return a;
        },
        Kn: function (a) {
          return G.fe(a)._saxonDocumentNumber;
        },
        ma: function (b) {
          if (!b || !b.nodeType) return null;
          switch (b.nodeType) {
            case 1:
              return a.X.xa(b.prefix, b.namespaceURI, b.localName);
            case 2:
              if ("xml" === b.prefix)
                return a.X.xa(b.prefix, F.xml, b.localName);
              if (!b.je) throw new q("ATTRIBUTE_NODE not local", "SXJS0004");
              return b.je;
            case 7:
              return a.X.xa("", "", b.target);
            case 13:
              return b.prefix ? a.X.xa("", "", b.prefix) : null;
            default:
              return null;
          }
        },
        Pq: function (a, b) {
          if (!a || !a.nodeType) return !1;
          switch (a.nodeType) {
            case 1:
            case 2:
              return a.localName === b;
            case 7:
              return a.target === b;
            case 13:
              return a.prefix === b;
            default:
              return !1;
          }
        },
        zf: function (a, b) {
          if (!a || !a.nodeType) return !1;
          switch (a.nodeType) {
            case 1:
              return (a.namespaceURI || "") === b;
            case 2:
              return "xml" === a.prefix ? F.xml === b : a.namespaceURI === b;
            default:
              return "" === b;
          }
        },
        xe: function (a, b) {
          for (var c = [], d = a.firstChild; null !== d; )
            1 !== d.nodeType || (b && b !== d.tagName) || c.push(d),
              (d = d.nextSibling);
          return c;
        },
        firstElementChild: function (a, b) {
          for (var c = a.firstChild; null !== c; ) {
            if (1 === c.nodeType && (!b || b === c.tagName)) return c;
            c = c.nextSibling;
          }
          return null;
        },
        jg: function (a) {
          var b = a.expand();
          if (1 < b.length) {
            var c = !0,
              d = !0,
              r = !0;
            b.forEach(function (a) {
              G.da(a)
                ? ((r = !1),
                  G.hc(a)
                    ? (c = !1)
                    : a._saxonDocumentNumber
                    ? (c = !1)
                    : G.fe(a))
                : (d = !1);
            });
            if (!d && !r)
              throw new q(
                "Cannot sort a sequence including both nodes and non-nodes",
                "XPTY0018"
              );
            c || r || b.sort(G.qc);
            return D.K(b).Ia(function (a, c) {
              return 0 < c && G.isSameNode(a, b[c - 1]) ? null : a;
            });
          }
          return D.K(b);
        },
        qc: function (b, l) {
          if (G.isSameNode(b, l)) return 0;
          var c = G.hc(b),
            k = G.hc(l);
          if (null === c)
            return null === k
              ? ((c = G.fe),
                c(b)._saxonDocumentNumber - c(l)._saxonDocumentNumber)
              : b === k
              ? -1
              : G.qc(b, k);
          if (null === k) return l === c ? 1 : G.qc(c, l);
          if (c === k) {
            k = b.nodeType;
            var r = l.nodeType;
            if (2 === k) {
              if (2 === r) {
                c = c.attributes;
                for (k = 0; k < c.length; k++) {
                  r = a.X.xa(c[k].prefix, c[k].namespaceURI, c[k].localName);
                  if (r.ia(G.ma(b))) return -1;
                  if (r.ia(G.ma(l))) return 1;
                }
                throw new q("Att not found in parent", "SXJS0004");
              }
              return 13 === r ? 1 : -1;
            }
            if (13 === k) return 13 === r ? (b.prefix < l.prefix ? -1 : 1) : -1;
            if (2 === r || 13 === r) return 1;
            c = b;
            for (k = l; ; ) {
              c = c.previousSibling;
              if (!c) return -1;
              if (c === l) return 1;
              k = k.previousSibling;
              if (!k) return 1;
              if (k === b) return -1;
            }
          } else {
            if (b === k) return -1;
            if (l === c) return 1;
            r = d.jf(c).count();
            var v = d.jf(k).count();
            return r === v ? G.qc(c, k) : r > v ? G.qc(c, l) : G.qc(b, k);
          }
        },
        hc: function (a) {
          return G.jh(a) ? a.parent : a.parentNode;
        },
        ii: function (a, b, d) {
          a.setAttributeNS(
            "http://www.w3.org/2000/xmlns/",
            "" === b ? "xmlns" : "xmlns:" + b,
            d
          );
        },
        De: function (a, b) {
          b = void 0 === b ? d.Ib : b;
          for (
            var c = [{ prefix: "xml", uri: F.xml }],
              k = { xml: !0 },
              r,
              l = b(a);
            null !== (r = l.next());

          )
            if (1 === r.nodeType) {
              var w = G.ma(r);
              "" === w.prefix && "" === w.uri && (k[""] = !0);
              r = r.attributes;
              for (w = 0; w < r.length; w++) {
                var m = r[w].name;
                "xmlns" === m.substring(0, 5) &&
                  (5 !== m.length || k[""]
                    ? ":" === m.charAt(5) &&
                      ((m = m.substring(6)),
                      k[m] ||
                        ((k[m] = !0), c.push({ prefix: m, uri: r[w].value })))
                    : ((k[""] = !0),
                      "" !== r[w].value &&
                        c.push({ prefix: "", uri: r[w].value })));
              }
            } else break;
          return c;
        },
        oo: function (a) {
          if (a.kn) {
            a: {
              a = a.kn;
              for (b in a)
                if (a.hasOwnProperty(b)) {
                  var b = !1;
                  break a;
                }
              b = !0;
            }
            return !b;
          }
          b = a.attributes;
          for (a = 0; a < b.length; a++) {
            var c = b[a].name;
            if (
              "xmlns" === c.substring(0, 5) &&
              (5 === c.length || ":" === c.charAt(5))
            )
              return !0;
          }
          return !1;
        },
        Ql: function (a) {
          for (a = a.firstChild; null !== a; ) {
            if ((1 === a.nodeType && G.oo(a)) || !G.Ql(a)) return !1;
            a = a.nextSibling;
          }
          return !0;
        },
        Qq: function (a) {
          return (a = a.attributes.getNamedItem("xmlns")) && "" === a.value;
        },
        mo: function (a, b) {
          for (var c = a; c && 1 === c.nodeType; ) {
            if (c.hasAttribute(b)) return c.getAttribute(b);
            c = c.parentNode;
          }
          return null;
        },
        no: function (a, b, d) {
          for (; a && 1 === a.nodeType; ) {
            if (a.hasAttributeNS(b, d)) return a.getAttributeNS(b, d);
            a = a.parentNode;
          }
          return null;
        },
        getAttribute: function (a, b, d) {
          return a.hasAttribute(b)
            ? a.getAttribute(b)
            : 2 < arguments.length
            ? d
            : null;
        },
        Jq: function (a, b) {
          return parseInt(a.getAttribute(b), 10);
        },
        up: function (b, d, f) {
          var c = a.X;
          if (/:/.test(d))
            return c.g(d, function (a) {
              return "xml" === a ? F.xml : b.lookupNamespaceURI(a);
            });
          f = f ? b.lookupNamespaceURI(null) || "" : "";
          return c.xa("", f, d);
        },
        jh: function (a) {
          return a instanceof $a;
        },
        og: function (a) {
          return a instanceof ab;
        },
        mg: function (a) {
          return (
            a instanceof abstractNode && (9 === a.nodeType || 11 === a.nodeType)
          );
        },
        Ul: function (a) {
          return a instanceof abstractNode && 1 === a.nodeType;
        },
        da: function (a) {
          return (
            (a instanceof abstractNode &&
              !(7 === a.nodeType && "xml" === a.target)) ||
            G.jh(a) ||
            G.og(a)
          );
        },
        Uq: function (a) {
          return a instanceof abstractNode && 7 === a.nodeType;
        },
        isSameNode: function (a, b) {
          return (
            a === b ||
            (G.og(a) &&
              G.og(b) &&
              a.parentNode &&
              b.parentNode &&
              a.parentNode === b.parentNode &&
              a.prefix === b.prefix) ||
            (G.jh(a) &&
              G.jh(b) &&
              a.parent &&
              b.parent &&
              a.parent === b.parent &&
              G.ma(a).ia(G.ma(b)))
          );
        },
        Jo: function (a, b) {
          return a === b || (9 === a && 11 === b) || (9 === b && 11 === a);
        },
        Wq: function (a) {
          return a instanceof abstractNode && 3 === a.nodeType;
        },
        Bf: function (a) {
          return /^(?:[A-Za-z][A-Za-z0-9+.-]+:)?\/\//i.test(a);
        },
        baseURI: function (a) {
          function b(a) {
            var b = G.hc(a);
            return b ? G.baseURI(b) : a._saxonBaseUri ? a._saxonBaseUri : null;
          }
          if (null === a || G.og(a)) return null;
          if (1 === a.nodeType && a.hasAttribute("xml:base")) {
            var d = a.getAttribute("xml:base");
            return G.Bf(d)
              ? d
              : b(a)
              ? Da.$c(d.toString(), b(a)).toString()
              : null;
          }
          return b(a);
        },
      };
    B.qp(m);
    return m;
  })();
  var cb = (function () {
    function a(b, d) {
      if ("" === d) return b.cc;
      var c = d.charAt(0);
      return b.fb.hasOwnProperty(c) ? a(b.fb[c], d.substring(1)) : [];
    }
    function b(b, d) {
      for (var c = a(b, b.options.hash(d)), f = 0; f < c.length; f++)
        if (b.options.Se(c[f].k, d)) return c[f];
      return null;
    }
    function d(a, b, c, k) {
      if ("" === k) {
        for (k = 0; k < a.cc.length; k++)
          if (a.options.Se(a.cc[k].k, b)) {
            a.cc[k] = { k: b, v: c };
            return;
          }
        a.cc.push({ k: b, v: c });
      } else {
        var r = k.charAt(0);
        if (a.fb.hasOwnProperty(r)) var g = a.fb[r];
        else (g = new l(a.options)), (g.id = f++), (a.fb[r] = g);
        d(g, b, c, k.substring(1));
      }
    }
    function m(a, b, d, c) {
      var f = new l(a.options),
        g = !1;
      if ("" === c)
        (f.cc = a.cc.map(function (c) {
          return a.options.Se(c.k, b) ? ((g = !0), { k: b, v: d }) : c;
        })),
          g || f.cc.push({ k: b, v: d }),
          (f.fb = a.fb);
      else {
        var r = c.charAt(0);
        for (k in a.fb)
          a.fb.hasOwnProperty(k) &&
            (k === r
              ? ((f.fb[k] = m(a.fb[k], b, d, c.substring(1))), (g = !0))
              : (f.fb[k] = a.fb[k]));
        if (!g) {
          var k = new l(a.options);
          k = m(k, b, d, c.substring(1));
          f.fb[r] = k;
        }
        f.cc = a.cc;
      }
      return f;
    }
    function c(a, b, d) {
      var f = new l(a.options);
      if ("" === d)
        (f.cc = a.cc.filter(function (g) {
          return !a.options.Se(g.k, b);
        })),
          (f.fb = a.fb);
      else {
        var r = d.charAt(0),
          g;
        for (g in a.fb)
          a.fb.hasOwnProperty(g) &&
            (f.fb[g] = g === r ? c(a.fb[g], b, d.substring(1)) : a.fb[g]);
        f.cc = a.cc;
      }
      return f;
    }
    function l(a) {
      this.cc = [];
      this.fb = {};
      this.options = a || { hash: k.hash, Se: k.Se };
    }
    var f = 0,
      k = {
        hash: function (a) {
          return a.bc();
        },
        Se: function (a, b) {
          try {
            return C.O.numeric.matches(a)
              ? a.mk(b)
              : a.ia(b) &&
                  ("timezoneOffset" in a && null !== a.zb) ===
                    ("timezoneOffset" in b && null !== b.zb);
          } catch (w) {
            return !1;
          }
        },
      };
    l.prototype = {
      cc: [],
      fb: {},
      options: k,
      Xa: function (a) {
        return null !== b(this, a);
      },
      get: function (a) {
        a = b(this, a);
        return null === a ? [] : a.v;
      },
      Ta: function (a, b) {
        d(this, a, b, this.options.hash(a));
      },
      put: function (a, b) {
        return m(this, a, b, this.options.hash(a));
      },
      remove: function (a) {
        return c(this, a, this.options.hash(a));
      },
      Cb: function (a) {
        this.cc.forEach(a);
        for (var b in this.fb) this.fb.hasOwnProperty(b) && this.fb[b].Cb(a);
      },
      keys: function () {
        var a = [];
        this.Cb(function (b) {
          a.push(b.k);
        });
        return a;
      },
      pf: function (a, b, d) {
        var c = this;
        return D.K(c.keys()).every(function (f) {
          var g = c.get(f);
          return a(f) && d(g.length) && D.K(g).every(b);
        });
      },
      oa: function () {
        var a = "HashTrie map{",
          b = "";
        this.Cb(function (d) {
          a += b;
          b = ", ";
          a += B.oa(d.k);
          a += ": ";
          a += B.oa(d.v);
        });
        return (a += "}");
      },
    };
    return l;
  })();
  var J = (function () {
    function a(a, m) {
      var d = db(m),
        l = new I.Ze(C.te[a]);
      return new b(l, d);
    }
    function b(a, b) {
      this.ca = a;
      this.na = b;
      this.jd = this.hd = null;
    }
    b.prototype.mb = function (a) {
      this.jd = a;
    };
    b.prototype.jb = function (a) {
      this.hd = a;
    };
    b.prototype.ea = function () {
      if (!this.jd)
        if (this.hd) this.mb(Ua(this.hd));
        else {
          var a = Object.assign(this.ca.ea());
          a.o = eb(this.na);
          this.mb(a);
        }
      return this.jd;
    };
    b.prototype.va = function () {
      this.hd ||
        (this.jd
          ? this.jb(Wa(this.jd))
          : this.jb((eb(this.na) || "1") + this.ca.va()));
      return this.hd;
    };
    b.prototype.Va = function (a) {
      return new b(this.ca, a);
    };
    b.prototype.Fi = function (a) {
      var d = this.na;
      return new b(
        this.ca,
        1 === d || 1 === a
          ? 1
          : 2 === a
          ? d
          : 2 === d
          ? a
          : gb(d) || gb(a)
          ? 7
          : 6 === d && 6 === a
          ? 6
          : 7
      );
    };
    b.prototype.matches = function (a) {
      switch (a.length) {
        case 0:
          var b = gb(this.na);
          break;
        case 1:
          b = this.na !== hb;
          break;
        default:
          b = ib(this.na);
      }
      if (!b) return !1;
      var c = this.ca.ta();
      return a.every(function (a) {
        return c(a);
      });
    };
    b.prototype.Eo = function () {
      return this.na === hb;
    };
    b.prototype.toString = function () {
      return this.ca.toString() + eb(this.na);
    };
    b.prototype.ia = function (a) {
      return this.va() === a.va();
    };
    return {
      ff: function () {
        I.ff();
        this.B = {
          Qa: new b(I.pe.pa, jb),
          qe: new b(I.pe.pa, kb),
          Fk: new b(I.pe.pa, lb),
          lj: a("A", "1"),
          Sd: a("A", "?"),
          Ng: a("A", "*"),
          Td: a("AS", "1"),
          dn: a("AZ", "1"),
          Gk: a("AZ", "?"),
          gn: a("AZ", "*"),
          mq: a("AS", "?"),
          ic: a("AB", "1"),
          lq: a("AB", "?"),
          bf: a("ADI", "1"),
          an: a("AD", "1"),
          Ek: a("ADI", "?"),
          Qh: a("AO", "1"),
          $m: a("AO", "??"),
          bn: a("AF", "1"),
          Zm: a("AU", "?"),
          cn: a("AQ", "1"),
          Oh: new b(I.Ye.pa, lb),
          Mh: new b(I.Ye.pa, jb),
          gj: a("ADI", "*"),
          mj: new b(I.Xe.pa, kb),
          Kk: new b(I.cj.pa, kb),
          Ak: new b(I.Xe.pa, jb),
          fj: new b(I.Lh.pa, hb),
        };
      },
      Ka: b,
      Kd: function (a) {
        if (/^[01?+*]/.test(a)) {
          var d = a.charAt(0);
          var c = a.substring(1);
        } else (d = "1"), (c = a);
        c = I.Xc(c);
        d = new b(c, db(d));
        d.jb(a);
        return d;
      },
      Kc: function (a) {
        var d = I.ni(a);
        return new b(d, db(a.o));
      },
      ad: function (a) {
        B.assert(a instanceof I.mc);
        return new b(a, kb);
      },
      B: {},
    };
  })();
  var mb = (function () {
    function a(a) {
      Array.isArray(a) ||
        B.ra("XdmArray value must be an array. Supplied:" + a);
      this.value = a;
    }
    a.prototype = {
      value: [],
      get: function (a) {
        if ("number" != typeof a)
          throw new q("Array subscript is not numeric", "XPTY0004");
        if (1 > a || a > this.value.length)
          throw new q(
            "Array index (" +
              a +
              ") out of bounds (1 to " +
              this.value.length +
              ")",
            "FOAY0001"
          );
        return this.value[a - 1];
      },
      size: function () {
        return this.value.length;
      },
      oa: function () {
        for (var a = "[", d = 0; d < this.value.length && 3 > d; d++)
          0 !== d && (a += ","), (a += B.oa(this.value[d]));
        4 <= this.value.length && (a += ",...(" + this.value.length + ")");
        return a + "]";
      },
      flatten: function (a) {
        for (var b = 0; b < this.value.length; b++)
          for (var m = this.value[b], c = 0; c < m.length; c++) a(m[c]);
      },
      pf: function (a, d, m) {
        var b = C.O.Ma.fa(this.value.length);
        if (!a(b)) return !1;
        for (a = 0; a < this.value.length; a++)
          if (((b = this.value[a]), !m(b.length) || !D.K(b).every(d)))
            return !1;
        return !0;
      },
    };
    return a;
  })();
  var ob = (function () {
    function a(a, b, k) {
      function f(b, g) {
        function c(a) {
          return a instanceof ab ? "a namespace" : "an attribute";
        }
        if (g)
          throw new q(
            "Cannot create " +
              c(b) +
              " node on element '" +
              m.ma(a) +
              "' after creating children",
            "XTDE0410"
          );
        if (11 === a.nodeType || 9 === a.nodeType)
          throw new q("Cannot add " + c(b) + " to a document node", "XTDE0420");
      }
      function l(a, b) {
        var g = b._saxonIsLocal ? b._saxonIsLocal : !1;
        if (b instanceof mb)
          b.value.forEach(function (b) {
            b.forEach(function (b) {
              l(a, b);
            });
          });
        else {
          if (b instanceof cb)
            throw new q(
              "A map can't be a child of an XML node",
              "XSLT" === k.fixed.options.language ? "XTDE0450" : "XPTY0004"
            );
          if (b instanceof nb.gb)
            throw new q(
              "A function can't be a child of an XML node",
              "XSLT" === k.fixed.options.language ? "XTDE0450" : "XPTY0004"
            );
          m.da(b)
            ? (z = !1)
            : ((b = k.wa.createTextNode((z ? " " : "") + b.toString())),
              (z = !0));
          if (1 === a.nodeType || 11 === a.nodeType) {
            if (10 !== b.nodeType)
              if (m.og(b))
                if (Da.Fd(a)) a.appendChild(a.ownerDocument.importNode(b, !0));
                else if ((f(b, w), "" === b.prefix)) {
                  if ("" === a.namespaceURI)
                    throw new q(
                      "Cannot add a default namespace to a no-namespace element",
                      "XTDE0440"
                    );
                  if (a.hasAttributeNS("", "xmlns")) {
                    if (a.getAttributeNS("", "xmlns") !== b.uri)
                      throw new q(
                        "Cannot have two different default namespaces",
                        "XTDE0430"
                      );
                  } else
                    Da.Fd(a) ||
                      a.setAttributeNS(
                        "http://www.w3.org/2000/xmlns/",
                        "xmlns",
                        b.uri
                      );
                } else {
                  g = "xmlns:" + b.prefix;
                  var r = b.uri;
                  "~" === b.uri &&
                    null !== F.me[b.prefix] &&
                    (r = F.me[b.prefix]);
                  if (
                    a.hasAttributeNS(
                      "http://www.w3.org/2000/xmlns/",
                      b.prefix
                    ) &&
                    a.getAttributeNS(
                      "http://www.w3.org/2000/xmlns/",
                      b.prefix
                    ) !== r
                  )
                    throw new q(
                      "Cannot have two namespaces with the same prefix '" +
                        b.prefix +
                        "'",
                      "XTDE0430"
                    );
                  a.setAttributeNS("http://www.w3.org/2000/xmlns/", g, r);
                }
              else if (2 === b.nodeType) {
                f(b, w);
                if (
                  "" !== b.namespaceURI &&
                  ((g = b.name.split(":")),
                  2 !== g.length ||
                    a.lookupNamespaceURI(g[0]) !== b.namespaceURI)
                )
                  if (2 === g.length && null === a.lookupNamespaceURI(g[0]))
                    a.setAttributeNS(
                      "http://www.w3.org/2000/xmlns/",
                      "xmlns:" + g[0],
                      b.namespaceURI
                    );
                  else
                    for (r = 2 === g.length ? g[0] : "ns"; ; )
                      if (null === a.lookupNamespaceURI(r)) {
                        a.setAttributeNS(
                          "http://www.w3.org/2000/xmlns/",
                          "xmlns:" + r,
                          b.namespaceURI
                        );
                        b.name = r + ":" + g[g.length - 1];
                        break;
                      } else r += "_1";
                a.setAttributeNS(
                  "" === b.namespaceURI ? null : b.namespaceURI,
                  b.name,
                  b.value
                );
              } else if (3 === b.nodeType)
                b.nodeValue &&
                  "" !== b.nodeValue &&
                  ((g = a.lastChild) && 3 === g.nodeType
                    ? (g.nodeValue += b.nodeValue)
                    : a.appendChild(d(b, k, ""))),
                  (w = !0);
              else if (9 === b.nodeType || 11 === b.nodeType)
                c.pb(b).sa(function (b) {
                  l(a, b);
                });
              else {
                w = !0;
                if (
                  !(
                    (Da.Af() && k.wa === window.document) ||
                    1 !== b.nodeType ||
                    Da.Fd(b)
                  )
                ) {
                  r = b.prefix || "";
                  var x = b.lookupNamespaceURI(r) || "",
                    e = b.namespaceURI || "";
                  x !== e && m.ii(b, r, e);
                  !b.lookupNamespaceURI(null) &&
                    a.lookupNamespaceURI(null) &&
                    m.ii(b, "", "");
                }
                (g && Da.Fd(a) === Da.Fd(b)) || (b = d(b, k, "c"));
                a.appendChild(b);
                b._saxonIsLocal = !1;
              }
          } else if (9 === a.nodeType) null !== b && (a.documentElement = b);
          else
            throw new q("Unknown parent node type " + a.nodeType, "SXJS0003");
        }
      }
      k || B.ra("No context in makeComplexContent for " + B.oa(a));
      var w = !1,
        z = !1;
      b.sa(function (b) {
        l(a, b);
      });
    }
    function b(a, b) {
      b && 0 <= b.indexOf("l") && (a._saxonIsLocal = !0);
      return a;
    }
    function d(l, f, k) {
      var r = k && 0 <= k.indexOf("c");
      if (m.da(l)) {
        var v = function (a, b) {
          k && 0 <= k.indexOf("m") && (b._saxonOriginal = a);
        };
        switch (l.nodeType) {
          case 9:
          case 11:
            return (
              (r = m.fe(f.wa.createDocumentFragment())),
              (r._saxonBaseUri = l._saxonBaseUri),
              (r._saxonDocUri = l._saxonDocUri),
              a(
                r,
                c.pb(l).Ia(function (a) {
                  return d(a, f, k);
                }),
                f
              ),
              v(l, r),
              b(r, k)
            );
          case 13:
            return new ab(l.prefix, l.uri);
          case 1:
            var w = m.ma(l);
            var z = f.createElement(w.uri, w.toString());
            !r ||
              (Da.Af() && Da.Fd(z) && f.wa === window.document) ||
              m.De(l).forEach(function (a) {
                m.ii(z, a.prefix, a.uri);
              });
            c.ob(l).sa(function (a) {
              z.setAttributeNS(
                "" === a.namespaceURI ? null : a.namespaceURI,
                a.name,
                a.value
              );
            });
            c.pb(l).sa(function (a) {
              a = d(a, f, k);
              1 === a.nodeType &&
                "" === m.ma(a).uri &&
                "" !== w.uri &&
                m.ii(a, "", "");
              z.appendChild(a);
            });
            z._saxonBaseUri = m.baseURI(l);
            v(l, z);
            return b(z, k);
          case 10:
            return null;
          case 2:
            return new $a(m.ma(l), l.value, null);
          default:
            return (
              (z = Da.Af()
                ? window.document.importNode(l, !0)
                : l.cloneNode(f.wa, l, !0)),
              v(l, z),
              b(z, k)
            );
        }
      } else return l;
    }
    var m = G,
      c = m.Ab;
    return { Cq: d, To: a };
  })();
  var nb = (function () {
    function a(a, b) {
      var c =
        f.call(this, a, "F" === a.alphaTree.p ? a.alphaTree.a.length : 1) ||
        this;
      c.Yf = b;
      return c;
    }
    function b(a, b, c) {
      a = f.call(this, a, a.alphaTree.a.length) || this;
      a.Yf = b;
      a.Zn = c;
      return a;
    }
    function d(a, b, c) {
      a = f.call(this, a, a.alphaTree.a.length) || this;
      a.body = P.qa(b, "body");
      a.Hn = b.C;
      a.fl = c;
      return a;
    }
    function m(a, b) {
      var c = f.call(this, a, a.alphaTree.a.length) || this;
      c.Dn = a.componentBinding;
      c.jl = b.fixed.qb[c.Dn];
      c.body = P.qa(c.jl.actor, "body");
      c.name = C.O.X.rb(c.jl.actor.name);
      return c;
    }
    function c(a, b, c) {
      var d = f.call(this, a, 1) || this;
      d.name = b;
      if ((a = k[b.local])) {
        var r = C.type[a].g;
        B.assert(r);
        d.evaluate = function (a) {
          a = d.qf(a, c)[0][0].toString();
          a = Ma.dd(a).split(" ");
          return D.K(a.map(r));
        };
      } else if ("QName" === b.local) {
        var g = P.Hg(c, !0);
        d.evaluate = function (a) {
          a = d.qf(a, c)[0][0].toString();
          return D.l(C.O.X.g(a, g));
        };
      } else {
        var l = C.type[b.local].aa;
        B.assert(l);
        d.evaluate = function (a) {
          return D.l(l(d.qf(a, c)[0][0]));
        };
      }
      return d;
    }
    function l(a, b, c, d, k) {
      var g = f.call(this, a, c) || this;
      g.name = b;
      g.ya = [F.cm, F.map, F.kf, F.Jc].includes(b.uri) ? P.Tn : P.Sn;
      g.Lp = d;
      if (
        (a.defaultToDot && 0 === c) ||
        ["accumulator-after", "accumulator-before", "lang"].includes(b.local)
      )
        g.rm = k.lb();
      return g;
    }
    function f(a, b) {
      this.zc = a;
      this.$h = a.alphaTree;
      this.arity = b;
      this.resultType = this.$h.r ? J.Kc(this.$h.r) : J.Kd("*");
      this.nb = [];
      if (a.variadic)
        for (var c = J.Kc(this.$h.a[0]), d = 0; d < b; d++) this.nb.push(c);
      else for (c = 0; c < b; c++) this.nb[c] = J.Kc(this.$h.a[c]);
    }
    f.prototype.io = function () {
      return this.arity;
    };
    f.prototype.getName = function () {
      return null;
    };
    f.prototype.evaluate = function () {
      B.ra("Not implemented");
    };
    f.prototype.Ce = function () {
      return this.getName()
        ? this.getName().ha() + "#" + this.arity
        : "anonymous function (arity " + this.arity + ")";
    };
    f.prototype.oa = function () {
      return this.Ce();
    };
    f.prototype.qf = function (a, b) {
      var c = this,
        d = b && "apply" === b.name;
      if (a.length !== this.arity)
        throw new q(
          "Too " +
            (a.length < this.arity ? "few" : "many") +
            " arguments in call to " +
            this.Ce() +
            ": required " +
            this.arity +
            ", supplied " +
            a.length,
          d ? "FOAP0001" : "XPTY0004"
        );
      d = [];
      for (var f = 0; f < a.length; f++)
        d[f] = P.gl(a[f], this.nb[f], function () {
          return "dynamic call of " + c.Ce();
        });
      return d;
    };
    f.prototype.Qj = function () {
      return new I.re(this.nb, this.resultType);
    };
    n(l, f);
    l.prototype.getName = function () {
      return this.name;
    };
    l.prototype.evaluate = function (a, b, c) {
      var d = this.getName().local;
      if ("current" === d)
        throw new q(
          "current() function cannot be evaluated dynamically",
          "XTDE1360"
        );
      if ("current-output-uri" === d) return D.R;
      if ("regex-group" === d) return D.ua("");
      var f = b;
      this.rm && ((f = b.ja()), (f.focus = D.jc(this.rm)));
      b = ["string-length", "normalize-space"].includes(d);
      var g = this.zc.defaultToDot;
      d = "number" === d;
      if ((b || g || d) && 0 === a.length) {
        f.Wc("XPDY0002", ". (dot)");
        c = f.lb();
        if (b || d) c = P.Wd(c).next();
        b && (c = C.O.T.aa(c));
        a.push([c]);
      } else a = this.qf(a, c);
      return this.ya(this.getName(), a, f, this.Lp);
    };
    var k = { NMTOKENS: "NMTOKEN", IDREFS: "IDREF", ENTITIES: "ENTITY" };
    n(c, f);
    c.prototype.getName = function () {
      return this.name;
    };
    n(m, f);
    m.prototype.getName = function () {
      return this.name;
    };
    m.prototype.evaluate = function (a, b, c) {
      a = this.qf(a, c);
      b = b.ja(!0);
      b.Zf();
      b.Ja = "function";
      b.$b = {};
      b.Xb = null;
      b.focus = null;
      for (c = 0; c < a.length; c++) b.Ha[c] = a[c];
      return P.evaluate(this.body, b);
    };
    n(d, f);
    d.prototype.evaluate = function (a, b, c) {
      a = this.qf(a, c);
      b = b.ja(!0);
      b.Zf();
      b.Ja = "function";
      b.$b = {};
      b.Xb = null;
      b.focus = null;
      b.Ha = this.fl.Ha.slice();
      b.La = this.fl.La;
      c = this.Hn;
      for (var d = 0; d < a.length; d++) b.Ha[parseInt(c[d].slot, 10)] = a[d];
      return P.evaluate(this.body, b);
    };
    n(b, f);
    b.prototype.Ce = function () {
      return "partially-applied " + this.Yf.Ce();
    };
    b.prototype.evaluate = function (a, b, c) {
      for (var d = [], f = 0; f < this.Yf.arity; f++)
        if (((d[f] = this.Zn[f] || a.shift()), !d[f]))
          throw new q("Too few arguments in call of " + this.Ce(), "XPTY0004");
      return this.Yf.evaluate(d, b, c);
    };
    n(a, f);
    a.prototype.Ce = function () {
      return "coerced " + this.Yf.Ce();
    };
    a.prototype.evaluate = function (a, b, c) {
      a = this.qf(a, c);
      return this.Yf.evaluate(a, b, c);
    };
    return { gb: f, Ih: l, dj: c, jj: m, Xm: d, Pm: b, zk: a };
  })();
  var I = (function () {
    function a(a, b) {
      var e = u.call(this) || this;
      e.Ef = a;
      e.Ff = b;
      var c = a.ea(),
        d = b.ea();
      c = c.p.startsWith(d.p)
        ? c.p
        : d.p.startsWith(c.p)
        ? d.p
        : c.p.charAt(0) === d.p.charAt(0)
        ? c.p.charAt(0)
        : "";
      e.jb(c + " d[" + a.va() + "," + b.va() + "]");
      e.mb({ p: c, d: [a.ea(), b.ea()] });
      return e;
    }
    function b(a, b) {
      var e = u.call(this) || this;
      e.Ef = a;
      e.Ff = b;
      var c = a.ea(),
        d = b.ea();
      c = c.p.startsWith(d.p)
        ? c.p
        : d.p.startsWith(c.p)
        ? d.p
        : c.p.charAt(0) === d.p.charAt(0)
        ? c.p.charAt(0)
        : "";
      e.jb(c + " i[" + a.va() + "," + b.va() + "]");
      e.mb({ p: c, i: [a.ea(), b.ea()] });
      return e;
    }
    function d(a, b) {
      var e = u.call(this) || this;
      e.Ef = a;
      e.Ff = b;
      var c = a.ea(),
        d = b.ea();
      c = Xa(c.p, d.p);
      e.jb(c + " u[" + a.va() + "," + b.va() + "]");
      e.mb({ p: c, u: [a.ea(), b.ea()] });
      return e;
    }
    function m(a) {
      var b = v.call(this) || this;
      B.assert(a instanceof J.Ka);
      b.Ci = a;
      b.jb("FA v[" + a.va() + "]");
      b.mb({ p: "FA", v: a.ea() });
      return b;
    }
    function c() {
      var a = v.call(this) || this;
      a.jb("FA");
      a.mb({ p: "FA" });
      return a;
    }
    function l(a, b) {
      var e = v.call(this) || this;
      B.assert(a instanceof I.mc);
      B.assert(b instanceof J.Ka);
      e.Xj = a;
      e.valueType = b;
      e.jb("FM k[" + a.va() + "] v[" + b.va() + "]");
      e.mb({ p: "FM", k: a.ea(), v: b.ea() });
      return e;
    }
    function f() {
      var a = v.call(this) || this;
      a.jb("FM");
      a.mb({ p: "FM" });
      return a;
    }
    function k(a, b) {
      var e = v.call(this) || this;
      B.assert(b instanceof J.Ka);
      B.assert(
        a.every(function (a) {
          return a instanceof J.Ka;
        })
      );
      e.nb = a;
      e.resultType = b;
      e.jb(
        "F a[" +
          a
            .map(function (a) {
              return a.va();
            })
            .join(",") +
          "] r[" +
          b.va() +
          "]"
      );
      e.mb({
        p: "F",
        a: a.map(function (a) {
          return a.ea();
        }),
        r: b.ea(),
      });
      return e;
    }
    function r() {
      var a = v.call(this) || this;
      a.jb("F");
      a.mb({ p: "F" });
      return a;
    }
    function v() {
      var a = u.call(this) || this;
      a.nb = [];
      a.resultType = null;
      return a;
    }
    function w() {
      return u.call(this) || this;
    }
    function z() {
      var a = u.call(this) || this;
      a.jb("A m[AO,AD,AF]");
      a.mb({ p: "A", m: [{ p: "AO" }, { p: "AD" }, { p: "AF" }] });
      return a;
    }
    function t(a) {
      var b = u.call(this) || this;
      b.Qf = a;
      b.jb(a.code);
      b.mb({ p: a.code });
      return b;
    }
    function g(a) {
      var b = e.call(this, 9) || this;
      b.nl = a;
      b.jb("ND e[" + a.va() + "]");
      b.mb({ p: "ND", e: a.ea() });
      return b;
    }
    function K(a, b) {
      var c = e.call(this, a) || this;
      c.uri = b;
      var d = c.Rh(a);
      c.jb(d + " nQ{" + b + "}*");
      c.mb({ p: d, n: "Q{" + b + "}*" });
      return c;
    }
    function A(a, b) {
      var c = e.call(this, a) || this;
      c.localName = b;
      var d = c.Rh(a);
      c.jb(d + " n*:" + b);
      c.mb({ p: d, n: "*:" + b });
      return c;
    }
    function x(a, b) {
      var c = e.call(this, a) || this;
      c.name = b;
      var d = c.Rh(a);
      c.jb(d + " n" + b.ha());
      c.mb({ p: d, n: b.ha() });
      return c;
    }
    function e(a) {
      var b = u.call(this) || this;
      b.kind = a;
      a = b.Rh(a);
      b.jb(a);
      b.mb({ p: a });
      return b;
    }
    function h() {
      var a = u.call(this) || this;
      a.jb("N u[NT,NP,NC,NE]");
      a.mb({ p: "N", u: [{ p: "NT" }, { p: "NP" }, { p: "NC" }, { p: "NE" }] });
      return a;
    }
    function p() {
      var a = u.call(this) || this;
      a.jb("N");
      a.mb({ p: "N" });
      return a;
    }
    function y() {
      var a = u.call(this) || this;
      a.jb("");
      a.mb({ p: "" });
      return a;
    }
    function u() {
      this.jd = this.hd = null;
    }
    function L(h) {
      var u = h.p;
      if ("" === u) return y.pa;
      if (h.u)
        return (
          (u = L(h.u[0])),
          h.u.slice(1).reduce(function (a, b) {
            return new d(a, L(b));
          }, u)
        );
      if (h.i)
        return (
          (u = L(h.i[0])),
          h.i.slice(1).reduce(function (a, e) {
            return new b(a, L(e));
          }, u)
        );
      if (h.d) return new a(L(h.d[0]), L(h.d[1]));
      switch (u.charAt(0)) {
        case "A":
          if ("Q{http://www.w3.org/2001/XMLSchema}numeric" === h.n) return z.pa;
          if (h.m) {
            var N = h.m;
            if (
              3 === N.length &&
              N.some(function (a) {
                return "AO" === a.p;
              }) &&
              N.some(function (a) {
                return "AD" === a.p;
              }) &&
              N.some(function (a) {
                return "AF" === a.p;
              })
            )
              return z.pa;
            B.ra("Unhandled atomic union type");
          } else return new t(C.te[u]);
        case "F":
          switch (u) {
            case "FA":
              return h.v ? new m(J.Kc(h.v)) : c.pa;
            case "FM":
              return h.k && h.v ? new l(L(h.k), J.Kc(h.v)) : f.pa;
            default:
              return h.a
                ? ((u = h.a.map(J.Kc)),
                  (h = h.r ? J.Kc(h.r) : J.B.Qa),
                  new k(u, h))
                : r.pa;
          }
        case "N":
          if ("N" === u) return p.pa;
          u = { ND: 9, NE: 1, NA: 2, NT: 3, NC: 8, NP: 7, NN: 13 }[u];
          return h.n
            ? ((h = h.n),
              /\}\*$/.test(h)
                ? new K(u, h.substring(2, h.length - 2))
                : /^\*:/.test(h)
                ? new A(u, h.substring(2))
                : new x(u, C.O.X.rb(h)))
            : h.e
            ? ((h = L(h.e)), new g(h))
            : new e(u);
        case "E":
          return w.pa;
      }
    }
    u.prototype.ta = function () {
      return null;
    };
    u.prototype.mb = function (a) {
      this.jd = a;
    };
    u.prototype.jb = function (a) {
      this.hd = a.replace(/^[01?*+]/, "");
    };
    u.prototype.ea = function () {
      if (!this.jd)
        if (this.hd) this.mb(Ua(this.hd));
        else return null;
      return this.jd;
    };
    u.prototype.va = function () {
      if (!this.hd)
        if (this.jd) this.jb(Wa(this.jd));
        else return null;
      return this.hd;
    };
    u.prototype.pg = function () {
      return /^N/.test(this.ea().p);
    };
    u.prototype.Ga = function (a) {
      a = void 0 === a ? "A" : a;
      return this.ea().p.startsWith(a);
    };
    u.prototype.Ge = function () {
      return this instanceof z;
    };
    u.prototype.qg = function () {
      return this.Ge() || /^A[ODF]/.test(this.ea().p.substring(0));
    };
    u.prototype.ng = function () {
      return /^F/.test(this.ea().p);
    };
    u.prototype.Ao = function () {
      return !0;
    };
    u.prototype.toString = function () {
      return this.va();
    };
    u.prototype.ia = function (a) {
      return this.va() === a.va();
    };
    n(y, u);
    y.prototype.ta = function () {
      return function () {
        return !0;
      };
    };
    y.prototype.toString = function () {
      return "item()";
    };
    n(p, u);
    p.prototype.ta = function () {
      return function (a) {
        return G.da(a);
      };
    };
    p.prototype.toString = function () {
      return "node()";
    };
    n(h, u);
    h.prototype.ta = function () {
      return function (a) {
        return G.da(a) && [1, 3, 8, 7].includes(a.nodeType);
      };
    };
    h.prototype.toString = function () {
      return "node()";
    };
    n(e, u);
    e.prototype.Rh = function (a) {
      switch (a) {
        case 9:
          return "ND";
        case 1:
          return "NE";
        case 2:
          return "NA";
        case 8:
          return "NC";
        case 3:
          return "NT";
        case 7:
          return "NP";
        case 13:
          return "NN";
        case 0:
          return "N";
        default:
          throw new q("Unknown node kind " + a + " in NodeKindTest");
      }
    };
    e.prototype.ta = function () {
      var a = this;
      switch (this.kind) {
        case 9:
          return function (a) {
            return G.da(a) && (9 === a.nodeType || 11 === a.nodeType);
          };
        default:
          return function (b) {
            return G.da(b) && b.nodeType === a.kind;
          };
      }
    };
    e.prototype.toString = function () {
      switch (this.kind) {
        case 9:
          return "document-node()";
        case 1:
          return "element(*)";
        case 2:
          return "attribute(*)";
        case 8:
          return "comment()";
        case 3:
          return "text()";
        case 7:
          return "processing-instruction()";
        case 13:
          return "namespace-node()";
        case 0:
          return "node()";
        default:
          throw new q("Unknown node kind " + this.kind + " in NodeKindTest");
      }
    };
    e["for"] = function (a) {
      switch (a) {
        case 9:
          return e.ej;
        case 1:
          return e.Um;
        case 2:
          return e.xk;
        case 8:
          return e.yk;
        case 3:
          return e.Mk;
        case 7:
          return e.Ik;
        case 13:
          return e.Ck;
      }
    };
    n(x, e);
    x.prototype.ta = function () {
      var a = this,
        b = this.name;
      return function (e) {
        var c;
        if ((c = G.da(e) && e.nodeType === a.kind))
          c = (e = G.ma(e)) && b.ia(e);
        return c;
      };
    };
    x.prototype.toString = function () {
      return e.prototype.toString
        .call(this)
        .replace(/\(\*?\)/, "(" + this.ea().n + ")");
    };
    n(A, e);
    A.prototype.ta = function () {
      var a = this;
      return function (b) {
        return (
          G.da(b) && b.nodeType === a.kind && G.ma(b).local === a.localName
        );
      };
    };
    A.prototype.toString = function () {
      return e.prototype.toString
        .call(this)
        .replace(/\(\*?\)/, "(*:" + this.localName + ")");
    };
    n(K, e);
    K.prototype.ta = function () {
      var a = this;
      return function (b) {
        return G.da(b) && b.nodeType === a.kind && G.ma(b).uri === a.uri;
      };
    };
    K.prototype.toString = function () {
      return e.prototype.toString
        .call(this)
        .replace(/\(\*?\)/, "Q{" + this.uri + "}*)");
    };
    n(g, e);
    g.prototype.ta = function () {
      var a = this;
      return function (b) {
        return (
          G.da(b) &&
          (9 === b.nodeType || 11 === b.nodeType) &&
          a.nl.ta()(b.firstChild)
        );
      };
    };
    g.prototype.toString = function () {
      return "document-node(" + this.nl.toString() + ")";
    };
    n(t, u);
    t.prototype.ta = function () {
      var a = this;
      return function (b) {
        return a.Qf.matches(b);
      };
    };
    t.prototype.toString = function () {
      return "xs:" + this.Qf.name;
    };
    n(z, u);
    z.prototype.ta = function () {
      return function (a) {
        return (
          C.type["double"].matches(a) ||
          C.type.decimal.matches(a) ||
          C.type["float"].matches(a)
        );
      };
    };
    z.prototype.toString = function () {
      return "xs:numeric";
    };
    n(w, u);
    w.prototype.va = function () {
      return "E";
    };
    w.prototype.ea = function () {
      return { p: "E" };
    };
    w.prototype.ta = function () {
      return function () {
        return !1;
      };
    };
    w.prototype.toString = function () {
      return "xs:error";
    };
    n(v, u);
    v.prototype.Zc = function (a) {
      if (!(a instanceof v)) return pb.wd;
      if (a instanceof f || a instanceof c) return pb.gd;
      if (!(a instanceof k || a instanceof l || a instanceof m)) return pb.Ud;
      if (this.nb.length !== a.nb.length) return pb.wd;
      var b = (function (a, b, e) {
          return a.map(function (a, c) {
            return e(a, b[c]);
          });
        })(this.nb, a.nb, pb.tm),
        e = pb.tm(this.resultType, a.resultType);
      return b.every(function (a) {
        return a === pb.Dc;
      }) && e === pb.Dc
        ? pb.Dc
        : b.every(function (a) {
            return [pb.Dc, pb.Ud].includes(a) && [pb.Dc, pb.gd].includes(e);
          })
        ? pb.gd
        : b.every(function (a) {
            return [pb.Dc, pb.gd].includes(a) && [pb.Dc, pb.Ud].includes(e);
          })
        ? pb.Ud
        : pb.Hk;
    };
    v.prototype.ti = function () {
      return J.B.Qa;
    };
    n(r, v);
    r.prototype.ta = function () {
      return function (a) {
        return (
          a instanceof nb.gb ||
          a instanceof mb ||
          a instanceof cb ||
          a instanceof P.hj
        );
      };
    };
    r.prototype.Zc = function (a) {
      return a instanceof r ? pb.Dc : /^F/.test(a.ea().p) ? pb.gd : pb.wd;
    };
    r.prototype.toString = function () {
      return "function(*)";
    };
    n(k, v);
    k.prototype.ta = function () {
      var a = this;
      return function (b) {
        return b instanceof mb
          ? 1 === a.nb.length &&
              a.nb[0].na === kb &&
              b.pf(a.nb[0].ca.ta(), a.resultType.ca.ta(), qb(a.resultType.na))
          : b instanceof cb
          ? 1 === a.nb.length &&
            a.nb[0].na === kb &&
            a.nb[0].ca instanceof t &&
            b.pf(
              function () {
                return !0;
              },
              a.resultType.ca.ta(),
              qb(a.resultType.na)
            )
          : b instanceof nb.gb
          ? ((b = a.Zc(b.Qj())), [pb.Dc, pb.gd].includes(b))
          : !1;
      };
    };
    k.prototype.xp = function (a) {
      var b = this,
        e = [];
      a.forEach(function (a) {
        e.push(b.nb[a]);
      });
      return new k(e, this.resultType);
    };
    k.prototype.wf = function () {
      return this.nb;
    };
    k.prototype.ti = function () {
      return this.resultType;
    };
    k.prototype.toString = function () {
      return (
        "(function(" +
        this.nb
          .map(function (a) {
            return a.toString();
          })
          .join(",") +
        ") as " +
        this.resultType.toString() +
        ")"
      );
    };
    n(f, v);
    f.prototype.wf = function () {
      return [J.ad(this.ye())];
    };
    f.prototype.ye = function () {
      return Y.Gh;
    };
    f.prototype.Sj = function () {
      return J.B.Qa;
    };
    f.prototype.ta = function () {
      return function (a) {
        return a instanceof cb || a instanceof P.hj;
      };
    };
    f.prototype.toString = function () {
      return "map(*)";
    };
    n(l, v);
    l.prototype.ta = function () {
      var a = this;
      return function (b) {
        return (
          b instanceof cb &&
          b.pf(a.Xj.ta(), a.valueType.ca.ta(), qb(a.valueType.na))
        );
      };
    };
    l.prototype.toString = function () {
      return (
        "map(" + this.Xj.toString() + "," + this.valueType.toString() + ")"
      );
    };
    l.prototype.wf = function () {
      return [J.ad(this.ye())];
    };
    l.prototype.ye = function () {
      return this.Xj;
    };
    l.prototype.Sj = function () {
      return this.valueType;
    };
    l.prototype.ti = function () {
      return this.valueType;
    };
    n(c, v);
    c.prototype.ta = function () {
      return function (a) {
        return a instanceof mb;
      };
    };
    c.prototype.toString = function () {
      return "array(*)";
    };
    c.prototype.wf = function () {
      return [J.B.bf];
    };
    c.prototype.ze = function () {
      return J.B.Qa;
    };
    n(m, v);
    m.prototype.ta = function () {
      var a = this;
      return function (b) {
        return (
          b instanceof mb &&
          b.value.every(function (b) {
            return a.Ci.matches(b);
          })
        );
      };
    };
    m.prototype.toString = function () {
      return "array(" + this.Ci.toString() + ")";
    };
    m.prototype.wf = function () {
      return [J.B.bf];
    };
    m.prototype.ze = function () {
      return this.Ci;
    };
    m.prototype.ti = function () {
      return this.Ci;
    };
    n(d, u);
    d.prototype.ta = function () {
      var a = this.Ef.ta(),
        b = this.Ff.ta();
      return function (e) {
        return a(e) || b(e);
      };
    };
    d.prototype.ye = function () {
      var a = this.Ef.ye(),
        b = this.Ff.ye(),
        e = a.na;
      e = e === b.na ? e : J.B.Qa;
      return new J.Ka(new d(a.ca, b.ca), e);
    };
    d.prototype.ze = function () {
      var a = this.Ef.ze(),
        b = this.Ff.ze(),
        e = a.na;
      e = e === b.na ? e : J.B.Qa;
      return new J.Ka(new d(a.ca, b.ca), e);
    };
    n(b, u);
    b.prototype.ta = function () {
      var a = this.Ef.ta(),
        b = this.Ff.ta();
      return function (e) {
        return a(e) && b(e);
      };
    };
    n(a, u);
    a.prototype.ta = function () {
      var a = this.Ef.ta(),
        b = this.Ff.ta();
      return function (e) {
        return a(e) && !b(e);
      };
    };
    var O = {},
      fa = {},
      Y = {};
    return {
      mc: u,
      pe: y,
      Ye: p,
      Nm: h,
      nc: e,
      xd: x,
      ij: A,
      kj: K,
      Tm: g,
      Ze: t,
      Nh: z,
      Hh: v,
      Xe: r,
      re: k,
      bj: c,
      nj: m,
      cj: f,
      oj: l,
      Lh: w,
      Vm: d,
      ff: function () {
        y.pa = new y();
        p.pa = new p();
        h.pa = new h();
        z.pa = new z();
        r.pa = new r();
        f.pa = new f();
        c.pa = new c();
        w.pa = new w();
        e.ej = new e(9);
        e.Um = new e(1);
        e.xk = new e(2);
        e.Mk = new e(3);
        e.yk = new e(8);
        e.Ik = new e(7);
        e.Ck = new e(13);
        Y.af = new t(C.O.za);
        Y.FLOAT = new t(C.O.qd);
        Y.Lk = new t(C.O.T);
        Y.Jh = new t(C.O.od);
        Y.Bk = new t(C.O.Ma);
        Y.Qm = new t(C.O.ac);
        Y.Gh = new t(C.O.wj);
        Y.tq = new t(C.O.Ua);
        fa.NMTOKENS = C.type.NMTOKEN;
        fa.IDREFS = C.type.IDREF;
        fa.ENTITIES = C.type.ENTITY;
      },
      Jb: Y,
      $k: { IDREFS: "ASNTNCR", ENTITIES: "ASNTNCE", NMTOKENS: "ASNTK" },
      Zk: fa,
      Xc: function (a) {
        var b = O[a];
        if (b) return b;
        b = Ua(a);
        b = L(b);
        return (O[a] = b);
      },
      ni: L,
    };
  })();
  var pb = (function () {
    function a(a, b) {
      B.assert(a instanceof I.mc);
      B.assert(b instanceof I.mc);
      var d = a.va() + "<>" + b.va(),
        k = f[d];
      if (k) return k;
      k = c(a, b);
      return (f[d] = k);
    }
    function b(b, c) {
      B.assert(b instanceof I.mc);
      B.assert(c instanceof I.mc);
      switch (a(b, c)) {
        case 0:
        case 1:
          return b;
        case 2:
          return c;
        case 3:
        case 4:
          var d = b.ea(),
            f = c.ea();
          d = { p: Xa(d.p, f.p), u: [d, f] };
          return I.ni(d);
      }
    }
    function d(b, c) {
      B.assert(b instanceof I.mc);
      B.assert(c instanceof I.mc);
      switch (a(b, c)) {
        case 0:
        case 1:
          return c;
        case 2:
          return b;
        case 3:
          var d = b.ea(),
            f = c.ea();
          d = {
            p: d.p.startsWith(f.p)
              ? d.p
              : f.p.startsWith(d.p)
              ? f.p
              : d.p.charAt(0) === f.p.charAt(0)
              ? d.p.charAt(0)
              : "",
            i: [d, f],
          };
          return I.ni(d);
        case 4:
          return I.Lh.pa;
      }
    }
    function m(a, b) {
      return 0 === a && 0 === b
        ? 0
        : (0 !== a && 1 !== a) || (0 !== b && 1 !== b)
        ? (0 !== a && 2 !== a) || (0 !== b && 2 !== b)
          ? 4 === a || 4 === b
            ? 4
            : 3
          : 2
        : 1;
    }
    function c(b, d) {
      function f(a, b) {
        return (a || "") === (b || "") ? 0 : a && !b ? 2 : b && !a ? 1 : 4;
      }
      function k(a) {
        return 1 === a ? 2 : 2 === a ? 1 : a;
      }
      function r(a) {
        return a.n || a.e || a.u || a.i || a.d;
      }
      B.assert(b instanceof I.mc);
      B.assert(d instanceof I.mc);
      var t = b.ea(),
        g = d.ea(),
        K = b.va(),
        A = d.va();
      if ("F" === t.p) {
        if (!(b instanceof I.Hh && d instanceof I.Hh)) return 3;
        B.assert(b.Zc);
        return b.Zc(d);
      }
      if (K === A) return 0;
      if (b.Ge())
        return d.Ge()
          ? 0
          : /^A[ODF]/.test(g.p)
          ? 1
          : "A" === g.p || "" === g.p
          ? 2
          : 4;
      if (d.Ge()) return k(c(d, b));
      if (t.p === g.p) {
        if (b.pg())
          return t.u && g.u
            ? 3
            : t.e && g.e
            ? f(t.e, g.e)
            : t.n && g.n
            ? f(t.n, g.n)
            : r(t) && !r(g)
            ? 2
            : r(g) && !r(t)
            ? 1
            : 0;
        if (b.Ga()) return 0;
        if ("FA" === t.p)
          return (
            (t = b.ze ? b.ze() : J.B.Qa), (g = d.ze ? d.ze() : J.B.Qa), l(t, g)
          );
        if ("FM" === t.p)
          return (t = a(b.ye(), d.ye())), (g = l(b.Sj(), d.Sj())), m(t, g);
        if (!(b instanceof I.Hh && d instanceof I.Hh)) return 3;
        B.assert(b.Zc);
        return b.Zc(d);
      }
      return t.p.startsWith(g.p)
        ? t.u
          ? 3
          : 2
        : g.p.startsWith(t.p)
        ? t.u
          ? 3
          : 1
        : 4;
    }
    function l(b, c) {
      B.assert(b instanceof J.Ka);
      B.assert(c instanceof J.Ka);
      var d = b.na;
      var f = c.na;
      d =
        d === f
          ? pb.Dc
          : (d | f) === d
          ? pb.gd
          : (d | f) === f
          ? pb.Ud
          : 0 === (d | f)
          ? pb.wd
          : pb.Hk;
      f = a(b.ca, c.ca);
      return m(d, f);
    }
    var f = {};
    return {
      Dc: 0,
      gd: 1,
      Ud: 2,
      Hk: 3,
      wd: 4,
      Zc: a,
      Ko: function (b, c) {
        B.assert(b instanceof I.mc);
        B.assert(c instanceof I.mc);
        var d = a(b, c);
        return 0 === d || 2 === d;
      },
      fq: b,
      ug: function (a) {
        B.assert(0 < a.length);
        return a.slice(1).reduce(function (a, c) {
          return b(a, c);
        }, a[0]);
      },
      qo: function (a) {
        B.assert(0 < a.length);
        return a.slice(1).reduce(function (a, b) {
          return d(a, b);
        }, a[0]);
      },
      tm: l,
    };
  })();
  var hb = 1,
    kb = 2,
    lb = 3,
    jb = 7;
  function ib(a) {
    return 0 !== (a & 4);
  }
  function gb(a) {
    return 0 !== (a & 1);
  }
  function rb(a) {
    var b = 0;
    a.forEach(function (a) {
      return (b |= a);
    });
    b === (4 | hb) && (b = jb);
    return b;
  }
  function db(a) {
    return { 0: 1, 1: 2, "?": 3, "+": 6, "*": 7 }[a];
  }
  function sb(a, b) {
    return (
      (gb(a) && gb(b) ? 1 : 0) +
      (1 !== a || 1 !== b ? 2 : 0) +
      ((1 === a && !ib(b)) || (1 === b && !ib(a)) ? 0 : 4)
    );
  }
  function tb(a) {
    switch (a) {
      case "1":
        return function (a) {
          return 1 === a;
        };
      case "0":
        return function (a) {
          return 0 === a;
        };
      case "?":
        return function (a) {
          return 2 > a;
        };
      case "+":
        return function (a) {
          return 0 < a;
        };
      case "*":
        return function () {
          return !0;
        };
    }
  }
  function qb(a) {
    switch (a) {
      case 1:
        return function (a) {
          return 0 === a;
        };
      case 2:
        return function (a) {
          return 1 === a;
        };
      case 4:
        return function (a) {
          return 1 < a;
        };
      case 3:
        return function (a) {
          return 2 > a;
        };
      case 6:
        return function (a) {
          return 0 < a;
        };
      default:
        return function () {
          return !0;
        };
    }
  }
  function eb(a) {
    switch (a) {
      case 3:
        return "?";
      case 2:
        return "";
      case 7:
        return "*";
      case 6:
        return "+";
      case 4:
        return "+";
      case 1:
        return "0";
      default:
        return "*";
    }
  }
  var vb = (function () {
    function a(a, c, d) {
      a = a.expand();
      c = c.expand();
      a = D.K(a);
      c = D.K(c);
      for (var f, k; ; ) {
        f = a.next();
        k = c.next();
        if (null === f) return null === k;
        if (null === k || !b(f, k, d)) return !1;
      }
    }
    function b(b, c, l) {
      var f = G.Ab;
      if (b === c) return !0;
      if (G.da(b)) {
        if (!G.da(c) || !G.Jo(b.nodeType, c.nodeType)) return !1;
        switch (b.nodeType) {
          case 9:
          case 11:
            return a(f.pb(b), f.pb(c));
          case 1:
            if (!G.ma(b).ia(G.ma(c))) return !1;
            var k = f.ob(b).expand();
            if (k.length !== f.ob(c).count()) return !1;
            for (var r = 0; r < k.length; r++) {
              var m = k[r],
                w = G.ma(m),
                z = w.uri ? w.uri : null;
              if (
                !c.hasAttributeNS(z, w.local) ||
                c.getAttributeNS(z, w.local) !== m.value
              )
                return !1;
            }
            return a(f.pb(b), f.pb(c), l);
          case 2:
            return G.ma(b).ia(G.ma(c)) && b.value === c.value;
          case 13:
            return b.prefix === c.prefix && b.uri === c.uri;
          case 7:
            return (
              b.target === c.target &&
              (l
                ? l(b.textContent, c.textContent)
                : b.textContent === c.textContent)
            );
          case 3:
          case 4:
          case 8:
            return l
              ? l(b.textContent, c.textContent)
              : b.textContent === c.textContent;
          default:
            throw new q("Unknown node type " + b.nodeType, "SXJS0003");
        }
      } else {
        if (b instanceof mb) {
          if (!(c instanceof mb && c.value.length === b.value.length))
            return !1;
          for (f = 0; f < b.value.length; f++)
            if (!a(D.K(b.value[f]), D.K(c.value[f]), l)) return !1;
          return !0;
        }
        if (b instanceof cb) {
          if (!(c instanceof cb)) return !1;
          l = b.keys();
          f = c.keys();
          return l.length !== f.length
            ? !1
            : D.K(l).every(function (d) {
                return c.Xa(d) && a(D.K(b.get(d)), D.K(c.get(d)));
              });
        }
        if (b instanceof nb.gb || c instanceof nb.gb)
          throw new q(
            "Function types, other than map(*) or array(*) cannot be tested for equality",
            "FOTY0015"
          );
        if (Q.ce(b) && Q.ce(c)) return !0;
        if (l && d.T.Fe(b) && d.T.Fe(c)) return l(b.value, c.value);
        try {
          return b.ia(c);
        } catch (t) {
          return !1;
        }
      }
    }
    var d = C.O;
    return {
      Dq: b,
      Cj: a,
      Ai: function (a, c, l) {
        for (var f = a.next(), k = c.next(); ; ) {
          if (null === f) return null === k ? 0 : -1;
          if (null === k) return 1;
          if (l)
            if (b(f, k, l.ia)) (f = a.next()), (k = c.next());
            else
              return Q.ce(f)
                ? -1
                : d.T.matches(f) && d.T.matches(k)
                ? l.compare(f.value, k.value)
                : f.ab(k);
          else if (b(f, k)) (f = a.next()), (k = c.next());
          else return Q.ce(f) ? -1 : f.ab(k);
        }
      },
    };
  })();
  var Q = (function () {
    function a(a, b) {
      return a.ia(b);
    }
    function b(a, b) {
      return a.ab(b);
    }
    function d(a) {
      return null === a;
    }
    function m(a) {
      return (S.za.matches(a) || S.qd.matches(a)) && isNaN(a.J());
    }
    function c(a, b) {
      return function (e, c) {
        return b(e) || b(c) ? (b(e) ? b(c) : !1) : a(e, c);
      };
    }
    function l(a, b) {
      return function (e, c) {
        return b(e) || b(c) ? (b(e) ? (b(c) ? 0 : -1) : 1) : a(e, c);
      };
    }
    function f(a, b) {
      return null === a
        ? NaN
        : S.numeric.matches(a)
        ? a.J()
        : b
        ? S.za.g(a.toString()).J()
        : S.za.oi(a.toString()).J();
    }
    function k(a) {
      return function (b, e) {
        var c = f(b, a),
          d = f(e, a);
        return isNaN(c) ? (isNaN(d) ? 0 : -1) : isNaN(d) ? 1 : c - d;
      };
    }
    function r(a) {
      return function (b, e) {
        var c = f(b, a),
          d = f(e, a);
        return isNaN(c) ? isNaN(d) : isNaN(d) ? !1 : 0 === c - d;
      };
    }
    function v(a, b) {
      return function (e, c) {
        var d = e.toString(),
          h = c.toString(),
          g = a(d.toLowerCase(), h.toLowerCase());
        if (0 === g) {
          for (g = 0; g < d.length; g++)
            if (d.charAt(g) !== h.charAt(g))
              return b === (d.charAt(g) === d.charAt(g).toLowerCase()) ? -1 : 1;
          return 0;
        }
        return g;
      };
    }
    function w(a) {
      return function (b, e) {
        return S.T.Fe(b) && S.T.Fe(e) ? a(b.value, e.value) : b.ia(e);
      };
    }
    function z(a) {
      return function (b, e) {
        return S.T.Fe(b) && S.T.Fe(e) ? a(b.value, e.value) : b.ab(e);
      };
    }
    function t(e, h) {
      var g = e.split("|");
      if ("DESC" === g[0]) {
        var f = t(e.slice(5), h);
        return {
          ia: f.ia,
          compare: function (a, b) {
            return f.compare(b, a);
          },
        };
      }
      var p = { ia: null, compare: null };
      switch (g[0]) {
        case "NC":
          return (p.ia = r(!1)), (p.compare = k(!1)), p;
        case "QUNC":
          return (p.ia = r(!0)), (p.compare = k(!0)), p;
        case "DblSC":
          return (p.ia = c(a, m)), (p.compare = l(l(b, m), d)), p;
        case "CCC":
          return (
            (p.ia = w(fa().equals)), (p.compare = l(z(fa().compare), d)), p
          );
        case "TEXT":
          g =
            g[1] ||
            "http://www.w3.org/2005/xpath-functions/collation/codepoint";
          var x = u(g, h);
          O(x, g);
          p.ia = c(function (a, b) {
            return x.equals(a.toString(), b.toString());
          }, d);
          p.compare = l(function (a, b) {
            return z(x.compare)(S.T.aa(a), S.T.aa(b));
          }, d);
          return p;
        case "CAVC":
        case "DecSC":
        case "GAC":
        case "AtSC":
        case "CalVC":
          return { ia: c(a, d), compare: l(l(b, m), d) };
        case "EQC":
          return (
            (p.ia = c(a, d)),
            (p.compare = function (a, b) {
              return p.ia(a, b) ? 0 : 1;
            }),
            p
          );
        case "CAC":
          return (
            (g =
              g[1] ||
              "http://www.w3.org/2005/xpath-functions/collation/codepoint"),
            (x = u(g, h)),
            O(x, g),
            (p.ia = function (a, b) {
              return x.equals(a.toString(), b.toString());
            }),
            (p.compare = function (a, b) {
              return x.compare(a.toString(), b.toString());
            }),
            p
          );
        default:
          throw new q("Unknown comparer " + e, "SXJS0003");
      }
    }
    function g(a, b) {
      var e = b.fixed.ya,
        c = null;
      a.comp && ((c = a.comp), (c = c.replace(/^DESC\|/, "")));
      var d = e.Zd(e.qa(a, "collation"), b).next(),
        h = e.Zd(e.qa(a, "order"), b).next(),
        g = e.Zd(e.qa(a, "lang"), b).next(),
        f = e.Zd(e.qa(a, "caseOrder"), b).next();
      e = e.Zd(e.qa(a, "dataType"), b).next();
      f = null === d && null !== f ? f.toString() : "#default";
      try {
        g =
          null === d && null !== g && "" !== g.toString()
            ? S.language.g(g.toString())
            : null;
      } catch (aa) {
        throw new q("@lang: " + aa.message, "XTDE0030");
      }
      "CalVC" === c && (e = null);
      h = null === h ? "ascending" : h.toString();
      e = null === e ? null : e.toString();
      d =
        null === d
          ? null === g
            ? "http://www.w3.org/2005/xpath-functions/collation/codepoint"
            : "http://www.w3.org/2013/collation/UCA?lang=" + g.toString()
          : d.toString();
      return { bg: c, collation: d, order: h, lang: g, di: f, dataType: e };
    }
    function K(a, b) {
      return A(g(a, b), b);
    }
    function A(a, e) {
      function c(b) {
        return "descending" === a.order
          ? function (a, e) {
              return b(e, a);
            }
          : b;
      }
      var h = u(a.collation, e);
      O(h, a.collation);
      h = h.compare;
      var g = "#default" !== a.di ? v(h, "lower-first" === a.di) : z(h);
      if ("number" === a.dataType) return c(k(!1));
      if ("text" === a.dataType)
        return c(
          l(function (a, b) {
            return g(S.T.aa(a), S.T.aa(b));
          }, d)
        );
      if (a.bg) {
        h = a.bg;
        if ("DblSC" === h) return c(l(l(b, m), d));
        if ("CalVC" === h || "DecSC" === h) return c(l(b, d));
        if ("CCC" === h) return c(l(g, d));
      }
      return c(g);
    }
    function x(a, b) {
      switch (a) {
        case "=":
        case "eq":
          return 0 === b;
        case "<":
        case "lt":
          return 0 > b;
        case ">":
        case "gt":
          return 0 < b;
        case ">=":
        case "ge":
          return 0 <= b;
        case "<=":
        case "le":
          return 0 >= b;
        case "!=":
        case "ne":
          return 0 !== b;
        default:
          throw new q("Unknown operator " + a, "SXJS0003");
      }
    }
    function e(a, b) {
      return a.map(function (a) {
        var e = b.fixed.ya;
        a = e.qa(a, "dataType");
        e = null === a ? null : e.evaluate(a, b).next();
        return "number" === e
          ? function (a) {
              return null === a ? null : S.za.oi(a.toString());
            }
          : "text" === e
          ? function (a) {
              return null === a ? null : S.T.aa(a);
            }
          : function (a) {
              return a;
            };
      });
    }
    function h(a, b) {
      return a.substring(0, b.length) === b;
    }
    function p(a, b) {
      return a.substring(a.length - b.length) === b;
    }
    function y(a, b) {
      return b && (b = b.next()) ? b.toString() : a.collation;
    }
    function u(a, b) {
      var e = a
        ? h(a, "http://www.w3.org/2013/collation/UCA") && 36 < a.length
          ? L(a, a.substring(37), b)
          : h(a, "http://saxon.sf.net/collation") && 29 < a.length
          ? L(a, a.substring(30), b)
          : b.fixed.options.mf[a]
        : fa();
      if (!e) throw new q("Unrecognized collation " + a, "FOCH0002");
      return e;
    }
    function L(a, b) {
      if ("" === b) var e = fa();
      else if ("strength=secondary" === b || "strength=2" === b) e = Y();
      else {
        var c = {};
        b.split(";").forEach(function (a) {
          a = a.split("=");
          c[a[0]] = a[1];
        });
        e = {};
        if ("no" === c.fallback)
          throw new q("Unsupported collation " + a, "FOCH0002");
        if (c.strength)
          if ("primary" === c.strength || "1" === c.strength)
            e.sensitivity = "base";
          else if ("secondary" === c.strength || "2" === c.strength)
            e.sensitivity = "accent";
          else if ("tertiary" === c.strength || "3" === c.strength)
            e.sensitivity = "variant";
          else if (
            "quaternary" === c.strength ||
            "4" === c.strength ||
            "identical" === c.strength ||
            "5" === c.strength
          )
            (e.sensitivity = "variant"), (e.ignorePunctuation = !1);
        if (c.caseFirst) {
          var d = c.caseFirst;
          ("upper" == d) | ("lower" == d) || "false" == d || (d = "false");
          e.caseFirst = d;
        }
        "yes" === c.numeric && (e.numeric = !0);
        "blanked" === c.alternate && (e.ignorePunctuation = !0);
        var h = new Intl.Collator(c.lang, e);
        e = {
          equals: function (a, b) {
            return 0 === h.compare(a, b);
          },
          compare: function (a, b) {
            return h.compare(a, b);
          },
          startsWith: function (a, b) {
            return a.length < b.length
              ? !1
              : 0 === h.compare(a.substring(0, b.length), b);
          },
          endsWith: function (a, b) {
            return a.length < b.length
              ? !1
              : 0 === h.compare(a.substring(a.length - b.length), b);
          },
          indexOf: function (a, b) {
            if (a.length < b.length) return -1;
            for (var e = 0; e <= a.length - b.length; e++)
              if (0 === h.compare(a.substring(e, e + b.length), b)) return e;
            return -1;
          },
          contains: function (a, b) {
            if (a.length < b.length) return !1;
            for (var e = 0; e <= a.length - b.length; e++)
              if (0 === h.compare(a.substring(e, e + b.length), b)) return !0;
            return !1;
          },
          collationKey: function (a) {
            return a;
          },
        };
      }
      if (!e) throw new q("Unrecognized collation " + a, "FOCH0002");
      return e;
    }
    function O(a, b) {
      if (!a.hasOwnProperty("compare") || !a.hasOwnProperty("equals"))
        throw new q(
          "Collation " + b + " cannot be used for sorting",
          "XTDE1035"
        );
    }
    function fa() {
      return {
        equals: function (a, b) {
          return a === b;
        },
        compare: function (a, b) {
          return Ma.Xg(a, b);
        },
        contains: function (a, b) {
          return -1 !== a.indexOf(b);
        },
        startsWith: function (a, b) {
          return h(a, b);
        },
        endsWith: function (a, b) {
          return p(a, b);
        },
        indexOf: function (a, b) {
          return a.indexOf(b);
        },
        collationKey: function (a) {
          return a;
        },
      };
    }
    function Y() {
      function a(a) {
        return a ? (a + "").toUpperCase() : "";
      }
      return {
        equals: function (b, e) {
          return a(b) === a(e);
        },
        compare: function (b, e) {
          return Ma.Xg(a(b), a(e));
        },
        contains: function (b, e) {
          return -1 !== a(b).indexOf(a(e));
        },
        startsWith: function (b, e) {
          return h(a(b), a(e));
        },
        endsWith: function (b, e) {
          return p(a(b), a(e));
        },
        indexOf: function (b, e) {
          return a(b).indexOf(a(e));
        },
        collationKey: function (b) {
          return a(b);
        },
      };
    }
    function N(a) {
      return {
        equals: function (b, e) {
          return a(b) === a(e);
        },
        compare: function (b, e) {
          return Ma.Xg(a(b), a(e));
        },
        contains: function (b, e) {
          return -1 != a(b).indexOf(a(e));
        },
        startsWith: function (b, e) {
          return h(a(b), a(e));
        },
        endsWith: function (b, e) {
          return p(a(b), a(e));
        },
        indexOf: function (b, e) {
          return a(b).indexOf(a(e));
        },
        collationKey: function (b) {
          return a(b);
        },
      };
    }
    var S = C.O;
    return {
      Wg: t,
      qn: K,
      tn: function () {
        function a(a) {
          return a.toUpperCase();
        }
        return N(function (b) {
          return b ? (b + "").replace(/[a-z]/g, a) : "";
        });
      },
      al: Y,
      yn: z,
      An: fa,
      ag: "http://www.w3.org/2005/xpath-functions/collation/codepoint",
      Bn: A,
      Pn: w,
      co: "http://www.w3.org/2010/09/qt-fots-catalog/collation/caseblind",
      Oj: function (a, b, e, c, d) {
        function h(a, b) {
          return f(a)
            ? f(b)
              ? S.T.aa(a)
              : g(b)
              ? S.za.aa(a)
              : "QName" === b.type
              ? C.O.X.aa(a, P.Hg(d, !1))
              : C.type[b.type].aa(a)
            : a;
        }
        B.assert(c.ia && c.compare);
        for (
          var g = S.numeric.matches,
            f = S.Ua.matches,
            p =
              "=" === e
                ? c.ia
                : "!=" === e
                ? function (a, b) {
                    return !c.ia(a, b);
                  }
                : function (a, b) {
                    return x(e, c.compare(a, b));
                  },
            u,
            k;
          null !== (u = a.next());

        )
          for (var y = D.K(b); null !== (k = y.next()); ) {
            var r = h(u, k);
            k = h(k, u);
            if (
              !((g(r) && isNaN(r.value)) || (g(k) && isNaN(k.value))) &&
              p(r, k)
            )
              return D.ka(!0);
          }
        return D.ka(!1);
      },
      fo: function (a) {
        return {
          ia: function (b, e) {
            var c = S.numeric.matches;
            return c(b) || c(e)
              ? S.numeric.qh(b).J() === S.numeric.qh(e).J()
              : a.ia(b, e);
          },
          compare: a.compare,
        };
      },
      ri: function (a, b, e) {
        return u(y(a, b), e);
      },
      Pj: u,
      sd: function (a, b, e, c) {
        b = y(a, b);
        c = u(b, c)[e];
        if (!c)
          throw new q(
            "Collation " + b + " has no " + e + " method",
            "FOCH0002",
            a
          );
        return c;
      },
      jo: e,
      Rl: "http://www.w3.org/2005/xpath-functions/collation/html-ascii-case-insensitive",
      ce: m,
      Jp: g,
      Kp: function (a) {
        var b = P.Kb(a),
          c = P.Ec(a, "sortKey");
        return function (a) {
          var d = D.Da(b(a)),
            h = [],
            g = c.map(function (b) {
              return K(b, a);
            }),
            f = c.map(P.Kb),
            p = e(c, a),
            k = a.ja(!1);
          k.Ja = "sort key";
          k.focus = d;
          var u = 0;
          d.sa(function (a) {
            var b = c.map(function (a, b) {
              return p[b](f[b](k).next());
            });
            h.push({ item: a, keys: b, zg: u++ });
          });
          h.sort(function (a, b) {
            for (var e = 0; e < g.length; e++) {
              var c = a.keys[e],
                d = b.keys[e];
              if (null == c) {
                if (null == d) continue;
                return -1;
              }
              if (null != d && ((c = g[e](c, d)), 0 !== c)) return c;
            }
            return a.zg > b.zg ? 1 : a.zg === b.zg ? 0 : -1;
          });
          return D.K(
            h.map(function (a) {
              return a.item;
            })
          );
        };
      },
      Vi: x,
      Fm: function (a, b) {
        switch (a) {
          case "=":
          case "eq":
            return b;
          case "!=":
          case "ne":
            return !b;
          case "<":
          case "lt":
          case ">":
          case "gt":
          case ">=":
          case "ge":
          case "<=":
          case "le":
            throw new q(
              "Operator " + a + " not allowed for unordered types",
              "SXJS0003"
            );
          default:
            throw new q("Unknown operator " + a, "SXJS0003");
        }
      },
      Wi: function (a, b) {
        function e(a) {
          return S.T.Fe(a) ? d(a.Gd()) : a.Gd();
        }
        var c = new cb(),
          d = a.collationKey;
        if (!d)
          throw new q(
            "Collation is unsuitable for keys and grouping",
            "XTDE1110"
          );
        var h = {
            Se: function (b, e) {
              return vb.Cj(D.K(b), D.K(e), a.ia);
            },
            hash: function (a) {
              return a.map(e).join();
            },
          },
          g = {
            Se: function (a, b) {
              return e(a) === e(b);
            },
            hash: function (a) {
              return e(a);
            },
          };
        c.options = b ? h : g;
        return c;
      },
      Op: "http://www.w3.org/2013/collation/UCA",
      Wp: "http://www.w3.org/xslts/collation/caseblind",
    };
  })();
  var wb = (function () {
    var a = {};
    return {
      register: function (b, d) {
        a[b] = d;
      },
      find: function (b) {
        return a[b];
      },
      er: a,
    };
  })();
  var xb = (function () {
    function a(b) {
      var d = G.Ab,
        m = {
          "p.any": function () {
            return function () {
              return !0;
            };
          },
          "p.never": function () {
            return function () {
              return !1;
            };
          },
          "p.booleanExp": function (a) {
            var b = P.Kb(a);
            return function (a, c) {
              var d = c.ja();
              d.focus = D.jc(a);
              return P.dg(b(d));
            };
          },
          "p.genNode": function (a) {
            var b = P.Kb(a);
            return function (a, c) {
              if (!G.da(a)) return !1;
              for (var d = G.Ab.Ib(a), f; null !== (f = d.next()); ) {
                var k = c.ja(!1);
                k.focus = D.jc(f);
                for (f = b(k); null !== (k = f.next()); )
                  if (G.isSameNode(k, a)) return !0;
              }
              return !1;
            };
          },
          "p.genPos": function (a) {
            var b = I.Xc(a.test).ta(),
              c = P.Kb(a);
            return function (a, f) {
              if (!b(a)) return !1;
              var k = f.fixed.ya,
                r = f.ja(!1),
                l = d.pb(G.hc(a)).filter(b);
              for (r.focus = D.Da(l); null != (l = r.focus.next()); )
                if (l === a && k.dg(c(r))) return !0;
              return !1;
            };
          },
          "p.nodeSet": function (a) {
            var b = P.Kb(a);
            return function (a, c) {
              return b(c).some(function (b) {
                return b === a;
              });
            };
          },
          "p.nodeTest": function (a) {
            return I.Xc(a.test).ta();
          },
          "p.simPos": function (a) {
            var b = I.Xc(a.test).ta(),
              c = parseInt(a.pos, 10);
            return function (a) {
              return b(a) && d.Oe(a).filter(b).count() === c - 1;
            };
          },
          "p.venn": function (b) {
            var c = b.C,
              d = a(c[0]),
              k = a(c[1]);
            b = b.op;
            switch (b) {
              case "union":
                return function (a, b) {
                  return d(a, b) || k(a, b);
                };
              case "intersect":
                return function (a, b) {
                  return d(a, b) && k(a, b);
                };
              case "except":
                return function (a, b) {
                  return d(a, b) && !k(a, b);
                };
              default:
                throw new q("unknown op " + b, "SXJS0003");
            }
          },
          "p.withCurrent": function (b) {
            var c = a(b.C[0]);
            return function (a, b) {
              var d = b.ja(!0);
              d.Ha[0] = [a];
              return c(a, d);
            };
          },
          "p.withPredicate": function (b) {
            b = b.C;
            var c = a(b[0]),
              d = P.Fc(b[1]);
            return function (a, b) {
              if (!c(a, b)) return !1;
              var f = b.ja(!1);
              f.focus = D.jc(a);
              return P.dg(d(f));
            };
          },
          "p.withUpper": function (b) {
            var c = b.C,
              d = a(c[0]),
              k = a(c[1]),
              r = b.axis;
            return "parent" === r
              ? "true" === b.upFirst
                ? function (a, b) {
                    var c = G.hc(a);
                    return c && k(c, b) && d(a, b);
                  }
                : function (a, b) {
                    var c = G.hc(a);
                    return c && d(a, b) && k(c, b);
                  }
              : function (a, b) {
                  if (!d(a, b)) return !1;
                  for (var c = G.Xk[r](a), f; null !== (f = c.next()); )
                    if (k(f, b)) return !0;
                  return !1;
                };
          },
        }[b.N];
      if (m) return m(b);
      throw new q("Unimplemented pattern " + b.N, "SXJS0002");
    }
    return {
      Df: a,
      matches: function (a, d, m) {
        m.Mi(null);
        a = a(d, m);
        m.jk();
        return a;
      },
    };
  })();
  var yb = (function () {
    function a(a, b, l, f) {
      function c(a) {
        for (var b = [], e = a.length - 1; 0 <= e; e--)
          b.push({ Bg: a[e], action: a[e].C[1], pattern: xb.Df(a[e].C[0]) });
        return b;
      }
      function r(a) {
        a._saxonAccumulators || (a._saxonAccumulators = {});
        a._saxonAccumulators[l] = {};
        var b = m(A, a);
        b && (h = z(b, a));
        a._saxonAccumulators[l].pre = h;
        d.pb(a).sa(r);
        (b = m(x, a)) && (h = z(b, a));
        a._saxonAccumulators[l].post = h;
      }
      function m(a, b) {
        for (var c = 0, d = a.length; c < d; c++)
          if (xb.matches(a[c].pattern, b, e)) return a[c];
        return null;
      }
      function w(a) {
        return {
          visibility: "PRIVATE",
          Rb: a,
          actor: a,
          ci: a.binds.split(" ").map(function (a) {
            return parseInt(a, 10);
          }),
        };
      }
      function z(a, e) {
        var c = f.ja(!0);
        c.focus = D.jc(e);
        c.Ha = [h];
        c.La = w(b);
        c.Ja = "accumulator";
        return t.evaluate(a.action, c).expand();
      }
      var t = f.fixed.ya,
        g = t.Ec(b, "pre")[0],
        K = t.Ec(b, "post")[0],
        A = c(t.Ec(g, "accRule")),
        x = c(t.Ec(K, "accRule")),
        e = f.ja(!0);
      e.focus = D.jc(a);
      e.Ha = [];
      e.La = w(b);
      var h = t.evaluate(t.qa(b, "init"), e).expand();
      r(a);
    }
    function b(d, c, l, f, k) {
      var r = f.fixed.ya.ah(d, f).Tc[c];
      if (!r) throw new q("Unknown accumulator " + c, "XTDE3340");
      if (
        f.Eh &&
        !f.Eh.some(function (a) {
          return a === c;
        })
      )
        throw new q("Inapplicable accumulator " + c, "XTDE3362");
      if (!G.da(l))
        throw new q(
          "Cannot evaluate accumulator: context item is not a node",
          "XTTE3360"
        );
      if (2 === l.nodeType || 13 === l.nodeType)
        throw new q(
          "Accumulators are not available on attribute or namespace nodes",
          "XTTE3360"
        );
      if (l._saxonOriginal) return b(d, c, l._saxonOriginal, f, k);
      d = r.tk;
      (l._saxonAccumulators && l._saxonAccumulators.hasOwnProperty(d)) ||
        a(G.be(l), r.on, d, f);
      return l._saxonAccumulators[d][k];
    }
    var d = G.Ab;
    return {
      nn: function (a, c, d, f) {
        return b(a, c, d, f, "pre");
      },
      mn: function (a, c, d, f) {
        return b(a, c, d, f, "post");
      },
    };
  })();
  var zb = (function () {
    function a(a, b, c, d, f) {
      f = void 0 === f ? null : f;
      var g = r.T.g(b);
      if (a && a.Xa(g)) {
        a = a.get(g);
        if ("function" === c) {
          b = new I.re([J.B.Td], J.B.Td);
          if (1 === a.length && b.ta()(a[0])) return a[0];
          throw new q(
            "Option " + g + " must be a function(xs:string) as xs:string",
            "XPTY0004"
          );
        }
        if (1 === a.length && C.type[c].matches(a[0])) {
          if (f && 0 > f.indexOf(a[0].value))
            throw new q("Invalid value " + g + "=" + a[0], "FOJS0005");
          return a[0].value;
        }
        throw new q("Invalid option: " + b + ": must be " + c, "XPTY0004");
      }
      return d;
    }
    function b(a, b) {
      function c(a) {
        throw new q(a, "FOJS0001");
      }
      function d() {
        return (y = f());
      }
      function f() {
        for (y = ""; ; ) {
          if (p >= a.length) return ["eof"];
          var b = a.charAt(p++);
          if (!/[ \n\r\t]/.test(b)) break;
        }
        switch (b) {
          case "[":
          case "{":
          case "]":
          case "}":
          case ":":
          case ",":
            return [b];
          case '"':
            for (b = !1; ; ) {
              var e = a.charAt(p++);
              if ('"' !== e || b) (y += e), (b = "\\" === e && !b);
              else return ["string", y];
              p >= a.length && c("Unclosed quotes in string literal");
            }
          case "-":
          case "0":
          case "1":
          case "2":
          case "3":
          case "4":
          case "5":
          case "6":
          case "7":
          case "8":
          case "9":
            for (y += b; p < a.length; )
              if (((b = a.charAt(p++)), /[0-9\-+.eE]/.test(b))) y += b;
              else {
                p--;
                break;
              }
            b = y;
            return [
              "number",
              /^-?(0|[1-9][0-9]*)(\.[0-9]+)?([eE][+-]?[0-9]+)?$/.test(b)
                ? b
                : c("Invalid JSON number " + b),
            ];
          case "t":
          case "f":
          case "n":
            for (y += b; ; )
              if (((b = a.charAt(p)), "a" <= b && "z" >= b)) {
                if (((y += b), ++p >= a.length)) break;
              } else break;
            if (["true", "false", "null"].includes(y)) return [y];
            c("Unknown constant " + y);
            break;
          default:
            return (
              c(
                "Unexpected character '" +
                  b +
                  "' (" +
                  Ma.Bc(b) +
                  ") at position " +
                  p
              ),
              -1
            );
        }
      }
      function k(a) {
        y[0] !== a && c("Expected " + a + ", found " + y[0]);
      }
      function x(a) {
        return y[0] === a ? (d(), !0) : !1;
      }
      function e(a) {
        if (y[0] === a) return d(), !0;
        if ("," === y[0]) return d(), !1;
        c("Expected ',' or '" + a + "', found '" + y[0] + "'");
      }
      function h() {
        switch (y[0]) {
          case "[":
            d();
            b.Am();
            if (!x("]")) {
              do h();
              while (!e("]"));
            }
            b.ul();
            break;
          case "{":
            d();
            b.Bm();
            if (!x("}")) {
              do k("string"), b.ql(y[1]), d(), k(":"), d(), h();
              while (!e("}"));
            }
            b.vl();
            break;
          case "string":
            b.tl(y[1]);
            d();
            break;
          case "number":
            b.sl(y[1]);
            d();
            break;
          case "true":
          case "false":
            b.pl(y[0]);
            d();
            break;
          case "null":
            b.rl();
            d();
            break;
          default:
            c("Unexpected token " + y[0]);
        }
      }
      a = a.replace(/^[\uFEFF]/, "");
      var p = 0,
        y = d();
      h();
      k("eof");
      return b.result();
    }
    function d(a) {
      try {
        return JSON.parse('"' + a + '"');
      } catch (z) {
        throw new q(z.toString(), "FOJS0001");
      }
    }
    function m(a, b) {
      var d = b.Yb,
        g = b.Vf;
      var f = g
        ? function (a) {
            return g
              .evaluate([[C.O.T.g(c(a))]], d)
              .next()
              .toString();
          }
        : function () {
            return "�";
          };
      a = a.replace(/[\x00-\x08\x0B\x0C\x0E-\x0F\x80-\x9F\uFFFF]/g, f);
      return (a = a.replace(/[\uD800-\uDFFF]+/g, function (a) {
        for (var b = "", e = 0; e < a.length; e++) {
          var c = a.charAt(e);
          b +=
            (1 === e % 2) === "\udc00" > c ||
            (e === a.length - 1 && "\udc00" > c)
              ? f(c)
              : c;
        }
        return b;
      }));
    }
    function c(a) {
      for (a = a.charCodeAt(0).toString(16); 4 > a.length; ) a = "0" + a;
      return "\\u" + a.toUpperCase();
    }
    function l(b, c) {
      this.Hb = [];
      this.hf = [];
      this.Yb = c;
      a(b, "liberal", "boolean", !1);
      this.Vf = a(b, "fallback", "function", null);
      this.Vd = a(b, "escape", "boolean", !1);
      this.Ug = a(b, "duplicates", "string", "use-first", [
        "reject",
        "use-first",
        "use-last",
      ]);
      if (this.Vd && this.Vf)
        throw new q(
          "parse-json: cannot use fallback with escape:true()",
          "FOJS0005"
        );
    }
    function f(b, c) {
      this.Hb = [];
      this.hf = [];
      this.Vg = [];
      this.Yb = c;
      a(b, "liberal", "boolean", !1);
      if (a(b, "validate", "boolean", !1))
        throw new q(
          "json-to-xml: validate option not supported in a non-schema-aware processor",
          "FOJS0004"
        );
      this.Vf = a(b, "fallback", "function", null);
      this.Vd = a(b, "escape", "boolean", !1);
      this.Ug = a(b, "duplicates", "string", "use-first", [
        "reject",
        "use-first",
        "retain",
      ]);
      if (this.Vd && this.Vf)
        throw new q(
          "json-to-xml: cannot use fallback with escape:true()",
          "FOJS0005"
        );
    }
    var k = F.cb,
      r = C.O,
      v = G.Ab;
    l.prototype = {
      Hb: [],
      hf: [],
      Yb: null,
      Vd: !1,
      Vf: null,
      Ug: "use-first",
      xh: function (a) {
        return this.Vd
          ? JSON.stringify(a)
              .replace(/^"|"$/g, "")
              .replace(/\\"/g, '"')
              .replace(/[\uD800-\uDFFF]/g, c)
          : m(a, this);
      },
      Oa: function () {
        return this.Hb[this.Hb.length - 1];
      },
      Oc: function (a) {
        if (0 === this.Hb.length) this.Hb.push(a);
        else if (this.Oa() instanceof mb) this.Oa().value.push(a);
        else {
          var b = this.Oa(),
            c = r.T.g(this.hf.pop());
          if (b.Xa(c))
            switch (this.Ug) {
              case "reject":
                throw new q(
                  "json-to-xml: duplicate key '" + c.toString() + "'",
                  "FOJS0003"
                );
              case "use-first":
                return;
            }
          b.Ta(c, a);
        }
      },
      rl: function () {
        this.Oc([]);
      },
      pl: function (a) {
        this.Oc([r.Ea.g(a)]);
      },
      sl: function (a) {
        this.Oc([r.za.fa(parseFloat(a))]);
      },
      tl: function (a) {
        this.Oc([r.T.g(this.xh(d(a)))]);
      },
      ql: function (a) {
        this.hf.push(this.xh(d(a)));
      },
      Am: function () {
        this.Hb.push(new mb([]));
      },
      ul: function () {
        this.Oc([this.Hb.pop()]);
      },
      Bm: function () {
        this.Hb.push(new cb());
      },
      vl: function () {
        this.Oc([this.Hb.pop()]);
      },
      result: function () {
        return void 0 !== this.Oa()[0] ? this.Oa()[0] : null;
      },
    };
    f.prototype = {
      Hb: [],
      hf: [{}],
      Vg: [],
      Yb: null,
      Vf: null,
      Vd: !1,
      Ug: "use-first",
      xh: function (a) {
        return this.Vd
          ? JSON.stringify(a)
              .replace(/^"|"$/g, "")
              .replace(/\\"/g, '"')
              .replace(/[\uD800-\uDFFF]/g, c)
          : m(a, this);
      },
      Oa: function () {
        return this.Hb[this.Hb.length - 1];
      },
      Oc: function (a) {
        if (0 === this.Hb.length) a.setAttribute("xmlns", k), this.Hb.push(a);
        else {
          var b = this.Oa();
          if ("map" === b.tagName) {
            var c = this.hf.pop(),
              d = this.Vg[this.Vg.length - 1];
            if (c in d)
              switch (this.Ug) {
                case "reject":
                  throw new q(
                    "parse-json: duplicate key '" + c.toString() + "'",
                    "FOJS0003"
                  );
                case "use-first":
                  return;
              }
            d[c] = a;
            a.setAttribute("key", c);
            this.Vd &&
              /\\/.test(c.toString()) &&
              a.setAttribute("escaped-key", "true");
          }
          b.appendChild(a);
        }
      },
      rl: function () {
        var a = this.Yb.wa.createElementNS(k, "null");
        this.Oc(a);
      },
      pl: function (a) {
        var b = this.Yb.wa.createElementNS(k, "boolean");
        b.appendChild(this.Yb.wa.createTextNode(a.toString()));
        this.Oc(b);
      },
      sl: function (a) {
        var b = this.Yb.wa.createElementNS(k, "number");
        b.appendChild(this.Yb.wa.createTextNode(a.toString()));
        this.Oc(b);
      },
      tl: function (a) {
        var b = this.Yb.wa.createElementNS(k, "string");
        if ("" !== a) {
          a = this.xh(d(a));
          var c = this.Yb.wa.createTextNode(a);
          this.Vd && /\\/.test(a) && b.setAttribute("escaped", "true");
          b.appendChild(c);
        }
        this.Oc(b);
      },
      ql: function (a) {
        this.hf.push(this.xh(d(a)));
      },
      Am: function () {
        var a = this.Yb.wa.createElementNS(k, "array");
        this.Hb.push(a);
      },
      ul: function () {
        this.Oc(this.Hb.pop());
      },
      Bm: function () {
        var a = this.Yb.wa.createElementNS(k, "map");
        this.Hb.push(a);
        this.Vg.push({});
      },
      vl: function () {
        this.Vg.pop();
        this.Oc(this.Hb.pop());
      },
      result: function () {
        return this.Oa();
      },
    };
    return {
      fk: function (a, c, d) {
        return b(a, new l(c, d));
      },
      lp: function (a, c, d) {
        return b(a, new f(c, d));
      },
      Up: function (b, f) {
        function l(a) {
          throw new q("Invalid input to xml-to-json(): " + a, "FOJS0006");
        }
        function g(a) {
          0 !== h.xe(a).length &&
            l("node " + a.tagName + " must have no element children");
        }
        function m(a) {
          v
            .pb(a)
            .filter(function (a) {
              return (
                3 === a.nodeType && a.nodeValue && "" !== Na.trim(a.nodeValue)
              );
            })
            .next() && l("node " + a.tagName + " must have no text content");
        }
        function A(a) {
          try {
            return r.Ea.g(a).value;
          } catch (y) {
            l("invalid boolean: '" + a + "'");
          }
        }
        function x(a) {
          try {
            JSON.parse('"' + a + '"');
          } catch (y) {
            throw new q("invalid escape sequence: " + y.toString(), "FOJS0007");
          }
        }
        function e(a, b) {
          b = void 0 === b ? !0 : b;
          if (9 === a.nodeType || 11 === a.nodeType) {
            var f = h.xe(a);
            1 !== f.length &&
              l("document node has " + f.length + " element children");
            return e(f[0]);
          }
          if (1 === a.nodeType) {
            var p = !1;
            if (a.namespaceURI === k)
              switch (
                (v.ob(a).sa(function (e) {
                  if (0 > e.name.indexOf(":") || e.namespaceURI === k)
                    "key" === e.name || "escaped-key" === e.name
                      ? "escaped-key" === e.name
                        ? (b ||
                            "map" === h.hc(a).localName ||
                            l(
                              "@escaped-key is allowed only on children of map"
                            ),
                          A(e.value) && x(a.getAttribute("key")))
                        : b ||
                          "map" === h.hc(a).localName ||
                          l("@key is allowed only on children of map")
                      : "escaped" === e.name
                      ? ("string" !== a.localName &&
                          l("@escaped is allowed only on string"),
                        (p = A(e.value)))
                      : l("invalid attribute " + e.name);
                }),
                a.hasAttribute("escaped-key") &&
                  !b &&
                  "map" !== h.hc(a).localName &&
                  l("escaped-key is allowed only on children of map"),
                a.localName)
              ) {
                case "null":
                  return (
                    v
                      .pb(a)
                      .filter(function (a) {
                        return 8 !== a.nodeType && 7 !== a.nodeType;
                      })
                      .next() && l("null element must have no content"),
                    "null"
                  );
                case "string":
                  g(a);
                  f = a.textContent;
                  if (p)
                    (f = f
                      .replace(/^"/g, '\\"')
                      .replace(/^[\b]/g, "\\b")
                      .replace(/^\f/g, "\\f")
                      .replace(/^\n/g, "\\n")
                      .replace(/^\r/g, "\\r")
                      .replace(/^\t/g, "\\t")
                      .replace(/^\//g, "\\/")
                      .replace(/([^\\])"/g, '$1\\"')
                      .replace(/([^\\])[\b]/g, "$1\\b")
                      .replace(/([^\\])\f/g, "$1\\f")
                      .replace(/([^\\])\n/g, "$1\\n")
                      .replace(/([^\\])\r/g, "$1\\r")
                      .replace(/([^\\])\t/g, "$1\\t")
                      .replace(/([^\\])\//g, "$1\\/")
                      .replace(/[\u0001-\u001F\u007F-\u009F]/g, c)),
                      x(f);
                  else return JSON.stringify(f).replace(/\//g, "\\/");
                  return '"' + f + '"';
                case "number":
                  g(a);
                  try {
                    f = r.za.g(a.textContent);
                  } catch (ma) {
                    l("invalid number");
                  }
                  isFinite(f.J()) || l("NaN and INF not allowed");
                  return f.toString();
                case "boolean":
                  return (
                    g(a), A(a.textContent), r.Ea.g(a.textContent).toString()
                  );
                case "array":
                  m(a);
                  var y = "[",
                    t = "";
                  h.xe(a).forEach(function (a) {
                    y += t + e(a, !1);
                    t = ",";
                  });
                  return y + "]";
                case "map":
                  m(a);
                  var Y = "{",
                    N = "",
                    S = {};
                  h.xe(a).forEach(function (a) {
                    a.hasAttribute("key") ||
                      l("child element of map must have a key");
                    var b = h.getAttribute(a, "key"),
                      c = b,
                      g = h.getAttribute(a, "escaped-key"),
                      f = !1;
                    g && A(g) && ((f = !0), (c = d(b)));
                    S[c] && l("duplicate key '" + b + "'");
                    S[c] = !0;
                    Y +=
                      N +
                      (f
                        ? '"' + b + '"'
                        : JSON.stringify(b).replace(/\//g, "\\/")) +
                      ":" +
                      e(a, !1);
                    N = ",";
                  });
                  return Y + "}";
                default:
                  l("unknown local name " + a.localName);
              }
            else l("wrong namespace " + a.namespaceURI);
          } else
            h.da(a) || l("not a node"),
              Error.Gj && Error.Gj(),
              l("wrong node kind " + a.nodeType);
        }
        var h = G;
        a(f, "indent", "boolean", !1);
        return e(b);
      },
    };
  })();
  var Ab = (function () {
    function a(a, b, c, d, m) {
      c = "xml" === c ? b.fixed.tc : b.fixed.Od;
      b = b.fixed.Ah;
      var f = c[a];
      if (!f || f instanceof q) {
        f = b[a];
        if (!f) {
          try {
            f = d();
          } catch (z) {
            f = z;
          }
          b[a] = f;
        }
        f = m(f);
        c[a] = f;
      }
      if (f instanceof q) throw f;
      return f;
    }
    function b(a, b) {
      b || (b = "utf-8");
      var c = a.responseText || a;
      if (b.startsWith("utf") && 0 <= c.indexOf("�"))
        throw new q(
          "External file contains non-Unicode characters",
          "FOUT1190"
        );
      return c;
    }
    function d(a) {
      if (0 <= a.indexOf("\x00"))
        throw new q("External file contains non-XML characters", "FOUT1190");
      return a;
    }
    function m(a) {
      "﻿" === a.charAt(0) && (a = a.substring(1));
      return a;
    }
    function c(a, b, c) {
      if ((a = a[0].next()) && G.Bf(a.toString())) return a.toString();
      b = b.fixed.ya.yb(c, b);
      if (null === b || "#UNDEFINED" === b)
        throw new q("No base URI for relative resolution", "FODC0002", c);
      return null === a ? null : Da.$c(a.toString(), b);
    }
    return {
      Uk: c,
      Zh: function (a, b, d) {
        try {
          return c(a, b, d);
        } catch (r) {
          if (r instanceof q && "XPTY0004" === r.code) throw r;
          throw new q(r.message, "FOUT1170", d);
        }
      },
      zj: function (a) {
        if ("" === a) return null;
        if (
          !["utf-8", "utf-16", "utf-16be", "iso-8859-1"].includes(
            a.toLowerCase()
          )
        )
          throw new q("Unrecognized encoding " + a, "FOUT1190");
        return a;
      },
      dl: d,
      el: m,
      ve: function (b, c) {
        if (0 <= b.indexOf("#"))
          throw new q(
            "Fragments not supported in external document URIs",
            "FODC0002"
          );
        return a(
          b,
          c,
          "xml",
          function () {
            try {
              var a = Da.readFile(b, !0);
            } catch (r) {
              if (r instanceof q && "FOUT1190" === r.code)
                throw new q(r.message, "FODC0002");
              throw r;
            }
            return a;
          },
          function (a) {
            if (a instanceof q) return a;
            a = a.responseText || a;
            a = m(d(a));
            a = G.fe(Da.parseXmlFromString(a));
            a._saxonBaseUri = b;
            a._saxonDocUri = b;
            return a;
          }
        );
      },
      Xn: function (c, d) {
        if (0 <= c.indexOf("#"))
          throw new q(
            "Fragments not supported in text document URIs",
            "FOUT1170"
          );
        return a(
          c,
          d,
          "text",
          function () {
            try {
              var a = Da.readFile(c, !0);
            } catch (r) {
              if (r instanceof q) throw new q(r.message, "FOUT1170");
              throw r;
            }
            return a;
          },
          function (a) {
            if (a instanceof q) return a;
            var c = a.responseText || a;
            c = m(c);
            a.responseText ? (a.responseText = c) : (a = c);
            return b(a, "utf-8");
          }
        );
      },
      Kj: function (c, f, k, r) {
        if (0 <= c.indexOf("#"))
          throw new q(
            "Fragments not supported in text document URIs",
            "FOUT1170"
          );
        return a(
          c,
          f,
          "text",
          function () {
            try {
              var a = Da.readFile(c, !0);
            } catch (w) {
              if (w instanceof q && "FOUT1190" === w.code) throw w;
              throw new q(
                "Cannot retrieve unparsed-text " +
                  c.toString() +
                  " " +
                  w.toString(),
                "FOUT1170",
                k
              );
            }
            return a;
          },
          function (a) {
            if (a instanceof q) return a;
            var c = a.responseText || a;
            c = m(d(c));
            a.responseText ? (a.responseText = c) : (a = c);
            return b(a, r);
          }
        );
      },
      pm: function (a) {
        try {
          return a(), D.ka(!0);
        } catch (f) {
          if (f instanceof q && "XPTY0004" === f.code) throw f;
          return D.ka(!1);
        }
      },
    };
  })();
  var Cb = (function () {
    function a() {
      this.Vh = [];
      this.Yh = [];
    }
    function b(a, b) {
      var c = f.call(this) || this;
      c.$ = a;
      c.Sf = !1;
      c.level = 0;
      c.rh = !1;
      c.first = !0;
      c.separator = C.O.T.g(b);
      c.$a = !1;
      return c;
    }
    function d(a) {
      var b = f.call(this) || this;
      b.$ = a;
      b.Sf = !1;
      b.level = 0;
      b.rh = !1;
      b.$a = !1;
      return b;
    }
    function m(a) {
      this.Bb = a;
    }
    function c(a) {
      var b = f.call(this) || this;
      b.Jm = !1;
      b.uk = !1;
      b.done = !1;
      b.Dp(a);
      return b;
    }
    function l(a) {
      this.vf = (this.context = a) ? a.wa : Da.Ol().createDocument();
      this.Dg = [];
      this.Xd = null;
      this.level = 0;
      this.If = null;
      return this;
    }
    function f() {
      this.$ = null;
      return this;
    }
    function k() {}
    k.prototype.tb = function () {};
    k.prototype.hb = function () {};
    k.prototype.Ba = function () {};
    k.prototype.Na = function () {};
    k.prototype.text = function () {};
    k.prototype.Sa = function () {};
    k.prototype.Ra = function () {};
    k.prototype.append = function () {};
    k.prototype.close = function () {};
    n(f, k);
    f.prototype.tb = function (a) {
      this.$.tb(a);
    };
    f.prototype.hb = function () {
      this.$.hb();
    };
    f.prototype.Ba = function (a, b, c, d) {
      this.$.Ba(a, b, c, d);
    };
    f.prototype.Na = function () {
      this.$.Na();
    };
    f.prototype.text = function (a, b) {
      this.$.text(a, b);
    };
    f.prototype.Sa = function (a, b) {
      this.$.Sa(a, b);
    };
    f.prototype.Ra = function (a, b, c) {
      this.$.Ra(a, b, c);
    };
    f.prototype.append = function (a, b) {
      this.$.append(a, b);
    };
    f.prototype.close = function () {
      this.$.close();
    };
    f.prototype.Rf = function (a) {
      this.$ = a;
      return this;
    };
    f.prototype.Dp = function (a) {
      this.$ = a;
    };
    n(l, k);
    l.prototype.Bp = function () {
      this.vf = new m(this.vf);
    };
    l.prototype.tb = function (a) {
      if (0 === this.level++) {
        var b = (this.Xd = this.vf.createDocumentFragment());
        a && a.BASE_URI && (b._saxonBaseUri = a.BASE_URI);
        this.Dg.push(b);
      } else throw new q("Builder.startDoc() not at top level");
    };
    l.prototype.hb = function () {
      0 === --this.level && (this.Xd = null);
    };
    l.prototype.ai = function (a) {
      0 === this.level ? this.Dg.push(a) : this.Xd.appendChild(a);
    };
    l.prototype.Ba = function (a, b, c, d) {
      var f = this.vf.createElementNS(a.uri, a.toString());
      d.BASE_URI && (f._saxonBaseUri = d.BASE_URI);
      d.ORIGINAL_NODE && (f._saxonOriginal = d.ORIGINAL_NODE);
      d.CALLBACK && d.CALLBACK(f);
      this.ai(f);
      this.Xd = f;
      this.level++;
      this.If = null;
      b.forEach(function (a, b) {
        f.setAttributeNS(b.uri, b.toString(), a.value);
      });
      for (var g in c)
        c.hasOwnProperty(g) &&
          ((a = c[g]),
          "" === g
            ? f.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns", a)
            : f.setAttributeNS(
                "http://www.w3.org/2000/xmlns/",
                "xmlns:" + g,
                a
              ));
    };
    l.prototype.Na = function () {
      0 === --this.level ? (this.Xd = null) : (this.Xd = this.Xd.parentNode);
      this.If = null;
    };
    l.prototype.text = function (a) {
      this.If
        ? this.If.appendData(a)
        : ((a = this.vf.createTextNode(a)),
          this.ai(a),
          0 < this.level && (this.If = a));
    };
    l.prototype.Sa = function (a) {
      this.ai(this.vf.createComment(a));
      this.If = null;
    };
    l.prototype.Ra = function (a, b) {
      this.ai(this.vf.createProcessingInstruction(a, b));
      this.If = null;
    };
    l.prototype.append = function (a) {
      if (0 !== this.level) throw new q("Builder.append() not at top level");
      this.Dg.push(a);
    };
    l.prototype.rg = function () {
      return D.K(this.Dg);
    };
    l.prototype.result = function () {
      return this.Dg;
    };
    l.prototype.close = function () {
      k.prototype.close.call(this);
    };
    n(c, f);
    c.prototype.use = function () {
      if (this.done)
        throw new q(
          "Cannot write to the principal output destination as it has already been closed",
          "XTDE1490"
        );
      if (this.uk)
        throw new q(
          "Cannot write to the principal output destination as it has already been used by xsl:result-document",
          "XTDE1490"
        );
      this.Jm = !0;
    };
    c.prototype.Pp = function () {
      if (this.Jm)
        throw new q(
          "Cannot use xsl:result-document to write to a destination already used for the principal output",
          "XTDE1490"
        );
      if (this.uk)
        throw new q(
          "Cannot write more than one xsl:result-document to the principal output destination",
          "XTDE1490"
        );
      this.uk = !0;
    };
    c.prototype.tb = function (a) {
      f.prototype.tb.call(this, a);
    };
    c.prototype.hb = function () {
      f.prototype.hb.call(this);
    };
    c.prototype.Ba = function (a, b, c, d) {
      this.use();
      f.prototype.Ba.call(this, a, b, c, d);
    };
    c.prototype.Na = function () {
      f.prototype.Na.call(this);
    };
    c.prototype.text = function (a, b) {
      this.use();
      f.prototype.text.call(this, a, b);
    };
    c.prototype.Sa = function (a, b) {
      this.use();
      f.prototype.Sa.call(this, a, b);
    };
    c.prototype.Ra = function (a, b, c) {
      this.use();
      f.prototype.Ra.call(this, a, b, c);
    };
    c.prototype.append = function (a, b) {
      this.use();
      f.prototype.append.call(this, a, b);
    };
    c.prototype.close = function () {
      this.done = !0;
      this.$ && f.prototype.close.call(this);
    };
    m.prototype.createDocumentFragment = function () {
      return this.Bb.createDocumentFragment();
    };
    m.prototype.createElementNS = function (a, b) {
      var c = this.Bb.documentElement;
      "" === a && c && Da.Fd(c)
        ? (c = this.Bb.createElement(b))
        : "http://www.w3.org/1999/xhtml" === a && c && Da.Fd(c)
        ? ((c = b.indexOf(":")),
          (c = -1 === c ? b : b.substring(c + 1)),
          (c = this.Bb.createElement(c)))
        : (c = this.Bb.createElementNS(a, b));
      return c;
    };
    m.prototype.createTextNode = function (a) {
      return this.Bb.createTextNode(a);
    };
    m.prototype.createComment = function (a) {
      return this.Bb.createComment(a);
    };
    m.prototype.createProcessingInstruction = function (a, b) {
      return this.Bb.createProcessingInstruction(a, b);
    };
    n(d, f);
    d.prototype.uc = function (a) {
      this.rh ||
        ((this.level = 0),
        (this.$a = !1),
        this.$.tb(a),
        (this.Sf = this.rh = !0));
    };
    d.prototype.tb = function (a) {
      this.uc(a);
      this.level++;
      this.Sf = !1;
    };
    d.prototype.hb = function () {
      this.level--;
      this.$a = !1;
      this.$.hb();
    };
    d.prototype.Ba = function (a, b, c, d) {
      this.uc(d);
      this.level++;
      this.$.Ba(a, b, c, d);
    };
    d.prototype.Na = function () {
      this.level--;
      this.$.Na();
      this.$a = !1;
    };
    d.prototype.text = function (a, b) {
      this.uc(b);
      f.prototype.text.call(this, a, b);
      this.$a = !1;
    };
    d.prototype.Sa = function (a, b) {
      this.uc(b);
      f.prototype.Sa.call(this, a, b);
      this.$a = !1;
    };
    d.prototype.Ra = function (a, b, c) {
      this.uc(c);
      f.prototype.Ra.call(this, a, b, c);
      this.$a = !1;
    };
    d.prototype.append = function (a, b) {
      this.uc(b);
      this.ji(a);
    };
    d.prototype.close = function () {
      this.Sf && this.hb();
      f.prototype.close.call(this);
    };
    d.prototype.ji = function (a) {
      var b = this;
      if (null != a)
        if (C.Ga(a))
          this.$a && this.text(" ", {}),
            this.text(a.toString(), {}),
            (this.$a = !0);
        else if (a instanceof mb)
          a.flatten(function (a) {
            return b.ji(a);
          });
        else {
          if (a instanceof nb.gb)
            throw new q(
              "Cannot add a function item to an XDM node tree",
              "SENR0001"
            );
          if (a instanceof cb)
            throw new q("Cannot add a map to an XDM node tree", "SENR0001");
          Bb.Ni(a, this);
          this.$a = !1;
        }
    };
    n(b, f);
    b.prototype.uc = function (a) {
      this.rh ||
        ((this.level = 0),
        (this.$a = !1),
        this.$.tb(a),
        (this.Sf = this.rh = !0));
      this.first || this.$.append(this.separator, {});
      this.first = !1;
    };
    b.prototype.tb = function (a) {
      this.uc(a);
      this.level++;
      this.Sf = !1;
    };
    b.prototype.hb = function () {
      this.level--;
      this.$a = !1;
      this.$.hb();
    };
    b.prototype.Ba = function (a, b, c, d) {
      this.uc(d);
      this.level++;
      this.$.Ba(a, b, c, d);
    };
    b.prototype.Na = function () {
      this.level--;
      this.$.Na();
    };
    b.prototype.text = function (a, b) {
      this.uc(b);
      f.prototype.text.call(this, a, b);
    };
    b.prototype.Sa = function (a, b) {
      this.uc(b);
      f.prototype.Sa.call(this, a, b);
    };
    b.prototype.Ra = function (a, b, c) {
      this.uc(c);
      f.prototype.Ra.call(this, a, b, c);
    };
    b.prototype.append = function (a, b) {
      var c = this;
      if (P.isArray(a))
        a.flatten(function (a) {
          return c.append(a, b);
        });
      else {
        if (a instanceof nb.gb)
          throw new q(
            "Cannot add a function item to an XDM node tree",
            "SENR0001"
          );
        if (a instanceof cb)
          throw new q("Cannot add a map to an XDM node tree", "SENR0001");
        C.Ga(a)
          ? (this.uc(b), this.$.append(a, b))
          : (this.uc(b), Bb.Ni(a, this), (this.$a = !1));
      }
    };
    b.prototype.close = function () {
      this.Sf && this.hb();
      f.prototype.close.call(this);
    };
    b.prototype.ji = function (a) {
      var b = this;
      if (null != a)
        if (a instanceof mb)
          a.flatten(function (a) {
            return b.ji(a);
          });
        else {
          if (a instanceof nb.gb)
            throw new q(
              "Cannot add a function item to an XDM node tree",
              "SENR0001"
            );
          if (a instanceof cb)
            throw new q("Cannot add a map to an XDM node tree", "SENR0001");
          Bb.Ni(a, this);
          this.$a = !1;
        }
    };
    a.prototype.ef = function (a) {
      return this.Vh.findIndex(function (b) {
        return b.ia(a);
      });
    };
    a.prototype.get = function (a) {
      a = this.ef(a);
      return 0 > a ? void 0 : this.Yh[a];
    };
    a.prototype.set = function (a, b) {
      var c = this.ef(a);
      0 <= c ? (this.Yh[c] = b) : (this.Vh.push(a), this.Yh.push(b));
    };
    a.prototype.forEach = function (a) {
      for (var b = 0; b < this.Vh.length; b++) a(this.Yh[b], this.Vh[b]);
    };
    return {
      Jk: k,
      Tf: l,
      $e: a,
      Za: f,
      Rg: d,
      en: b,
      Wm: c,
      ae: function (a) {
        return new l(a);
      },
    };
  })();
  var Bb = (function () {
    function a(a) {
      this.$ = a;
      this.ph = [];
      this.gm = [];
      this.pc = null;
      this.level = 0;
      this.ik = this.Id = null;
      this.ie = {};
      this.Li = null;
      this.$a = this.lg = !1;
      this.Lj = {};
      this.Ke = null;
      return this;
    }
    function b() {}
    function d(a) {
      if (a) {
        var b = a.PUSH;
        if (!b)
          if ((b = t[a.N])) a.PUSH = b = b(a);
          else {
            var c = P.Fc(a);
            a.PUSH = b = function (a, b) {
              c(a).sa(function (a) {
                return b.append(a);
              });
            };
          }
        return b;
      }
    }
    function m(a) {
      var b = a.N;
      a.parentNode && (b = m(a.parentNode) + "/" + b);
      return b;
    }
    function c(a) {
      if (a.C) {
        var b = a.C.map(d);
        return function (a, c) {
          b.forEach(function (b) {
            return b(a, c);
          });
        };
      }
      return function () {};
    }
    function l(a, b, c, d, e, h) {
      if (G.da(a))
        switch (a.nodeType) {
          case 9:
          case 11:
            c.pc = G.baseURI(a);
            k(a, c, e, h);
            break;
          case 1:
            if (a.hasAttribute("xml:base")) {
              var g = a.getAttribute("xml:base");
              c.pc = G.Bf(g) ? g : Da.$c(g.toString(), P.yb(d, b)).toString();
            } else c.pc = G.baseURI(a);
            k(a, c, e, h);
            break;
          case 3:
          case 4:
            c.text(a.nodeValue);
            break;
          case 7:
            c.Ra(a.target, a.data);
            break;
          case 8:
            c.Sa(a.textContent);
            break;
          default:
            c.append(a);
        }
      else c.append(a);
    }
    function f(a, b, c) {
      switch (a.nodeType) {
        case 9:
        case 11:
          b.tb(c ? { BASE_URI: c } : {});
          a = a.childNodes;
          for (c = 0; c < a.length; ++c) f(a[c], b, null);
          b.hb();
          break;
        case 1:
          var d = {};
          G.Ab.Hc(a).sa(function (a) {
            "xml" !== a.prefix && (d[a.prefix] = a.uri);
          });
          var e = new Cb.$e();
          G.Ab.ob(a).sa(function (a) {
            e.set(a.je, { value: a.value, ec: 0 });
          });
          b.Ba(G.ma(a), e, d, {});
          a = a.childNodes;
          for (c = 0; c < a.length; ++c) f(a[c], b, null);
          b.Na();
          break;
        case 3:
        case 4:
          b.text(a.nodeValue, 0);
          break;
        case 7:
          b.Ra(a.target, a.data, 0);
          break;
        case 8:
          b.Sa(a.textContent, 0);
      }
    }
    function k(a, b, c, d) {
      d = void 0 === d ? !1 : d;
      switch (a.nodeType) {
        case 9:
        case 11:
          d && (b.Ke = a);
          b.tb();
          a = a.childNodes;
          for (var e = 0; e < a.length; ++e) k(a[e], b, c, d);
          b.hb();
          break;
        case 1:
          d && (b.Ke = a);
          b.Ba(G.ma(a));
          G.Ab.ob(a).sa(function (a) {
            G.ma(a);
            b.ob(G.ma(a), a.value);
          });
          c &&
            G.Ab.Hc(a).sa(function (a) {
              b.Hc(a.prefix, a.uri);
            });
          a = a.childNodes;
          for (e = 0; e < a.length; ++e) k(a[e], b, c, d);
          b.Na();
          break;
        case 3:
        case 4:
          d && (b.Ke = a);
          b.text(a.nodeValue);
          break;
        case 7:
          d && (b.Ke = a);
          b.Ra(a.target, a.data);
          break;
        case 8:
          d && (b.Ke = a), b.Sa(a.textContent);
      }
    }
    function r(a) {
      return (a = a.next()) ? a.toString() : "";
    }
    function v(a, b, c, d, e) {
      b = c && 0 <= c.indexOf("c");
      if (G.da(a))
        switch (a.nodeType) {
          case 9:
          case 11:
            e.pc = G.baseURI(a);
            e.tb();
            d();
            e.hb();
            break;
          case 1:
            c = G.ma(a);
            e.pc = G.baseURI(a);
            e.Ba(c);
            b &&
              G.De(a).forEach(function (a) {
                e.Hc(a.prefix, a.uri);
              });
            d();
            e.Ke = null;
            e.Na();
            break;
          case 2:
            G.ma(a);
            e.ob(G.ma(a), a.value);
            break;
          case 3:
          case 4:
            e.text(a.textContent);
            break;
          case 8:
            e.Sa(a.textContent);
            break;
          case 7:
            e.Ra(a.target, a.data);
            break;
          case 13:
            e.Hc(a.prefix, a.uri);
            break;
          default:
            throw new q("Unknown node kind " + a.nodeType, "SXJS0003");
        }
      else e.append(a);
    }
    function w(a, b, c, d, e) {
      var h = C.O.T.g;
      if (!c.match(/^[smijxq]*$/))
        throw new q("Illegal flags for regular expression: " + c, "FORX0001");
      b = Na.wh(b, c + "g", a);
      if (!d && b.test(""))
        throw new q(
          "Regular expression matches zero-length string",
          "FORX0003"
        );
      d = [];
      for (var f = 0, g = 0; null !== (c = b.exec(a)); )
        if (
          ((c.index > f || (c.index === f && e)) &&
            d.push({ Ie: !1, T: h(a.substring(f, c.index)) }),
          d.push({ Ie: !0, groups: c, T: h(c[0]) }),
          (f = b.lastIndex),
          0 === c[0].length && b.lastIndex++,
          g++ > 10 * a.length)
        )
          throw new q("analyze-string looping???", "SXJS0004");
      a.length > f && d.push({ Ie: !1, T: h(a.substring(f, a.length)) });
      return d;
    }
    function z(a) {
      var b = "compAtt" === a.N,
        c = P.Fc(P.qa(a, "name")),
        d = P.Fc(P.qa(a, "namespace"));
      return function (e) {
        function h() {
          throw new q(
            (b ? "Attribute" : "Element") +
              " name '" +
              f +
              "' is not a lexical QName",
            b ? "XTDE0850" : "XTDE0820",
            a
          );
        }
        var f = Na.trim(c(e).next().toString());
        if (d) {
          e = d(e).next().value;
          if (!P.Rp(e))
            throw new q(
              (b ? "Attribute" : "Element") +
                " namespace '" +
                e +
                "' is invalid",
              b ? "XTDE0865" : "XTDE0835",
              a
            );
          var g = C.O.X;
          if ("" === e && f.includes(":"))
            g = g.xa("", "", f.replace(/^.*:/, ""));
          else if (f.includes(":")) {
            var x = f.split(":");
            ("" !== x[0] && "" !== x[1]) || h();
            g = g.xa(x[0], e, x[1]);
          } else g = "" === e ? g.xa("", "", f) : g.xa(b ? "ns0" : "", e, f);
        } else {
          if (b && "xmlns" === f)
            throw new q("Attribute must not be named xmlns", "XTDE0855", a);
          try {
            g = P.qk(a, f, !b);
          } catch (L) {
            if (L instanceof q) {
              if ("XTDE0290" === L.code)
                throw new q(
                  (b ? "Attribute" : "Element") +
                    " name '" +
                    f +
                    "' has an unbound prefix",
                  b ? "XTDE0860" : "XTDE0830",
                  a
                );
              "FORG0001" === L.code && h();
            }
            throw L;
          }
        }
        if ("http://www.w3.org/2000/xmlns/" === g.uri)
          throw new q(
            "Disallowed namespace " + g.uri,
            b ? "XTDE0865" : "XTDE0835",
            a
          );
        return g;
      };
    }
    b.prototype.tb = function () {};
    b.prototype.hb = function () {};
    b.prototype.Ba = function () {};
    b.prototype.ob = function () {};
    b.prototype.Hc = function () {};
    b.prototype.Na = function () {};
    b.prototype.text = function () {};
    b.prototype.Sa = function () {};
    b.prototype.Ra = function () {};
    b.prototype.append = function () {};
    b.prototype.close = function () {};
    n(a, b);
    a.prototype.mi = function (a, b, c) {
      var d = this.ie[a];
      if (d && d !== b)
        if (c) {
          if (this.Lj[a])
            throw new q(
              "Two conflicting bindings for prefix '" + a + "'",
              "XTDE0430"
            );
          if (this.Id.prefix === a) {
            for (d = a + "_9"; this.ie[d]; ) d += "9";
            this.Id = C.O.X.xa(d, this.Id.uri, this.Id.local);
            this.ie[d] = this.Id.uri;
          }
          this.ie[a] = b;
        } else return "" === a && (a = "NULL"), this.mi(a + "0", b, !1);
      c && (this.Lj[a] = !0);
      for (c = this.ph.length - 1; 0 <= c; c--)
        if (((d = this.ph[c]), d[0] === a))
          return d[1] !== b && (this.ie[a] = b), a;
      if ("" !== a || "" !== b) this.ie[a] = b;
      return a;
    };
    a.prototype.tb = function () {
      0 === this.level &&
        (this.$.tb({ BASE_URI: this.pc, ORIGINAL_NODE: this.Ke }),
        (this.ph = []));
      this.we();
      this.level++;
      this.$a = this.lg = !1;
    };
    a.prototype.hb = function () {
      this.level--;
      0 === this.level && this.$.hb();
      this.$a = !1;
    };
    a.prototype.Ba = function (a) {
      this.we();
      this.level++;
      this.lg = !0;
      this.Id = a;
      this.ik = new Cb.$e();
      this.ie = {};
      this.Lj = {};
      this.mi(a.prefix, a.uri, !1);
      this.Li = this.Ke;
      this.$a = !1;
    };
    a.prototype.ob = function (a, b) {
      if (0 === this.level) this.$.append(new $a(a, b, null));
      else {
        if (!this.lg) {
          if (this.Id)
            throw new q(
              "Cannot write attribute (" +
                a.ha() +
                "=" +
                b +
                ") after writing child nodes (level=" +
                this.level +
                ", start tag = " +
                this.Id +
                ")",
              "XTDE0410"
            );
          throw new q(
            "Cannot attach an attribute (" +
              a.ha() +
              "=" +
              b +
              ") to a document node",
            "XTDE0420"
          );
        }
        if ("" !== a.uri) {
          ["", "xmlns"].includes(a.prefix) && (a = a.me("ns_"));
          var c = this.mi(a.prefix, a.uri, !1);
          c !== a.prefix && (a = a.me(c));
        }
        this.ik.set(a, { value: b, ec: 0 });
      }
    };
    a.prototype.Hc = function (a, b) {
      if (0 === this.level) this.$.append(new ab(a, b));
      else {
        if (!this.lg)
          throw new q(
            "Cannot write namespace after writing child nodes",
            "XTDE0410"
          );
        if ("" === a && "" === this.Id.uri)
          throw new q(
            "Cannot add default namespace declaration to a no-namespace element",
            "XTDE0440"
          );
        this.mi(a, b, !0);
      }
    };
    a.prototype.Na = function () {
      this.we();
      this.$.Na();
      this.level--;
      for (var a = this.gm.pop(); 0 < a--; ) this.ph.pop();
      this.$a = !1;
    };
    a.prototype.text = function (a, b) {
      if (0 < a.length || 0 === this.level) this.we(), this.$.text(a, b || {});
      this.$a = !1;
    };
    a.prototype.Sa = function (a) {
      this.we();
      this.$.Sa(a);
      this.$a = !1;
    };
    a.prototype.Ra = function (a, b) {
      this.we();
      this.$.Ra(a, b);
      this.$a = !1;
    };
    a.prototype.append = function (a) {
      var b = this;
      if (G.da(a)) {
        if (0 === this.level) this.$.append(a, {});
        else
          switch (a.nodeType) {
            case 2:
              this.ob(G.ma(a), a.value);
              break;
            case 13:
              this.Hc(a.prefix, a.uri);
              break;
            case 9:
            case 11:
              0 === this.level
                ? f(a, this.$, this.pc)
                : G.Ab.pb(a).sa(function (a) {
                    return b.append(a);
                  });
              break;
            default:
              this.we(), k(a, this, !0, !1);
          }
        this.$a = !1;
      } else if (0 === this.level) this.$.append(a, {}), (this.$a = !1);
      else if (C.Ga(a))
        this.we(),
          this.text((this.$a ? " " : "") + a.toString(), {}),
          (this.$a = !0);
      else if (P.isArray(a)) {
        a = a.value;
        for (var c = 0; c < a.length; c++)
          for (var d = a[c], e = 0; e < d.length; e++) this.append(d[e]);
      } else {
        if (P.ng(a))
          throw new q(
            "Cannot attach a " +
              (P.isMap(a) ? "map" : "function") +
              " to an XDM tree",
            "XTDE0450"
          );
        B.ra("Bad item " + B.oa(a));
      }
    };
    a.prototype.close = function () {
      this.$.close();
    };
    a.prototype.we = function () {
      if (this.lg) {
        var a = {};
        this.pc && (a.BASE_URI = this.pc);
        this.Li && ((a.ORIGINAL_NODE = this.Li), (this.Li = null));
        this.$.Ba(this.Id, this.ik, this.ie, a);
        this.lg = !1;
        a = 0;
        for (
          var b = sa(Object.entries(this.ie)), c = b.next();
          !c.done;
          c = b.next()
        ) {
          var d = sa(c.value);
          c = d.next().value;
          d = d.next().value;
          this.ph.push([c, d]);
          a++;
        }
        this.gm.push(a);
      }
    };
    var t = {
      analyzeString: function (a) {
        var b = P.Fc(P.qa(a, "select")),
          c = P.Fc(P.qa(a, "regex")),
          f = P.Fc(P.qa(a, "flags")),
          e = d(P.qa(a, "matching")),
          h = d(P.qa(a, "nonMatching"));
        return function (a, d) {
          try {
            var g = b(a).next();
            if (null === g) return D.R;
            g = g.toString();
            var p = c(a).next().toString(),
              k = f(a).next().toString(),
              x = w(g, p, k, !0, !1),
              y = a.ja(!1),
              N = x.map(function (a) {
                return a.T;
              });
            y.focus = D.Da(D.K(N));
            y.focus.sa(function () {
              var a = x[y.focus.position - 1];
              a.Ie
                ? e && ((y.focus.yh = a.groups), e(y, d))
                : h && ((y.focus.yh = []), h(y, d));
            });
          } catch (S) {
            if (S instanceof q && "FORX0002" === S.code)
              throw new q(S.message, "XTDE1140");
            if (S instanceof q && "FORX0001" === S.code)
              throw new q(S.message, "XTDE1145");
            throw S;
          }
        };
      },
      applyImports: function (a) {
        return function (b, c) {
          var d = b.$b.mode;
          if (!d) throw new q("applyImports: no current mode", "XTDE0560", a);
          b.Wc("XTDE0560", "xsl:apply-imports", a);
          var e = b.ja(!0);
          e.La = b.$b;
          P.bi(a, b, e);
          e.focus = b.focus;
          return d.sn(e, c);
        };
      },
      applyT: function (a) {
        var b = P.Kb(a);
        return function (c, d) {
          var e = c.ja(!0);
          if (P.Gc(a, "c")) {
            var h = c.$b.mode;
            ["function", "globalVariable", "globalParam"].includes(
              c.La.actor.N
            ) && (h = P.ah(a, c).Hm);
            e.La = c.$b;
          } else {
            var f = P.Rj(a, c, "mode");
            h = f.mode;
            if (h.fm)
              throw new q(
                "Mode " + h.Sh.name + " only handles typed nodes",
                "XTTE3100",
                a
              );
            e.La = f;
          }
          P.bi(a, c, e);
          e.focus = D.Da(b(c));
          e.focus.yh = c.focus ? c.focus.yh : null;
          h.Uc(e, d);
        };
      },
      att: function (a) {
        var b = a.name,
          c = b.split(":");
        var d = a.nsuri
          ? 2 === c.length
            ? C.O.X.xa(c[0], a.nsuri, c[1])
            : C.O.X.xa("", a.nsuri, b)
          : C.O.X.g(b, P.Hg(a, !1));
        var e = P.Kb(a);
        return function (a, b) {
          var c = r(e(a));
          b.ob(d, c);
        };
      },
      break: function (a) {
        var b = c(a);
        return function (a, c) {
          b(a, c);
          a.focus.position = -999;
        };
      },
      callT: function (a) {
        return function (b, d) {
          var f = P.Rj(a, b, "template"),
            e = b.ja(!0);
          e.sc = null;
          e.La = f;
          P.Aj(f.actor, e);
          P.bi(a, b, e);
          f = f.actor;
          f.C && c(f)(e, d);
        };
      },
      choose: function (a) {
        a = a.C;
        for (var b = [], c = [], f = 0; f < a.length; f += 2)
          b.push(P.Fc(a[f])), c.push(d(a[f + 1]));
        return function (a, d) {
          for (var e = 0; e < b.length; e++)
            if (P.dg(b[e](a))) {
              c[e](a, d);
              break;
            }
        };
      },
      comment: function (a) {
        var b = P.Kb(a);
        return function (a, c) {
          var e = r(b(a)).replace(/--/g, "- -").replace(/-$/, "- ");
          c.Sa(e);
        };
      },
      compAtt: function (a) {
        var b = P.Fc(P.qa(a, "select")),
          c = z(a);
        return function (a, e) {
          var d = c(a),
            f = r(b(a));
          e.ob(d, f);
        };
      },
      compElem: function (a) {
        var b = d(P.qa(a, "content")),
          c = z(a);
        return function (d, e) {
          a.baseUri && (e.pc = a.baseUri);
          var h = c(d);
          e.Ba(h);
          b(d, e);
          e.Na();
        };
      },
      copy: function (a) {
        var b = c(a);
        return function (c, d) {
          c.Wc("XTTE0945", "xsl:copy", a);
          v(
            c.lb(),
            c,
            a.flags,
            function () {
              return b(c, d);
            },
            d
          );
        };
      },
      copyOf: function (a) {
        var b = P.Gc(a, "c"),
          d = P.Gc(a, "m"),
          f = P.Kb(a);
        c(a);
        return function (e, c) {
          f(e).sa(function (h) {
            return l(h, e, c, a, b, d);
          });
        };
      },
      doc: function (a) {
        var b = c(a);
        return function (c, d) {
          d.pc = P.yb(a, c);
          d.tb();
          b(c, d);
          d.hb();
        };
      },
      elem: function (a) {
        var b = a.name,
          d = b.split(":"),
          f = c(a);
        var e =
          "undefined" !== typeof a.nsuri
            ? 2 === d.length
              ? C.O.X.xa(d[0], a.nsuri, d[1])
              : C.O.X.xa("", a.nsuri, b)
            : C.O.X.g(b, P.Hg(a, !0));
        return function (b, c) {
          a.baseUri && (c.pc = a.baseUri);
          c.Ba(e);
          if (a.namespaces)
            for (
              var d = a.namespaces.toString().split(" "), h = 0;
              h < d.length;
              h++
            ) {
              var p = d[h].split("="),
                g = p[0];
              "#" === g && (g = "");
              "xml" !== g &&
                ((p = 2 === p.length ? p[1] : P.Hg(a, !0)(g)), c.Hc(g, p));
            }
          f(b, c);
          c.Na();
        };
      },
      empty: function () {
        return function () {};
      },
      forEach: function (a) {
        var b = P.Kb(a),
          c = d(a.C[1]);
        return function (a, e) {
          var d = a.ja(!1);
          d.focus = D.Da(b(a));
          d.Xb = null;
          d.focus.sa(function () {
            return c(d, e);
          });
        };
      },
      forEachGroup: function (a) {
        var b = P.Fc(P.qa(a, "select")),
          c = Bb.Ln(P.qa(a, "content"));
        return function (d, e) {
          function h(a) {
            var b = [];
            f.sa(function (e) {
              a(b, e);
            });
            return b;
          }
          var f = D.Da(b(d)),
            g = d.ja(!1);
          g.focus = f;
          var k = {
            starting: function () {
              var b = xb.Df(P.qa(a, "match"));
              return h(function (a, e) {
                1 === f.position || xb.matches(b, e, g)
                  ? a.push({ group: [e] })
                  : a[a.length - 1].group.push(e);
              });
            },
            ending: function () {
              var b = xb.Df(P.qa(a, "match")),
                e = !1;
              return h(function (a, c) {
                1 === f.position || e
                  ? a.push({ group: [c] })
                  : a[a.length - 1].group.push(c);
                e = xb.matches(b, c, g);
              });
            },
            adjacent: function () {
              var b = P.qa(a, "collation");
              b = b ? P.evaluate(b, d).next().toString() : Q.ag;
              var e = Q.Pj(b, d),
                c = P.qa(a, "key"),
                p = null;
              return h(function (a, b) {
                var d = P.evaluate(c, g).expand();
                1 !== f.position && vb.Cj(D.K(d), D.K(p), e.ia)
                  ? a[a.length - 1].group.push(b)
                  : (a.push({ group: [b], key: d }), (p = d));
              });
            },
            by: function () {
              var b = P.qa(a, "collation");
              b = b ? P.evaluate(b, d).next().toString() : Q.ag;
              b = Q.Pj(b, d);
              var e = Q.Wi(b, !1),
                c = P.qa(a, "key");
              return h(function (a, b) {
                var d,
                  h = [];
                P.evaluate(c, g).sa(function (c) {
                  e.Xa(c)
                    ? ((d = e.get(c)),
                      0 >
                        h.findIndex(function (a) {
                          return a === d;
                        }) && (a[d].group.push(b), h.push(d)))
                    : ((d = a.length),
                      a.push({ group: [b], key: [c] }),
                      e.Ta(c, d),
                      h.push(d));
                });
              });
            },
            by_c: function () {
              var b = P.qa(a, "collation");
              b = b ? P.evaluate(b, d).next().toString() : Q.ag;
              b = Q.Pj(b, d);
              var e = P.qa(a, "key"),
                c = Q.Wi(b, !0);
              return h(function (a, b) {
                var d = P.evaluate(e, g).expand();
                if (c.Xa(d)) {
                  var h = c.get(d);
                  a[h].group.push(b);
                } else (h = a.length), a.push({ group: [b], key: d }), c.Ta(d, h);
              });
            },
          };
          k.adjacent_c = k.adjacent;
          var x = a.algorithm + (P.Gc(a, "c") ? "_c" : "");
          try {
            var l = k[x]();
          } catch (xa) {
            if (xa instanceof q && "FOCH0002" === xa.code)
              throw new q("Unknown collation:" + xa.message, "XTDE1110");
            throw xa;
          }
          var m = P.Ec(a, "sortKey");
          if (0 < m.length) {
            k = D.Da(D.K(l));
            var t = d.ja(!1);
            t.focus = k;
            var N = m.map(function (a) {
              return Q.qn(a, d);
            });
            k.sa(function (a, b) {
              a.zm = m.map(function (e) {
                var c = t.focus;
                c.current = a.group[0];
                c.position = b + 1;
                t.rf = a.group;
                t.sf = a.key;
                return P.Kb(e)(t).next();
              });
            });
            l.sort(function (a, b) {
              for (var e = 0; e < N.length; e++) {
                var c = N[e](a.zm[e], b.zm[e]);
                if (0 > c) return -1;
                if (0 < c) return 1;
              }
              return 0;
            });
          }
          k = d.ja(!1);
          k.focus = D.Da(D.K(l));
          for (x = 0; null !== k.focus.next(); ) {
            var S = l[x++],
              r = k.focus;
            r.current = S.group[0];
            r.position = x;
            k.rf = S.group;
            k.sf = S.key;
            c(k, e);
          }
        };
      },
      iterate: function (a) {
        var b = (a.C[1].C || []).map(P.Fc),
          c = P.Kb(a),
          f = d(P.qa(a, "action")),
          e = d(P.qa(a, "on-completion"));
        return function (a, d) {
          b.map(function (b) {
            return b(a);
          });
          var h = a.ja(!1);
          h.focus = D.Da(c(a));
          h.Xb = null;
          for (var p = !1; null !== h.focus.next(); )
            if ((f(h, d), -999 === h.focus.position)) {
              p = !0;
              break;
            }
          !p && e && ((h = a.ja(!1)), (h.focus = null), e(h, d));
        };
      },
      let: function (a) {
        var b = P.Kb(a),
          c = d(a.C[1]),
          f = parseInt(a.slot, 10);
        return function (a, d) {
          var e = a.Ja;
          a.Ja = "variable";
          var h = b(a).expand();
          a.Ja = e;
          a.Ha[f] = h;
          c(a, d);
        };
      },
      nextIteration: function (a) {
        var b = P.Ec(a, "withParam").map(function (a) {
          return { select: P.Kb(a), slot: parseInt(a.slot, 10) };
        });
        return function (a) {
          var c = [];
          b.forEach(function (b) {
            return (c[b.slot] = b.select(a).expand());
          });
          for (var e in c) a.Ha[e] = c[e];
        };
      },
      nextMatch: function (a) {
        return function (b, c) {
          var d = b.$b.mode;
          if (!d) throw new q("next-match: no current mode", "XTDE0560", a);
          if (!b.Xb)
            throw new q("next-match: no current template", "XTDE0560", a);
          if (b.ee()) throw new q("next-match: no context item", "XTDE0560", a);
          var e = b.ja(!0);
          e.La = b.$b;
          P.bi(a, b, e);
          return d.$o(e, c);
        };
      },
      procInst: function (a) {
        var b = P.Kb(a),
          c = P.ml(a);
        return function (d, e) {
          var h = b(d).next().toString();
          if (!Na.Yc(h))
            throw new q(
              "The name of a processing-instruction must be a valid NCName; supplied value: " +
                h.toString(),
              "XTDE0890",
              a
            );
          if (/^[Xx][Mm][Ll]$/.test(h))
            throw new q(
              "The name of a processing-instruction must not be 'xml'",
              "XTDE0890",
              a
            );
          var f = c(d);
          f = r(f).replace(/\?>/g, "? >").replace(/^\s+/, "");
          e.Ra(h, f);
        };
      },
      sequence: c,
      sourceDoc: function (a) {
        var b = P.Fc(P.qa(a, "href")),
          c = d(a.C[1]);
        return function (d, e) {
          var h = d.ja(!1),
            f = null === b ? "" : b(d).next().toString();
          f = Da.$c(f, P.yb(a, d));
          f = Ab.ve(f, d);
          var g = d.fixed.Ch;
          null !== g && (f = g(f));
          h.focus = D.jc(f);
          h.Xb = null;
          c(h, e);
        };
      },
      useAS: function (a) {
        return function (b, d) {
          var f = P.Rj(a, b, "attributeSet"),
            e = b.ja(!0);
          e.Ja = "attribute set";
          e.La = f;
          f = f.actor;
          f.C && c(f)(e, d);
        };
      },
      valueOf: function (a) {
        var b = P.Kb(a),
          c = {};
        P.Gc(a, "d") && (c.DISABLE_ESCAPING = !0);
        return function (a, e) {
          var d = r(b(a));
          e.text(d, c);
        };
      },
    };
    return {
      vj: w,
      Ln: d,
      yf: function (b) {
        return new a(b);
      },
      push: function (a, b, c) {
        if ("undefined" === typeof c)
          throw (B.Gb(Error().stack), new q("No output for " + m(a)));
        if (t[a.N]) {
          var f = d(a);
          try {
            f(b, c);
          } catch (p) {
            throw (p instanceof q && !p.oe && Ea(p, a), p);
          }
        } else {
          f = P.Fc(a);
          try {
            for (var e = f(b), h; null != (h = e.next()); ) c.append(h);
          } catch (p) {
            throw (p instanceof q && !p.oe && Ea(p, a), p);
          }
        }
      },
      Ni: f,
      Oi: l,
      xm: v,
    };
  })();
  var Db = (function () {
    function a(a, b, e, c, d) {
      function f(a) {
        return a.nodeType === g.nodeType && (null === x ? !0 : p.ma(a).ia(x));
      }
      function h(a) {
        return null === p.hc(a);
      }
      var k = d.fixed.ya;
      if (b) {
        var g = k.evaluate(b, d).next();
        if (!g || !p.da(g))
          throw new q(
            "xsl:number/@select must yield a single node",
            "XTTE1000"
          );
      } else d.Wc("XTTE0990", "xsl:number"), (g = d.lb());
      var x = p.ma(g),
        l = f;
      if (null !== e) {
        var N = xb.Df(e);
        l = function (a) {
          return xb.matches(N, a, d);
        };
      }
      if (null === c) b = h;
      else {
        var m = xb.Df(c);
        b = function (a) {
          return h(a) || xb.matches(m, a, d);
        };
      }
      switch (a) {
        case "simple":
          return (a = y.Oe(g).filter(f)), D.Vb(a.count() + 1);
        case "single":
          a = y.Ib(g).filter(l).next();
          var t = y.Ib(g).filter(b).next();
          a =
            null === a
              ? null
              : null !==
                y
                  .Ib(a)
                  .filter(function (a) {
                    return p.isSameNode(a, t);
                  })
                  .next()
              ? a
              : null;
          if (null === a) return D.R;
          a = y.Oe(a).filter(l);
          return D.Vb(a.count() + 1);
        case "multi":
          a = D.K(y.Ib(g).filter(l).expand().reverse());
          t = y.Ib(g).filter(b).next();
          a = a.filter(function (a) {
            return (
              null !==
              y
                .Ib(a)
                .filter(function (a) {
                  return p.isSameNode(a, t);
                })
                .next()
            );
          });
          var U = u.Ma.fa;
          return a.Ia(function (a) {
            return U(y.Oe(a).filter(l).count() + 1);
          });
        case "any":
          return (
            (e = function (a, b) {
              return p.qc(b, a);
            }),
            (a = D.qj(y.kk(g).filter(l), y.Ib(g).filter(l), e)),
            (t = D.qj(y.kk(g).filter(b), y.Ib(g).filter(b), e).next()),
            null === t && B.ra("from pattern selected empty"),
            (a = a.filter(function (a) {
              return 0 <= p.qc(a, t);
            })),
            (a = a.count()),
            0 === a ? D.R : D.Vb(a)
          );
        default:
          B.ra("unknown xsl:number/@level " + a);
      }
    }
    function b(a, b, e, c, d, f, h) {
      function p(a) {
        "" === a && (a = "1");
        if (/^[\x01-\x7f]*$/.test(a)) {
          a = a.split(/\b/);
          var b = function (a) {
            return /\w+/.test(a);
          };
        } else {
          if (a.length !== Ma.Bc(a).length)
            throw new q(
              "Cannot handle non-BMP characters in format-number picture",
              "SXJS0002"
            );
          var e = Bb.vj(
            a,
            "[\\p{Nd}\\p{Nl}\\p{No}\\p{Lu}\\p{Ll}\\p{Lt}\\p{Lm}\\p{Lo}]+",
            "",
            !0,
            !1
          );
          b = function (a, b) {
            return e[b].Ie;
          };
          a = e.map(function (a) {
            return a.T.toString();
          });
        }
        for (
          var c = { prefix: "", uf: [], Ig: "" }, d = ".", f = 0;
          f < a.length;
          f++
        ) {
          var h = a[f];
          b(h, f)
            ? (c.uf.push({ cl: h, sm: d }), (d = "."))
            : (0 === f && (c.prefix = h),
              f === a.length - 1 ? (c.Ig = h) : 0 !== f && (d = h));
        }
        0 === c.uf.length &&
          (c.uf.push({ cl: "1", sm: "." }), (c.Ig = c.prefix));
        return c;
      }
      var g = h.fixed.ya;
      if (null !== f)
        try {
          u.language.aa(f);
        } catch (Ba) {
          throw new q("@lang=" + f + ": invalid language code", "XTDE0030");
        }
      return (function (a) {
        var f = null === b ? "1" : g.evaluate(b, h).next().toString(),
          k = p(f),
          u = k.prefix;
        a.forEach(function (a, b) {
          var f = b >= k.uf.length ? k.uf[k.uf.length - 1] : k.uf[b];
          0 !== b && (u += f.sm);
          f = f.cl;
          d && (f += ";o");
          f = Db.Mj(a.J(), f);
          null !== e && null !== c && (f = Db.tj(f, e, c));
          u += f;
        });
        u += k.Ig;
        return D.ua(u);
      })(a.expand());
    }
    function d(a, b, e, c, d) {
      var f = d.fixed.ya,
        h = [1];
      null !== e &&
        (h = f
          .evaluate(e, d)
          .next()
          .toString()
          .split(/\s+/)
          .map(function (a) {
            if (!/^-?[0-9]+$/.test(a))
              throw new q(
                "xsl:number/@start-at must be a sequence of integers. Offending value: " +
                  a,
                "XTSE0020"
              );
            return parseInt(a, 10);
          }));
      if (b && c) {
        a = a.next();
        if (null === a) return null;
        try {
          a = u.Ma.aa(a.round(0));
        } catch (Ka) {
          return null;
        }
        a = D.K([a]);
      }
      return a.Ia(function (a, b) {
        a = u.numeric.matches(a) ? a.Jg() : u.za.oi(a.toString());
        if (0 > a.J())
          throw new q("xsl:number/@value is less than zero", "XTDE0980");
        try {
          a = u.Ma.aa(a.round(0));
        } catch (ja) {
          throw ((ja.code = "XTDE0980"), ja);
        }
        var e = b >= h.length ? h[h.length - 1] : h[b];
        1 !== e && (a = u.Ma.fa(a.J() + (e - 1)));
        return a;
      });
    }
    function m(a) {
      if (1 > a || 4999 < a) return a.toString();
      for (
        var b = "",
          e = "m cm d cd c xc l xl x ix v iv i".split(" "),
          c = [1e3, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
          d = 0;
        d < e.length;
        d++
      )
        for (; a >= c[d]; ) (b += e[d]), (a -= c[d]);
      return b;
    }
    function c(a, b) {
      function e(a) {
        return (
          (a > c ? e(Math.floor((a - 1) / c)) : "") + b.charAt((a - 1) % c)
        );
      }
      if (1 > a) return a.toString();
      var c = b.length;
      return e(a);
    }
    function l(a, b) {
      return a < b.length ? b[a] : a.toString();
    }
    function f(a, b) {
      var e = Math.abs(a);
      for (e = 999999 > e ? e.toString() : Ha(e).toFixed(); e.length < b; )
        e = "0" + e;
      0 > a && (e = "-" + e);
      return e;
    }
    function k(a, b) {
      b = void 0 === b ? "FODF1310" : b;
      var e = Ma.Bc(a),
        c = {},
        d = !0,
        f = 0,
        h = Na.wh("\\p{Nd}", null),
        p = a.search(h);
      if (0 > p) d = !1;
      else {
        f = Na.ep().Nd;
        for (var k = 0; k < f.length; k++) {
          var g = parseInt(f[k][0], 16);
          if (g <= e[p] && e[p] <= g + 10) break;
        }
        for (p = 0; p < e.length; p++)
          if (128 <= e[p])
            if (((f = String.fromCharCode(e[p])), h.test(f))) {
              if (g > e[p] || e[p] > g + 10)
                throw new q(
                  "Picture string mixes digits from different digit families: " +
                    a,
                  b
                );
            } else if (Na.wh("\\p{N}\\p{L}", null).test(f))
              throw new q("Picture string is invalid: " + a, b);
        var u = [];
        f = g - 48;
        e.forEach(function (a) {
          g <= a && a <= g + 10 ? u.push(48) : u.push(a);
        });
        a = Ma.ld(u);
      }
      c.Do = d;
      c.format = a;
      c.Fj = f;
      c.$i = g;
      return c;
    }
    function r(a, b) {
      var e = [];
      Ma.Bc(a).forEach(function (a) {
        48 <= a && 57 >= a ? e.push(a + b) : e.push(a);
      });
      return Ma.ld(e);
    }
    function v(a, b, e, c, d) {
      c = void 0 === c ? "" : c;
      d = void 0 === d ? !1 : d;
      for (var f = 0, h = 0; h < a.length; h++)
        if (h === b[f]) {
          var p = d ? h + 1 : a.length - h;
          0 < p &&
            (a =
              a.substring(0, p) +
              (e ? e[d ? f : e.length - f - 1] : c) +
              a.substring(p));
          f++;
        }
      return a;
    }
    function w(a, b, e) {
      e = void 0 === e ? "FODF1310" : e;
      var c = !0,
        d = 0;
      if (Ma.Bc(b).length !== b.length)
        throw new q(
          "Cannot handle non-BMP characters in format-integer picture",
          "SXJS0002"
        );
      /^[\x01-\x7f]*$/.test(b) || (c = !1);
      if (c) var h = /[0-9]/.test(b);
      else (d = k(b, e)), (b = d.format), (h = d.Do), (d = d.Fj);
      h || (b = "1");
      var p = b;
      if (!/^(([0-9]|#|[^A-Za-z0-9])+?)$/.test(p))
        throw new q(
          "The decimal digit pattern in the picture string is invalid: " + p,
          e
        );
      h = p;
      b = !0;
      if (/[^0-9A-Za-z#]/.test(h)) {
        var g = h.match(/[^0-9A-Za-z#]/g);
        if (1 < g.length)
          for (var u = 1; u < g.length; u++)
            if (g[0] !== g[u]) {
              b = !1;
              break;
            }
        h = h.replace(/[^0-9A-Za-z#]/g, ",");
      }
      if (/^,|,,|,$/.test(h))
        throw new q("Grouping in picture string is invalid: " + p, e);
      if (/[0-9].*#/.test(h)) throw new q("Picture string is invalid: " + p, e);
      e = h.replace(/[#,]/g, "").length;
      a = f(a, e);
      if (g) {
        h = Ma.Bc(h).reverse();
        e = [];
        for (p = 0; p < h.length; p++) 44 === h[p] && e.push(p);
        p = !0;
        h.length - e[e.length - 1] - 1 > e[0] && (p = !1);
        if (p)
          for (h = 1; h < e.length; h++)
            if (0 !== (e[h] + 1) % (e[0] + 1)) {
              p = !1;
              break;
            }
        a = p && b ? Db.tj(a, g[0], e[0]) : v(a, e, g);
      }
      g = a;
      c || (g = r(g, d));
      return g;
    }
    function z(a) {
      var b =
          "Zero One Two Three Four Five Six Seven Eight Nine Ten Eleven Twelve Thirteen Fourteen Fifteen Sixteen Seventeen Eighteen Nineteen".split(
            " "
          ),
        e = "  Twenty Thirty Forty Fifty Sixty Seventy Eighty Ninety".split(
          " "
        );
      return 20 > a
        ? b[a]
        : 100 > a
        ? e[Math.floor(a / 10)] + (0 === a % 10 ? "" : " " + b[a % 10])
        : 1e3 > a
        ? z(Math.floor(a / 100)) +
          " Hundred" +
          (0 === a % 100 ? "" : " and " + z(a % 100))
        : 1e6 > a
        ? z(Math.floor(a / 1e3)) +
          " Thousand" +
          (0 === a % 1e3 ? "" : (100 > a % 1e3 ? " and " : " ") + z(a % 1e3))
        : 1e9 > a
        ? z(Math.floor(a / 1e6)) +
          " Million" +
          (0 === a % 1e3 ? "" : (100 > a % 1e3 ? " and " : " ") + z(a % 1e6))
        : a.toString();
    }
    function t(a) {
      var b =
          "Zeroth First Second Third Fourth Fifth Sixth Seventh Eighth Ninth Tenth Eleventh Twelfth Thirteenth Fourteenth Fifteenth Sixteenth Seventeenth Eighteenth Nineteenth".split(
            " "
          ),
        e = "  Twent Thirt Fort Fift Sixt Sevent Eight Ninet".split(" ");
      return 20 > a
        ? b[a]
        : 100 > a
        ? e[Math.floor(a / 10)] + (0 === a % 10 ? "ieth" : "y " + b[a % 10])
        : 1e3 > a
        ? z(Math.floor(a / 100)) +
          " Hundred" +
          (0 === a % 100 ? "th" : " and " + t(a % 100))
        : 1e6 > a
        ? z(Math.floor(a / 1e3)) +
          " Thousand" +
          (0 === a % 1e3 ? "th" : (100 > a % 1e3 ? " and " : " ") + t(a % 1e3))
        : 1e9 > a
        ? z(Math.floor(a / 1e6)) +
          " Million" +
          (0 === a % 1e3 ? "th" : (100 > a % 1e3 ? " and " : " ") + t(a % 1e6))
        : a.toString();
    }
    function g(a) {
      return 1 === a % 10 && 11 !== a % 100
        ? "st"
        : 2 === a % 10 && 12 !== a % 100
        ? "nd"
        : 3 === a % 10 && 13 !== a % 100
        ? "rd"
        : "th";
    }
    function K(a, b, e) {
      function d(a, b) {
        for (var e = "", c = a.charCodeAt(0), d = 0; d < b; c++, d++)
          e += String.fromCharCode(c);
        return e;
      }
      e = void 0 === e ? "FODF1310" : e;
      var f,
        h = null;
      if (-1 !== (f = b.lastIndexOf(";"))) {
        h = b.substring(f + 1);
        if (!/^([co](\(.+\))?)?[at]?$/.test(h))
          throw new q("Invalid format modifier in picture string: " + h, e);
        h = h.charAt(0);
        b = b.substring(0, f);
      }
      if ("" === b)
        throw new q("In the picture string, the picture cannot be empty", e);
      f = 0 > a ? "-" : "";
      if ("o" === h)
        switch (b.toString()) {
          case "a":
          case "A":
          case "i":
          case "I":
            break;
          case "Ww":
            return f + t(Math.abs(a));
          case "W":
            return f + t(Math.abs(a)).toUpperCase();
          case "w":
            return f + t(Math.abs(a)).toLowerCase();
          default:
            return w(a, b, e) + g(Math.abs(a));
        }
      switch (b.toString()) {
        case "a":
          return c(a, d("a", 26));
        case "A":
          return c(a, d("A", 26));
        case "α":
          return c(a, d("α", 25));
        case "Α":
          return c(a, d("Α", 25));
        case "i":
          return m(a);
        case "I":
          return m(a).toUpperCase();
        case "Ww":
          return f + z(Math.abs(a));
        case "W":
          return f + z(Math.abs(a)).toUpperCase();
        case "w":
          return f + z(Math.abs(a)).toLowerCase();
        case "①":
          return l(a, "⓪" + d("①", 20) + d("㉑", 15) + d("㊱", 15));
        case "⑴":
          return l(a, "0" + d("⑴", 20));
        case "⒈":
          return 0 === a ? "\ud83c\udd00" : l(a, "0" + d("⒈", 20));
        case "❶":
          return l(a, "⓿" + d("❶", 10) + d("⓫", 10));
        case "➀":
          return 0 === a ? "\ud83c\udd0b" : l(a, "0" + d("➀", 10));
        case "➊":
          return 0 === a ? "\ud83c\udd0c" : l(a, "0" + d("➊", 10));
        case "⓵":
          return l(a, "0" + d("⓵", 10));
        case "㈠":
          return l(a, "0" + d("㈠", 10));
        case "㊀":
          return l(a, "0" + d("㊀", 10));
        default:
          return w(a, b, e);
      }
    }
    function A(a, b) {
      return String.fromCharCode(parseInt(a[b] ? a[b] : L[b], 10));
    }
    function x(a, b) {
      function e(a) {
        [
          ["$gs", "grouping separator"],
          ["$es", "exponent separator"],
          ["$ds", "decimal separator"],
          ["$pc", "non-prefix passive character"],
          ["$pp", "percent|permille"],
          ["$od", "optional digit"],
          ["$md", "mandatory digit"],
          ["$ip", "integer part"],
          ["$fp", "fractional part"],
        ].forEach(function (b) {
          a = a.replace(b[0], b[1]);
        });
        throw new q("Invalid picture: " + a, "FODF1310");
      }
      for (
        var c = {},
          d = a.indexOf(b.gi),
          f = 0 <= d,
          h = b.$i.charCodeAt(0),
          p = 0,
          g = 0,
          k = [],
          u = [],
          x = [],
          y = -1,
          l = -1,
          U = !1,
          m = !1,
          t = -1,
          r = 0,
          N = f ? d : a.length,
          L = 0;
        L < N;
        L++
      ) {
        var w = a.charCodeAt(L);
        w >= h && w < h + 10
          ? (0 < l && e("digit follows $pc"),
            U ? r++ : (1 > p && 0 > y && (y = L), p++, g++))
          : w === b.ll.charCodeAt(0)
          ? (0 < l && e("digit follows $pc"),
            U && e("$od follows $es"),
            0 < p && e("$od follows $md in $ip"),
            0 > y && ((y = L), (m = !0)),
            g++)
          : w === b.fh.charCodeAt(0)
          ? (0 > y && e("$gs before any digit"),
            0 < x.length && e("$gs follows $pc"),
            U && e("$gs follows $es"),
            k.push(L))
          : w === b.Hf.charCodeAt(0) || w === b.th.charCodeAt(0)
          ? f
            ? e("$pp before $ds")
            : (0 > y && e("$pp before any digit"),
              0 < l && e("$pp follows $pc"),
              U && e("$pp follows $es"),
              x.push(w),
              0 > l && (l = L),
              w === b.Hf.charCodeAt(0) ? (c.Hf = !0) : (c.th = !0))
          : !f && 0 <= y && w === b.ue.charCodeAt(0) && 0 > l
          ? U
            ? (x.push(w),
              0 < r
                ? 0 > l && (l = L)
                : (x.push(w), (U = !1), (t = -1), 0 > l && (l = L - 1)))
            : ((U = !0), (t = L))
          : 0 <= y && f
          ? e("$pc before $ds")
          : U && 0 === r
          ? ((U = !1),
            (t = -1),
            x.push(b.ue.charCodeAt(0)),
            x.push(w),
            0 > l && (l = L - 1))
          : 0 <= y
          ? (x.push(w), 0 > l && (l = L))
          : u.push(w);
      }
      if (0 < k.length) {
        var v = f ? d : U ? t : 0 < l ? l : a.length;
        k = k
          .map(function (a) {
            return v - a - 1;
          })
          .reverse();
      }
      if (0 !== k.length)
        for (0 === k[0] && e("$gs at end of $ip"), t = 0; t < k.length - 1; t++)
          k[t] + 1 === k[t + 1] && e("consecutive $gs in $ip");
      L = N = 0;
      w = [];
      if (f) {
        f = -1;
        for (var z = a.substring(d + 1), A = 0; A < z.length; A++) {
          var O = z.charCodeAt(A);
          O >= h && O < h + 10
            ? U && 0 > l
              ? r++
              : 0 <= f || 0 <= l
              ? e("$md follows $od or $pc in $fp")
              : (N++, L++)
            : O === b.ll.charCodeAt(0)
            ? ((0 <= l || U) && e("$od follows $pc or $es"),
              0 > f && (f = A),
              L++)
            : O === b.fh.charCodeAt(0)
            ? ((0 <= l || U) && e("$gs follows $pc or $es"), w.push(A - d + 1))
            : O === b.gi.charCodeAt(0)
            ? e("more than one $ds")
            : O === b.Hf.charCodeAt(0) || O === b.th.charCodeAt(0)
            ? ((0 <= l || U) && e("$pp follows $pc or $es"),
              x.push(O),
              (l = A),
              O === b.Hf.charCodeAt(0) ? (c.Hf = !0) : (c.th = !0))
            : O === b.ue.charCodeAt(0) && 0 > l
            ? U
              ? (x.push(O),
                0 < r
                  ? 0 > l && (l = A)
                  : (x.push(O), (U = !1), (t = -1), 0 > l && (l = A - 1)))
              : ((U = !0), (t = A))
            : U && 0 === r
            ? ((U = !1),
              (t = -1),
              x.push(b.ue.charCodeAt(0)),
              x.push(O),
              0 > l && (l = A - 1))
            : (x.push(O), 0 > l && (l = A));
        }
      }
      0 > y && 0 === L && e("mantissa contains no digits");
      if (0 !== w.length)
        for (
          0 === w[0] && e("$gs at beginning of $fp"), d = 0;
          d < w.length - 1;
          d++
        )
          w[d] + 1 === w[d + 1] && e("consecutive $gs in $fp");
      0 === p && 0 === L && (U ? (L = N = 1) : (p = 1));
      U && 0 === p && m && (p = 1);
      0 === p && 0 === N && (N = 1);
      c.Di = p;
      c.prefix = u;
      c.ud = k;
      c.mm = m;
      c.np = g;
      c.nh = N;
      c.lh = L;
      c.Nj = w;
      c.wl = r;
      c.ue = b.ue ? b.ue : "e";
      c.Ig = x;
      return c;
    }
    function e(a) {
      return (
        Math.floor(
          (a.getTime() -
            new Date(Date.UTC(a.getUTCFullYear(), 0, 1)).getTime()) /
            864e5
        ) + 1
      );
    }
    function h(a, b) {
      var c = b ? e(a) : a.getUTCDate(),
        d = new Date(Date.UTC(a.getUTCFullYear(), b ? 0 : a.getUTCMonth(), 1)),
        f = d.getUTCDay();
      0 === f && (f = 7);
      return 4 < f && 8 >= f + c
        ? h(new Date(d.getTime() - 864e5), b)
        : Math.floor((c + f - 2) / 7) + (5 > f ? 1 : 0);
    }
    var p = G,
      y = p.Ab,
      u = C.O,
      L = {
        "decimal-separator": "46",
        "grouping-separator": "44",
        digit: "35",
        "minus-sign": "45",
        percent: "37",
        "per-mille": "8240",
        "zero-digit": "48",
        "exponent-separator": "101",
        "pattern-separator": "59",
        infinity: "Infinity",
        NaN: "NaN",
      },
      O = {
        Y: "getUTCFullYear",
        M: "getUTCMonth",
        D: "getUTCDate",
        F: "getUTCDay",
        H: "getUTCHours",
        m: "getUTCMinutes",
        s: "getUTCSeconds",
        f: "getUTCMilliseconds",
      },
      fa = {
        d: e,
        W: function (a) {
          return h(a, !0);
        },
        w: function (a) {
          return h(a, !1);
        },
        h: function (a) {
          return 13 > a.getUTCHours()
            ? 0 === a.getUTCHours()
              ? 12
              : a.getUTCHours()
            : a.getUTCHours() - 12;
        },
        P: function (a) {
          return 12 > a.getUTCHours() ? "Am" : "Pm";
        },
        E: function (a) {
          return 0 > a.getUTCFullYear() ? "BC" : "AD";
        },
      };
    return {
      bp: function (b, e) {
        var c = e.fixed.ya,
          d = b.level,
          f = c.qa(b, "select"),
          h = c.qa(b, "count");
        c = c.qa(b, "from");
        return a(d, f, h, c, e);
      },
      cp: function (a, e) {
        var c = e.fixed.ya,
          f = c.qa(a, "value"),
          h = c.qa(a, "format"),
          p = c.Zd(c.qa(a, "gpSep"), e).next(),
          g = c.Zd(c.qa(a, "gpSize"), e).next(),
          k = c.Zd(c.qa(a, "ordinal"), e).next(),
          u = c.Zd(c.qa(a, "lang"), e).next(),
          x = a.flags || "",
          y = c.qa(a, "startAt");
        x = /1/.test(x);
        c = c.evaluate(f, e);
        y = d(c, x, y, !0, e);
        k = k ? P.Mo(k.toString()) : !1;
        return null === y ? D.ua("NaN") : b(y, h, p, g, k, u, e);
      },
      Mj: K,
      tj: function (a, b, e) {
        for (var c = "", d = 0; d < a.length; d++)
          (c += a.charAt(d)),
            (1 === e || 1 === (a.length - d) % e) &&
              d < a.length - 1 &&
              (c += b);
        return c;
      },
      ao: function (a, b, e) {
        var c = 0 > a ? !0 : 0 === a ? 0 > 1 / a : !1;
        e = {
          gi: A(e, "decimal-separator"),
          fh: A(e, "grouping-separator"),
          ll: A(e, "digit"),
          Xo: A(e, "minus-sign"),
          Hf: A(e, "percent"),
          th: A(e, "per-mille"),
          $i: A(e, "zero-digit"),
          ue: A(e, "exponent-separator"),
          km: A(e, "pattern-separator"),
          uo: e.infinity || L.infinity,
          Zo: e.NaN || L.NaN,
        };
        if (isNaN(a)) return e.Zo;
        b = b.includes(e.km) ? b.split(e.km) : [b];
        if (2 < b.length)
          throw new q(
            "Invalid picture: multiple pattern separators",
            "FODF1310"
          );
        var d = x(1 < b.length && 0 > a ? b[1] : b[0], e);
        if (isFinite(a)) {
          if (0 < d.wl) {
            var h = d.Di,
              p = d.nh,
              g = d.lh;
            var k = d.ue;
            var u = 1 === h && d.mm;
            u && ((h = 0), 0 === p && ((p = 1), 0 === g && (g = 1)));
            var y = d.wl;
            a = Ha(a);
            var l = a.c,
              m = 0 !== h ? h + g : g,
              t = a.e;
            l.length > m && (a = Ha(a.toPrecision(m)));
            (m = t !== a.e) && (h += 1);
            1 < h
              ? (a = a.pd(Ha(10).pow(h - 1)))
              : 0 === h && (a = a.ke(Ha(10)));
            p = 0 !== h ? h + p : p;
            for (l = a.c; l.length < p; ) l.push(0);
            p = "";
            if (0 < l.length) {
              if (0 === h && d.mm) p += "0";
              else for (t = 0; t < h; t++) p += l[t];
              !(0 < g && l.length > h) ||
                (u && m) ||
                ((h = l.join("").slice(h)), (p += "." + h));
            } else throw new q("Empty mantissa", "SXJS0004");
            k = p + k + f(a.e, y);
          } else {
            k = Math.abs(a);
            d.Hf && (k = Math.abs(100 * a));
            d.th && (k = Math.abs(1e3 * a));
            k =
              "Infinity" === k + ""
                ? k + ""
                : 999999 > k
                ? k.toString()
                : Ha(k).toFixed();
            y = k.indexOf(".");
            0 > y && ((y = k.length), 0 < d.nh && (k += "."));
            0 <= d.lh &&
              "." !== k.substring(y) &&
              y != k.length &&
              (0 < d.lh
                ? ((k = Ha(k).round(d.lh, 1).toString()),
                  0 > k.indexOf(".") && (k += ".0"))
                : (k = Ha(k).round(0, 1).toString()));
            h = k.length - 1 - y;
            if (0 < d.nh) for (; h < d.nh; ) (k += "0"), h++;
            for (; y < d.Di; ) (k = "0" + k), y++;
            0 < h &&
              0 === d.Di &&
              "0" === k.substring(0, y) &&
              (k = k.substring(y));
            "0" === k && 0 === d.Di && 0 === d.nh && 0 < d.lh && (k = ".0");
          }
          y = "";
          for (h = 0; 10 > h; h++)
            y += String.fromCharCode(e.$i.charCodeAt(0) + h);
          y += e.gi;
          h = "";
          for (g = 0; g < k.length; g++)
            (u = k.charAt(g)),
              (a = "0123456789.".indexOf(u)),
              0 > a ? (h += u) : a < y.length && (h += y.charAt(a));
          y = h;
          if (0 < d.ud.length || 0 < d.Nj.length) {
            h = y.indexOf(e.gi);
            0 > h && (h = y.length);
            k = y.substring(0, h);
            y = y.substring(h);
            if (0 < d.ud.length) {
              h = !0;
              for (g = 1; g < d.ud.length; g++)
                if (0 !== (d.ud[g] + 1) % (d.ud[0] + 1)) {
                  h = !1;
                  break;
                }
              h &&
                d.np + d.ud.length - d.ud[d.ud.length - 1] - 1 > d.ud[0] &&
                (h = !1);
              k = h ? Db.tj(k, e.fh, d.ud[0]) : v(k, d.ud, null, e.fh);
            }
            0 < d.Nj.length && (y = v(y, d.Nj, null, e.fh, !0));
            y = k + y;
          }
        } else y = e.uo;
        0 < d.prefix.length && (y = Ma.ld(d.prefix) + y);
        0 < d.Ig.length && (y += Ma.ld(d.Ig));
        c && 1 === b.length && (y = e.Xo + y);
        return y;
      },
      fg: function (a, b, e, c, d) {
        if (/\[/g.test(e) && !/\[(\[|[^\]]*\])|\]\]/g.test(e))
          throw new q(
            "Date format picture '" + e + "' doesn't match required syntax",
            "FOFD1340"
          );
        var h = "";
        "undefined" !== typeof c &&
          null !== c &&
          "en" !== c.toString() &&
          (h += "[Language: en]");
        "undefined" === typeof d ||
          null === d ||
          "AD" === d.toString() ||
          /(Q\{\})?ISO/.test(d.toString()) ||
          (h += "[Calendar: AD]");
        return (
          h +
          e.replace(/\[(\[|[^\]]*\])|\]\]/g, function (e) {
            if ("[[" === e) e = "[";
            else if ("]]" === e) e = "]";
            else {
              var c = e.substring(1, e.length - 1).replace(/\s+/g, ""),
                d = c.match(/^([YMDdWwFHhmsfZzPCE])(.*)$/);
              if (null === d)
                throw new q(
                  "Date/time component [" + c + "] not recognised",
                  "FOFD1340"
                );
              e = d[1];
              d = d[2] || "";
              if (
                ("date" === a && /[HhPmsf]/.test(e)) ||
                ("time" === a && /[YMDdFWwCE]/.test(e))
              )
                throw new q(
                  "Date/time component [" + c + "] not available in " + a,
                  "FOFD1350"
                );
              if (-1 !== (c = d.lastIndexOf(","))) {
                var h = d.substring(c + 1).split("-");
                d = d.substring(0, c);
                var f = h[0];
                h = h[1] || "*";
                if (
                  ("*" !== f && 1 > f) ||
                  ("*" !== h && 1 > h) ||
                  ("*" !== f && "*" !== h && f > h)
                )
                  throw new q(
                    "Invalid width modifier in date/time formatting picture",
                    "FOFD1340"
                  );
              }
              var p = null;
              1 < d.length && /[atco]/.test(d.charAt(d.length - 1))
                ? ((c = d.substring(0, d.length - 1)),
                  (p = d.charAt(d.length - 1)))
                : (c = d);
              d = !0;
              if (!/^[\x01-\x7f]*$/.test(c)) {
                if (c.length !== Ma.Bc(c).length)
                  throw new q(
                    "Cannot handle non-BMP characters in date/time formatting picture",
                    "SXJS0002"
                  );
                d = !1;
              }
              if (/[Zz]/.test(e))
                if (
                  ((f = "Z" === b.Xi() ? "+00:00" : b.Xi()), (h = d), "" === f)
                )
                  e = "Z" === c ? "J" : "";
                else if (
                  ((e = "z" === e ? "GMT" : ""),
                  "t" === p && "+00:00" === f && "Z" !== c && "N" !== c)
                )
                  e = "Z";
                else if ("" === c) e += f;
                else {
                  d = f.match(/^([+\-])([0-9])([0-9]):([0-9]{2})$/);
                  if ("Z" === c || "N" === c)
                    if ("Z" === c) {
                      h = parseInt(d[1] + d[2] + d[3], 10);
                      var g =
                        -12 > h || 12 < h || "00" !== d[4]
                          ? f
                          : "YXWVUTSRQPONZABCDEFGHIKLM".charAt(h + 12);
                    } else {
                      if ("N" === c)
                        throw new q(
                          "Timezone names not implemented",
                          "SXJS0002"
                        );
                    }
                  else
                    h && !/[0-9]+/.test(c) && (c = "00:00"),
                      (f = 0),
                      h || ((f = k(c, "FOFD1340")), (c = f.format), (f = f.Fj)),
                      /[^0-9A-Za-z]/.test(c)
                        ? ((g = c.match(/^([0-9]+)([^0-9A-Za-z])([0-9]+)$/)),
                          (g =
                            d[1] +
                            ("0" === d[2] && 1 === g[1].length
                              ? d[3]
                              : d[2] + d[3]) +
                            g[2] +
                            d[4]))
                        : ((g = c.match(/^[0-9]+$/)),
                          (g = g[0]),
                          (g =
                            d[1] +
                            (("0" !== d[2] || (1 !== g.length && 3 !== g.length)
                              ? d[2] + d[3]
                              : d[3]) +
                              (2 < g.length
                                ? d[4]
                                : "00" !== d[4]
                                ? ":" + d[4]
                                : "")))),
                      h || (g = r(g, f));
                  e += g;
                }
              else {
                g = b.proxy();
                var u = O[e] ? g[O[e]]() : fa[e] ? fa[e](g) : null;
                if (null === u)
                  throw new q(
                    "Component specifier not implemented: [" + e + "]",
                    "SXJS0002"
                  );
                "M" === e ? u++ : "F" === e && 0 === u && (u = 7);
                "" === c &&
                  (c = /[FPCE]/.test(e) ? "n" : /[ms]/.test(e) ? "01" : "1");
                if ("f" === e) {
                  p = u;
                  g = c;
                  e = f;
                  c = h;
                  h = d;
                  f = 0;
                  h || ((f = k(g, "FOFD1340")), (g = f.format), (f = f.Fj));
                  for (d = p.toString(); 3 > d.length; ) d = "0" + d;
                  p = Ma.Bc(d);
                  d = parseInt(Ma.ld(p.reverse()), 10);
                  if (!e && !c && /^[0-9]$/.test(g))
                    for (; p.length > g.length; ) g += "#";
                  if (e && "*" !== e) {
                    u = /^([0-9]*)(#*)$/.exec(g);
                    g = u[1] ? u[1] : "";
                    for (u = u[2] ? u[2] : ""; e > g.length; )
                      (g += "0"), (u = u.slice(0, -1));
                    g += u;
                  }
                  if (c)
                    for ("*" === c && (c = p.length); g.length < c; ) g += "#";
                  c = Ma.ld(Ma.Bc(g).reverse());
                  d = K(d, c, "FOFD1340");
                  for (d = Ma.ld(Ma.Bc(d).reverse()); d.length > g.length; )
                    d = d.slice(0, -1);
                  (e && "*" !== e) || 0 !== parseInt(d, 10) || (d = "0");
                  h || (d = r(d, f));
                  e = d;
                } else {
                  if (/[nN]/.test(c))
                    (f =
                      "January February March April May June July August September October November December".split(
                        " "
                      )),
                      (d =
                        "Monday Tuesday Wednesday Thursday Friday Saturday Sunday".split(
                          " "
                        )),
                      (p = "M" === e ? f[u - 1] : "F" === e ? d[u - 1] : u),
                      "F" === e &&
                        h &&
                        "*" !== h &&
                        6 > h &&
                        ((p = p.replace(/(ur)?day$/, "")),
                        (p = p.replace(/nes$/, "s"))),
                      "n" === c
                        ? (p = p.toLowerCase())
                        : "N" === c && (p = p.toUpperCase()),
                      h && "*" !== h && (p = p.substring(0, h));
                  else {
                    g = /;/.test(c) ? c + ";" : c;
                    p && (g += (";" === g.charAt(g.length - 1) ? "" : ";") + p);
                    p = K(u, g, "FOFD1340");
                    if (
                      "Y" === e &&
                      /[^iIwWnN]/.test(c.charAt(c.length - 1)) &&
                      ((!f && 2 === c.length) || 2 == h)
                    )
                      for (; 2 < p.length; ) p = p.substring(1);
                    if (
                      f &&
                      ((h = "*" === f ? 0 : parseInt(f, 10)),
                      0 < h && p.length < h)
                    )
                      if (
                        /[YMDdWwHhms]/.test(e) &&
                        /[^iIwWnN]/.test(c.charAt(c.length - 1))
                      )
                        for (
                          e = "0",
                            d || (e = String.fromCharCode(k(g, "FOFD1340").$i));
                          p.length < h;

                        )
                          p = e + p;
                      else if (
                        "Y" === e &&
                        /[iIwWnN]/.test(c.charAt(c.length - 1))
                      )
                        for (; p.length < h; ) p += " ";
                      else
                        throw new q(
                          "Not implemented min width modification with specifier " +
                            e +
                            " and format " +
                            c,
                          "SXJS0002"
                        );
                  }
                  e = p;
                }
              }
            }
            return e;
          })
        );
      },
    };
  })();
  var Eb = (function () {
    function a() {
      this.Aa = "";
    }
    function b(a, b) {
      var c = e.call(this, a, b) || this;
      c.bd = !1;
      return c;
    }
    function d(a, b) {
      var e = Cb.Za.call(this) || this;
      e.xb = a;
      e.ga = b;
      e.Gf = [];
      e.nf = !1;
      return e;
    }
    function m(a, b, e) {
      var c = Cb.Tf.call(this, e) || this;
      c.xb = a;
      c.ga = b;
      c.context = e;
      c.Wa = a["use-character-maps"] || null;
      return c;
    }
    function c(a, b, e) {
      b = l.call(this, a, b, e) || this;
      b.level = 0;
      b.td = a["Q{http://saxon.sf.net/}indent-spaces"] || 3;
      b.ek = " ";
      return b;
    }
    function l(a, b, e) {
      e = Cb.Tf.call(this, e) || this;
      e.xb = a;
      e.ga = b;
      e.Fq = [];
      e.Wa = a["use-character-maps"] || null;
      return e;
    }
    function f(a) {
      var b = Cb.Za.call(this) || this;
      b.xb = a;
      b.mh = !1;
      return b;
    }
    function k(a) {
      return Cb.Za.apply(this, arguments) || this;
    }
    function r(a, b) {
      var e = x.call(this, a, b) || this;
      e.Hj =
        "area base br col embed hr img input link meta param source track wbr".split(
          " "
        );
      return e;
    }
    function v(a) {
      return Cb.Za.apply(this, arguments) || this;
    }
    function w(a, b) {
      var e = A.call(this, a, b) || this;
      e.bo = "pre script style textarea title xmp".split(" ");
      e.Tl =
        "a abbr acronym applet area audio b basefont bdi bdo big br button canvas cite code data datalist del dfn em embed font i iframe img input ins kbd label map mark math meter noscript object output picture progress q ruby s samp script select small span strike strong sub sup svg template textarea time tt u var video wbr".split(
          " "
        );
      e.Vj = !1;
      e.Xf = !1;
      e.Kf = [];
      return e;
    }
    function z(a, b) {
      var e = x.call(this, a, b) || this;
      e.kg = -1e6;
      e.Hj =
        "area base br col embed hr img input link meta param source track wbr".split(
          " "
        );
      e.xj = {
        "*": ["hidden", "autofocus", "itemscope"],
        audio: ["autoplay", "controls", "loop", "muted"],
        button: ["disabled", "formnovalidate"],
        details: ["open"],
        dialog: ["open"],
        fieldset: ["disabled"],
        form: ["novalidate"],
        img: ["ismap"],
        input:
          "checked disabled multiple readonly required formnovalidate".split(
            " "
          ),
        iframe: ["allowfullscreen", "allowpaymentrequest"],
        ol: ["reversed"],
        optgroup: ["disabled"],
        option: ["selected", "disabled"],
        script: ["defer", "async", "nomodule"],
        select: ["multiple", "disabled", "required"],
        textarea: ["disabled", "readonly", "required"],
        track: ["default"],
        video: ["autoplay", "controls", "loop", "muted", "playsinline"],
      };
      return e;
    }
    function t(a, b, e) {
      var c = Cb.Za.call(this) || this;
      c.Yo = a || null;
      c.encoding = b;
      c.form = e;
      c.dh = [];
      c.buffer = "";
      c.Ne = {};
      if ("fully-normalized" === e)
        throw new q(
          "Serializer does not support the requested normalization-form: fully-normalized",
          "SESU0011"
        );
      return c;
    }
    function g(a) {
      var b = Cb.Za.call(this) || this;
      b.Wa = a || null;
      return b;
    }
    function K(a) {
      var b = Cb.Za.call(this) || this;
      b.form = a || null;
      if (!String.prototype.normalize)
        throw new q(
          "normalization-form: not supported on this JavaScript platform",
          "SESU0011"
        );
      if ("fully-normalized" === a)
        throw new q(
          "Serializer does not support the requested normalization-form: fully-normalized",
          "SESU0011"
        );
      return b;
    }
    function A(a, b) {
      var e = Cb.Za.call(this) || this;
      e.level = 0;
      e.Sl = a || 3;
      e.ih = "\n               ";
      e.Te = !1;
      e.zd = !1;
      e.oc = !0;
      e.Ui = b || null;
      e.fc = -1;
      e.yg = null;
      e.Ne = {};
      return e;
    }
    function x(a, b) {
      var c = e.call(this, a, b) || this;
      c.hi = !1;
      c.ig = !1;
      c.gh = !1;
      c.Jn = !1;
      c.bd = !1;
      c.xc = !1;
      c.Kf = [];
      c.Je = [];
      c.Gm = 0;
      c.encoding = a.encoding || "UTF-8";
      return c;
    }
    function e(a, b) {
      var e = Cb.Jk.call(this) || this;
      e.ga = b || null;
      e.sb = a;
      return e;
    }
    function h(a, b, e) {
      function c(a, b) {
        function e(a) {
          return function (b) {
            return a[b];
          };
        }
        var c = {
            "<": "&lt;",
            ">": "&gt;",
            "&": "&amp;",
            '"': "&#34;",
            "\n": "&#10;",
            "\r": "&#13;",
            "\t": "&#9;",
          },
          d = { "<": "&lt;", ">": "&gt;", "&": "&amp;" };
        return b
          ? a.replace(/&|<|>|"|\n|\r|\t/g, e(c))
          : a.replace(/&|<|>/g, e(d));
      }
      if (e) {
        e = "";
        a = a.split("\x00");
        for (var d = 0; d < a.length; d++) e += 1 === d % 2 ? a[d] : c(a[d], b);
        return e;
      }
      return c(a, b);
    }
    function p(a, b) {
      return "ISO-8859-1" === b.toUpperCase()
        ? 255 >= a
        : "US-ASCII" === b.toUpperCase()
        ? 127 >= a
        : !0;
    }
    function y(a, b) {
      return function (e) {
        for (var c = !0, d = 0; d < e.length; d++) {
          var h = e.charCodeAt(d);
          if (h >= a.min && h <= a.max) {
            c = !1;
            break;
          }
        }
        if (c) return e;
        c = "";
        d = !1;
        for (h = 0; h < e.length; h++) {
          var f = e.charAt(h),
            p = e.charCodeAt(h),
            g = 55296 <= p && 56320 >= p;
          g && (p = e.codePointAt(h));
          a.Wa[p]
            ? (b && !d && ((c += "\x00"), (d = !0)), (c += a.Wa[p]), g && h++)
            : (b && d && ((c += "\x00"), (d = !1)), (c += f));
        }
        return c;
      };
    }
    function u(a) {
      return "" === a.uri || "http://www.w3.org/1999/xhtml" === a.uri;
    }
    function L(a) {
      return [
        "http://www.w3.org/1999/xhtml",
        "http://www.w3.org/2000/svg",
        "http://www.w3.org/1998/Math/MathML",
      ].includes(a);
    }
    function O(a, b) {
      var e = {
        action: ["form"],
        archive: ["object"],
        background: ["body"],
        cite: ["blockquote", "del", "ins", "q"],
        classid: ["object"],
        codebase: ["applet", "object"],
        data: ["object"],
        datasrc: "button div input object select span table textarea".split(
          " "
        ),
        for: ["script"],
        formaction: ["button", "input"],
        href: ["a", "area", "base", "link"],
        icon: ["command"],
        longdesc: ["frame", "iframe", "img"],
        manifest: ["html"],
        name: ["a"],
        poster: ["video"],
        profile: ["head"],
        src: "audio embed frame iframe img input script source track video".split(
          " "
        ),
        usemap: ["img", "input", "object"],
        value: ["input"],
      }[b.local];
      return e && e.includes(a.local);
    }
    function fa(a, e, h) {
      h = void 0 === h ? null : h;
      switch (a.method) {
        case "xml":
          e = new x(a, e);
          if (a.version && "1.0" !== a.version)
            throw new q(
              "Serializer does not support the requested XML version: " +
                a.version,
              "SESU0013"
            );
          ja(a);
          if (a["undeclare-prefixes"])
            throw new q(
              "Cannot undeclare prefixes with XML 1.0 serializer",
              "SEPM0010"
            );
          a.indent && (e = Ja(a, e));
          e = za(a, e);
          e = Ka(a, e);
          e = Va(a, e);
          return xa(a, e);
        case "html":
          return aa(a, e);
        case "text":
          return (
            ja(a), (e = new b(a, e)), (e = za(a, e)), (e = Ka(a, e)), xa(a, e)
          );
        case "xhtml":
          return aa(a, e);
        case "json":
          return ja(a), a.indent ? new c(a, e, h) : new l(a, e, h);
        case "adaptive":
          return new m(a, e, h);
        default:
          return new d(a, e);
      }
    }
    function Y(a, b, e) {
      function c(a, b) {
        b = b.trim();
        if (["yes", "true", "1"].includes(b)) return !0;
        if (["no", "false", "0"].includes(b)) return !1;
        throw new q(
          "Value of " + a + " must be yes(=true, 1) or no(=false, 0)",
          "SEPM0016"
        );
      }
      function d(a) {
        return function (b, e) {
          e = e.trim();
          return e.split(/\s+/).map(function (b) {
            /^Q\{/.test(b) || /:/.test(b) || (b = "Q{}" + b);
            return /^Q\{/.test(b) ? b : Z.X.g(b, a).ha();
          });
        };
      }
      function h(a) {
        return function (b, e) {
          e = e.trim();
          if (a.includes(e)) return e;
          throw new q(
            "Value of " + b + "(" + e + "): must be one of " + a.join("|"),
            "SEPM0016"
          );
        };
      }
      function f(a) {
        return function (b, e) {
          if (a.test(e)) return e;
          throw new q(
            "Invalid value for " + b + ": must match the pattern " + a,
            "SEPM0016"
          );
        };
      }
      function p(a, b) {
        return b;
      }
      function g(a, b) {
        b = b.trim();
        if (/[0-9]+/.test(b)) return 1 * b;
        throw new q(
          "Value of " +
            a +
            " must be an integer (Actual value is " +
            B.oa(b) +
            ")",
          "SEPM0016"
        );
      }
      e = {
        "allow-duplicate-names": c,
        "build-tree": c,
        "byte-order-mark": c,
        "cdata-section-elements": d(e),
        "doctype-public": f(/[\sa-zA-Z0-9\-'()+,.:=?;!*#@$_%\/]*/),
        "doctype-system": f(/[^']*|[^"]*/),
        encoding: f(/[\x21-\x7e]+/),
        "escape-uri-attributes": c,
        "html-version": function (a, b) {
          if (/[0-9]+(\.[0-9]+)?/.test(b)) return 1 * b;
          throw new q(
            "Value of " + a + " must be a decimal number",
            "SEPM0016"
          );
        },
        "include-content-type": c,
        indent: c,
        "item-separator": p,
        "json-node-output-method": h(["xml", "xhtml", "html", "text"]),
        "media-type": p,
        method: (function (a, b) {
          return function (e, c) {
            c = c.trim();
            !/^Q\{/.test(c) && /:/.test(c) && (c = Z.X.g(c, b).ha());
            if (a.includes(c)) return c;
            throw new q(
              "Value of " + e + "(" + c + "): must be one of " + a.join("|"),
              "SEPM0016"
            );
          };
        })(
          "xml xhtml html text json adaptive Q{http://saxonica.com/ns/interactiveXSLT}append-content Q{http://saxonica.com/ns/interactiveXSLT}replace-content".split(
            " "
          ),
          e
        ),
        "normalization-form": h(
          "NFC NFD NFKC NFKD fully-normalized none".split(" ")
        ),
        "omit-xml-declaration": c,
        standalone: function (a, b) {
          return "omit" === b.trim() ? null : c(a, b);
        },
        "suppress-indentation": d(e),
        "undeclare-prefixes": c,
        "use-character-maps": d(e),
        version: p,
        "Q{http://saxon.sf.net/}indent-spaces": g,
        "Q{http://saxon.sf.net/}line-length": g,
        "Q{http://saxon.sf.net/}stylesheet-version": g,
      };
      /^\{/.test(a) && (a = "Q" + a);
      if ("string" !== typeof b)
        throw new q(
          "Value of " + a + " must be supplied as a string",
          "SEPM0016"
        );
      if (e[a]) return e[a](a, b);
      if (!/^Q\{/.test(a))
        throw new q("Unknown serialization parameter " + a, "SEPM0017");
    }
    function N(a, b, e) {
      function c(a, b, e) {
        if (!Array.isArray(b))
          throw new q("Value of " + a + " must be an array", "SEPM0016");
        return (e || []).concat(b);
      }
      function d(a, b) {
        if ("boolean" !== typeof b)
          throw new q("Value of " + a + " must be boolean", "SEPM0016");
        return b;
      }
      function h(a, b) {
        if ("number" !== typeof b)
          throw new q(
            "Value of " +
              a +
              " must be an integer (actual value is " +
              B.oa(b) +
              ")",
            "SEPM0016"
          );
        return b;
      }
      var f = {
        "allow-duplicate-names": d,
        "build-tree": d,
        "byte-order-mark": d,
        "cdata-section-elements": c,
        "escape-uri-attributes": d,
        "html-version": function (a, b) {
          if ("number" !== typeof b)
            throw new q(
              "Value of " + a + " must be a decimal number",
              "SEPM0016"
            );
          return b;
        },
        "include-content-type": d,
        indent: d,
        "omit-xml-declaration": d,
        standalone: function (a, b) {
          return null === b ? null : d(a, b);
        },
        "suppress-indentation": c,
        "undeclare-prefixes": d,
        "use-character-maps": function (a, b, e) {
          e &&
            Array.isArray(e) &&
            B.ra(
              "Problem with existing character map supplied to overrideParam"
            );
          if ("object" !== typeof b)
            throw new q("Value of " + a + " must be an object", "SEPM0016");
          if (void 0 === b.Wa)
            throw new q(
              "Value of " + a + " must be a character map object",
              "SEPM0016"
            );
          (a = e) ? S(a, b) : (a = b);
          return a;
        },
        "Q{http://saxon.sf.net/}indent-spaces": h,
        "Q{http://saxon.sf.net/}line-length": h,
        "Q{http://saxon.sf.net/}stylesheet-version": h,
      };
      /^{/.test(a) && (a = "Q" + a);
      return f[a] ? f[a](a, b, e) : Y(a, b.toString());
    }
    function S(a, b) {
      b.min < a.min && (a.min = b.min);
      b.max > a.max && (a.max = b.max);
      for (var e in b.Wa) b.Wa.hasOwnProperty(e) && (a.Wa[e] = b.Wa[e]);
    }
    function ma(a, b) {
      var e = {};
      a.forEach(function (a, c) {
        var d = b.bl[a];
        if (!d) throw new q("Unknown character map " + a, "SEPM0016");
        0 === c ? (e = d) : S(e, d);
      });
      return e;
    }
    function xa(a, b) {
      return a["item-separator"] && "#absent" !== a["item-separator"]
        ? new Cb.en(b, a["item-separator"])
        : new Cb.Rg(b);
    }
    function Ja(a, b) {
      var e = a["Q{http://saxon.sf.net/}indent-spaces"],
        c = a["suppress-indentation"];
      return ("xml" === a.method ? new A(e, c) : new w(e, c)).Rf(b);
    }
    function za(a, b) {
      a["normalization-form"] &&
        "none" !== a["normalization-form"] &&
        (b = new K(a["normalization-form"]).Rf(b));
      return b;
    }
    function Ka(a, b) {
      a["use-character-maps"] && (b = new g(a["use-character-maps"]).Rf(b));
      return b;
    }
    function Va(a, b) {
      a["cdata-section-elements"] &&
        (b = new t(
          a["cdata-section-elements"],
          a.encoding || "UTF-8",
          a["normalization-form"] && "none" !== a["normalization-form"]
            ? a["normalization-form"]
            : null
        ).Rf(b));
      return b;
    }
    function Ba(a, b) {
      return void 0 === a[b] || a[b];
    }
    function ja(a) {
      if (
        a.encoding &&
        !["UTF-8", "UTF-16", "ISO-646", "ISO-8859-1", "US-ASCII"].includes(
          a.encoding.toUpperCase()
        )
      )
        throw new q(
          "Serializer does not support the requested encoding: " + a.encoding,
          "SESU0007"
        );
    }
    function aa(a, b) {
      var e = "xhtml" === a.method,
        c = e ? new r(a, b) : new z(a, b);
      if (e && a.version && "1.0" !== a.version)
        throw new q(
          "Serializer does not support the requested XML version: " + a.version,
          "SESU0013"
        );
      if (
        (e = e ? a["html-version"] : a["html-version"] || a.version) &&
        5 !== 1 * e
      )
        throw new q(
          "Serializer does not support the requested HTML version: " + e,
          "SESU0013"
        );
      ja(a);
      Ba(a, "indent") && (c = Ja(a, c));
      c = za(a, c);
      c = Ka(a, c);
      c = Va(a, c);
      c = new v().Rf(c);
      Ba(a, "escape-uri-attributes") && (c = new k().Rf(c));
      Ba(a, "include-content-type") && (c = new f(a).Rf(c));
      return xa(a, c);
    }
    function ra(a, b, e, c) {
      function d(a, b) {
        switch (a.nodeType) {
          case 9:
          case 11:
            b.tb(p);
            for (var e = a.childNodes, c = 0; c < e.length; ++c) d(e[c], b);
            b.hb();
            break;
          case 1:
            var h = {};
            G.Ab.Hc(a).sa(function (a) {
              h[a.prefix] = a.uri;
            });
            var f = new Cb.$e();
            G.Ab.ob(a).sa(function (a) {
              f.set(a.je, { value: a.value, ec: {} });
            });
            b.Ba(G.ma(a), f, h, p);
            e = a.childNodes;
            for (c = 0; c < e.length; ++c) d(e[c], b);
            b.Na();
            break;
          case 2:
            throw new q("Serialize called for an attribute node", "SENR0001");
          case 3:
          case 4:
            b.text(a.nodeValue, p);
            break;
          case 7:
            b.Ra(a.target, a.nodeValue, p);
            break;
          case 8:
            b.Sa(a.nodeValue, p);
            break;
          case 13:
            throw new q("Serialize called for a namespace node", "SENR0001");
        }
      }
      function h(a, b) {
        Array.isArray(a)
          ? a.forEach(function (a) {
              h(a, b);
            })
          : G.da(a)
          ? d(a, b)
          : b.append(a, p);
      }
      c = void 0 === c ? null : c;
      if (!e) {
        var f = "";
        e = {
          write: function (a) {
            f += a;
          },
        };
      }
      e.write ||
        B.ra(
          "writer supplied to Serialize.serialize() is not a writeable stream"
        );
      b || (b = {});
      b = fa(b, e, c);
      var p = {};
      a && h(a, b);
      b.close();
      return f;
    }
    var Z = C.O;
    n(e, Cb.Jk);
    e.prototype.close = function () {
      this.ga.end && !this.ga.Vq && this.ga.end();
    };
    n(x, e);
    x.prototype.tb = function () {
      this.Jn = !0;
    };
    x.prototype.hb = function () {};
    x.prototype.close = function () {
      this.bd || this.Hd();
      e.prototype.close.call(this);
    };
    x.prototype.Ba = function (a, b, e) {
      function c(a) {
        throw new q(
          "When " +
            a +
            " is specified, there must only be one top-level element node",
          "SEPM0004"
        );
      }
      this.bd ||
        (this.Hd(),
        this.Fh(a),
        this.ig && !this.gh && !0 === this.sb.indent && this.ga.write("\n"),
        (this.bd = !0));
      0 === this.Je.length &&
        (0 < this.Gm++ &&
          void 0 !== this.sb.standalone &&
          null !== this.sb.standalone &&
          c("standalone"),
        1 < this.Gm && this.sb["doctype-system"] && c("doctype-system"));
      var d = 0 === this.Je.length ? {} : this.Je[this.Je.length - 1];
      this.Kf.push(a);
      this.Je.push(e);
      this.xc && this.$f();
      this.ga.write("<" + this.encode(a.toString(), !1));
      this.Tp(e, d);
      this.Mm(a, b);
      this.xc = !0;
    };
    x.prototype.Na = function () {
      var a = this.Kf.pop();
      this.Je.pop();
      this.xc
        ? (this.ga.write("/>"), (this.xc = !1))
        : this.ga.write("</" + a.toString() + ">");
    };
    x.prototype.text = function (a, b) {
      this.bd || this.Hd();
      this.xc && this.$f();
      this.ga.write(
        b.DISABLE_ESCAPING ? this.encode(a, !1) : this.encode(h(a, !1, !1), !0)
      );
    };
    x.prototype.Sa = function (a) {
      this.bd || this.Hd();
      this.xc && this.$f();
      this.ga.write("\x3c!--" + this.encode(a, !1) + "--\x3e");
    };
    x.prototype.Ra = function (a, b) {
      this.bd || this.Hd();
      this.xc && this.$f();
      this.ga.write(
        "<?" +
          this.encode(a, !1) +
          (0 < b.length ? " " + this.encode(b, !1) : "") +
          "?>"
      );
    };
    x.prototype.append = function (a, b) {
      this.text(a.toString(), b);
    };
    x.prototype.Hd = function () {
      this.hi || this.Sp();
    };
    x.prototype.$f = function () {
      this.ga.write(">");
      this.xc = !1;
    };
    x.prototype.Tp = function (a, b) {
      var e = this,
        c = [],
        d;
      for (d in a)
        if (b[d] !== a[d]) {
          var f = "";
          "xml" !== d &&
            (f =
              "" === d
                ? ' xmlns="' + h(a[d], !0, !1) + '"'
                : " xmlns:" + d + '="' + h(a[d], !0, !1) + '"');
          "" !== f && c.push(f);
        }
      c.sort();
      c.forEach(function (a) {
        return e.ga.write(a);
      });
    };
    x.prototype.Mm = function (a, b) {
      if (b) {
        var e = this;
        b.forEach(function (a, b) {
          e.Km(b, a);
        });
      }
    };
    x.prototype.Km = function (a, b) {
      var e = !0 === b.ec.USE_NULL_MARKERS;
      e = b.ec.DISABLE_ESCAPING
        ? this.encode(b.value, !1)
        : this.encode(h(b.value, !0, e), !0);
      this.ga.write(" " + this.encode(a.toString(), !1) + '="' + e + '"');
    };
    x.prototype.Sp = function () {
      this.sb["byte-order-mark"] &&
        "UTF-8" === this.sb.encoding &&
        this.ga.write("﻿");
      this.hi = !0;
      var a = !0 === this.sb["omit-xml-declaration"];
      this.ig = !a;
      var b = this.sb.standalone;
      if (a && void 0 !== b && null !== b)
        throw new q(
          "Serializer values of 'standalone' and 'omit-xml-declaration' conflict",
          "SEPM0009"
        );
      a ||
        this.ga.write(
          '<?xml version="1.0" encoding="' +
            this.encoding +
            '"' +
            (void 0 !== b && null !== b
              ? ' standalone="' + (b ? "yes" : "no") + '"'
              : "") +
            "?>"
        );
    };
    x.prototype.Fh = function (a) {
      var b = this.sb["doctype-system"] || null,
        e = this.sb["doctype-public"] || null;
      null !== b &&
        (this.ig && this.ga.write("\n"),
        this.ga.write("<!DOCTYPE " + this.encode(a.toString(), !1) + "\n"),
        (a = b.includes('"') ? "'" + b + "'" : '"' + b + '"'),
        null === e
          ? this.ga.write(" SYSTEM " + this.encode(a, !1) + ">\n")
          : this.ga.write(
              ' PUBLIC "' +
                this.encode(e, !1) +
                '" ' +
                this.encode(a, !1) +
                ">\n"
            ),
        (this.gh = !0));
    };
    x.prototype.encode = function (a, b) {
      function e(a) {
        if (b) return "&#" + a + ";";
        throw new q(
          "Character " +
            String.fromCodePoint(a) +
            " (decimal " +
            a +
            ") is not available in the chosen encoding",
          "SERE0008"
        );
      }
      var c = this.encoding;
      return (function (a) {
        var b = "",
          d = 0,
          h = a.length;
        if (0 === h) return "";
        for (; d < h; ) {
          for (var f = d; f < h; ) {
            var g = a.charCodeAt(f);
            if (9 === g || 10 === g) f++;
            else if (32 > g) break;
            else if (127 > g) f++;
            else if (
              160 > g ||
              8232 === g ||
              (55296 <= g && 56320 >= g) ||
              !p(g, c)
            )
              break;
            else f++;
          }
          if (f >= h) return 0 === d ? a : b + a.substring(d, f);
          f > d && (b += a.substring(d, f));
          g = a.charCodeAt(f);
          d = a.charAt(f);
          if (0 === g) throw new q("Null marker", "ZZZZ9999");
          160 > g || 8232 === g
            ? (b += e(g))
            : 55296 <= g && 56320 >= g
            ? ((g = a.codePointAt(f++)),
              (b += p(g, c) ? d + a.charAt(f) : e(g)))
            : p(g, c) || (b += e(g));
          d = ++f;
          if (d >= h) return b;
        }
      })(a);
    };
    n(A, Cb.Za);
    A.prototype.Ba = function (a, b, e, c) {
      this.zd || this.oc ? this.td() : this.$d();
      if (0 > this.fc) {
        var d = b.get(
          Z.X.xa("", "http://www.w3.org/XML/1998/namespace", "space")
        );
        d && "preserve" === d.value && (this.fc = this.level);
      }
      this.level++;
      this.Ui &&
        -1 === this.fc &&
        0 <= this.Ui.indexOf(a.ha()) &&
        (this.fc = this.level);
      this.$.Ba(a, b, e, c);
      this.zd = this.Te = !0;
      this.oc = !1;
    };
    A.prototype.Na = function () {
      this.level--;
      this.oc && !this.Te
        ? this.td()
        : this.zd && !this.oc
        ? (this.yg = null)
        : this.$d();
      this.$.Na();
      this.Te = !1;
      this.oc = !0;
      this.zd = !1;
      this.level === this.fc - 1 && (this.fc = -1);
    };
    A.prototype.text = function (a, b) {
      0 > this.fc && "" === Na.trim(a)
        ? ((this.yg = a), (this.Ne = b))
        : (this.$d(),
          0 <= a.indexOf("\n") && (this.Te = !1),
          this.$.text(a, b),
          (this.oc = this.zd = !1));
    };
    A.prototype.Sa = function (a, b) {
      this.oc ? this.td() : this.$d();
      this.$.Sa(a, b);
      this.oc = this.zd = !1;
    };
    A.prototype.Ra = function (a, b, e) {
      this.oc ? this.td() : this.$d();
      this.$.Ra(a, b, e);
      this.oc = this.zd = !1;
    };
    A.prototype.td = function () {
      0 <= this.fc ? this.$d() : this.bm();
    };
    A.prototype.bm = function () {
      this.yg = null;
      var a = this.level * this.Sl;
      if (a + 1 > this.ih.length) {
        var b = 5 * this.Sl;
        a + 1 > this.ih.length + b && (b += a + 1);
        for (var e = 0; e < b; e++) this.ih += " ";
      }
      this.$.text(this.ih.substring(0, a + 1), { DISABLE_ESCAPING: !0 });
      this.Te = !1;
    };
    A.prototype.$d = function () {
      this.yg &&
        (this.$.text(this.yg, this.Ne), (this.yg = null), (this.Ne = {}));
    };
    n(K, Cb.Za);
    K.prototype.Ba = function (a, b, e, c) {
      var d = this.form,
        h = new Cb.$e();
      b.forEach(function (a, b) {
        var e = "";
        if (a.ec.USE_NULL_MARKERS)
          for (var c = a.value.split("\x00"), f = 0; f < c.length; f++)
            (e += 1 === f % 2 ? c[f] : c[f].normalize(d)), (e += "\x00");
        else e = a.ec.NO_NORMALIZATION ? a.value : a.value.normalize(d);
        h.set(b, { value: e, ec: a.ec });
      });
      this.$.Ba(a, h, e, c);
    };
    K.prototype.text = function (a, b) {
      this.$.text(b.NO_NORMALIZATION ? a : a.normalize(this.form), b);
    };
    n(g, Cb.Za);
    g.prototype.Ba = function (a, b, e, c) {
      function d(a) {
        var b = a.value,
          e = a.ec;
        if (e.DISABLE_ESCAPING || e.NO_CHARACTER_MAP)
          return { value: b, ec: e };
        a = h(b);
        return a !== b
          ? ((b = Object.assign({}, e)),
            (b.USE_NULL_MARKERS = !0),
            { value: a, ec: b })
          : { value: a, ec: e };
      }
      var h = y(this.Wa, !0),
        f = new Cb.$e();
      b.forEach(function (a, b) {
        f.set(b, d(a));
      });
      this.$.Ba(a, f, e, c);
    };
    g.prototype.text = function (a, b) {
      if (b.DISABLE_ESCAPING || b.NO_CHARACTER_MAP) this.$.text(a, b);
      else {
        for (
          var e = this.Wa, c = "", d = !1, h = !0, f = 0;
          f < a.length;
          f++
        ) {
          var p = a.charCodeAt(f);
          if (p >= e.min && p <= e.max) {
            h = !1;
            break;
          }
        }
        if (h) c = a;
        else
          for (h = 0; h < a.length; h++) {
            f = a.charAt(h);
            p = a.charCodeAt(h);
            var g = 55296 <= p && 56320 >= p;
            g && (p = a.codePointAt(h));
            e.Wa[p]
              ? (d || ("" !== c && (this.$.text(c, b), (c = "")), (d = !0)),
                (c += e.Wa[p]),
                g && h++)
              : (d &&
                  ((d = Object.assign({}, b)),
                  (d.DISABLE_ESCAPING = !0),
                  (d.NO_NORMALIZATION = !0),
                  this.$.text(c, d),
                  (c = ""),
                  (d = !1)),
                (c += f));
          }
        d
          ? ((e = Object.assign({}, b)),
            (e.DISABLE_ESCAPING = !0),
            (e.NO_NORMALIZATION = !0),
            this.$.text(c, e))
          : this.$.text(c, b);
      }
    };
    n(t, Cb.Za);
    t.prototype.Ba = function (a, b, e, c) {
      this.flush();
      this.dh.push(a.ha());
      this.$.Ba(a, b, e, c);
    };
    t.prototype.Na = function () {
      this.flush();
      this.dh.pop();
      this.$.Na();
    };
    t.prototype.text = function (a, b) {
      0 <=
      this.Yo.indexOf(0 === this.dh.length ? null : this.dh[this.dh.length - 1])
        ? b.DISABLE_ESCAPING
          ? (this.flush(), this.$.text(a, b))
          : ((this.buffer += a), (this.Ne = b))
        : this.$.text(a, b);
    };
    t.prototype.Sa = function (a, b) {
      this.flush();
      this.$.Sa(a, b);
    };
    t.prototype.Ra = function (a, b, e) {
      this.flush();
      this.$.Ra(a, b, e);
    };
    t.prototype.flush = function () {
      if ("" !== this.buffer) {
        for (
          var a = this.form ? this.buffer.normalize(this.form) : this.buffer,
            b = a.length,
            e = 0;
          e < b;

        ) {
          for (var c = e; c < b; )
            if (p(a.charCodeAt(c), this.encoding)) c++;
            else break;
          c > e && this.$n(a.substring(e, c));
          c < b &&
            ((e = Object.assign({}, this.Ne)),
            (e.DISABLE_ESCAPING = !1),
            (e.NO_CHARACTER_MAP = !0),
            (e.NO_NORMALIZATION = !0),
            this.$.text(a.charAt(c), e));
          e = ++c;
        }
        this.buffer = "";
        this.Ne = {};
      }
    };
    t.prototype.$n = function (a) {
      var b = Object.assign({}, this.Ne);
      b.DISABLE_ESCAPING = !0;
      b.NO_CHARACTER_MAP = !0;
      b.NO_NORMALIZATION = !0;
      this.$.text("<![CDATA[", b);
      for (var e = 0, c = a.length; e < c; ) {
        var d = a.substring(e, c).indexOf("]]\x3e");
        0 <= d
          ? (this.$.text(a.substring(e, d + 2) + "]]\x3e<![CDATA[", b),
            (e = d + 2))
          : (this.$.text(a.substring(e, c) + "]]\x3e", b), (e = c));
      }
    };
    n(z, x);
    z.prototype.Ba = function (a, b, e, c) {
      x.prototype.Ba.call(this, a, b, e, c);
      a.zf("") &&
        ["script", "style"].includes(a.local.toLowerCase()) &&
        (this.kg = 0);
      this.kg++;
    };
    z.prototype.Na = function () {
      var a = this.Kf.pop();
      this.kg--;
      0 === this.kg && (this.kg = -1e6);
      this.Je.pop();
      (this.Hj.includes(a.local.toLowerCase()) && u(a)) ||
        (this.xc && (this.ga.write(">"), (this.xc = !1)),
        this.ga.write("</" + a.toString() + ">"));
    };
    z.prototype.text = function (a, b) {
      if (0 < this.kg && !b.DISABLE_ESCAPING) {
        var e = Object.assign({}, b);
        e.DISABLE_ESCAPING = !0;
        x.prototype.text.call(this, a, e);
      } else x.prototype.text.call(this, a, b);
    };
    z.prototype.Ra = function (a, b) {
      this.bd || this.Hd();
      this.xc && this.$f();
      if (0 <= b.indexOf(">"))
        throw new q(
          "A processing instruction in HTML must not contain a > character",
          "SERE0015"
        );
      this.ga.write("<?" + this.encode(a, !1) + " " + this.encode(b, !1) + ">");
    };
    z.prototype.Hd = function () {
      this.hi ||
        (this.sb["byte-order-mark"] &&
          "UTF-8" === this.sb.encoding &&
          this.ga.write("﻿"),
        (this.hi = !0));
    };
    z.prototype.Mm = function (a, b) {
      var e = this;
      if (b) {
        var c = this;
        b.forEach(function (b, d) {
          a.zf("") && e.Bo(a, d, b.value)
            ? c.ga.write(" " + d.toString())
            : c.Km(d, b);
        });
      }
    };
    z.prototype.Fh = function (a) {
      var b = this.sb["doctype-system"] || null,
        e = this.sb["doctype-public"] || null;
      null === b && null === e
        ? u(a) &&
          "html" === a.local.toLowerCase() &&
          (this.ig && this.ga.write("\n"),
          this.ga.write("<!DOCTYPE " + a.toString() + ">\n"),
          (this.gh = !0))
        : null === b
        ? ((a =
            u(a) && "html" === a.local.toLowerCase() ? a.toString() : "html"),
          this.ig && this.ga.write("\n"),
          this.ga.write("<!DOCTYPE " + a + "\n"),
          this.ga.write('  PUBLIC "' + e + '">\n'),
          (this.gh = !0))
        : x.prototype.Fh.call(
            this,
            "html" === a.local.toLowerCase() ? a : Z.X.xa("", "", "html")
          );
    };
    z.prototype.Bo = function (a, b, e) {
      b = b.local.toLowerCase();
      a = a.local.toLowerCase();
      return (
        b === e.toLowerCase() &&
        ((this.xj[a] && this.xj[a].includes(b)) || this.xj["*"].includes(b))
      );
    };
    n(w, A);
    w.prototype.Ba = function (a, b, e, c) {
      this.Vj = this.Tl.includes(a.local.toLowerCase()) && u(a);
      this.zd || this.oc ? this.td() : this.$d();
      this.level++;
      0 > this.fc &&
        this.bo.includes(a.local.toLowerCase()) &&
        u(a) &&
        (this.fc = this.level);
      this.Ui &&
        -1 === this.fc &&
        0 <= this.Ui.indexOf(a.ha()) &&
        (this.fc = this.level);
      this.$.Ba(a, b, e, c);
      this.zd = this.Te = !0;
      this.Vj = this.Xf = this.oc = !1;
      this.Kf.push(a);
    };
    w.prototype.Na = function () {
      var a = this.Kf.pop();
      this.level--;
      this.oc && !this.Te ? this.td() : this.$d();
      this.$.Na();
      this.Te = !1;
      this.oc = !0;
      this.zd = !1;
      this.Xf = this.Tl.includes(a.local.toLowerCase()) && u(a);
      this.level === this.fc - 1 && (this.fc = -1);
    };
    w.prototype.text = function (a, b) {
      A.prototype.text.call(this, a, b);
      (0 > this.fc && "" === Na.trim(a)) || (this.Xf = !1);
    };
    w.prototype.Sa = function (a, b) {
      A.prototype.Sa.call(this, a, b);
      this.Xf = !1;
    };
    w.prototype.Ra = function (a, b, e) {
      A.prototype.Ra.call(this, a, b, e);
      this.Xf = !1;
    };
    w.prototype.td = function () {
      0 <= this.fc || this.Vj || this.Xf ? this.$d() : this.bm();
    };
    n(v, Cb.Za);
    v.prototype.Ba = function (a, b, e, c) {
      for (var d in e) L(e[d]) && delete e[d];
      L(a.uri) &&
        ("" !== a.prefix && (a = Z.X.xa("", a.uri, a.local)), (e[""] = a.uri));
      b.forEach(function (a, b) {
        L(b.uri) && (e[b.prefix] = b.uri);
      });
      Cb.Za.prototype.Ba.call(this, a, b, e, c);
    };
    n(r, x);
    r.prototype.Na = function () {
      this.Je.pop();
      var a = this.Kf.pop();
      this.xc && this.Hj.includes(a.local) && u(a)
        ? (this.ga.write(" />"), (this.xc = !1))
        : (this.xc && x.prototype.$f.call(this),
          this.ga.write("</" + a.toString() + ">"));
    };
    r.prototype.text = function (a, b) {
      (this.bd || "" !== Na.trim(a)) && x.prototype.text.call(this, a, b);
    };
    r.prototype.Fh = function (a) {
      var b = this.sb["doctype-system"] || null;
      null === b && u(a) && "html" === a.local.toLowerCase()
        ? (this.ig && this.ga.write("\n"),
          this.ga.write("<!DOCTYPE " + a.toString() + ">\n"),
          (this.gh = !0))
        : null !== b && x.prototype.Fh.call(this, a);
    };
    n(k, Cb.Za);
    k.prototype.Ba = function (a, b, e, c) {
      var d = !1;
      b.forEach(function (b, e) {
        return (d = d || O(a, e));
      });
      if (d) {
        var h = new Cb.$e();
        b.forEach(function (b, e) {
          if (O(a, e)) {
            var c = P.escape(b.value.normalize("NFC"), function (a) {
                return 32 > a || 126 < a;
              }),
              d = Object.assign({}, b.ec);
            d.DISABLE_ESCAPING = !1;
            d.NO_CHARACTER_MAP = !0;
            d.NO_NORMALIZATION = !0;
            h.set(e, { value: c, ec: d });
          } else h.set(e, b);
        });
        Cb.Za.prototype.Ba.call(this, a, h, e, c);
      } else Cb.Za.prototype.Ba.call(this, a, b, e, c);
    };
    n(f, Cb.Za);
    f.prototype.Ba = function (a, b, e, c) {
      if ("meta" === a.local.toLowerCase() && u(a)) {
        var d = this.mh;
        b.forEach(function (a, b) {
          "http-equiv" === b.toString().toLowerCase() &&
            "content-type" === a.value.trim().toLowerCase() &&
            (d = !0);
        });
        this.mh = d;
      }
      this.mh ||
        (Cb.Za.prototype.Ba.call(this, a, b, e, c),
        "head" === a.local.toLowerCase() &&
          u(a) &&
          ((b = new Cb.$e()),
          b.set(Z.X.xa("", "", "http-equiv"), {
            value: "Content-Type",
            ec: {},
          }),
          b.set(Z.X.xa("", "", "content"), {
            value:
              (this.xb["media-type"] || "text/html") +
              "; charset=" +
              (this.xb.encoding || "UTF-8"),
            ec: {},
          }),
          this.$.Ba(Z.X.xa("", a.uri, "meta"), b, {}, {}),
          this.$.Na()));
    };
    f.prototype.Na = function () {
      this.mh ? (this.mh = !1) : this.$.Na();
    };
    n(l, Cb.Tf);
    l.prototype.close = function () {
      this.kp(this.result());
      this.ga.end && this.ga.end();
      Cb.Tf.prototype.close.call(this);
    };
    l.prototype.Ij = function (a) {
      this.xb["normalization-form"] &&
        "none" !== this.xb["normalization-form"] &&
        (a = a.normalize(this.xb["normalization-form"]));
      for (
        var b = this.xb.encoding || "UTF-8", e = "", c = 0;
        c < a.length;
        c++
      ) {
        var d = a.charCodeAt(c),
          h = a.charAt(c);
        switch (h) {
          case '"':
            e += '\\"';
            break;
          case "\b":
            e += "\\b";
            break;
          case "\f":
            e += "\\f";
            break;
          case "\n":
            e += "\\n";
            break;
          case "\r":
            e += "\\r";
            break;
          case "\t":
            e += "\\t";
            break;
          case "\\":
            e += "\\\\";
            break;
          case "/":
            e += "\\/";
            break;
          default:
            e =
              31 >= d || (127 <= d && 159 >= d) || !p(d, b)
                ? e +
                  ("\\u" + ("0000" + d.toString(16).toUpperCase()).slice(-4))
                : e + h;
        }
      }
      return e;
    };
    l.prototype.stringify = function (a) {
      var b = '"';
      if (this.Wa) {
        for (
          var e = this.Wa, c = "", d = !1, h = !0, f = 0;
          f < a.length;
          f++
        ) {
          var p = a.charCodeAt(f);
          if (p >= e.min && p <= e.max) {
            h = !1;
            break;
          }
        }
        if (h) c = a;
        else
          for (h = 0; h < a.length; h++) {
            f = a.charAt(h);
            p = a.charCodeAt(h);
            var g = 55296 <= p && 56320 >= p;
            g && (p = a.codePointAt(h));
            e.Wa[p]
              ? (d || ("" !== c && ((b += this.Ij(c)), (c = "")), (d = !0)),
                (c += e.Wa[p]),
                g && h++)
              : (d && ((b += c), (c = ""), (d = !1)), (c += f));
          }
        b = d ? b + c : b + this.Ij(c);
      } else b += this.Ij(a);
      return b + '"';
    };
    l.prototype.kp = function (b) {
      function e(a) {
        switch (a.length) {
          case 0:
            d.ga.write("null");
            break;
          case 1:
            c(a[0]);
            break;
          default:
            throw new q(
              "Cannot output a sequence of length " + a.length + " as JSON",
              "SERE0023"
            );
        }
      }
      function c(b) {
        var c = C.O;
        if (C.Ga(b))
          if (c.Ea.matches(b)) d.ga.write(b.toString());
          else if (c.numeric.matches(b)) {
            b = b.toString();
            if (["NaN", "INF", "-INF"].includes(b))
              throw new q("Cannot output INF or NaN as JSON", "SERE0020");
            d.ga.write(b);
          } else d.ga.write(d.stringify(b.toString()));
        else if (G.da(b)) {
          c = Object.assign({}, d.xb);
          c.method = c["json-node-output-method"] || "xml";
          c["item-separator"] = null;
          c["omit-xml-declaration"] = !0;
          c.encoding = "utf-8";
          var h = new a();
          ra(b, c, h, d.context);
          d.ga.write(d.stringify(h.toString()));
        } else if (P.isArray(b))
          if (((b = b.value), 0 === b.length)) d.ga.write("[]");
          else {
            d.Hi("[");
            e(b[0]);
            for (c = 1; c < b.length; c++) d.fi(), e(b[c]);
            d.ei("]");
          }
        else if (b instanceof cb) {
          var f = !0;
          d.Hi("{");
          var p = {};
          b.Cb(function (a) {
            f ? (f = !1) : d.fi();
            var b = d.stringify(a.k.toString());
            if (!d.xb["allow-duplicate-names"]) {
              if (p[b])
                throw new q(
                  "Duplicate key '" + b + "' in serialized JSON map",
                  "SERE0022"
                );
              p[b] = !0;
            }
            d.ga.write(b);
            d.il();
            e(a.v);
          });
          d.ei("}");
        } else throw new q("Cannot output " + B.oa(b) + " as JSON", "SERE0021");
      }
      var d = this;
      e(b);
    };
    l.prototype.Hi = function (a) {
      this.ga.write(a);
    };
    l.prototype.ei = function (a) {
      this.ga.write(a);
    };
    l.prototype.fi = function () {
      this.ga.write(",");
    };
    l.prototype.il = function () {
      this.ga.write(":");
    };
    n(c, l);
    c.prototype.Hi = function (a) {
      l.prototype.Hi.call(this, a);
      this.level++;
      this.ga.write("\n".padEnd(this.level * this.td + 1, this.ek));
    };
    c.prototype.ei = function (a) {
      this.level--;
      this.ga.write("\n".padEnd(this.level * this.td + 1, this.ek));
      l.prototype.ei.call(this, a);
    };
    c.prototype.fi = function () {
      l.prototype.fi.call(this);
      this.ga.write("\n".padEnd(this.level * this.td + 1, this.ek));
    };
    c.prototype.il = function () {
      this.ga.write(": ");
    };
    n(m, Cb.Tf);
    m.prototype.close = function () {
      function b(a, b) {
        for (var e in ["fn", "math", "map", "array", "xs"])
          if (F.me[e] === a) return e + ":" + b;
        return "Q{" + a + "}" + b;
      }
      function e(a) {
        return h.Wa ? y(h.Wa, !1)(a) : a;
      }
      function c(a, b) {
        if (1 === a.length) d(a[0], b);
        else {
          b.write("(");
          for (var e = !0, c = 0; c < a.length; c++)
            e ? (e = !1) : b.write(","), d(a[c], b);
          b.write(")");
        }
      }
      function d(f, p) {
        if (G.da(f))
          switch (f.nodeType) {
            case 9:
            case 11:
            case 1:
            case 7:
            case 8:
            case 3:
              var g = Object.assign({}, h.xb);
              g.method = "xml";
              g["item-separator"] = null;
              g.encoding = "utf-8";
              var k = new a();
              fa(g, k, h.context).append(f);
              p.write(k.toString());
              break;
            case 2:
              p.write(G.ma(f) + '="' + f.value + '"');
              break;
            case 13:
              p.write("*** Namespace Node ****");
          }
        else if (C.Ga(f))
          (g = C.type),
            g["boolean"].matches(f)
              ? p.write(f.value ? "true()" : "false()")
              : g.string.matches(f) ||
                g.untypedAtomic.matches(f) ||
                g.anyURI.matches(f)
              ? p.write('"' + e(f.toString().replace(/"/, '""')) + '"')
              : g.decimal.matches(f)
              ? p.write(f.toString())
              : g["double"].matches(f)
              ? p.write(f.toString())
              : p.write("xs:" + f.type + '("' + f.toString() + '")');
        else if (f instanceof mb) {
          g = f.value;
          p.write("[");
          k = !0;
          for (var u = 0; u < g.length; u++)
            k ? (k = !1) : p.write(","), c(g[u], p);
          p.write("]");
        } else if (f instanceof cb) {
          p.write("map{");
          var y = !0;
          f.Cb(function (a) {
            y ? (y = !1) : p.write(",");
            d(a.k, p);
            p.write(":");
            c(a.v, p);
          });
          p.write("}");
        } else
          f instanceof nb.gb
            ? f.local
              ? p.write(b(f.uri, f.local) + "#" + f.arity)
              : p.write("(anonymous function)#" + f.arity)
            : p.write("JS: " + B.oa(f));
      }
      for (var h = this, f = this.result(), p = !0, g = 0; g < f.length; g++) {
        var k = f[g];
        p ? (p = !1) : this.ga.write(this.xb["item-separator"] || " ");
        d(k, this.ga);
      }
      this.ga.end && this.ga.end();
      Cb.Tf.prototype.close.call(this);
    };
    n(d, Cb.Za);
    d.prototype.tb = function (a) {
      this.Gf.push(function (b) {
        b.tb(a);
      });
    };
    d.prototype.Ba = function (a, b, e, c) {
      var h = this;
      if (!this.nf) {
        var f = this.xb["Q{http://saxon.sf.net/}stylesheet-version"],
          p = "xml";
        "html" === a.local && "http://www.w3.org/1999/xhtml" === a.uri
          ? (p = 10 === f ? "xml" : "xhtml")
          : "html" === a.local.toLowerCase() && "" === a.uri && (p = "html");
        this.xb = Object.assign({}, this.xb);
        this.xb.method = p;
        this.$ = fa(this.xb, this.ga);
        this.$ instanceof d &&
          B.ra(
            "cannot create committed serializer: " + JSON.stringify(this.xb)
          );
        this.Gf.forEach(function (a) {
          return a(h.$);
        });
        this.nf = !0;
        this.Gf = [];
      }
      Cb.Za.prototype.Ba.call(this, a, b, e, c);
    };
    d.prototype.text = function (a, b) {
      this.nf
        ? Cb.Za.prototype.text.call(this, a, b)
        : this.Gf.push(function (e) {
            e.text(a, b);
          });
    };
    d.prototype.Sa = function (a, b) {
      this.nf
        ? Cb.Za.prototype.Sa.call(this, a, b)
        : this.Gf.push(function (e) {
            e.Sa(a, b);
          });
    };
    d.prototype.Ra = function (a, b, e) {
      this.nf
        ? Cb.Za.prototype.Ra.call(this, a, b, e)
        : this.Gf.push(function (c) {
            c.Ra(a, b, e);
          });
    };
    d.prototype.append = function (a) {
      Bb.Ni(a, this);
    };
    d.prototype.hb = function () {
      this.nf && Cb.Za.prototype.hb.call(this);
    };
    d.prototype.close = function () {
      var a = this;
      this.nf ||
        ((this.xb.method = "xml"),
        (this.$ = fa(this.xb, this.ga)),
        this.Gf.forEach(function (b) {
          return b(a.$);
        }));
      Cb.Za.prototype.close.call(this);
    };
    n(b, e);
    b.prototype.text = function (a) {
      this.bd || this.Hd();
      this.ga.write(a);
    };
    b.prototype.append = function (a) {
      this.bd || this.Hd();
      this.ga.write(a.toString());
    };
    b.prototype.Hd = function () {
      this.sb["byte-order-mark"] &&
        "UTF-8" === this.sb.encoding &&
        this.ga.write("﻿");
      this.bd = !0;
    };
    a.prototype.write = function (a) {
      this.Aa += a;
    };
    a.prototype.toString = function () {
      return this.Aa;
    };
    return {
      um: ra,
      Pl: fa,
      pj: a,
      Ki: function (a, b, e) {
        function c(a, b) {
          throw new q(
            "Serialization params: " + a,
            void 0 === b ? "SEPM0017" : b
          );
        }
        function d(a, b) {
          b = void 0 === b ? [] : b;
          var e = G.ma(a);
          G.Ab.ob(a).sa(function (a) {
            a = G.ma(a);
            "" !== a.uri ||
              b.includes(a.local) ||
              c(
                "attribute @" +
                  a.local +
                  " must not appear on element " +
                  e.toString()
              );
          });
        }
        function h(a, b) {
          var e = G.getAttribute(a, b, null);
          null === e &&
            c(
              "attribute @" + b + " is missing on element " + G.ma(a).toString()
            );
          return e;
        }
        e = void 0 === e ? null : e;
        "serialization-parameters" !== G.ma(a).local &&
          c(
            "root element name must be 'serialization-parameters'",
            e || "SEPM0017"
          );
        "http://www.w3.org/2010/xslt-xquery-serialization" !== G.ma(a).uri &&
          c(
            "root element namespace must be http://www.w3.org/2010/xslt-xquery-serialization",
            e || "SEPM0017"
          );
        d(a);
        var f = [];
        G.xe(a).forEach(function (a) {
          if (G.zf(a, "http://www.w3.org/2010/xslt-xquery-serialization")) {
            var e = G.ma(a).local;
            f.includes(e) && c("duplicated parameter " + e, "SEPM0019");
            f.push(e);
            if ("use-character-maps" === e) {
              d(a);
              var p = { min: 0, max: 0, Wa: {} };
              G.xe(a).forEach(function (a) {
                if (
                  G.zf(a, "http://www.w3.org/2010/xslt-xquery-serialization") &&
                  "character-map" === G.ma(a).local
                ) {
                  d(a, ["character", "map-string"]);
                  var b = h(a, "character");
                  1 < b.length &&
                    c(
                      "keys in a character map must all be one-character strings. Found " +
                        b
                    );
                  var e = b.codePointAt(0);
                  a = h(a, "map-string");
                  void 0 !== p.Wa[e]
                    ? c(
                        "character map contains two entries for the character " +
                          b,
                        "SEPM0019"
                      )
                    : ((p.Wa[e] = a),
                      0 === p.min ? (p.min = e) : e < p.min && (p.min = e),
                      e > p.max && (p.max = e));
                } else c("invalid child of use-character-maps: " + G.ma(a).toString());
              });
              55296 < p.min && (p.min = 55296);
            } else
              d(a, ["value"]),
                (p = h(a, "value")),
                (p = Y(e, p, function (b) {
                  return a.lookupNamespaceURI(b);
                }));
            "undefined" !== typeof p && (b[e] = N(e, p, b[e]));
          } else G.zf(a, "") && c("element in no namespace: " + G.ma(a).local), (e = G.ma(a).ha()), f.includes(e) && c("duplicated parameter " + e, "SEPM0019"), f.push(e);
        });
      },
      Ji: N,
      Zi: Y,
      Yi: function (a, b, e) {
        a = Y(a, b);
        return ma(a, e);
      },
      fp: ma,
      Ro: function (a) {
        function b(a, b) {
          throw new q(
            "Serialization params: " + a,
            void 0 === b ? "SEPM0017" : b
          );
        }
        var e = 0,
          c = 0,
          d = {};
        a = sa(Object.entries(a));
        for (var h = a.next(); !h.done; h = a.next()) {
          h = sa(h.value);
          var f = h.next().value;
          h = h.next().value;
          1 < f.length &&
            b(
              "keys in a character map must all be one-character strings. Found " +
                f
            );
          var p = f.codePointAt(0);
          void 0 !== d[p] &&
            b(
              "character map contains two entries for the character " + f,
              "SEPM0019"
            );
          d[p] = h;
          0 === e ? (e = p) : p < e && (e = p);
          p > c && (c = p);
          55296 < e && (e = 55296);
        }
        return { min: e, max: c, Wa: d };
      },
    };
  })();
  var Fb = (function () {
    function a(a, b) {
      return a.C
        ? a.C.filter(function (a) {
            return a.N === b;
          })
        : [];
    }
    function b(a, b, c, d, f) {
      f = void 0 === f ? null : f;
      b = b.fixed.ya;
      if ((a = a.next())) {
        a = Na.trim(a.toString());
        if (f && Na.Yc(a))
          return "##local" === f && (f = b.De(c)[""] || ""), "Q{" + f + "}" + a;
        try {
          var e = A.X.g(a, b.Hg(c, !1));
          if (null === e) throw new q("Invalid QName " + a, d, c);
          return "Q{" + e.uri + "}" + e.local;
        } catch (O) {
          if (O instanceof q && ["FORG0001", "XTDE0290"].includes(O.code))
            throw new q(O.message, d);
          throw O;
        }
      } else return null;
    }
    function d(a, b) {
      if (2 !== b.length && 5 !== b.length)
        throw new q(
          "Wrong number of arguments (" + b.length + ") for  " + a,
          "XPST0017"
        );
    }
    function m(a) {
      return (a = a.next()) ? a.value : "";
    }
    function c(a) {
      return Ma.Bc(m(a));
    }
    function l(a) {
      function b(a) {
        return a.replace(/[^A-Za-z]/g, function (a) {
          return "0" + a.codePointAt(0);
        });
      }
      var e = G.Ab;
      a = e.Ib(a).expand().reverse();
      for (var c = "", d = 0; d < a.length; d++)
        if (a[d] instanceof ab) c += "N" + b(a[d].prefix);
        else if (2 === a[d].nodeType) c += "A" + b(G.ma(a[d]).ha());
        else {
          var f = e.Oe(a[d]).count() + 1;
          c += Db.Mj(f, 0 === d % 2 ? "a" : "A");
        }
      return "d" + G.Kn(a[0]) + c;
    }
    function f(a, b, c) {
      var e = Math.round(b.next().J()),
        d = c ? e + Math.round(c.next().J()) : a.length + 1;
      return a.filter(function (a, b) {
        return b + 1 >= e && b + 1 < d;
      });
    }
    function k(a, b, c) {
      var e = b;
      a.sa(function (a) {
        e = c(a, e);
      });
      return e;
    }
    function r(a) {
      function b(a) {
        throw new q(a, "FORG0006");
      }
      var e =
        "max" === a
          ? function (a) {
              return 0 < a;
            }
          : function (a) {
              return 0 > a;
            };
      return function (c, d, f) {
        var h = c[0];
        d.fixed.ya.Gc(f, "i") &&
          (h = h.filter(function (a) {
            return !Q.ce(a);
          }));
        c = Q.sd(f, c[1], "compare", d);
        var p = Q.yn(c),
          g = A.Ua.matches,
          u = A.numeric.matches,
          y = A.za.matches,
          x = A.qd.matches,
          l = A.kc.matches,
          m = A.T.matches;
        c = A.duration.matches;
        var t = A.ed.matches,
          r = A.ac.matches;
        d = A.X.matches;
        var L = A.za.aa,
          w = A.qd.aa,
          v = A.T.aa;
        h = h.Ia(function (a) {
          return g(a) ? L(a) : a;
        });
        f = h.next();
        if (null === f) return D.R;
        d(f) && b(a + "() not defined over QName");
        !c(f) || t(f) || r(f) || b(a + "() not defined over mixed duations");
        return D.l(
          k(h, f, function (a, c) {
            ((m(a) && u(c)) || (m(c) && u(a))) &&
              b("Cannot compare string with numeric");
            ((t(a) && !t(c)) || (r(a) && !r(c))) &&
              b("Cannot compare mixed durations");
            if (Q.ce(c)) return y(a) ? L(c) : c;
            if (Q.ce(a)) return y(c) ? L(a) : a;
            y(c) && !m(a)
              ? (a = L(a))
              : y(a) && !m(c)
              ? (c = L(c))
              : x(c) && !m(a)
              ? (a = w(a))
              : x(a) && !m(c) && (c = w(c));
            l(c) && m(a) ? (c = v(c)) : l(a) && m(c) && (a = v(a));
            try {
              return e(p(a, c)) ? a : c;
            } catch (Z) {
              throw (
                (Z instanceof q &&
                  "XPTY0004" === Z.code &&
                  (Z.code = "FORG0006"),
                Z)
              );
            }
          })
        );
      };
    }
    function v(a, b) {
      var e = a[0].next();
      if (null === e) return D.R;
      if ("timezone" === b) return null === e.zb ? D.R : D.l(A.ac.Bl(e.zb));
      if ("seconds" === b)
        return (
          (e = e.proxy()),
          D.bk(e.getUTCSeconds() + e.getUTCMilliseconds() / 1e3)
        );
      e = e.proxy()[b]();
      "getUTCMonth" === b && e++;
      return D.Vb(e);
    }
    function w(a, b) {
      var e = a[0].next();
      return null === e
        ? D.R
        : 5 !== b
        ? D.Vb(e.gk()[b] * e.nk())
        : D.bk(e.gk()[b] * e.nk());
    }
    function z(a, b, c) {
      function e(a, e) {
        return D.l(C.type[b].Sb(a, e));
      }
      var d = a[0].next();
      if (!d) return D.R;
      c = c.fixed.md.getTimezoneOffset();
      if (a[1]) {
        var f = a[1].next();
        a = null !== f ? f.wb / 6e4 : null;
        if (null !== a && (-840 > a || 840 < a))
          throw new q("timezone out of bounds " + f, "FODT0003");
      } else a = -c;
      f = d.zb;
      if (null === f && null === a) return D.l(d);
      if (null === f && null !== a) return e(d.uj(-c - a).ub, a);
      if (null !== f && null === a) return e(d.uj(c + f).ub, null);
      if (null !== f && null !== a) return e(d.ub, a);
    }
    function t(a, b, c, d) {
      var e = a[1].expand(),
        f = a[2].expand()[0];
      f instanceof nb.gb ||
        B.ra(
          "fold-" +
            (d ? "left" : "right") +
            "() function argument not instance of XdmFunction"
        );
      a = a[0].expand();
      d || (a = a.reverse());
      a.forEach(function (a) {
        e = f.evaluate(d ? [e, [a]] : [[a], e], b, c).expand();
      });
      return D.K(e);
    }
    var g = null,
      K = null,
      A = C.O,
      x = G.Ab;
    return {
      abs: function (a) {
        a = a[0].next();
        return null === a ? D.R : D.l(a.abs());
      },
      "accumulator-after": function (a, c, d) {
        a = b(a[0], c, d, "XTDE3340");
        return D.K(yb.mn(d, a, c.lb(), c));
      },
      "accumulator-before": function (a, c, d) {
        a = b(a[0], c, d, "XTDE3340");
        return D.K(yb.nn(d, a, c.lb(), c));
      },
      "adjust-date-to-timezone": function (a, b) {
        return z(a, "date", b);
      },
      "adjust-dateTime-to-timezone": function (a, b) {
        return z(a, "dateTime", b);
      },
      "adjust-time-to-timezone": function (a, b) {
        return z(a, "time", b);
      },
      "analyze-string": function (a, b) {
        var e = m(a[0]),
          c = b.wa.createDocumentFragment(),
          d = F.cb,
          f = b.wa.createElementNS(d, "analyze-string-result");
        c.appendChild(f);
        if ("" === e) return D.l(f);
        c = a[1].next().toString();
        var h = a[2] ? a[2].next().toString() : "";
        Bb.vj(e, c, h, !1, !1).forEach(function (a) {
          if (a.Ie) {
            a = a.groups;
            var e = b.wa.createElementNS(d, "match");
            var c = 0;
            for (var h = 1; h < a.length; h++)
              if (a[h]) {
                var p = a[0].indexOf(a[h], c);
                p > c &&
                  ((c = b.wa.createTextNode(a[0].substring(c, p))),
                  e.appendChild(c));
                c = b.wa.createElementNS(d, "group");
                c.setAttribute("nr", h);
                c.appendChild(b.wa.createTextNode(a[h]));
                e.appendChild(c);
                c = p + a[h].length;
              }
            c < a[0].length &&
              ((c = b.wa.createTextNode(a[0].substring(c, p))),
              e.appendChild(c));
          } else (e = b.wa.createElementNS(d, "non-match")), (c = b.wa.createTextNode(a.T)), e.appendChild(c);
          f.appendChild(e);
        });
        return D.l(f);
      },
      apply: function (a, b, c) {
        var e = b.fixed.ya,
          d = a[0].next();
        a = a[1].next();
        var f = a.value;
        if (d instanceof nb.gb) return d.evaluate(f, b, c);
        b = e.Wd(a.value[0][0]).next();
        d instanceof mb
          ? (b = A.numeric.matches(b) ? b.J() : A.za.aa(b).J())
          : d instanceof cb ||
            B.ra(
              "Target of apply() is neither map(*) nor array(*) nor function(*): actual value " +
                B.oa(d)
            );
        return D.K(d.get(b));
      },
      "available-environment-variables": function () {
        return D.R;
      },
      "available-system-properties": function () {
        var a = [],
          b = {
            version: "3.0",
            vendor: "Saxonica",
            "vendor-url": "http://www.saxonica.com/",
            "product-name": "Saxon-JS",
            "product-version": "2.0",
            "is-schema-aware": "no",
            "supports-serialization": "yes",
            "supports-backwards-compatibility": "yes",
            "supports-namespace-axis": "yes",
            "supports-streaming": "no",
            "supports-dynamic-evaluation": "yes",
            "supports-higher-order-functions": "yes",
            "xpath-version": "3.1",
            "xsd-version": "1.1",
          },
          c;
        for (c in b) b.hasOwnProperty(c) && a.push(A.X.xa("xsl", F.Ve, c));
        return D.K(a);
      },
      avg: function (a, b) {
        var e = a[0].Ia(b.fixed.ya.Im),
          c = e.next();
        if (null === c) return D.R;
        c = { sk: c, count: 1 };
        var d = Pa["a+a"];
        try {
          var f = k(e, c, function (a, b) {
            return { sk: d(b.sk, a), count: b.count + 1 };
          });
          return D.l(Pa["a/a"](f.sk, A.Ma.fa(f.count)));
        } catch (O) {
          throw new q(
            "Input to avg() contains a mix of numeric and non-numeric values ",
            "FORG0006"
          );
        }
      },
      "base-uri": function (a) {
        return a[0].Ia(function (a) {
          a = G.baseURI(a);
          return null === a ? null : A.kc.g(a);
        });
      },
      boolean: function (a, b) {
        return D.ka(b.fixed.ya.dg(a[0]));
      },
      ceiling: function (a) {
        a = a[0].next();
        return D.l(null === a ? null : a.yj());
      },
      "codepoint-equal": function (a) {
        var b = a[0].next();
        a = a[1].next();
        return null === b || null === a
          ? D.R
          : D.ka(b.toString() === a.toString());
      },
      "codepoints-to-string": function (a) {
        return D.ua(
          Ma.ld(
            a[0].expand().map(function (a) {
              return a.J();
            })
          )
        );
      },
      "collation-key": function (a, b, c) {
        var e = a[0].next();
        a = Q.sd(c, a[1], "collationKey", b);
        return D.l(A.Yk.Nn(a(e.value)));
      },
      collection: function (a, b, c) {
        var e = b.fixed.ya,
          d = b.fixed.options.hl;
        if (d && "function" === typeof d) {
          var f = null;
          a[0] &&
            ((a = a[0].next()),
            null !== a && (f = Da.$c(a.toString(), e.yb(c, b))));
          d = f ? d(f) : d();
          if ("undefined" === typeof d)
            throw new q(
              "No available collection for supplied URI: " + f,
              "FODC0002",
              c
            );
          d = e.Ob(d);
          b = b.fixed.Ch;
          if (null !== b) for (c = 0; c < d.length; c++) d[c] = b(d[c]);
          return Array.isArray(d) ? D.K(d) : D.l(d);
        }
        if (a[0])
          throw new q(
            "Unknown collection (no collectionFinder supplied)",
            "FODC0002",
            c
          );
        return D.R;
      },
      compare: function (a, b, c) {
        var e = a[0].next(),
          d = a[1].next();
        if (null === e || null === d) return D.R;
        a = Q.sd(c, a[2], "compare", b);
        return D.Vb(a(e.value, d.value));
      },
      concat: function (a) {
        return D.ua(
          a
            .map(function (a) {
              a = a.next();
              return null === a ? "" : A.T.aa(a);
            })
            .join("")
        );
      },
      contains: function (a, b, c) {
        var e = m(a[0]),
          d = m(a[1]);
        a = Q.sd(c, a[2], "contains", b);
        return D.ka(a(e, d));
      },
      "contains-token": function (a, b, c) {
        function e(a) {
          return f(a, d);
        }
        var d = m(a[1]);
        d = Na.trim(d);
        if ("" === d) return D.ka(!1);
        for (var f = Q.sd(c, a[2], "equals", b); null !== (b = a[0].next()); )
          if (
            0 <=
            b
              .toString()
              .split(/[ \n\r\t]+/)
              .findIndex(e)
          )
            return D.ka(!0);
        return D.ka(!1);
      },
      "copy-of": function (a, b, c) {
        var e = Cb.ae(b),
          d = Bb.yf(e);
        a[0].sa(function (a) {
          return Bb.Oi(a, b, d, c, !0, !0);
        });
        d.close();
        return e.rg();
      },
      count: function (a) {
        return D.Vb(a[0].count());
      },
      "current-date": function (a, b) {
        return D.l(A.nd.Sb(b.fixed.md, -b.fixed.md.getTimezoneOffset()));
      },
      "current-dateTime": function (a, b) {
        return D.l(A.cg.Sb(b.fixed.md, -b.fixed.md.getTimezoneOffset()));
      },
      "current-group": function () {
        throw new q(
          "The current-group() function cannot be invoked dynamicaly",
          "XTDE1061"
        );
      },
      "current-grouping-key": function () {
        throw new q(
          "The current-grouping-key() function cannot be invoked dynamicaly",
          "XTDE1071"
        );
      },
      "current-merge-group": function (a, b) {
        if (null === b.sc)
          throw new q("There is no current merge group", "XTDE3480");
        if (a[0]) {
          var e = a[0].next().value,
            c = b.sc.groups[e];
          if (c) return D.K(c);
          throw new q("Unknown merge source " + e, "XTDE3490");
        }
        return D.K(b.sc.items);
      },
      "current-merge-key": function (a, b) {
        if (null === b.sc)
          throw new q("There is no current merge group", "XTDE3510");
        return D.K(b.sc.keys);
      },
      "current-output-uri": function (a, b) {
        var e = b.ko();
        return null == e || "function" === b.Ja ? D.R : D.l(e);
      },
      "current-time": function (a, b) {
        return D.l(A.time.Sb(b.fixed.md, -b.fixed.md.getTimezoneOffset()));
      },
      data: function (a, b) {
        return a[0].Ya(b.fixed.ya.Wd);
      },
      dateTime: function (a) {
        var b = a[0].next();
        a = a[1].next();
        if (null === b || null === a) return D.R;
        var e = "";
        if (null !== b.zb)
          if (null === a.zb) e = b.Xi();
          else if (b.zb !== a.zb)
            throw new q("timezones are incompatible ", "FORG0008");
        return D.l(
          A.dateTime.g(b.toString().substring(0, 10) + "T" + a.toString() + e)
        );
      },
      "day-from-date": function (a) {
        return v(a, "getUTCDate");
      },
      "day-from-dateTime": function (a) {
        return v(a, "getUTCDate");
      },
      "days-from-duration": function (a) {
        return w(a, 2);
      },
      "deep-equal": function (a, b, c) {
        b = Q.sd(c, a[2], "equals", b);
        return D.ka(vb.Cj(a[0], a[1], b));
      },
      "default-collation": function () {
        return D.ua(Q.ag);
      },
      "default-language": function () {
        return D.l(A.language.g("en"));
      },
      "distinct-values": function (a, b, c) {
        b = Q.ri(c, a[1], b);
        var e = Q.Wi(b);
        return a[0].filter(function (a) {
          if (e.Xa(a)) return !1;
          e.Ta(a, !0);
          return !0;
        });
      },
      doc: function (a, b, c) {
        a = Ab.Uk(a, b, c);
        if (null === a) return D.l(null);
        try {
          var e = Ab.ve(a, b),
            d = b.fixed.Ch;
          d && (e = d(e));
          return D.l(e);
        } catch (L) {
          throw L;
        }
      },
      "doc-available": function (a, b, c) {
        var e = Ab.Uk(a, b, c);
        return null === e
          ? D.ka(!1)
          : Ab.pm(function () {
              Ab.ve(e, b);
            });
      },
      document: function (a, b, c) {
        var e = b.fixed.ya,
          d;
        if (a[1]) {
          var f = G.baseURI(a[1].next());
          if (!f)
            throw new q(
              "No base URI available for second argument of document()",
              "XTDE1162"
            );
        }
        f || (d = e.yb(c, b));
        var h = b.fixed.Ch;
        return a[0].Ya(function (a) {
          var c = f ? f : G.da(a) ? G.baseURI(a) : d;
          return e.Wd(a).Ia(function (a) {
            if (null === c)
              throw new q("No base URI for document('" + a + "')", "XTDE1162");
            a = Ab.ve(Da.$c(a.toString(), c), b);
            null !== h && (a = h(a));
            return a;
          });
        });
      },
      "document-uri": function (a) {
        a = a[0].next();
        return null !== a && 9 === a.nodeType && a._saxonDocUri
          ? D.l(A.kc.g(a._saxonDocUri))
          : D.R;
      },
      "element-available": function (a, c, d) {
        a = b(a[0], c, d, "XTDE1440", "##local").split("}");
        if ((c = "http://www.w3.org/1999/XSL/Transform" === a[0].substring(2)))
          null == K && (K = Da.Qi("elements")), K[a[1]] || (c = !1);
        return D.ka(c);
      },
      "element-with-id": function (a, b) {
        var e = m(a[0]);
        b.Wc("XPDY0002", "element-with-id()");
        return D.l(G.be(b.lb()).getElementById(e));
      },
      empty: function (a) {
        return D.ka(null === a[0].next());
      },
      "encode-for-uri": function (a) {
        a = encodeURIComponent(m(a[0])).replace(/[!'()*]/g, function (a) {
          return "%" + a.charCodeAt(0).toString(16).toUpperCase();
        });
        return D.ua(a);
      },
      "ends-with": function (a, b, c) {
        var e = m(a[0]),
          d = m(a[1]);
        a = Q.sd(c, a[2], "endsWith", b);
        return D.ka(a(e, d));
      },
      "environment-variable": function () {
        return D.R;
      },
      error: function (a) {
        if (void 0 === a[0]) throw new q("fn:error() invoked", "FOER0000");
        var b = a[0].next();
        b = b ? b.ha() : "FOER0000";
        var e = a[1] ? m(a[1]) : "";
        b = new q(e, b);
        a[2] && (b.Rn = a[2].expand());
        throw b;
      },
      "escape-html-uri": function (a) {
        return D.ua(
          P.escape(m(a[0]), function (a) {
            return 32 > a || 126 < a;
          })
        );
      },
      "exactly-one": function (a) {
        a = a[0].expand();
        if (1 !== a.length)
          throw new q(
            "Required length 1, actual length " + a.length,
            "FORG0005"
          );
        return D.l(a[0]);
      },
      exists: function (a) {
        return D.ka(null !== a[0].next());
      },
      false: function () {
        return D.ka(!1);
      },
      filter: function (a, b, c) {
        var e = a[1].expand()[0];
        e instanceof nb.gb ||
          B.ra("filter() function object not instance of XdmFunction");
        return a[0].Ia(function (a) {
          var d = e.evaluate([[a]], b, c).expand();
          if ((Array.isArray(d) && 1 !== d.length) || !A.Ea.matches(d[0]))
            throw new q(
              "Wrong type for function result in filter(). Expecting xs:boolean, supplied value is " +
                B.oa(d),
              "XPTY0004",
              c
            );
          if (d[0].value) return a;
        });
      },
      floor: function (a) {
        return a[0].Ia(function (a) {
          return a.floor();
        });
      },
      "fold-left": function (a, b, c) {
        return t(a, b, c, !0);
      },
      "fold-right": function (a, b, c) {
        return t(a, b, c, !1);
      },
      "format-date": function (a) {
        d("format-date", a);
        var b = a[0].next();
        return null === b
          ? D.R
          : a[2]
          ? D.ua(
              Db.fg(
                "date",
                b,
                a[1].next().toString(),
                a[2].next(),
                a[3].next(),
                a[4].next()
              )
            )
          : D.ua(Db.fg("date", b, a[1].next().toString()));
      },
      "format-dateTime": function (a) {
        d("format-dateTime", a);
        var b = a[0].next();
        return null === b
          ? D.R
          : a[2]
          ? D.ua(
              Db.fg(
                "dateTime",
                b,
                a[1].next().toString(),
                a[2].next(),
                a[3].next(),
                a[4].next()
              )
            )
          : D.ua(Db.fg("dateTime", b, a[1].next().toString()));
      },
      "format-integer": function (a) {
        var b = a[0].next();
        return null === b ? D.ua("") : D.ua(Db.Mj(b, a[1].next().toString()));
      },
      "format-number": function (a, c, d) {
        var e = c.fixed.ya,
          f = a[2] ? b(a[2], c, d, "FODF1280") : "Q{}";
        d = e.ah(d, c).Vc[null !== f ? f : "Q{}"];
        if (!d) throw new q("Unknown decimal format " + f, "FODF1280");
        f = a[0].next();
        f = null === f ? Number.NaN : f.Jg().value;
        return D.ua(Db.ao(f, a[1].next().toString(), d, c));
      },
      "format-time": function (a) {
        d("format-time", a);
        var b = a[0].next();
        return null === b
          ? D.R
          : a[2]
          ? D.ua(
              Db.fg(
                "time",
                b,
                a[1].next().toString(),
                a[2].next(),
                a[3].next(),
                a[4].next()
              )
            )
          : D.ua(Db.fg("time", b, a[1].next().toString()));
      },
      "for-each": function (a, b, c) {
        var e = b.fixed.ya,
          d = a[1].expand()[0];
        if (d instanceof nb.gb)
          return a[0].Ya(function (a) {
            return d.evaluate([[a]], b, c);
          });
        if (d instanceof cb || d instanceof mb)
          return a[0].Ya(function (a) {
            a = e.Wd(a).next();
            d instanceof mb &&
              (a = A.numeric.matches(a) ? a.J() : A.za.aa(a).J());
            return D.K(d.get(a));
          });
        B.ra(
          "for-each() function object not instance of XdmFunction | XdmArray | XdmMap"
        );
      },
      "for-each-pair": function (a, b, c) {
        var e = a[2].expand();
        if (1 !== e.length)
          throw new q(
            "for-each-pair() must have exactly one function item as the thIrd argument. Supplied length " +
              e.length,
            "XPTY0004",
            c
          );
        e = e[0];
        e instanceof nb.gb ||
          B.ra("Function object not instance of XdmFunction");
        var d = [],
          f = a[0];
        a = a[1];
        for (var h = f.next(), g = a.next(); h && g; )
          (d = d.concat(e.evaluate([[h], [g]], b, c).expand())),
            (h = f.next()),
            (g = a.next());
        return D.K(d);
      },
      "function-arity": function (a) {
        a = a[0].next();
        return D.l(A.Ma.fa(a instanceof cb || a instanceof mb ? 1 : a.arity));
      },
      "function-available": function (e, c, d) {
        var f = !1,
          h = b(e[0], c, d, "XTDE1400", F.cb),
          p = e[1] ? e[1].next().J() : -1,
          k = c.fixed.qb;
        Object.keys(k).forEach(function (b) {
          b = k[b];
          b.name === h &&
            b.actor &&
            "function" === b.actor.N &&
            (0 > p
              ? (f = !0)
              : ((b = a(b.actor, "arg").length), p === b && (f = !0)));
        });
        f ||
          ((e = A.X.rb(h)),
          null == g && (g = Da.Qi("functions")),
          (f =
            (c = g[e.uri]) && c[e.local]
              ? "concat" === e.local && e.uri === F.cb && (-1 === p || 2 <= p)
                ? !0
                : 0 <= p
                ? 0 <= c[e.local].indexOf(p)
                : !0
              : !1));
        return D.ka(f);
      },
      "function-lookup": function (a, b, c) {
        var e = a[0].next();
        a = a[1].next().J();
        var d = wb.find("SaxonJS").XPath,
          f = b.ja(!0);
        f.Tb = !0;
        d = d.getFnSignature(e, a, f);
        if (!d) return D.R;
        b = d.isUserFunction
          ? new nb.jj(d, b)
          : e.uri === F.Rd
          ? new nb.dj(d, e, c)
          : new nb.Ih(d, e, a, c, b);
        return D.l(b);
      },
      "function-name": function (a) {
        a = a[0].next();
        if (!(a instanceof nb.gb))
          throw new q(
            "Input to function-name() is not an XdmFunction ",
            "XXXX9999"
          );
        return a.getName() && a.getName().uri !== F.wk ? D.l(a.getName()) : D.R;
      },
      "generate-id": function (a) {
        a = a[0].next();
        return D.ua(a ? l(a) : "");
      },
      "has-children": function (a) {
        return D.ka(null !== x.pb(a[0].next()).next());
      },
      head: function (a) {
        return D.l(a[0].next());
      },
      "hours-from-dateTime": function (a) {
        return v(a, "getUTCHours");
      },
      "hours-from-duration": function (a) {
        return w(a, 3);
      },
      "hours-from-time": function (a) {
        return v(a, "getUTCHours");
      },
      id: function (a, b) {
        var e = "";
        a[0].sa(function (a) {
          e += a.value.trim() + " ";
        });
        var c = a[1] ? a[1].next() : G.be(b.lb());
        if (!G.da(c))
          throw new q("Context item is not a node for fn:id()", "XPTY0004");
        9 !== c.nodeType && (c = G.be(c));
        var d,
          f = [],
          h = e.trim().split(/\s+/);
        if (9 === c.nodeType) {
          h = sa(h);
          for (var g = h.next(); !g.done; g = h.next())
            (d = c.getElementById(g.value)) && f.push(d);
          return G.jg(D.K(f));
        }
        if (11 === c.nodeType) {
          for (c = x.li(c); null !== (d = c.next()); )
            1 === d.nodeType &&
              (h.includes(d.getAttributeNS(F.xml, "id")) ||
                h.includes(d.getAttribute("id"))) &&
              f.push(d);
          return G.jg(D.K(f));
        }
        return D.R;
      },
      idref: function () {
        return D.R;
      },
      "implicit-timezone": function (a, b) {
        return D.l(A.ac.Bl(-b.fixed.md.getTimezoneOffset()));
      },
      "index-of": function (a, b, c) {
        var e = D.Da(a[0]),
          d = a[1].next();
        a = Q.sd(c, a[2], "equals", b);
        var f = Q.Pn(a);
        return e.Ia(function (a) {
          try {
            return f(a, d) ? A.Ma.fa(e.position) : null;
          } catch (fa) {
            return null;
          }
        });
      },
      innermost: function (a, b, c) {
        var e = [];
        (b.fixed.ya.Gc(c, "p") ? a[0] : G.jg(a[0])).sa(function (a) {
          0 < e.length &&
            x.jf(a).some(function (a) {
              return a === e[e.length - 1];
            }) &&
            e.pop();
          e.push(a);
        });
        return D.K(e);
      },
      "in-scope-prefixes": function (a) {
        a = a[0].next();
        return D.K(
          G.De(a).map(function (a) {
            return A.T.g(a.prefix);
          })
        );
      },
      "insert-before": function (a) {
        var b = a[1].next().value,
          e = a[2],
          c = D.Da(a[0]);
        return 1 > b
          ? D.Rc([e, c])
          : b > c.zi()
          ? D.Rc([c, e])
          : c.Ya(function (e) {
              return c.position === b ? D.Rc([a[2], D.l(e)]) : D.l(e);
            });
      },
      "iri-to-uri": function (a) {
        return D.ua(
          P.escape(m(a[0]), function (a, b) {
            return 32 >= a || 126 < a || /[<>"{}|\\^`]/.test(b);
          })
        );
      },
      "json-doc": function (a, b, c) {
        c = Ab.Zh(a, b, c);
        if (!c) return D.R;
        c = Ab.Xn(c, b);
        a = a[1] ? a[1].next() : null;
        return D.l(zb.fk(c, a, b));
      },
      "json-to-xml": function (a, b, c) {
        var e = b.fixed.ya,
          d = a[0].next();
        if (null === d) return D.R;
        a = a[1] ? a[1].next() : null;
        d = zb.lp(d.toString(), a, b);
        a = b.wa.createDocumentFragment();
        a.appendChild(d);
        a._saxonBaseUri = e.yb(c, b);
        return D.l(a);
      },
      key: function (a, c, d) {
        function e(a) {
          a = z ? A.T.aa(a) : a;
          return v.Xa(a)
            ? ((a = D.K(v.get(a))),
              t === r
                ? a
                : a.filter(function (a) {
                    return (
                      null !==
                      x
                        .Ib(a)
                        .filter(function (a) {
                          return a === r;
                        })
                        .next()
                    );
                  }))
            : D.R;
        }
        function f(a) {
          return {
            visibility: "PRIVATE",
            Rb: a,
            im: k,
            actor: a,
            ci: a.binds.split(" ").map(function (a) {
              return parseInt(a, 10);
            }),
          };
        }
        var h = c.fixed.ya,
          g = b(a[0], c, d, "XTDE1260"),
          k = h.ah(d, c),
          p = k.keys[g];
        if (!p) throw new q("Unknown key " + g, "XTDE1260");
        var l = p.tk,
          m = h.Gc(p.tg[0], "c"),
          t;
        if (a[2]) {
          var r = a[2].next();
          G.da(r) && (t = G.be(r));
        } else {
          var w = c.lb();
          G.da(w) && (t = r = G.be(w));
        }
        if (!t || (9 !== t.nodeType && 11 !== t.nodeType))
          throw new q("No containing document for key()", "XTDE1270", d);
        t._saxonIndexes || ((t._saxonIndexes = {}), (t._saxonIndexesBC = {}));
        d = t._saxonIndexes;
        var v = d[l];
        if ("under construction" === v)
          throw new q("Definition of key " + g + " is circular", "XTDE0640");
        var z = !1;
        if (v) z = t._saxonIndexesBC[l];
        else {
          g = Q.ri(p.tg[0], null, c);
          v = Q.Wi(g, m);
          d[l] = "under construction";
          g = function (a) {
            return D.Rc([x.self(a), x.Hc(a), x.ob(a)]);
          };
          w = function (a) {
            return D.Rc([x.self(a), x.ob(a)]);
          };
          for (
            var K = function (a) {
                return D.Rc([x.self(a), x.Hc(a)]);
              },
              Ba = {},
              ja = 0;
            ja < p.tg.length;
            Ba = { We: Ba.We, aj: Ba.aj }, ja++
          ) {
            var aa = p.tg[ja],
              ra = /b/.test(aa.flags);
            z = z || ra;
            var Z = void 0;
            Z = aa.C[0];
            Ba.We = c.ja(!0);
            Ba.We.La = f(aa);
            Ba.We.focus = D.jc(t);
            if ("p.nodeSet" === Z.N) Z = h.evaluate(Z.C[0], Ba.We);
            else {
              Ba.aj = xb.Df(Z);
              var U = (function (a) {
                return function (b) {
                  a.We.focus = D.jc(t);
                  return a.aj(b, a.We);
                };
              })(Ba);
              Z = x.bh(t);
              var X = h.Gc(aa, "a"),
                T = h.Gc(aa, "n");
              if (X || T) Z = Z.Ya(X && T ? g : X ? w : K);
              Z = Z.filter(U);
            }
            U = aa.C[1];
            X = c.ja(!0);
            X.La = f(aa);
            X.Ja = "key";
            for (aa = void 0; null !== (aa = Z.next()); ) {
              X.focus = D.jc(aa);
              T = h.evaluate(U, X);
              var oa = function (a, b) {
                v.Xa(a)
                  ? 0 > v.get(a).indexOf(b) &&
                    (v.get(a).push(b), 1 < p.tg.length && v.get(a).sort(G.qc))
                  : v.Ta(a, [b]);
              };
              if (m) oa(T.expand(), aa);
              else
                for (var ka = void 0; null !== (ka = T.next()); )
                  Q.ce(ka) || (ra && (ka = A.T.aa(ka)), oa(ka, aa));
            }
          }
          d[l] = v;
          t._saxonIndexesBC[l] = z;
        }
        a = a[1];
        return m ? e(a.expand()) : a.Ya(e);
      },
      lang: function (a, b) {
        var e = a[1] ? a[1].next() : b.lb();
        if (!e) throw new q("No context item for lang()", "XPDY0002");
        if (!G.da(e))
          throw new q("Context item is not a node in lang()", "XPTY0004");
        var c = m(a[0]).toLowerCase();
        e = x
          .Ib(e)
          .filter(function (a) {
            return 1 === a.nodeType && a.hasAttribute("xml:lang");
          })
          .next();
        if (!e) return D.ka(!1);
        e = e.getAttribute("xml:lang").toLowerCase();
        c =
          c === e ||
          (e.length > c.length + 1 &&
            e.substring(0, c.length) === c &&
            "-" === e.charAt(c.length));
        return D.ka(c);
      },
      last: function (a, b) {
        b.Wc("XPDY0002", "last()");
        return D.Vb(b.focus.zi());
      },
      "load-xquery-module": function () {
        throw new q("No XQuery processor available", "FOQM0006");
      },
      "local-name": function (a) {
        a = G.ma(a[0].next());
        return D.ua(a ? a.local : "");
      },
      "local-name-from-QName": function (a) {
        a = a[0].next();
        return null === a ? D.R : D.l(C.type.NCName.g(a.local));
      },
      "lower-case": function (a) {
        return D.ua(m(a[0]).toLowerCase());
      },
      matches: function (a) {
        var b = m(a[0]),
          e = a[1].next().toString();
        a = a[2] ? a[2].next().toString() : "";
        if (!a.match(/^[smijxq]*$/))
          throw new q("Illegal flags for regular expression: " + a, "FORX0001");
        e = Na.wh(e, a, b);
        return D.ka(0 <= b.search(e));
      },
      max: r("max"),
      min: r("min"),
      "minutes-from-dateTime": function (a) {
        return v(a, "getUTCMinutes");
      },
      "minutes-from-duration": function (a) {
        return w(a, 4);
      },
      "minutes-from-time": function (a) {
        return v(a, "getUTCMinutes");
      },
      "month-from-date": function (a) {
        return v(a, "getUTCMonth");
      },
      "month-from-dateTime": function (a) {
        return v(a, "getUTCMonth");
      },
      "months-from-duration": function (a) {
        return w(a, 1);
      },
      name: function (a) {
        a = G.ma(a[0].next());
        return D.ua(a ? a.toString() : "");
      },
      "namespace-uri": function (a) {
        a = G.ma(a[0].next());
        return D.l(A.kc.g(a ? a.uri : ""));
      },
      "namespace-uri-for-prefix": function (a) {
        var b = m(a[0]);
        a = a[1].next();
        b = "xml" === b ? F.xml : a.lookupNamespaceURI("" === b ? null : b);
        return null !== b ? D.l(A.kc.g(b)) : D.R;
      },
      "namespace-uri-from-QName": function (a) {
        a = a[0].next();
        return null === a ? D.R : D.l(A.kc.g(a.uri));
      },
      nilled: function (a) {
        return (a = a[0].next()) && 1 === a.nodeType ? D.ka(!1) : D.R;
      },
      "node-name": function (a) {
        return D.l(G.ma(a[0].next()));
      },
      "normalize-space": function (a) {
        a = m(a[0]);
        return D.ua(Ma.dd(a));
      },
      "normalize-unicode": function (a) {
        if (String.prototype.normalize) {
          var b = m(a[0]);
          a = a[1] ? a[1].next().toString().toUpperCase().trim() : "NFC";
          if (["NFC", "NFD", "NFKC", "NFKD"].includes(a))
            return D.ua(b.normalize(a));
          if ("" === a) return D.ua(b);
        }
        throw new q(
          "normalize-unicode(): not supported on this Javascript platform",
          "FOCH0003"
        );
      },
      not: function (a, b) {
        return D.ka(!b.fixed.ya.dg(a[0]));
      },
      number: function (a) {
        return D.l(C.O.numeric.qh(a[0].next()));
      },
      "one-or-more": function (a) {
        a = D.fd(a[0]);
        if (null === a.Oa())
          throw new q("Required length >= 1, actual length zero", "FORG0004");
        return a;
      },
      outermost: function (a, b, c) {
        b = b.fixed.ya.Gc(c, "p");
        a = a[0];
        b || (a = G.jg(a));
        var e = null;
        return a.filter(function (a) {
          return null === e ||
            null ===
              x
                .jf(a)
                .filter(function (a) {
                  return a === e;
                })
                .next()
            ? ((e = a), !0)
            : !1;
        });
      },
      "parse-ietf-date": function (a) {
        return a[0].Ia(function (a) {
          function b(a) {
            return 1 === a.length ? "0" + a : a;
          }
          function e() {
            throw new q("Invalid IETF date/time " + a.toString(), "FORG0010");
          }
          var c = a.toString().trim().toLowerCase();
          c = c.replace(
            /^(monday|tuesday|wednesday|thursday|friday|saturday|sunday|mon|tue|wed|thu|fri|sat|sun),?\s+/,
            ""
          );
          if (/^[a-z]/.test(c)) {
            var d =
              /^([a-z]{3})(?:\s*-\s*|\s+)(\d\d\d?\d?)\s+([\d:.]+)\s*([a-z]+|[+\-]\d\d?:?(?:\d\d)?(?:\s*\(\s*[a-z]+\s*\))?)?\s+(\d+)$/;
            c = d.exec(c);
            if (null !== c) {
              var f = c[1];
              var h = c[2];
              var g = c[3];
              var k = c[4];
              var x = c[5];
            } else e();
          } else (d = /^(\d+)(?:\s*-\s*|\s+)([a-z]{3})(?:\s*-\s*|\s+)(\d\d\d?\d?)\s+([\d:.]+)\s*([a-z]+|[+\-]\d\d?:?(?:\d\d)?(?:\s*\(\s*[a-z]+\s*\))?)?$/), (c = d.exec(c)), null !== c ? ((h = c[1]), (f = c[2]), (x = c[3]), (g = c[4]), (k = c[5])) : e();
          2 === x.length && (x = "19" + x);
          f = "jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec".indexOf(
            f || "*"
          );
          0 > f && e();
          c = {
            ut: "Z",
            utc: "Z",
            gmt: "Z",
            est: "-05:00",
            edt: "-04:00",
            cst: "-06:00",
            cdt: "-05:00",
            mst: "-07:00",
            mdt: "-06:00",
            pst: "-08:00",
            pdt: "-07:00",
          };
          /^[0-9]:/.test(g) && (g = "0" + g);
          5 === g.length && (g += ":00");
          k &&
            ((k =
              /([a-z]+)|([+\-]\d\d?:?(?:\d\d)?)(?:\s*\(\s*([a-z]+)\s*\))?$/.exec(
                k
              )),
            ((!k[3] || k[3] in c) && (!k[1] || k[1] in c)) || e(),
            (k = k[1] ? k[1] : k[2]),
            /^[+\-][0-9]((:|$)|[0-9]{2}$)/.test(k) &&
              (k = k.substring(0, 1) + "0" + k.substring(1)),
            k in c
              ? (k = c[k])
              : 3 === k.length
              ? (k += ":00")
              : 4 === k.length
              ? (k += "00")
              : 5 === k.length &&
                (k = k.substring(0, 3) + ":" + k.substring(3)));
          h =
            x +
            "-" +
            b((f / 4 + 1).toString()) +
            "-" +
            b(h) +
            "T" +
            g +
            (k || "Z");
          try {
            return A.dateTime.g(h);
          } catch (ma) {
            throw new q(
              "''" + a.toString() + "'' is not a valid IETF date",
              "FORG0010"
            );
          }
        });
      },
      "parse-json": function (a, b) {
        var e = a[0].next();
        if (null === e) return D.R;
        var c = a[1] ? a[1].next() : null;
        return D.l(zb.fk(e.toString(), c, b));
      },
      "parse-xml": function (a, b, c) {
        a = a[0].next();
        if (null === a) return D.R;
        var e = b.fixed.ya;
        try {
          var d = Da.parseXmlFromString(a.toString());
          d._saxonBaseUri = e.yb(c, b);
          return D.l(d);
        } catch (L) {
          throw new q(L.message, "FODC0006");
        }
      },
      "parse-xml-fragment": function (a, b, c) {
        var e = b.fixed.ya;
        return a[0].Ia(function (a) {
          var d =
            /^<\?xml(?:\s+version\s*=\s*(['"])1.[0-9]+['"])?\s+encoding\s*=\s*(['"][A-Za-z](?:[A-Za-z0-9._\-])*)['"]\s*\?>/;
          a = a.toString();
          if (/^<\?xml/.test(a) && !d.test(a))
            throw new q(
              "Invalid XML header for a text declaration",
              "FODC0006"
            );
          a = a.replace(d, "");
          try {
            var f = Da.parseXmlFromString("<z>" + a + "</z>");
          } catch (Y) {
            throw new q(Y.message, "FODC0006");
          }
          var h = b.wa.createDocumentFragment();
          x.pb(f.documentElement).sa(function (a) {
            h.appendChild(a);
          });
          h._saxonBaseUri = e.yb(c, b);
          return h;
        });
      },
      path: function (a) {
        return a[0].Ia(function (a) {
          var b = "";
          x.Ib(a).sa(function (a) {
            function e(a) {
              return x.Oe(a).filter(function (b) {
                return a.nodeType === b.nodeType;
              });
            }
            switch (a.nodeType) {
              case 1:
                var c = G.ma(a);
                b =
                  "/" +
                  c.ha() +
                  "[" +
                  (1 +
                    e(a)
                      .filter(function (a) {
                        return G.ma(a).ia(c);
                      })
                      .count()) +
                  "]" +
                  b;
                break;
              case 3:
                b = "/text()[" + (1 + e(a).count()) + "]";
                break;
              case 8:
                b = "/comment()[" + (1 + e(a).count()) + "]";
                break;
              case 7:
                b =
                  "/processing-instruction(" +
                  a.target +
                  ")[" +
                  (1 +
                    e(a)
                      .filter(function (b) {
                        return a.target === b.target;
                      })
                      .count()) +
                  "]";
                break;
              case 2:
                b = "/@" + (0 > a.name.indexOf(":") ? a.name : G.ma(a).ha());
                break;
              case 13:
                b =
                  "/namespace::" +
                  ("" !== a.prefix
                    ? a.prefix
                    : "*[Q{" + F.cb + '}local-name()=""]');
            }
          });
          "" === b && (b = "/");
          return A.T.g(b);
        });
      },
      "prefix-from-QName": function (a) {
        return a[0].Ia(function (a) {
          return "" === a.prefix ? null : A.Dk.g(a.prefix);
        });
      },
      position: function (a, b) {
        b.Wc("XPDY0002", "position()");
        return D.Vb(b.focus.position);
      },
      QName: function (a) {
        var b = a[1].next().value,
          e = b.split(":"),
          c = 2 === e.length ? e[0] : "";
        a = m(a[0]);
        if ("" !== c && "" === a)
          throw new q("Prefix but no URI for QName()", "FOCA0002");
        if ((2 === e.length && "" === c) || ("" !== c && !Na.Yc(c)))
          throw new q(b + " not valid for QName()", "FOCA0002");
        b = 2 === e.length ? e[1] : e[0];
        if (!Na.Yc(b))
          throw new q(b + " not valid local name for QName()", "FOCA0002");
        return D.l(A.X.xa(c, a, b));
      },
      "random-number-generator": function (a, b) {
        var e = new cb();
        e.Ta(A.T.g("number"), [A.za.fa(Math.random())]);
        var c = A.X.xa("fn", F.cb, "random-number-generator"),
          d = wb.find("SaxonJS").XPath,
          f = d.getFnSignature(c, 0, b);
        c = new nb.Ih(f, c, 0, {}, b);
        e.Ta(A.T.g("next"), [c]);
        c = A.X.xa("saxon", F.Jc, "permute");
        f = b.ja();
        f.Tb = !0;
        d = d.getFnSignature(c, 1, f);
        d = new nb.Ih(d, c, 1, {}, b);
        e.Ta(A.T.g("permute"), [d]);
        return D.l(e);
      },
      "regex-group": function (a, b) {
        var e = a[0].next().J();
        try {
          return D.ua(b.focus.yh[e] || "");
        } catch (y) {
          return D.ua("");
        }
      },
      remove: function (a) {
        var b = a[1].next().J(),
          e = D.Da(a[0]);
        return e.filter(function () {
          return e.position !== b;
        });
      },
      replace: function (a) {
        var b = m(a[0]),
          e = a[3] ? a[3].next().toString() : "";
        if (!e.match(/^[smijxq]*$/))
          throw new q("Illegal flags for regular expression: " + e, "FORX0001");
        var c = 0,
          d = Na.wh(a[1].next().toString(), e + "g", null, function (a) {
            c = a;
          });
        if (d.test(""))
          throw new q(
            "Regular expression matches zero-length string",
            "FORX0003"
          );
        a = Na.Fn(a[2].next().toString(), e, c);
        return D.ua(b.replace(d, a));
      },
      "resolve-QName": function (a) {
        var b = a[1].next();
        return a[0].Ia(function (a) {
          try {
            return G.up(b, a.toString(), !0);
          } catch (y) {
            throw (
              (y instanceof q &&
                "FORG0001" === y.code &&
                (y.code = Na.Wl(a) ? "FONS0004" : "FOCA0002"),
              y)
            );
          }
        });
      },
      "resolve-uri": function (a, b, c) {
        var e = b.fixed.ya;
        b = a[1] ? a[1].next().toString() : e.yb(c, b);
        a = a[0].next();
        if (null === a) return D.R;
        b = b.replace(/^file:\/(?!\/)/, "file:///");
        a = a.toString();
        c = G.Bf(a);
        if (!c && !G.Bf(b))
          throw new q(
            "resolve-uri: invalid URI (base=" + b + ", relative=" + a + ")",
            "FORG0002"
          );
        if (!Da.Af() && /#/.test(b))
          throw new q(
            "Base URI " + b + " contains a fragment identifier",
            "FORG0002"
          );
        a = c ? a : Da.$c(a, b).toString();
        return D.l(A.kc.g(a));
      },
      reverse: function (a) {
        return D.K(a[0].expand().slice().reverse());
      },
      root: function (a) {
        return a[0]
          .Ya(function (a) {
            return x.Ib(a);
          })
          .filter(function (a) {
            return !G.hc(a);
          });
      },
      round: function (a) {
        return a[0].Ia(function (b) {
          return b.round(a[1] ? Math.min(a[1].next().value, 1e4) : 0);
        });
      },
      "round-half-to-even": function (a) {
        return a[0].Ia(function (b) {
          return b.Ri(a[1] ? Math.min(a[1].next().value, 1e4) : 0);
        });
      },
      "seconds-from-dateTime": function (a) {
        return v(a, "seconds");
      },
      "seconds-from-duration": function (a) {
        return w(a, 5);
      },
      "seconds-from-time": function (a) {
        return v(a, "seconds");
      },
      serialize: function (a, b) {
        function c(a) {
          a.method = "xml";
          a.indent = !1;
          a["omit-xml-declaration"] = !0;
        }
        var e = new Eb.pj(),
          d = {};
        if (a[1]) {
          var f = a[1].next();
          if (null === f) c(d);
          else if (G.da(f)) {
            if (!G.Ul(f))
              throw new q(
                "Second argument supplied to serialize() is wrong kind of node",
                "XPTY0004"
              );
            Eb.Ki(f, d, "XPTY0004");
          } else {
            if (!(f instanceof cb))
              throw new q(
                "Second argument supplied to serialize() does not match required type",
                "XPTY0004"
              );
            var h = function (a, b, c, e, h) {
              h = void 0 === h ? !1 : h;
              var g = C.O.T.g(a);
              if (f.Xa(g)) {
                var k = f.get(g);
                if (0 < k.length && P.isArray(k[0]))
                  if (c) {
                    var p = [];
                    k[0].flatten(function (a) {
                      return p.push(a);
                    });
                    k = p;
                  } else
                    throw new q(
                      "fn:serialize(): supplied value of " + g + " is invalid",
                      "XPTY0004"
                    );
                if (
                  (1 !== k.length && !c && !h) ||
                  !k.every(function (a) {
                    return b.matches(a);
                  })
                )
                  throw new q(
                    "fn:serialize(): supplied value of " + g + " is invalid",
                    "XPTY0004"
                  );
                d[a] = h && 0 === k.length ? null : e(c ? k : k[0]);
              }
            };
            "doctype-public doctype-system encoding item-separator json-node-output-method media-type method normalization-form version"
              .split(" ")
              .forEach(function (a) {
                return h(a, C.O.T, !1, function (a) {
                  return a.toString();
                });
              });
            "allow-duplicate-names byte-order-mark escape-uri-attributes include-content-type indent omit-xml-declaration undeclare-prefixes"
              .split(" ")
              .forEach(function (a) {
                return h(a, C.O.Ea, !1, function (a) {
                  return a.value;
                });
              });
            h(
              "standalone",
              C.O.Ea,
              !1,
              function (a) {
                return a.value;
              },
              !0
            );
            h("html-version", C.O.od, !1, function (a) {
              return a.J();
            });
            ["cdata-section-elements", "suppress-indentation"].forEach(
              function (a) {
                return h(a, C.O.X, !0, function (a) {
                  for (var b = "", c = 0; c < a.length; c++)
                    b += a[c].ha() + " ";
                  return b;
                });
              }
            );
            (function (a) {
              var b = C.O.T.g(a);
              if (f.Xa(b)) {
                var c = f.get(b);
                if (
                  1 !== c.length ||
                  !c.every(function (a) {
                    return a instanceof cb;
                  })
                )
                  throw new q(
                    "fn:serialize(): supplied value of " + b + " is invalid",
                    "XPTY0004"
                  );
                c = c[0];
                var e = function (a) {
                  return A.T.matches(a);
                };
                if (
                  !c.pf(e, e, function (a) {
                    return 1 === a;
                  })
                )
                  throw new q(
                    "fn:serialize(): supplied value of " + b + " is invalid",
                    "XPTY0004"
                  );
                b = P.rc(c, !0);
                c = { min: 0, max: 0, Wa: {} };
                for (var h in b)
                  if (b.hasOwnProperty(h)) {
                    if (1 < h.length)
                      throw new q(
                        "fn:serialize(): Keys in a character map must all be one-character strings. Found " +
                          h,
                        "SEPM0016"
                      );
                    e = h.codePointAt(0);
                    0 === c.min ? (c.min = e) : e < c.min && (c.min = e);
                    e > c.max && (c.max = e);
                    c.Wa[e] = b[h];
                  }
                d[a] = c;
              }
            })("use-character-maps");
          }
        } else c(d);
        Eb.um(a[0].expand(), d, e, b);
        return D.ua(e.toString());
      },
      snapshot: function (a, b, c) {
        return a[0].Ia(function (a) {
          function e(h) {
            if (0 < h.length) {
              var k = h.pop();
              Bb.xm(
                k,
                b,
                "cm",
                function () {
                  x.ob(k).sa(function (a) {
                    return f.append(a);
                  });
                  0 < h.length
                    ? e(h)
                    : (Bb.Oi(a, b, f, c, !0, !0), (g = d.Xd.lastChild));
                },
                f
              );
            }
          }
          var d = Cb.ae(b),
            f = Bb.yf(d);
          if (!G.hc(a))
            return Bb.Oi(a, b, f, c, !0, !0), f.close(), d.rg().next();
          f.tb();
          var h = x.jf(a).expand();
          if (0 < h.length) e(h);
          else {
            Bb.Oi(a, b, f, c, !0, !0);
            var g = d.Xd.lastChild;
          }
          f.hb();
          g || B.ra("snapshot: failed to find marked node");
          return g;
        });
      },
      sort: function (a, b, c) {
        var e = Q.ri(c, a[1], b),
          d = P.Wd;
        if (a[2]) {
          var f = a[2].next();
          d = function (a) {
            return f.evaluate([[a]], b, c);
          };
        }
        return D.K(
          a[0]
            .expand()
            .slice()
            .sort(function (b, c) {
              return a[1] ? vb.Ai(d(b), d(c), e) : vb.Ai(d(b), d(c));
            })
        );
      },
      "starts-with": function (a, b, c) {
        var e = m(a[0]),
          d = m(a[1]);
        a = Q.sd(c, a[2], "startsWith", b);
        return D.ka(a(e, d));
      },
      "static-base-uri": function (a, b, c) {
        return (a = b.fixed.ya.yb(c, b)) ? D.l(A.kc.g(a)) : D.R;
      },
      "stream-available": function () {
        return D.ka(!1);
      },
      string: function (a, b) {
        var c = b.fixed.ya,
          e = a[0].next();
        if (!e) return D.ua("");
        if (c.isArray(e) || c.isMap(e) || c.ng(e))
          throw new q("Input to string() is a function item ", "FOTY0014");
        return c.Wd(e).Ia(function (a) {
          return A.T.aa(a);
        });
      },
      "string-join": function (a) {
        for (
          var b = "", c = a[1] ? a[1].next().value : "", e, d = !0;
          null !== (e = a[0].next());

        )
          d || (b += c), (b += e.toString()), (d = !1);
        return D.ua(b);
      },
      "string-length": function (a) {
        return D.Vb(c(a[0]).length);
      },
      "string-to-codepoints": function (a) {
        return D.K(c(a[0]).map(A.Ma.fa));
      },
      subsequence: function (a) {
        return D.K(f(a[0].expand(), a[1], a[2]));
      },
      substring: function (a) {
        var b = c(a[0]);
        return D.ua(Ma.ld(f(b, a[1], a[2])));
      },
      "substring-after": function (a, b, c) {
        var e = "",
          d = m(a[0]),
          f = m(a[1]),
          h;
        -1 !== (h = Q.sd(c, a[2], "indexOf", b)(d, f)) &&
          (e = d.substring(h + f.length));
        return D.ua(e);
      },
      "substring-before": function (a, b, c) {
        var e = "",
          d = m(a[0]),
          f = m(a[1]),
          h;
        -1 !== (h = Q.sd(c, a[2], "indexOf", b)(d, f)) &&
          (e = d.substring(0, h));
        return D.ua(e);
      },
      sum: function (a, b) {
        var c = a[0].Ia(b.fixed.ya.Im),
          e = c.next();
        if (null === e) return 1 === a.length ? D.Vb(0) : a[1];
        try {
          return Pa["a+a"](e, e), D.l(k(c, e, Pa["a+a"]));
        } catch (u) {
          throw (
            (u instanceof q && "XPTY0004" === u.code && (u.code = "FORG0006"),
            u)
          );
        }
      },
      "system-property": function (a, c, d) {
        a = A.X.rb(b(a[0], c, d, "XTDE1390"));
        c = "";
        a.uri === F.Ve &&
          (c = {
            version: "3.0",
            vendor: "Saxonica",
            "vendor-url": "http://www.saxonica.com/",
            "product-name": "Saxon-JS",
            "product-version": "2.0",
            "is-schema-aware": "no",
            "supports-serialization": "yes",
            "supports-backwards-compatibility": "yes",
            "supports-namespace-axis": "yes",
            "supports-streaming": "no",
            "supports-dynamic-evaluation": "yes",
            "supports-higher-order-functions": "yes",
            "xpath-version": "3.1",
            "xsd-version": "1.1",
          }[a.local]);
        a.uri === F.Jc && (c = Da.Wn()[a.local]);
        return D.ua(c);
      },
      tail: function (a) {
        var b = D.Da(a[0]);
        return b.filter(function () {
          return 1 !== b.position;
        });
      },
      "timezone-from-date": function (a) {
        return v(a, "timezone");
      },
      "timezone-from-dateTime": function (a) {
        return v(a, "timezone");
      },
      "timezone-from-time": function (a) {
        return v(a, "timezone");
      },
      tokenize: function (a) {
        var b = m(a[0]);
        a[1] || (b = Ma.dd(b));
        if ("" === b) return D.R;
        var c = a[1] ? a[1].next().toString() : "[ \\n\\r\\t]+";
        c = Bb.vj(b, c, a[2] ? a[2].next().toString() : "", !1, !0);
        b = a[1] && c[0].Ie;
        var e = c[c.length - 1];
        a = a[1] && e.Ie;
        c = c
          .filter(function (a) {
            return !a.Ie;
          })
          .map(function (a) {
            return a.T;
          });
        b && c.unshift(A.T.g(""));
        a && c.push(A.T.g(""));
        return D.K(c);
      },
      trace: function (a) {
        var b = a[0].expand();
        B.Gb(
          "fn:trace: " +
            (2 === a.length ? a[1].next().toString() + ": " : "") +
            B.oa(b),
          1
        );
        return D.K(b);
      },
      transform: function (b, c, d) {
        function e(a) {
          a = A.T.g(a);
          return w.get(a);
        }
        function f(a, b) {
          throw new q(a, void 0 === b ? "FOXT0002" : b);
        }
        function h(a, b, c) {
          c =
            void 0 === c
              ? function (a) {
                  return a;
                }
              : c;
          (a = e(a)) && (a = D.K(a).Oa()) && (v[b] = c(a));
        }
        function g(a) {
          return function (b) {
            b instanceof cb ||
              f(
                "The value of the option " +
                  a +
                  " in fn:transform() must be of type map(xs:QName,item()*)"
              );
            if (
              b.pf(
                function (b) {
                  A.X.matches(b) ||
                    f(
                      "The keys of the " +
                        a +
                        " option in fn:transform() must be of type xs:QName. Supplied value:" +
                        b.toString()
                    );
                  return !0;
                },
                function () {
                  return !0;
                },
                function () {
                  return !0;
                }
              )
            )
              return b;
          };
        }
        function k(a, b) {
          h(a, b, g(a));
        }
        function p(a) {
          a.C &&
            a.C.forEach(function (b) {
              b.parentNode = a;
              p(b);
            });
        }
        function x(a, b, c) {
          if (!t.N)
            throw new q(
              "No XSLT processor is available to support fn:transform(). If using SaxonJS.min.js, it does not contain an XSLT compiler ",
              "FOXT0001",
              d
            );
          var e = {
              stylesheetParams: new cb(),
              tunnelParams: {},
              functionParams: {},
              deliverResultDocument: {},
              isDynamicStylesheet: !0,
              destination: "application",
              initialMode: "compile-complete",
              templateParams: { "Q{}options": { noXPath: !1 } },
            },
            f;
          for (f in b)
            "compiler.options" === f
              ? (e.tunnelParams["Q{}compiler.options"] = b[f])
              : (e.templateParams["Q{}options"][f] = b[f]);
          e.stylesheetParams.Ta(C.O.X.xa("", "", "staticParameters"), [c]);
          e.stylesheetFileName = "file:///compiler.sef";
          e.outputProperties = {};
          p(t);
          b = l.checkOptions(e);
          l.internalTransform(t, a, b);
          return b.principalResult;
        }
        var l = wb.find("SaxonJS"),
          m = c.fixed.ya,
          t = Da.Qi("compiler"),
          r = !1,
          w = b[0].next(),
          v = {
            stylesheetParams: new cb(),
            templateParams: new cb(),
            tunnelParams: new cb(),
            functionParams: {},
            outputProperties: {},
            isDynamicStylesheet: !0,
            language: "XSLT",
            messages: [],
            resultDocuments: {},
            resultForm: "xdm",
          };
        if ((b = e("requested-properties")) && b[0]) {
          var z = function (a, b) {
            f(
              "No processor with property " +
                a.ha() +
                "=" +
                b +
                "() available for fn:transform()",
              "FOXT0001"
            );
          };
          (!(1 < b.length) && b[0] instanceof cb) ||
            f(
              "The value of the 'requested-properties' option for fn:transform() must be of type map(*)"
            );
          b = b[0];
          b.Cb(function (a) {
            var b = a.v[0];
            switch (a.k.local) {
              case "supports-streaming":
                (b = b.value) && z(a.k, b);
                break;
              case "supports-namespace-axis":
                (b = b.value), z(a.k, b);
              case "supports-backwards-compatibility":
                (b = b.value) || z(a.k, b);
                break;
              case "product-name":
                b = b.toString();
                "SaxonJS" !== b && z(a.k, b);
                break;
              case "vendor":
                (b = b.toString()), "Saxonica" !== b && z(a.k, b);
            }
          });
        }
        var K = e("vendor-options");
        K && K[0]
          ? ((!(1 < K.length) && K[0] instanceof cb) ||
              f(
                "The value of the 'vendor-options' option for fn:transform() must be of type map(*)"
              ),
            (K = K[0]))
          : (K = null);
        h("stylesheet-location", "stylesheetLocation");
        h("stylesheet-node", "stylesheetNode");
        h("stylesheet-text", "stylesheetText");
        h("package-location", "packageLocation");
        h("package-node", "packageNode");
        h("package-text", "packageText");
        var ja = 0;
        "stylesheetLocation stylesheetNode stylesheetText packageLocation packageNode packageText"
          .split(" ")
          .forEach(function (a) {
            v[a] && ja++;
          });
        1 !== ja &&
          f(
            "A stylesheet must be supplied as an option to fn:transform(), by exactly one of 'stylesheet-location', 'stylesheet-node', 'stylesheet-text', 'package-location', 'package-node' or 'package-text'"
          );
        h("source-node", "sourceNode");
        (b = e("initial-match-selection")) &&
          0 < b.length &&
          (v.initialSelection = b);
        h("initial-template", "initialTemplate", function (a) {
          return a.ha();
        });
        h("initial-mode", "initialMode", function (a) {
          return ["#unnamed", "#default"].includes(a.toString())
            ? a.toString()
            : a.ha();
        });
        h("initial-function", "initialFunction", function (a) {
          return a.ha();
        });
        h("global-context-item", "globalContextItem");
        h("static-params", "staticParams");
        h("base-output-uri", "baseOutputURI");
        h("stylesheet-base-uri", "stylesheetBaseURI", function (a) {
          return a.toString();
        });
        h("delivery-format", "destination", function (a) {
          return a.toString();
        });
        var aa = v.destination;
        aa &&
          !["raw", "document", "serialized"].includes(aa) &&
          f(
            "The value of the delivery-format option to fn:transform() must be one of 'raw', 'document'. 'serialized'. Supplied value is " +
              aa
          );
        aa || (aa = "document");
        b = (b = e("enable-messages")) && 1 === b.length ? b[0].value : !1;
        var ra = e("enable-assertions");
        ra = ra && 1 === ra.length ? ra[0].value : !1;
        var Z = null,
          U = null;
        if (v.stylesheetNode) {
          var X = v.stylesheetNode._saxonBaseUri;
          U = Da.createDocument();
          var T = v.stylesheetNode;
          if (G.mg(T)) {
            T = T.childNodes;
            for (var oa = 0; oa < T.length; oa++)
              U.appendChild(T[oa].cloneNode(!0));
          } else (U = T.cloneNode(!0)), U.appendChild(T);
          U._saxonBaseUri = X;
          U._saxonDocUri = X;
        }
        if (v.stylesheetLocation) {
          X = m.yb(d, c);
          X = Da.$c(v.stylesheetLocation.toString(), X);
          v.stylesheetLocation = X;
          try {
            U = Ab.ve(X, c);
          } catch (La) {
            f(
              "Error fetching stylesheet in fn:transform():" +
                La.code +
                " " +
                La.message
            );
          }
          U._saxonBaseUri = X;
          U._saxonDocUri = X;
        }
        v.stylesheetText &&
          ((U = Da.parseXmlFromString(v.stylesheetText.toString(), !0)),
          (U._saxonBaseUri = "NoStylesheetBaseURI"),
          (U._saxonDocUri = "NoStylesheetBaseURI"));
        U &&
          v.stylesheetBaseURI &&
          ((X = v.stylesheetBaseURI),
          (U._saxonBaseUri = X),
          (U._saxonDocUri = X));
        v.packageNode &&
          ((X = v.packageNode),
          G.mg(X)
            ? (Z = l.XPath.sefToJSON(X.firstChild))
            : f(
                "The value of the 'package-node' option of fn:transform() must be a single document or element node"
              ));
        v.packageText && (Z = JSON.parse(v.packageText.toString()));
        U &&
          ((Z = v.staticParams ? v.staticParams : new cb()),
          (X = new cb()),
          (T = !1),
          (oa = A.X.xa("saxon", F.Jc, "compiler.options")),
          K && K.Xa(oa) && (X = K.get(oa)[0]),
          (oa = A.X.xa("saxon", F.Jc, "allowSyntaxExtensions")),
          K && K.Xa(oa) && (T = K.get(oa)[0]),
          (Z = x(
            U,
            {
              "enable-assertions": ra,
              "compiler.options": X,
              allowSyntaxExtensions: T,
            },
            Z
          )),
          (Z = l.XPath.sefToJSON(Z.firstChild)));
        v.sourceNode &&
          v.initialSelection &&
          f(
            "Only one of 'source-node' or 'initial-match-selection' must be supplied to fn:transform() for apply-templates invocation"
          );
        if (v.sourceNode) {
          K = v.sourceNode;
          var ka = Da.createDocument();
          if (G.mg(K))
            for (ra = K.childNodes, X = 0; X < ra.length; X++)
              ka.appendChild(ra[X].cloneNode(!0));
          else ka = T = K.cloneNode(!0);
          ka._saxonBaseUri = K._saxonBaseUri;
          ka._saxonDocUri = K._saxonDocUri;
        }
        v.baseOutputURI || ((v.baseOutputURI = ""), (r = !0));
        k("stylesheet-params", "stylesheetParams");
        k("template-params", "templateParams");
        k("tunnel-params", "tunnelParams");
        h("function-params", "functionParams", function (a) {
          B.assert(a instanceof mb);
          return a.value;
        });
        "serialized" === aa &&
          h("serialization-params", "outputProperties", function (a) {
            return m.rc(a, !0);
          });
        h("output", "output");
        v.deliverResultDocument = function () {
          var a = this;
          return {
            destination: aa,
            save: function (b, c) {
              a.Ag[b.toString()] = c;
            },
          };
        };
        v.deliverMessage = function (a) {
          Da.Il()(a);
          this.dm.push([a]);
        };
        var Ya = {};
        K = D.K(e("collections")).Oa();
        null !== K && (Ya = m.rc(K, !0));
        v.collectionFinder = function (a) {
          return "undefined" === typeof a ? null : Ya[a];
        };
        ra = "raw" !== aa;
        K = !1;
        if (null !== U)
          for (
            X = sa(U.documentElement.childNodes), T = X.next();
            !T.done;
            T = X.next()
          ) {
            if (((T = T.value), "output" === T.nodeName && !T.name)) {
              X = sa(T.childNodes);
              for (T = X.next(); !T.done; T = X.next())
                switch (
                  ((T = T.value),
                  (oa = T.getAttribute("value")),
                  T.getAttribute("name"))
                ) {
                  case "build-tree":
                    ra = "true" === oa;
                    break;
                  case "method":
                    K = "text" === oa;
                }
              break;
            }
          }
        else if (null !== Z)
          for (X = sa(a(Z, "output")), T = X.next(); !T.done; T = X.next())
            for (
              T = sa(a(T.value, "property")), oa = T.next();
              !oa.done;
              oa = T.next()
            )
              (oa = oa.value),
                "method" === oa.name && "text" === oa.value && (K = !0);
        try {
          null === Z ? (Z = l.XPath.sefToJSON(U.documentElement)) : p(Z);
          var Fa = l.checkOptions(v);
          l.internalTransform(Z, ka, Fa);
          var ia = Fa.principalResult;
        } catch (La) {
          if (La instanceof q && La.yi)
            throw new q(La.message, La.code.toString());
          throw La;
        }
        if (ra && !K && Array.isArray(ia))
          if (1 === ia.length && G.mg(ia[0])) ia = ia[0];
          else if (0 < ia.length && G.da(ia[0])) {
            ka = !0;
            for (U = 0; U < ia.length; ) (ka = ka && 3 === ia[U].nodeType), U++;
            if (ka) {
              for (ka = ""; 0 < ia.length; ) ka += ia.shift().textContent;
              ka = c.wa.createTextNode(ka);
            } else
              for (ka = Da.createDocument(); 0 < ia.length; )
                if (
                  ((c = ia.shift()),
                  (3 === c.nodeType && /\S/.test(c.textContent)) ||
                    1 === c.nodeType)
                )
                  try {
                    ka.appendChild(c);
                  } catch (La) {
                    throw new q(
                      "Internal error in result tree formation:" + La.message,
                      "XTDE9999"
                    );
                  }
            ia = ka;
          }
        if (K) {
          c = "";
          ka = !1;
          for (var Ia in ia)
            G.da(ia[Ia])
              ? ((c += ia[Ia].textContent), (ka = !0))
              : (ka || "" === c || (c += " "),
                (c += ia[Ia].toString()),
                (ka = !1));
          ia = A.T.g(c);
        }
        Array.isArray(ia) &&
          1 === ia.length &&
          Array.isArray(ia[0]) &&
          (ia = ia[0]);
        Ia = Fa.Ag[""];
        if (void 0 !== Ia) {
          if (Array.isArray(ia) ? 0 < ia.length : null != ia)
            throw new q(
              "A result document on the base output URI has already been created",
              "XTDE1490"
            );
          ia = Ia;
        }
        Ia = new cb();
        ia && Ia.Ta(r ? A.T.g("output") : Fa.Ad, Array.isArray(ia) ? ia : [ia]);
        b && Ia.Ta(A.T.g("messages"), [new mb(Fa.dm)]);
        for (var la in Fa.Ag)
          B.Gb("xsl:result-document href=" + la, 2),
            Ia.Ta(A.kc.g(la), Fa.Ag[la]);
        return D.l(Ia);
      },
      translate: function (a) {
        var b = c(a[0]),
          e = c(a[1]),
          d = c(a[2]),
          f = [];
        b.forEach(function (a) {
          var b;
          -1 !== (b = e.indexOf(a)) ? b < d.length && f.push(d[b]) : f.push(a);
        });
        return D.ua(Ma.ld(f));
      },
      true: function () {
        return D.ka(!0);
      },
      "type-available": function (a, c, d) {
        a = b(a[0], c, d, "XTDE1428").split("}");
        return D.ka(
          "Q{http://www.w3.org/2001/XMLSchema" === a[0] &&
            (a[1] in C.type ||
              ["untyped", "anyType", "anySimpleType"].includes(a[1]))
        );
      },
      unordered: function (a) {
        return a[0];
      },
      "unparsed-entity-public-id": function () {
        return D.R;
      },
      "unparsed-entity-uri": function () {
        return D.R;
      },
      "unparsed-text": function (a, b, c) {
        var e = Ab.Zh(a, b, c);
        if (!e) return D.R;
        a = Ab.zj(a[1] ? m(a[1]) : "");
        return D.ua(Ab.Kj(e, b, c, a));
      },
      "unparsed-text-available": function (a, b, c) {
        return Ab.pm(function () {
          var e = Ab.Zh(a, b, c),
            d = Ab.zj(a[1] ? m(a[1]) : "");
          Ab.Kj(e, b, c, d);
        });
      },
      "unparsed-text-lines": function (a, b, c) {
        var e = Ab.Zh(a, b, c);
        if (!e) return D.R;
        a = Ab.zj(a[1] ? m(a[1]) : "");
        b = Ab.Kj(e, b, c, a).split(/\r?\n|\r/);
        0 < b.length && "" === b[b.length - 1] && --b.length;
        return D.K(b).Ia(function (a) {
          return A.T.g(a);
        });
      },
      "upper-case": function (a) {
        return D.ua(m(a[0]).toUpperCase());
      },
      "uri-collection": function () {
        return D.R;
      },
      "xml-to-json": function (a) {
        var b = a[1] ? a[1].next() : new cb();
        return a[0].Ia(function (a) {
          return A.T.g(zb.Up(a, b));
        });
      },
      "year-from-date": function (a) {
        return v(a, "getUTCFullYear");
      },
      "year-from-dateTime": function (a) {
        return v(a, "getUTCFullYear");
      },
      "years-from-duration": function (a) {
        return w(a, 0);
      },
      "zero-or-one": function (a) {
        a = a[0].expand();
        if (1 < a.length)
          throw new q(
            "Required length 0-1, actual length " + a.length,
            "FORG0003"
          );
        return D.l(a[0] ? a[0] : null);
      },
    };
  })();
  var Gb = (function () {
    function a(a, b, c) {
      var d = c.fixed.ya,
        f = b.name || "#unnamed";
      b = d.Ec(b, "sortKey");
      d = b.map(d.Kb);
      var k = Q.jo(b, c);
      b = [];
      var l = c.ja(!1);
      for (l.focus = D.Da(a); null !== (a = l.focus.next()); )
        (c = d.map(function (a, b) {
          var c = l.ja(!1);
          c.focus = D.jc(l.focus.current);
          c = a(c);
          var d = c.next();
          if (d && c.next())
            throw new q("Multiple values in merge key", "XTTE1020");
          return k[b](d);
        })),
          b.push({ item: a, keys: c, em: f });
      return b;
    }
    function b(a, b, c) {
      function d(a) {
        var b = f[f.length - 1];
        if (b && 0 < c(b, a))
          throw new q("Input to xsl:merge is not correctly sorted", "XTDE2220");
        f.push(a);
      }
      for (var f = [], k = 0, l = 0; ; )
        if (k >= a.length) {
          for (; l < b.length; ) d(b[l++]);
          break;
        } else if (l >= b.length) {
          for (; k < a.length; ) d(a[k++]);
          break;
        } else 0 >= c(a[k], b[l]) ? d(a[k++]) : d(b[l++]);
      return f;
    }
    function d(a, b) {
      return b.fixed.ya.Ec(a, "sortKey").map(function (a) {
        return Q.Jp(a, b);
      });
    }
    function m(a) {
      return function (b, c) {
        for (var d = 0; d < a.length; d++) {
          var f = a[d](b.keys[d], c.keys[d]);
          if (0 !== f) return f;
        }
        return 0;
      };
    }
    function c(a, b, c) {
      for (var d = null, f = [], k = {}, l = 0; l < b.length; l++) {
        var m = b[l];
        d = null === d ? -1 : c(d, m);
        if (0 > d) {
          k = { items: [m.item], keys: m.keys, groups: {} };
          for (d = 0; d < a.length; d++) k.groups[a[d].name || "#unnamed"] = [];
          k.groups[m.em] = [m.item];
          f.push(k);
        } else if (0 === d) k.items.push(m.item), k.groups[m.em].push(m.item);
        else
          throw new q(
            "Group Input to xsl:merge is not correctly sorted",
            "XTDE2220"
          );
        d = m;
      }
      return f;
    }
    return {
      Vo: function (l, f) {
        var k = f.fixed.ya,
          r = k.Ec(l, "mergeSrc"),
          v = f.ja();
        v.Ja = "merge-key";
        for (
          var w = r.map(function (a) {
              return d(a, v);
            }),
            z = w[0],
            t = 1;
          t < w.length;
          t++
        )
          for (var g = 0; g < z.length; g++) {
            var K = z[g],
              A = w[t][g],
              x = K.lang === A.lang || (null !== K.lang && K.lang.ia(A.lang));
            if (
              K.order !== A.order ||
              !x ||
              K.di !== A.di ||
              K.dataType !== A.dataType
            )
              throw new q(
                "All merge sources must have compatible merge keys",
                "XTDE2210",
                l
              );
          }
        w = z.map(function (a) {
          return Q.Bn(a, v);
        });
        w = m(w);
        z = null;
        for (t = 0; t < r.length; t++) {
          g = r[t];
          K = k.qa(g, "forEachItem");
          A = k.qa(g, "selectRows");
          try {
            if (K) {
              var e = f.ja(!1);
              for (
                e.focus = D.Da(k.evaluate(K, f));
                null !== e.focus.next();

              ) {
                var h = k.evaluate(A, e),
                  p = a(h, g, e);
                z = null === z ? p : b(z, p, w);
              }
            } else {
              var y = k.evaluate(A, f),
                u = a(y, g, f);
              z = null === z ? u : b(z, u, w);
            }
          } catch (L) {
            if (L instanceof q && "XPTY0004" === L.code)
              throw new q(L.message, "XTTE2230", l);
            throw L;
          }
        }
        if (null === z) return D.R;
        r = c(r, z, w);
        e = k.qa(l, "action");
        p = r.map(function (a) {
          return a.items[0];
        });
        h = f.ja(!1);
        h.focus = D.Da(D.K(p));
        p = [];
        for (y = 0; y < r.length; y++)
          for (
            h.focus.next(), h.sc = r[y], u = k.evaluate(e, h), w = void 0;
            null !== (w = u.next());

          )
            p.push(w);
        return D.K(p);
      },
    };
  })();
  var Hb = (function () {
    function a(a, b) {
      for (var c in a) if (c == b) return { k: b, v: a[b] };
      return null;
    }
    function b() {}
    b.prototype = {
      containsKey: function (b) {
        return null !== a(this, b);
      },
      Cb: function (a) {
        for (var b in this)
          this.__proto__.hasOwnProperty(b) || a({ k: b, v: this[b] });
      },
      get: function (b) {
        var d = a(this, b);
        if (null === d)
          throw new q(
            "'" + b + "' is not a permitted key for the given tuple type",
            "XTTE9999"
          );
        return d.v;
      },
      keys: function () {
        var a = [];
        this.Cb(function (b) {
          a.push(C.O.T.g(b.k));
        });
        return a;
      },
      put: function (a, m) {
        var c = new b(),
          d = !1,
          f;
        for (f in this) (c[f] = this[f]), f == a && ((d = !0), (c[a] = m));
        if (!d)
          throw new q(
            "'" + a + "' is not a permitted key for the given tuple type",
            "XTTE9999"
          );
        return c;
      },
      size: function (a) {
        var b = 0;
        a[0].next().Cb(function () {
          b++;
        });
        return D.Vb(b);
      },
    };
    return b;
  })();
  var P = (function () {
    function a(a, b) {
      return u(a)(b);
    }
    function b() {}
    function d(a) {
      var b = (a.C || []).map(u);
      return function (a) {
        return D.Om(b, a);
      };
    }
    function m(a) {
      function b(a) {
        switch (a) {
          case 1:
            return "first";
          case 2:
            return "second";
          case 3:
            return "third";
          default:
            return a + "th";
        }
      }
      a = a.split("|");
      var c = a[0],
        e = a[1],
        d = "" === a[2] ? "XPTY0004" : a[2],
        f = a[3];
      return {
        required: (function () {
          switch (parseInt(c, 10)) {
            case 0:
              return (
                b(+e + 1) +
                " argument of " +
                ("" === f ? "anonymous function" : f + "()")
              );
            case 1:
              return b(+e + 1) + " operand of '" + f + "'";
            case 9:
              return "operand of '-'";
            case 2:
              return "value in '" + f + "' expression";
            case 3:
              return "saxon:context-item" === f
                ? "context item"
                : "value of variable $" + f;
            case 4:
              var a = f.split("/");
              return (
                "@" +
                a[1] +
                " attribute of " +
                ("LRE" === a[0] ? "a literal result element" : a[0])
              );
            case 5:
              return (
                "result of call to " +
                ("" === f ? "anonymous function" : "function " + f)
              );
            case 7:
              return "result of template " + f;
            case 6:
              return b(+e + 1) + " sort key";
            case 8:
              return "value of parameter $" + f;
            case 11:
              return "value of the grouping key";
            case 12:
              return "result of xsl:evaluate";
            case 13:
              return "the context item";
            case 14:
              return "the context item for the " + this.yq(e) + " axis";
            case 15:
              return "the value of the " + f + " option";
            case 17:
              return "document-order sorter";
            default:
              return "";
          }
        })(),
        code: d,
      };
    }
    function c(a) {
      a = a.trim();
      if (["true", "yes", "1"].includes(a)) return !0;
      if (["false", "no", "0"].includes(a)) return !1;
      throw new q("Value must be yes|true|1 or no|false|0", "XTDE0030");
    }
    function l(a) {
      if (la.da(a)) return D.l(f(a));
      if (Z(a))
        return D.Rc(
          a.value.map(function (a) {
            return D.K(a);
          })
        ).Ya(l);
      if (X(a))
        throw new q(
          "Cannot atomize a " + (U(a) ? "map" : "function"),
          "FOTY0013"
        );
      return D.l(a);
    }
    function f(a) {
      var b = M.T.g,
        c = M.Ua.g;
      switch (a.nodeType) {
        case 9:
          return c(a.documentElement.textContent);
        case 11:
        case 1:
        case 3:
        case 4:
          return c(a.textContent || "");
        case 2:
          return c(a.value);
        case 8:
          return b(a.textContent);
        case 7:
          return b(a.textContent);
        case 13:
          return b(a.uri);
        default:
          throw new q("Unknown node type " + a.nodeType, "SXJS0003");
      }
    }
    function k(a) {
      return D.K(a).Ya(l).expand();
    }
    function r(a) {
      function b(a) {
        throw new q(
          "Effective boolean value is not defined for " + a,
          "FORG0006"
        );
      }
      function c() {
        if (null !== a.next()) b("an atomic sequence of length > 1");
        else return !0;
      }
      var e = a.next();
      if (null === e) return !1;
      if (la.da(e)) return !0;
      if (C.Ga(e)) {
        if (M.Ea.matches(e)) return c() && e.value;
        if (M.numeric.matches(e))
          return (e = e.J()), c() && !isNaN(e) && 0 !== e;
        if (M.T.matches(e) || M.Ua.matches(e) || M.kc.matches(e))
          return c() && 0 !== e.toString().length;
        b("type " + e.type);
      } else
        U(e)
          ? b("maps")
          : Z(e)
          ? b("arrays")
          : X(e)
          ? b("functions")
          : b("value " + B.oa(e));
    }
    function v(a, b) {
      var c = Pa["i+i"],
        e = M.Ma.fa(1);
      return D.Uf(a, function (a) {
        a = c(a, e);
        return 0 < a.ab(b) ? null : a;
      });
    }
    function w(a, b) {
      return a.C
        ? a.C.filter(function (a) {
            return a.N === b;
          })
        : [];
    }
    function z(a, b, c) {
      a = w(a, "withParam");
      var e = [new cb(), new cb()];
      b.cd.Cb(function (a) {
        return e[1].Ta(a.k, a.v);
      });
      var d = b.Ja;
      b.Ja = "template parameter";
      a.forEach(function (a) {
        var c = a.name,
          d = O(a, "t") ? 1 : 0;
        e[d].Ta(C.O.X.rb(c), p(a)(b).expand());
      });
      b.Ja = d;
      c.He = e[0];
      c.cd = e[1];
    }
    function t(a) {
      return !/[ \t\r\n]/.test(a);
    }
    function g(a, b, c) {
      if (a) {
        a = a.split(/\r?\n/);
        for (var e = 0; e < a.length; e++)
          if (a[e]) {
            var d = a[e].split("="),
              f = d[0];
            d = d[1];
            "item-separator" === f &&
              (d = d.replace(/%n/g, "\n").replace(/%%/g, "%"));
            d = "use-character-maps" === f ? Eb.Yi(f, d, c) : Eb.Zi(f, d);
            "undefined" !== typeof d && (b[f] = Eb.Ji(f, d, b[f]));
          }
      }
    }
    function K(a, b) {
      var c = p(a),
        e = y(a);
      return function (d) {
        try {
          var f = c(d).next(),
            h = e(d).next();
          return null === f || null === h ? null : b(f, h);
        } catch (Oa) {
          aa(Oa, a);
        }
      };
    }
    function A(a, b) {
      if (b.fixed.Ac) return b.fixed.Ac;
      for (var c = a; ; ) {
        if (c.baseUri) return c.baseUri;
        c = c.parentNode;
        if (!c) return null;
      }
    }
    function x(a, b, c) {
      c = void 0 === c ? !1 : c;
      var e = la.fe(b.wa.createDocumentFragment());
      e._saxonBaseUri = A(a, b);
      var d = b.ja(!1);
      c && (d.wa = b.Db);
      ob.To(e, u(a)(d), d);
      return e;
    }
    function e(a) {
      var b = p(a),
        c = y(a),
        e = a.op;
      return function (d) {
        var f = b(d),
          h = c(d).expand();
        d = Q.Wg(a.comp, d);
        return Q.Oj(f, h, e, d, a);
      };
    }
    function h(a, b) {
      throw new q(
        "The " + a + " construct is not implemented in Saxon-JS",
        "SXJS0002",
        b
      );
    }
    function p(a) {
      return u(a.C[0]);
    }
    function y(a) {
      return u(a.C[1]);
    }
    function u(a) {
      if (a) {
        var b = a.ELAB;
        b ||
          ((b = E[a.N]) || B.ra("Unknown expr: " + a.N + " parent=" + a.p),
          (b = a.ELAB = b(a)));
        return b;
      }
    }
    function L(a, b) {
      for (var c = a.C || [], e = 0; e < c.length; e++) {
        var d = c[e];
        if (d.role === b) return d;
      }
      return null;
    }
    function O(a, b) {
      var c = a.flags;
      return c ? 0 <= c.indexOf(b) : !1;
    }
    function fa(a) {
      var b = {};
      a = Y(a, "ns");
      if (null !== a) {
        a = a.split(" ");
        for (var c = 0; c < a.length; c++) {
          var e = a[c].split("=");
          b[e[0]] = "~" === e[1] ? F.me[e[0]] : e[1];
        }
      }
      return b;
    }
    function Y(a, b) {
      for (var c = a; c; ) {
        if (c[b]) return c[b];
        c = c.parentNode;
      }
      return null;
    }
    function N(a, b) {
      var c = fa(a);
      return function (e) {
        if ("" === e && !b) return "";
        var d = c[e];
        if (d) return d;
        if ("" === e) return "";
        throw new q("Undeclared prefix: " + e, "XTDE0290", a);
      };
    }
    function S(a, b, c) {
      return M.X.g(b, N(a, c));
    }
    function ma(a, b, c) {
      if (null !== a && 0 < c) {
        var e = la.getAttribute(a, b);
        return null !== e && "" !== e ? e : ma(a.parentNode, b, c - 1);
      }
    }
    function xa(a, b, c) {
      var e = a.bSlot;
      if (e) {
        e = parseInt(e, 10);
        a = b.La.ci[e];
        var d = b.fixed.qb[a];
      } else
        (a = a.coId)
          ? (d = b.fixed.qb[parseInt(a, 10)])
          : B.ra("No binding slot or component Id for component");
      d || B.ra("Target component not found (slot=" + e + " id=" + a + ")");
      if ("ABSTRACT" === d.visibility)
        throw new q(
          "Abstract " +
            d.actor.N +
            " " +
            d.actor.name +
            " has no implementation",
          "XTDE3052"
        );
      c && d.actor.N !== c && B.ra("Expected " + c + ", found " + d.actor.N);
      return d;
    }
    function Ja(a, b, c, e) {
      a = u(L(b.actor, "body"));
      e = e.ja(!0);
      e.La = b;
      e.Zf();
      e.Ja = "function";
      e.$b = {};
      e.Xb = null;
      e.focus = null;
      e.Ha = c;
      return a(e);
    }
    function za(a, b) {
      for (var c = a.parentNode; "package" !== c.N; ) c = c.parentNode;
      return b.fixed.xg[c.name];
    }
    function Ka(a, b) {
      b || B.ra("No context supplied!");
      bb++;
      V.length < bb && (V += V);
      var c = a.name ? " name='" + a.name + "'" : "";
      B.Gb(
        V.substring(0, bb) +
          "<" +
          a.N +
          " line='" +
          Y(a, "module") +
          "#" +
          Y(a, "line") +
          "'" +
          c +
          " focus='" +
          (b.ee() ? "absent" : B.oa(b.lb())) +
          "'>",
        1
      );
      c = Ba(a, b);
      ("object" === typeof c && "next" in c) ||
        B.ra("Result of " + Va(a) + " is not an iterator");
      B.Gb(V.substring(0, bb) + "</" + a.N + ">", 1);
      bb--;
      return c;
    }
    function Va(a) {
      var b = a.N;
      a.parentNode && (b = Va(a.parentNode) + "/" + b);
      return b;
    }
    function Ba(a, b) {
      var c = E[a.N];
      c || B.ra("Unknown expr: " + a.N + " parent=" + a.p);
      try {
        return c(a, b);
      } catch (Ta) {
        throw (
          (Ta instanceof q &&
            ((b.Yg = Ta), Ta.oe || Ea(Ta, a), Ta.context || (Ta.context = b)),
          Ta)
        );
      }
    }
    function ja(a) {
      return function (b) {
        var c = Cb.ae(b),
          e = Bb.yf(c);
        Bb.push(a, b, e);
        e.close();
        return c.rg();
      };
    }
    function aa(a, b) {
      a instanceof q && !a.oe && Ea(a, b);
      throw a;
    }
    function ra(a, b) {
      function c(b) {
        return "Context item for template " + a.name + " must be " + b;
      }
      if (b.ee() && -1 === a.flags.indexOf("o"))
        throw new q(c("supplied"), "XTTE3090", a);
      b.ee() || -1 !== a.flags.indexOf("s") || (b.focus = {});
      var e = a.cxt;
      if (e && !b.ee() && !I.Xc(e).ta()(b.lb()))
        throw new q(c("instance of " + I.Xc(e).toString()), "XTTE0590", a);
    }
    function Z(a) {
      return a instanceof mb;
    }
    function U(a) {
      return a instanceof cb || a instanceof oa;
    }
    function X(a) {
      return a instanceof nb.gb || Z(a) || U(a);
    }
    function T(a, b, c) {
      B.assert(Array.isArray(a));
      B.assert(b instanceof J.Ka);
      var e = b.ea(),
        d = e.p;
      if (e.o && !tb(e.o)(a.length))
        throw new q(
          "Supplied value " +
            B.oa(a) +
            " does not match required cardinality " +
            e.o +
            (c ? " in " + c() : ""),
          "XPTY0004"
        );
      if (0 < a.length) {
        if (b.ca.Ga()) {
          a = P.un(a);
          var f = C.O.Ua,
            h = C.te[d],
            g = b.ca.Ge() ? C.O.za.aa : h.aa,
            k = C.O.numeric;
          a = a.map(function (a) {
            return f.matches(a)
              ? g(a)
              : a instanceof oa
              ? h.g(a.value.toString())
              : a;
          });
          ["AO", "AF"].includes(d) &&
            (a = a.map(function (a) {
              return k.matches(a) ? h.aa(a) : a;
            }));
          "AS" === d &&
            (a = a.map(function (a) {
              return C.O.kc.matches(a) ? h.aa(a) : a;
            }));
        } else if (b.ca.ng())
          if (["FM", "FA"].includes(d)) a = Fa(a);
          else {
            var p = b.ca.ta();
            a.every(function (a) {
              return p(a);
            }) ||
              (a = a.map(function (a) {
                if (
                  p(a) ||
                  !I.Xe.pa.ta()(a) ||
                  I.cj.pa.ta()(a) ||
                  I.bj.pa.ta()(a)
                )
                  return a;
                var c = b.ca,
                  e = c.wf().length;
                c = { minArgs: e, maxArgs: e, sig: c.va(), alphaTree: c.ea() };
                return new nb.zk(c, a);
              }));
          }
        if (!b.matches(a))
          throw new q(
            "Supplied value " +
              B.oa(a) +
              " does not match required type " +
              b.toString() +
              (c ? " in " + c() : ""),
            "XPTY0004"
          );
      }
      return a;
    }
    function oa(a) {
      this.value = a;
    }
    function ka(a) {
      this.value = a;
    }
    function Ya(a) {
      function b(a) {
        switch (typeof a) {
          case "undefined":
            return [];
          case "string":
            return M.Ua.g(a);
          case "number":
            return M.za.fa(a);
          case "boolean":
            return M.Ea.Dd(a);
          case "function":
            return new oa(a);
          case "object":
            if (M.wj.matches(a) || la.da(a)) return a;
            if (a instanceof mb || a instanceof nb.gb || a instanceof cb)
              return a;
            if (a instanceof oa) return a;
            if (a instanceof Date) return M.dateTime.g(a.toISOString());
            if (Array.isArray(a)) {
              var b = [];
              a.forEach(function (a) {
                b.push(Ya(a));
              });
              return new mb(b);
            }
            return null === a ? [] : a instanceof ka ? a.value : new oa(a);
          default:
            return new oa(a);
        }
      }
      function c(a) {
        var c = [];
        a.forEach(function (a) {
          a = b(a);
          (Array.isArray(a) && 0 === a.length) || c.push(a);
        });
        return c;
      }
      if (Array.isArray(a)) return c(a);
      a = b(a);
      return Array.isArray(a) && 0 === a.length ? [] : [a];
    }
    function Fa(a) {
      function b(a) {
        if (a instanceof mb) {
          var b = [];
          a.value.forEach(function (a) {
            return b.push(c(a));
          });
          return new mb(b);
        }
        if (a instanceof oa) {
          var e = a.value;
          if ("object" === typeof e) {
            a = new cb();
            for (var d in e)
              if (e.hasOwnProperty(d)) {
                var f = Ya(d)[0],
                  h = Ya(e[d]);
                a.Ta(f, Fa(h));
              }
          }
        }
        return a;
      }
      function c(a) {
        var c = [];
        a.forEach(function (a) {
          a = b(a);
          (Array.isArray(a) && 0 === a.length) || c.push(a);
        });
        return c;
      }
      B.assert(Array.isArray(a));
      return c(a);
    }
    function ia(a, b) {
      function c(a) {
        if (Array.isArray(a))
          throw new q("convertItem() called for an array", "SXJS0004");
        if (null === a) return null;
        if (
          M.T.matches(a) ||
          M.kc.matches(a) ||
          M.duration.matches(a) ||
          M.po.matches(a) ||
          M.Yk.matches(a) ||
          M.Ua.matches(a)
        )
          return a.toString();
        if (M.numeric.matches(a)) return a.J();
        if (M.Ea.matches(a)) return a.value;
        if (
          M.dateTime.matches(a) ||
          M.nd.matches(a) ||
          M.cg.matches(a) ||
          M.time.matches(a) ||
          M.Hl.matches(a) ||
          M.Gl.matches(a) ||
          M.Fl.matches(a) ||
          M.El.matches(a) ||
          M.Dl.matches(a)
        )
          return a.toString();
        if (M.X.matches(a)) return a.ha();
        if (la.da(a)) return a;
        if (a instanceof mb) {
          var c = [];
          0 !== a.value.length &&
            a.value.forEach(function (a) {
              c.push(ia(a, b));
            });
          return c;
        }
        if (a instanceof cb) {
          if (b) {
            var e = {};
            a.Cb(function (a) {
              e[a.k.toString()] = ia(a.v, b);
            });
            return e;
          }
          return new ka(a);
        }
        return a instanceof ka ? a : a instanceof oa ? a.value : new ka(a);
      }
      function e(a) {
        var b = [];
        if (0 === a.length) return null;
        if (1 === a.length) return c(a[0]);
        a.forEach(function (a) {
          b.push(c(a));
        });
        return b;
      }
      b = void 0 === b ? !1 : b;
      return Array.isArray(a) ? e(a) : c(a);
    }
    function Ia(a) {
      return a.Ya(function (a) {
        return Z(a)
          ? D.Rc(
              a.value.map(function (a) {
                return Ia(D.K(a));
              })
            )
          : D.l(a);
      });
    }
    var la = G,
      La = la.Ab,
      M = C.O,
      Qa,
      E = {
        acFnRef: function (a) {
          var b = M.X.rb(a.name),
            c = wb.find("SaxonJS").XPath;
          return function (e) {
            e = e.ja(!0);
            e.Tb = !0;
            if ((e = c.getFnSignature(b, 1, e)))
              return (e = new nb.dj(e, b, a)), D.l(e);
            throw new q(
              "Reference to an unknown constructor function " + b + "#1",
              "XPST0017",
              a
            );
          };
        },
        among: function (a) {
          var b = p(a),
            c = y(a);
          return function (a) {
            var e = b(a).next();
            return c(a).filter(function (a) {
              return a === e;
            });
          };
        },
        analyzeString: ja,
        and: function (a) {
          var b = p(a),
            c = y(a);
          return function (a) {
            return D.ka(r(b(a)) && r(c(a)));
          };
        },
        applyImports: ja,
        applyT: ja,
        arith: function (a) {
          var b = Pa[a.calc];
          b || h("arithmetic (" + a.calc + ")", a);
          var c = K(a, b);
          return function (a) {
            return D.l(c(a));
          };
        },
        arith10: function (a) {
          function b(a) {
            a = a.next();
            return null === a
              ? M.za.fa(NaN)
              : C.O.T.Fe(a)
              ? M.za.oi(a.toString())
              : M.za.aa(a);
          }
          var c = p(a),
            e = y(a),
            d = Pa[a.calc];
          return function (a) {
            return D.l(d(b(c(a)), b(e(a))));
          };
        },
        array: function (a) {
          var b = (a.C || []).map(u);
          return function (a) {
            var c = b.map(function (b) {
              return b(a).expand();
            });
            return D.l(new mb(c));
          };
        },
        arrayBlock: function (a) {
          var b = (a.C || []).map(u);
          return function (a) {
            var c = b.map(function (b) {
              return b(a).expand();
            });
            return D.l(new mb(c));
          };
        },
        atomic: function (a) {
          var b = C.te[a.type].g(a.val);
          return function () {
            return D.l(b);
          };
        },
        atomSing: function (a) {
          var b = p(a);
          return a.card
            ? function (a) {
                return b(a).Ya(l);
              }
            : function (c) {
                c = b(c).Ya(l);
                c = D.fd(c);
                if (null === c.Oa())
                  throw (
                    ((c = m(a.diag)),
                    new q("The " + c.required + " is empty", c.code, a))
                  );
                return c;
              };
        },
        att: ja,
        attVal: function (a) {
          var b = M.X.rb(a.name);
          return function (c) {
            c.Wc("XPDY0002", "@" + b, a);
            c = c.lb();
            if (!la.da(c))
              throw new q(
                "Context item for 'attVal' must be a node",
                "XPTY0020",
                a
              );
            if (1 !== c.nodeType) return D.R;
            c =
              "" === b.uri
                ? c.hasAttribute(b.local)
                  ? c.getAttribute(b.local)
                  : null
                : b.uri === F.xml
                ? c.hasAttribute("xml:" + b.local)
                  ? c.getAttribute("xml:" + b.local)
                  : null
                : c.hasAttributeNS(b.uri, b.local)
                ? c.getAttributeNS(b.uri, b.local)
                : null;
            return null === c ? D.R : D.l(M.Ua.g(c));
          };
        },
        axis: function (a) {
          var b = I.Xc(a.nodeTest || "").ta(),
            c = a.name;
          return function (e) {
            e.Wc("XPDY0002", c + " axis", a);
            e = e.lb();
            if (!la.da(e))
              throw new q(
                "Context item for " +
                  c +
                  " axis is not a node - supplied:" +
                  B.oa(e),
                "XPTY0020",
                a
              );
            return la.Xk[c](e).filter(b);
          };
        },
        break: ja,
        callT: function (a) {
          return function (b) {
            var c = xa(a, b, "template"),
              e = b.ja(!0);
            e.sc = null;
            e.La = c;
            ra(c.actor, e);
            z(a, b, e);
            return p(c.actor)(e);
          };
        },
        cast: function (a) {
          function b(b) {
            b = e(b).next();
            if (null === b) {
              if (d) return null;
              throw new q("Empty sequence casting to " + c(), "XPTY0004", a);
            }
            return b;
          }
          function c() {
            return I.Xc(a.as).toString();
          }
          var e = p(a),
            d = O(a, "e");
          if (O(a, "a")) {
            var f = Ua(a.as),
              h = "AQ" === f.p ? N(a, !0) : null,
              g = C.te[f.p].aa;
            return function (e) {
              e = b(e);
              if (null === e) return D.R;
              try {
                var d = g(e, h);
                return D.l(d);
              } catch (ub) {
                if ("FORG0001" === ub.code && a.diag)
                  throw (
                    ((d = m(a.diag)),
                    new q(
                      "Required item type of " +
                        d.required +
                        " is " +
                        c() +
                        "; supplied value is " +
                        B.ym(e),
                      d.code,
                      a
                    ))
                  );
                if (null !== ub.code) throw ub;
                throw new q(
                  "Failed to cast " + B.ym(e) + " to type " + c(),
                  "XPTY0004",
                  a
                );
              }
            };
          }
          if (O(a, "l")) {
            var k = C.O.X.rb(a.as),
              x = I.Zk[k.local].g;
            B.assert(k.uri === F.Rd);
            B.assert(x);
            return function (a) {
              a = b(a);
              if (null === a) return D.R;
              a = Na.collapse(a.toString()).split(" ").map(x);
              if (0 === a.length)
                throw new q(
                  "xs:" + k.local + " value must contain at least one token",
                  "FORG0001"
                );
              return D.K(a);
            };
          }
          if (O(a, "u"))
            return function (a) {
              a = b(a);
              return null === a
                ? D.R
                : C.O.za.matches(a) || C.O.od.matches(a) || C.O.qd.matches(a)
                ? D.l(a)
                : D.l(C.O.za.aa(a));
            };
          throw new q("Unknown cast variety " + a.flags);
        },
        castable: function (a) {
          var b = p(a),
            c = O(a, "e");
          if (O(a, "a")) {
            var e = Ua(a.as),
              d = "AQ" === e.p ? N(a, !0) : null,
              f = C.te[e.p].aa;
            var h = function (a) {
              f(a, d);
              return !0;
            };
          } else if (O(a, "l")) {
            a = C.O.X.rb(a.as);
            var g = I.Zk[a.local].g;
            h = function (a) {
              return 0 < Na.collapse(a.toString()).split(" ").map(g).length;
            };
          } else if (O(a, "u"))
            h = function (a) {
              C.O.za.aa(a);
              return !0;
            };
          else throw new q("Unknown castable variety " + a.flags);
          return function (a) {
            a = b(a);
            var e = a.next();
            if (null === e) return D.ka(c);
            if (null !== a.next()) return D.ka(!1);
            a = l(e).next();
            try {
              return D.ka(h(a));
            } catch (Yd) {
              return D.ka(!1);
            }
          };
        },
        cfn: function (a) {
          var b = a.name,
            c = p(a);
          if ("_format-number_1" === b) {
            var e = Fb["format-number"];
            return function (b) {
              var d = [c(b), D.ua(a.pic)];
              a.hasAttribute("format") && d.push(D.ua(a.format));
              return e(d, b, a);
            };
          }
          if ("_translate_1" === b)
            return (
              (e = Fb.translate),
              function (b) {
                var d = [c(b), D.ua(a.a1), D.ua(a.a2)];
                return e(d, b);
              }
            );
          B.ra("Unimplemented: cfn " + b, a);
        },
        check: function (a) {
          function b(b) {
            var d = m(a.diag);
            throw new q(
              "Required cardinality of " +
                d.required +
                " is " +
                e[c] +
                "; supplied value " +
                b,
              d.code,
              a
            );
          }
          var c = a.card,
            e = {
              "*": "zero or more",
              "+": "one or more",
              "?": "zero or one",
              0: "zero",
              1: "exactly one",
            },
            d = p(a);
          return function (a) {
            a = d(a);
            if ("*" === c) return a;
            var e = D.fd(a);
            a = e.Oa();
            if (null === a) {
              if ("?" === c || "0" === c) return D.R;
              b("is empty");
            } else "0" === c && b("is not empty (first item " + B.oa(a) + ")");
            if ("+" === c) return e;
            e.next();
            var f = e.next();
            null !== f &&
              ((e = e.count() + 2),
              b(
                "contains " +
                  e +
                  " items (" +
                  B.oa(a) +
                  ", " +
                  B.oa(f) +
                  (2 < e ? ",... )" : ")")
              ));
            return D.l(a);
          };
        },
        choose: function (a) {
          var b = a.C.map(u);
          return function (a) {
            for (var c = 0; c < b.length; c += 2)
              if (r(b[c](a))) return b[c + 1](a);
            return D.R;
          };
        },
        coercedFn: function (a) {
          var b = p(a);
          return function (a) {
            return b(a);
          };
        },
        comment: ja,
        compareToInt: function (a) {
          var b = a.op,
            c = M.Ma.g(a.val),
            e = p(a);
          return function (d) {
            d = e(d);
            var f = d.next();
            if (null === f) return D.R;
            if (Q.ce(f)) return D.ka("ne" === b);
            if (null !== d.next())
              throw new q(
                "Value comparison only applicable to single values",
                "XPTY0004",
                a
              );
            return D.ka(Q.Vi(b, f.ab(c)));
          };
        },
        compareToString: function (a) {
          var b = a.op,
            c = p(a),
            e = M.T.g(a.val);
          return function (d) {
            var f = c(d),
              h = f.next();
            if (null === h) return D.R;
            if (null !== f.next())
              throw new q(
                "Value comparison only applicable to single values",
                "XPTY0004",
                a
              );
            return a.comp
              ? ((d = Q.Wg(a.comp, d)),
                ["=", "eq", "!=", "ne"].includes(b)
                  ? D.ka(Q.Fm(b, d.ia(h, e)))
                  : D.ka(Q.Vi(b, d.compare(h, e))))
              : D.ka(Q.Vi(b, h.ab(e)));
          };
        },
        compAtt: ja,
        compElem: ja,
        condCont: function (a) {
          var b = p(a);
          return function (a) {
            return b(a).filter(function (a) {
              if (la.da(a))
                switch (a.nodeType) {
                  case 9:
                  case 11:
                  case 1:
                    return a.hasChildNodes();
                  default:
                    return "" !== f(a).toString();
                }
              else
                return U(a) ? 0 < a.keys().length : "" !== M.T.aa(a).toString();
            });
          };
        },
        condSeq: function (a) {
          function b(a) {
            if (la.da(a)) {
              if ([9, 11].includes(a.nodeType)) return !a.hasChildNodes();
              if (3 === a.nodeType) return "" === a.nodeValue;
            } else {
              if (C.Ga(a)) return "" === M.T.aa(a).toString();
              if (Z(a))
                return !Ia(D.l(a)).some(function (a) {
                  return !b(a);
                });
            }
            return !1;
          }
          var c = a.C.map(function (a) {
            return { name: a.N, eval: u(a) };
          });
          return function (a) {
            var e = [],
              d = [],
              f = !0;
            c.map(function (c) {
              if ("onEmpty" === c.name) f && (e = c.eval(a).expand());
              else if ("onNonEmpty" === c.name) {
                var h = e.length;
                d.unshift(function () {
                  e.splice.apply(e, [h, 0].concat(c.eval(a).expand()));
                });
              } else
                c.eval(a).sa(function (a) {
                  b(a) || (f = !1);
                  e.push(a);
                });
            });
            f ||
              d.forEach(function (a) {
                a();
              });
            return D.K(e);
          };
        },
        conditionalSort: function (a) {
          var b = p(a),
            c = y(a),
            e = p(a.C[1]);
          return function (a) {
            return r(b(a)) ? c(a) : e(a);
          };
        },
        convert: function (a) {
          var b = C.te[a.to];
          b || B.ra("Unknown to-type " + a.to);
          var c = p(a);
          return O(a, "p")
            ? function (a) {
                return c(a).Ia(function (a) {
                  return C.lk(a, b.name);
                });
              }
            : function (a) {
                return c(a).Ia(b.aa);
              };
        },
        copy: ja,
        copyOf: ja,
        currentGroup: function (a) {
          return function (b) {
            if (b && b.rf) return D.K(b.rf);
            throw new q("There is no current group", "XTDE1061", a);
          };
        },
        currentGroupingKey: function (a) {
          return function (b) {
            if (b && b.sf) return D.K(b.sf);
            throw new q("There is no current grouping key", "XTDE1071", a);
          };
        },
        cvUntyped: function (a) {
          var b = p(a),
            c = C.te[a.to],
            e = c.aa,
            d = "string" === c.name;
          return function (f) {
            return b(f).Ia(function (b) {
              if (M.za.matches(b) && "float" === c.name)
                throw new q(
                  "xs:double may not be promoted to xs:float",
                  "XTTE0570",
                  a
                );
              if (M.Ua.matches(b) || (d && M.kc.matches(b)))
                try {
                  return e(b);
                } catch (Oa) {
                  if ("FODT0001" === Oa.code || !a.diag) throw Oa;
                  b = m(a.diag);
                  throw new q(Oa.message, b.code, a);
                }
              else return b;
            });
          };
        },
        data: function (a) {
          var b = p(a);
          return function (a) {
            return b(a).Ya(l);
          };
        },
        dbl: function (a) {
          var b = M.za.g(a.val);
          return function () {
            return D.l(b);
          };
        },
        dec: function (a) {
          var b = Ha(a.val);
          return function () {
            return D.bk(b);
          };
        },
        doc: ja,
        docOrder: function (a) {
          var b = p(a);
          return function (a) {
            return la.jg(b(a));
          };
        },
        dot: function (a) {
          return function (b) {
            b.Wc("XPDY0002", ". (dot)", a);
            return D.l(b.lb());
          };
        },
        elem: ja,
        empty: function () {
          return function () {
            return D.R;
          };
        },
        emptyTextNodeRemover: function (a) {
          var b = p(a);
          return function (a) {
            return b(a).filter(function (a) {
              return !(la.da(a) && 3 === a.nodeType && "" === a.textContent);
            });
          };
        },
        error: function (a) {
          return function () {
            throw new q(a.message, a.code, a);
          };
        },
        evaluate: function (b) {
          var e = {
              language: "XSLT",
              contextType: { o: "1", p: "", code: "1" },
            },
            d = u(L(b, "xpath")),
            f = u(L(b, "cxt")),
            h = u(L(b, "sa")),
            g = u(L(b, "nsCxt")),
            k = w(b, "withParam").map(function (a) {
              return { name: M.T.g(a.name), eval: p(a) };
            }),
            x = u(L(b, "wp"));
          return function (p) {
            var l = d(p).next().toString(),
              m = f ? f(p) : D.R,
              t = new cb();
            k.forEach(function (a) {
              t.Ta(a.name, a.eval(p).expand());
            });
            x &&
              x(p)
                .next()
                .Cb(function (a) {
                  if (!M.X.matches(a.k))
                    throw new q(
                      "Parameter names in xsl:evaluate/@with-params map must be QNames:" +
                        a.k.toString(),
                      "XTTE3165",
                      b
                    );
                  t.Ta(a.k, a.v);
                });
            t = D.l(t);
            if (h) {
              var r = h(p).next().toString();
              if (c(r))
                throw new q(
                  "Saxon-JS does not support schema-aware evaluation",
                  "XTDE1665",
                  b
                );
            }
            (r = b.as) && (e.requiredType = r.toString());
            (r = b.dxns) &&
              "http://www.w3.org/1999/xhtml" !== r.toString() &&
              (e.xpathDefaultNamespace = r.toString());
            var u = {};
            if (g) {
              r = g(p);
              var Ga = r.next();
              if (null === Ga || null !== r.next() || !la.da(Ga))
                throw new q(
                  "xsl:evaluate/@namespace-context must evaluate to a single node",
                  "XTTE3170",
                  b
                );
              u[""] = "";
              G.De(Ga).forEach(function (a) {
                return (u[a.prefix] = a.uri);
              });
              e.xpathDefaultNamespace = u[""];
            } else u = fa(b);
            var H = {};
            Ga = r = !1;
            var y = {},
              v = L(b, "options");
            if (v) {
              v = a(v, p).next();
              var w = M.T.g("var-slots");
              v.Xa(w) &&
                v.get(w)[0].Cb(function (a) {
                  H[a.k.ha()] = ia(a.v);
                });
              w = M.T.g("allow-empty");
              v.Xa(w) && (r = v.get(w)[0].value);
              w = M.T.g("isStatic");
              v.Xa(w) && (Ga = v.get(w)[0].value);
              w = M.T.g("staticContext");
              v.Xa(w) &&
                v.get(w)[0].Cb(function (a) {
                  y[a.k.toString()] = ia(a.v, !0);
                });
            }
            e.params = t;
            e.namespaces = u;
            e.slotMap = H;
            e.allowEmpty = r;
            e.staticTyping = !0;
            e.isStatic = Ga;
            e.staticContext = y;
            e.dynamicEval = !0;
            (r = L(b, "baseUri")) &&
              (e.staticBaseURI = a(r, p).next().toString());
            (r = Y(b, "defaultCollation")) && (e.defaultCollation = r);
            return wb.find("SaxonJS").XPath.evaluateXDM(l, m, p, e);
          };
        },
        every: function (a) {
          var b = parseInt(a.slot, 10),
            c = p(a),
            e = y(a);
          return function (a) {
            var d = c(a);
            return D.ka(
              !d.some(function (c) {
                a.Ha[b] = [c];
                return !r(e(a));
              })
            );
          };
        },
        except: function (a) {
          var b = p(a),
            c = y(a);
          return function (a) {
            return D.Rm(b(a), c(a), la.qc);
          };
        },
        false: function () {
          return function () {
            return D.ka(!1);
          };
        },
        filter: function (a) {
          var b = p(a),
            c = y(a);
          return O(a, "i")
            ? function (a) {
                var e = b(a);
                a = c(a).expand();
                if (1 === a.length && M.numeric.matches(a[0])) {
                  var d = a[0].J();
                  if (e instanceof D.K) return D.l(e.expand()[d - 1] || null);
                  var f = D.Da(e);
                  return f.filter(function () {
                    return f.position === d;
                  });
                }
                return r(D.K(a)) ? e : D.R;
              }
            : function (e) {
                var d = b(e),
                  f = e.ja(!1);
                f.focus = D.Da(d);
                e = O(a, "p")
                  ? function () {
                      var a = c(f).expand();
                      return 1 === a.length && M.numeric.matches(a[0])
                        ? f.focus.position === a[0].J()
                        : r(D.K(a));
                    }
                  : function () {
                      return r(c(f));
                    };
                return f.focus.filter(e);
              };
        },
        first: function (a) {
          var b = p(a);
          return function (a) {
            return D.l(b(a).next());
          };
        },
        flt: function (a) {
          var b = M.qd.g(a.val);
          return function () {
            return D.l(b);
          };
        },
        fn: function (a) {
          var b = Fb[a.name];
          b || h(a.name + "()", a);
          var c = (a.C || []).map(u);
          return function (e) {
            var d = c.map(function (a) {
              return a(e);
            });
            return b(d, e, a);
          };
        },
        fnCoercer: function (a) {
          var b = p(a),
            c = J.Kd(a.to),
            e = c.ca,
            d = { alphaTree: c.ea() };
          return function (f) {
            return b(f).Ia(function (b) {
              if (!(b instanceof nb.gb || b instanceof mb || b instanceof cb)) {
                var f = m(a.diag);
                throw new q(
                  "Required item type of " +
                    f.required +
                    " is " +
                    c.toString() +
                    "; supplied value is " +
                    B.oa(b),
                  f.code,
                  a
                );
              }
              f = b instanceof nb.gb ? b.arity : 1;
              if ((e instanceof I.re ? e.wf() : []).length !== f)
                throw (
                  ((f = m(a.diag)),
                  new q(
                    "Required item type of " +
                      f.required +
                      " is " +
                      c.toString() +
                      "; supplied value is " +
                      B.oa(b),
                    f.code,
                    a
                  ))
                );
              return new nb.zk(d, b);
            });
          };
        },
        fnRef: function (a) {
          var b = a.name;
          b = /^Q{/.test(b) ? M.X.rb(b) : M.X.xa("", F.cb, b);
          var c = parseInt(a.arity, 10),
            e = wb.find("SaxonJS").XPath;
          return function (d) {
            var f = d.ja(!0);
            f.Tb = !0;
            if ((f = e.getFnSignature(b, c, f)))
              return (
                (d = f.isUserFunction
                  ? new nb.jj(f, d)
                  : b.uri === F.Rd
                  ? new nb.dj(f, b, a)
                  : new nb.Ih(f, b, c, a, d)),
                D.l(d)
              );
            throw new q(
              "Reference to an unknown function and/or arity " +
                b.ha() +
                "#" +
                c,
              "XPST0017",
              a
            );
          };
        },
        follows: function (a) {
          var b = K(a, function (a, b) {
            return M.Ea.Dd(0 < la.qc(a, b));
          });
          return function (a) {
            return D.l(b(a));
          };
        },
        for: function (a) {
          var b = parseInt(a.slot, 10),
            c = p(a),
            e = y(a);
          return function (a) {
            return c(a).Ya(function (c) {
              a.Ha[b] = [c];
              return e(a);
            });
          };
        },
        forEach: function (a) {
          var b = p(a),
            c = y(a);
          return function (a) {
            var e = a.ja(!1);
            e.focus = D.Da(b(a));
            e.Xb = null;
            return e.focus.Ya(function () {
              return c(e);
            });
          };
        },
        forEachGroup: ja,
        fork: d,
        functionCall: function (a) {
          h(a.name + "()", a);
        },
        gc: e,
        gc10: function (a) {
          var b = p(a),
            c = y(a);
          return function (e) {
            var d = b(e).expand(),
              f = c(e).expand();
            1 === d.length && M.Ea.matches(d[0])
              ? (f = [M.Ea.Dd(r(D.K(f)))])
              : 1 === f.length && M.Ea.matches(f[0])
              ? (d = [M.Ea.Dd(r(D.K(d)))])
              : ((d = k(d)), (f = k(f)));
            e = Q.Wg(a.comp, e);
            var h = a.op;
            "=" !== h && "!=" !== h
              ? ((d = D.K(d).Ia(C.O.numeric.qh).expand()),
                (f = D.K(f).Ia(C.O.numeric.qh).expand()))
              : (e = Q.fo(e));
            return Q.Oj(D.K(d), f, h, e, a);
          };
        },
        gcEE: e,
        gVarRef: function (a) {
          return function (c) {
            var e = xa(a, c),
              d = e.actor,
              f = d.name;
            if (e.value === b)
              throw (
                ((c = new q("Circularity in global variable " + f, "XTDE0640")),
                (c.yi = !0),
                c)
              );
            if (null === e.value || "undefined" === typeof e.value) {
              if ("globalParam" === d.N) {
                var h = c.fixed.options.Em,
                  g = C.O.X.rb(f);
                if (h.Xa(g))
                  (h = h.get(g)),
                    B.assert(Array.isArray(h)),
                    (g = J.Kd(d.as || "*")),
                    (h = T(h, g, function () {
                      return "stylesheet parameter " + f;
                    })),
                    B.assert(Array.isArray(h)),
                    (e.value = h);
                else {
                  if (O(d, "r"))
                    throw new q(
                      "Parameter " + f + " is required",
                      "XTDE0050",
                      d
                    );
                  if (O(d, "i"))
                    throw new q(
                      "Parameter " + f + " cannot be empty",
                      "XTDE0700",
                      d
                    );
                  d.C || (e.value = []);
                }
              }
              if (null === e.value || "undefined" === typeof e.value) {
                h = !d.parentNode.parentNode.parentNode;
                g = c.ja(!0);
                g.Ja = "variable";
                g.Mi(null);
                g.$b = {};
                g.Xb = null;
                g.La = e;
                g.focus = h ? D.jc(c.fixed.Ae) : null;
                try {
                  var k = p(d);
                  e.value = b;
                  e.value = k(g).expand();
                } catch (kc) {
                  throw (
                    (kc instanceof q &&
                      ((e.value = []),
                      M.X.rb(f).uri !== F.Jc + "generated-variable" &&
                        (kc.yi = !0)),
                    kc)
                  );
                }
                g.jk();
              }
            }
            return D.K(e.value);
          };
        },
        homCheck: function (a) {
          var b = p(a);
          return function (c) {
            c = new D.fd(b(c));
            var e = c.Oa();
            if (null === e) return D.R;
            var d = la.da(e);
            c = c.filter(function (b) {
              if (la.da(b) !== d)
                throw new q(
                  "Cannot mix nodes and atomic values in the result of a path expression",
                  "XPTY0018",
                  a
                );
              return !0;
            });
            return d ? la.jg(c) : c;
          };
        },
        ifCall: function (a) {
          var b = M.X.rb(a.name);
          if ("schedule-action" === b.local) {
            var c = p(a),
              e = y(a),
              d = u(a.C[3]);
            return function (b) {
              function f() {
                u(l).expand();
              }
              var h = 4 === a.C.length;
              if (4 < a.C.length)
                throw new q(
                  "Only attributes @wait, @document and @http-request are available on ixsl:schedule-action in this version of Saxon-JS",
                  "SXJS0002",
                  a
                );
              var g = c(b).next().J(),
                k = e(b).next(),
                x = h ? d(b).next() : null;
              h = null;
              var l = b.ja(!0);
              l.Zf();
              var m = a.C[2],
                t = xa(m, b, "template"),
                r = t.actor;
              null === x &&
                (b.ee() ||
                  ((l.focus = new D.Da(new D.l(b.lb()))), l.focus.next()),
                (l.sc = null),
                (l.La = t),
                (l.Ja = !1),
                ra(t.actor, l),
                z(m, b, l));
              var u = p(r);
              if (null !== x)
                h = Da.Uo(
                  x,
                  function (a) {
                    l.focus = new D.Da(new D.l(a[0]));
                    l.focus.next();
                    l.sc = null;
                    l.La = t;
                    l.Ja = !1;
                    ra(t.actor, l);
                    z(m, b, l);
                    f();
                  },
                  g
                );
              else if (null !== k)
                (k = k.toString().split(" ")),
                  (x = k.map(function (c) {
                    return Da.$c(c, P.yb(a, b));
                  })),
                  Da.Af()
                    ? ((h = Da.pn(x, b.fixed.Ah, f, g)),
                      (h = 1 === k.length ? h[x[0]] : h))
                    : ((g = x.map(function (a) {
                        var c = /(?:\.([^.]+))?$/.exec(a)[1],
                          e = ["json", "txt"].includes(c) ? "text" : "xml";
                        return wb
                          .find("SaxonJS")
                          .Lq({ location: a, type: e })
                          .then(function (c) {
                            try {
                              return (
                                (("xml" === e ? b.fixed.tc : b.fixed.Od)[a] =
                                  c),
                                f(),
                                Promise.resolve(null)
                              );
                            } catch (Ye) {
                              return (
                                (c = Promise.reject(Ye)), b.fixed.sp.push(c), c
                              );
                            }
                          });
                      })),
                      (g = Promise.all(g)),
                      b.fixed.Lg.push(g));
              else if (0 !== g)
                if (Da.Af()) setTimeout(f, g);
                else
                  throw new q(
                    "ixsl:schedule-action/@wait is not supported on Node.js",
                    "SXJS0002"
                  );
              return h ? D.l(h) : D.R;
            };
          }
          var f = (a.C || []).map(u);
          return function (c) {
            var e = f.map(function (a) {
              return a(c);
            });
            return Qa(b.uri, b.local, e, c, a);
          };
        },
        indexedFilter2: function (a) {
          var b = u(L(a, "base")),
            c = u(L(a, "use")),
            e = u(L(a, "search"));
          return function (d) {
            var f = Q.Wg(a.comp, d),
              h = d.ja(!1);
            h.focus = D.Da(b(d));
            var g = e(d).expand();
            return h.focus.filter(function () {
              var b = c(h);
              return Q.Oj(b, g, "=", f, a).next().value;
            });
          };
        },
        inlineFn: function (a) {
          var b = parseInt(a.arity, 10),
            c = { maxArgs: b, minArgs: b, sig: a.sT, alphaTree: Ua(a.sT) };
          return function (b) {
            return D.l(new nb.Xm(c, a, b));
          };
        },
        instance: function (a) {
          var b = p(a),
            c = J.Kd(a.of);
          return function (a) {
            a = b(a).expand();
            return D.ka(c.matches(a));
          };
        },
        int: function (a) {
          var b = M.Ma.g(a.val);
          return function () {
            return D.l(b);
          };
        },
        intersect: function (a) {
          var b = p(a),
            c = y(a);
          return function (a) {
            return D.Ym(b(a), c(a), la.qc);
          };
        },
        intRangeTest: function (a) {
          var b = p(a);
          a = a.C;
          var c = u(a[1]),
            e = u(a[2]);
          return function (a) {
            var d = c(a).next(),
              f = e(a).next();
            if (!d || !f) return D.ka(!1);
            var h = d.J(),
              g = f.J();
            a = b(a).some(function (a) {
              a = a.value;
              return a >= h && a <= g;
            });
            return D.ka(a);
          };
        },
        is: function (a) {
          var b = K(a, function (a, b) {
            return M.Ea.Dd(la.isSameNode(a, b));
          });
          return function (a) {
            return D.l(b(a));
          };
        },
        isLast: function (a) {
          var b = "1" === a.test;
          return function (a) {
            return D.ka((a.focus.position === a.focus.zi()) === b);
          };
        },
        iterate: ja,
        javaCall: function (a) {
          var b = M.X.rb(a.name),
            c = (a.C || []).map(u);
          return function (e) {
            var d = c.map(function (a) {
              return a(e);
            });
            return Qa(b.uri, b.local, d, e, a);
          };
        },
        lastOf: function (a) {
          var b = p(a);
          return function (a) {
            var c = D.fd(b(a));
            return c.filter(function () {
              return null === c.Oa();
            });
          };
        },
        let: function (a) {
          var b = p(a),
            c = y(a),
            e = parseInt(a.slot, 10);
          return function (a) {
            var d = a.Ja;
            a.Ja = "variable";
            var f = b(a).expand();
            a.Ja = d;
            a.Ha[e] = f;
            return c(a);
          };
        },
        literal: d,
        lookup: function (a) {
          var b = p(a),
            c = y(a);
          return function (e) {
            function d(a) {
              k = k.concat(p[a.toString()]);
            }
            function f(a) {
              k = k.concat(p.get(a));
            }
            function h(b) {
              return function (c) {
                if (!M.Ma.matches(c))
                  throw new q(
                    "Array lookup key must be of type xs:integer; supplied value is " +
                      B.oa(c),
                    "XPTY0004",
                    a
                  );
                c = c.J();
                if (1 > c || c > b.length)
                  throw new q(
                    "Array index (" +
                      c +
                      ") out of bounds (1 to " +
                      b.length +
                      ")",
                    "FOAY0001",
                    a
                  );
                k = k.concat(b[c - 1]);
              };
            }
            var g = b(e),
              k = [],
              p;
            e = c(e).expand();
            var x = a.tuple;
            if (null != x)
              for (
                var l = x.split(/\s+/), m = sa(e), t = m.next();
                !t.done;
                t = m.next()
              )
                if (((t = t.value), -1 === l.indexOf(t.toString())))
                  throw new q(
                    "Tuple lookup key must be one of  " +
                      x +
                      ". Supplied key is " +
                      t.toString(),
                    "XPTY0004",
                    a
                  );
            for (; null !== (p = g.next()); )
              if (P.isArray(p)) e.forEach(h(p.value));
              else if (P.isMap(p)) e.forEach(f);
              else if (null != x && P.Yl(p)) e.forEach(d);
              else
                throw new q(
                  "The source for a lookup operator (?) must be of type array() or map(); supplied value is " +
                    B.oa(p),
                  "XPTY0004",
                  a
                );
            return D.K(k);
          };
        },
        lookupAll: function (a) {
          var b = p(a);
          return function (c) {
            function e(a) {
              f = f.concat(a);
            }
            function d(a) {
              f = f.concat(h.get(a));
            }
            c = b(c);
            for (var f = [], h; null !== (h = c.next()); )
              if (P.isArray(h)) h.value.forEach(e);
              else if (P.isMap(h)) h.keys().forEach(d);
              else
                throw new q(
                  "The source for a lookup operator ('?') must be of type array() or map(); supplied value is " +
                    B.oa(h),
                  "XPTY0004",
                  a
                );
            return D.K(f);
          };
        },
        lookupTuple: function (a) {
          var b = p(a),
            c = a.key;
          return function (e) {
            e = b(e);
            for (var d = [], f; null !== (f = e.next()); )
              if (null != c && P.Yl(f)) d = d.concat(f[c]);
              else
                throw new q(
                  "The source for a lookupTuple operator (?) must be of type tuple(); supplied value is " +
                    B.oa(f),
                  "XPTY0004",
                  a
                );
            return D.K(d);
          };
        },
        map: function (a) {
          var b = (a.C || []).map(u);
          return function (c) {
            var e = new cb(),
              d = null;
            b.forEach(function (b) {
              if (null === d) d = b(c).next();
              else {
                if (e.Xa(d))
                  throw new q(
                    "Duplicate map constructor entries for key:" + B.oa(d),
                    "XQDY0137",
                    a
                  );
                b = b(c).expand();
                e.Ta(d, b);
                d = null;
              }
            });
            return D.l(e);
          };
        },
        merge: function (a) {
          return function (b) {
            return Gb.Vo(a, b);
          };
        },
        mergeAdj: function (a) {
          var b = p(a);
          return function (a) {
            for (var c = [], e = b(a), d = !1, f; null !== (f = e.next()); ) {
              var h = la.da(f) && 3 === f.nodeType;
              (h && "" === f.nodeValue) ||
                (d && h
                  ? c.push(a.wa.createTextNode(c.pop().nodeValue + f.nodeValue))
                  : ((d = h), c.push(f)));
            }
            return D.K(c);
          };
        },
        message: function (a) {
          var b = u(L(a, "terminate")),
            e = u(L(a, "error"));
          return function (d) {
            var f = d.Ja;
            d.Ja = "variable";
            var h = b(d).next(),
              g = e(d).next().toString();
            try {
              g = S(a, g, !0).ha();
            } catch (fb) {
              g = "Q{http://www.w3.org/2005/xqt-errors}XTMM9000";
            }
            try {
              var k = c(h.toString());
            } catch (fb) {
              throw new q(
                "The terminate attribute of xsl:message must be yes|no|true|false|1|0",
                "XTDE0030",
                a
              );
            }
            h = Cb.ae(d);
            var p = new Cb.Rg(h);
            try {
              Bb.push(a.C[0], d, Bb.yf(p));
            } catch (fb) {
              p.append(
                C.O.T.g(
                  "xsl:message evaluation at " +
                    B.location(a) +
                    " failed: " +
                    fb
                )
              );
            }
            h = h.rg().next();
            d.fixed.options.Dj || (d.fixed.options.Dj = Da.Il());
            try {
              d.Gn(g), d.fixed.options.Dj(h, g);
            } catch (fb) {}
            if (k) throw (B.Gb(d.ui()), new q("Terminated with " + h, g, a));
            d.Ja = f;
            return D.R;
          };
        },
        minus: function (a) {
          var b = p(a);
          return function (a) {
            return b(a).Ia(function (a) {
              return a.Gi();
            });
          };
        },
        namespace: function (a) {
          var b = p(a),
            c = y(a);
          return function (e) {
            var d = b(e).next().toString();
            e = c(e).next().toString();
            if ("" !== d && !Na.Yc(d))
              throw new q("Prefix " + d + " is not an NCName", "XTDE0920", a);
            if ("" === e)
              throw new q("Namespace is zero-length", "XTDE0930", a);
            if ("xmlns" === d)
              throw new q("Disallowed prefix xmlns", "XTDE0920", a);
            if ("http://www.w3.org/2000/xmlns/" === e)
              throw new q("Disallowed namespace " + e, "XTDE0905", a);
            if (!t(e)) throw new q("Invalid namespace " + e, "XTDE0905", a);
            if (("xml" === d) !== (e === F.xml))
              throw new q(
                "The xml namespace prefix and uri can only be used together",
                "XTDE0925",
                a
              );
            return D.l(new ab(d, e));
          };
        },
        nextIteration: ja,
        nextMatch: ja,
        nodeNum: function (a) {
          return function (b) {
            return Db.bp(a, b);
          };
        },
        null: function (a) {
          return function () {
            return D.l(a);
          };
        },
        numSeqFmt: function (a) {
          return function (b) {
            return Db.cp(a, b);
          };
        },
        onEmpty: d,
        onNonEmpty: d,
        or: function (a) {
          var b = p(a),
            c = y(a);
          return function (a) {
            return D.ka(r(b(a)) || r(c(a)));
          };
        },
        origFC: function (a) {
          a.C || (a.C = []);
          var b = a.C.map(u);
          return function (c) {
            if (!a._target) {
              var e = a.pack,
                d = S(a, a.name, !1).ha(),
                f = a.C.length,
                h = c.fixed.qb;
              Object.keys(h).forEach(function (b) {
                b = h[b];
                b.im.name === e &&
                  b.name === d &&
                  b.actor &&
                  "function" === b.actor.N &&
                  w(b.actor, "arg").length === f &&
                  (a._target = b.id);
              });
            }
            var g = c.fixed.qb[a._target],
              k = b.map(function (a) {
                return a(c).expand();
              });
            return Ja(a, g, k, c);
          };
        },
        param: function (a) {
          var b = a.name,
            c = parseInt(a.slot, 10),
            e = O(a, "t"),
            d = u(L(a, "select")),
            f = u(L(a, "conversion"));
          return function (h) {
            var g = e ? h.cd : h.He,
              k = C.O.X.rb(b);
            if (g.Xa(k))
              (g = g.get(k)), "" !== J.Kd(a.as || "*").ea().p && (g = Fa(g));
            else if (d && !O(a, "r"))
              (k = h.Ja), (h.Ja = "xsl:param"), (g = d(h).expand()), (h.Ja = k);
            else
              throw new q(
                "Required parameter $" + b + " not supplied",
                "XTDE0700",
                a
              );
            B.assert(Array.isArray(g));
            h.Ha[c] = g;
            if (f)
              try {
                h.Ha[c] = f(h).expand();
              } catch (fb) {
                throw new q(
                  "Supplied value for parameter $" +
                    b +
                    " could not be converted to required type",
                  "XTTE0590",
                  a
                );
              }
            return D.R;
          };
        },
        partialApply: function (a) {
          for (
            var b = p(a), c = [], e = [], d = 0, f = a.C.length - 1, h = 1;
            h < a.C.length;
            h++
          ) {
            var g = a.C[h];
            "null" === g.N ? (d++, c.push(Ua(g.sT || "*"))) : (e[h - 1] = u(g));
          }
          return function (a) {
            for (var h = b(a).next(), g = [], k = 0; k < f; k++)
              e[k] && (g[k] = e[k](a).expand());
            a = { o: "1", p: "F", r: h.zc.alphaTree.r, a: c };
            return D.l(
              new nb.Pm(
                { minArgs: d, maxArgs: d, sig: Wa(a), alphaTree: a },
                h,
                g
              )
            );
          };
        },
        precedes: function (a) {
          var b = K(a, function (a, b) {
            return M.Ea.Dd(0 > la.qc(a, b));
          });
          return function (a) {
            return D.l(b(a));
          };
        },
        procInst: ja,
        qName: function (a) {
          var b = M.X.xa(a.pre, a.uri, a.loc);
          return function () {
            return D.l(b);
          };
        },
        range: function (a) {
          var b = M.Ma.g(a.from),
            c = M.Ma.g(a.to);
          return function () {
            return v(b, c);
          };
        },
        resultDoc: function (b) {
          return function (c) {
            try {
              if (c.Ja)
                throw new q(
                  "Cannot call xsl:result-document while evaluating " + c.Ja,
                  "XTDE1480",
                  b
                );
              var e = za(b, c),
                d = {},
                f = function () {},
                h = L(b, "format");
              if (h) {
                var k = a(h, c).next().toString();
                k = S(b, k, !0).ha();
                var p = e.dk[k];
                if (!p)
                  throw new q("Unknown xsl:output format " + k, "XTDE1460");
                for (
                  var l, t, m = sa(p.C), r = m.next();
                  !r.done;
                  r = m.next()
                ) {
                  var u = r.value,
                    y = u.name;
                  "parameter-document" === y
                    ? (l = u.value)
                    : "Q{http://saxon.sf.net/}parameter-document-base-uri" === y
                    ? (t = u.value)
                    : (d[y] =
                        "use-character-maps" === y
                          ? Eb.Yi(y, u.value, e)
                          : Eb.Zi(y, u.value));
                }
                if (l) {
                  var v = Da.$c(l, t),
                    w = Ab.ve(v, c);
                  Eb.Ki(w.documentElement, d);
                }
              }
              g(b.global, d, e);
              g(b.local, d, e);
              var z = sa(b.C);
              for (r = z.next(); !r.done; r = z.next()) {
                var A = r.value,
                  H = A.role.replace(/^Q{\}/, "");
                if (
                  !["href", "format", "content", "parameter-document"].includes(
                    H
                  )
                ) {
                  "output-version" === H && (H = "version");
                  var K = a(A, c).next().toString();
                  K =
                    "use-character-maps" === H
                      ? Eb.Yi(H, K, e)
                      : Eb.Zi(H, K, N(b, !0));
                  "undefined" !== typeof K && (d[H] = Eb.Ji(H, K, d[H]));
                }
              }
              var ma = L(b, "Q{}parameter-document");
              if (null !== ma) {
                var E = a(ma, c).next().toString(),
                  Ga = Da.$c(E, P.yb(b, c)),
                  O = Ab.ve(Ga, c);
                Eb.Ki(O.documentElement, d);
              }
              var Z = c.fixed.Ad,
                xa = L(b, "href"),
                U = null === xa ? "" : a(xa, c).next().toString();
              var X = Z ? Da.newURL(U, Z) : la.Bf(U) ? Da.newURL(U) : U;
              var ja = X.toString();
              if (c.fixed.Ad && ja === c.fixed.Ad.toString() && 1 < c.he.length)
                throw new q(
                  "Cannot revert to the original output destination while writing a secondary result",
                  "XTDE1490"
                );
              var M;
              M ||
                (M = (!Da.Af() && !c.Db) || c.fixed.xi ? "file" : "html-page");
              if ("html-page" !== M) {
                if (c.fixed.options.ki) {
                  var T = c.fixed.options.ki(X);
                  if (!T)
                    throw new q(
                      "deliverResultDocument() result has no destination"
                    );
                  M = T.destination;
                } else
                  throw new q("No deliverResultDocument function supplied");
                if ("undefined" !== typeof c.fixed.tc[ja])
                  throw new q(
                    "A result document with URI " +
                      ja +
                      " is attempting to write to a document already read",
                    "XTDE1500",
                    b
                  );
                if (c.fixed.qm[ja])
                  throw new q(
                    "A result document with URI " +
                      ja +
                      " has already been created",
                    "XTDE1490",
                    b
                  );
                c.fixed.qm[ja] = !0;
              }
              if (["file", "serialized"].includes(M)) {
                B.Gb("Writing to " + X, 2);
                var oa = new Eb.pj();
                var Y = Eb.Pl(d, oa, c);
                f = function () {
                  var a = d.encoding || "utf-8";
                  T.save(X, [C.O.T.g(oa.toString())], a);
                };
              } else if ("document" === M) {
                var Ja = Cb.ae(c);
                Y = new Cb.Rg(Ja);
                f = function () {
                  var a = Ja.rg().next();
                  a && (a._saxonBaseUri = X.toString());
                  T.save(X, Ja.result());
                };
              } else if ("html-page" === M) {
                e = !1;
                var Ba = d.method || "appendContent";
                "Q{http://saxonica.com/ns/interactiveXSLT}replace-content" ===
                  Ba && ((Ba = "replaceContent"), (e = !0));
                var fa = "#" === U.charAt(0) || "?." === U,
                  V = Cb.ae(c);
                Y = new Cb.Rg(V);
                c.Mi(U);
                var Ka = x(L(b, "content"), c, fa),
                  ka = function (a, b) {
                    La.pb(a).sa(function (a) {
                      b.appendChild(a);
                    });
                  };
                if (fa) {
                  if (!c.Db)
                    return (
                      B.Gb(
                        "Result document href=" +
                          U +
                          ": no master document available",
                        1
                      ),
                      D.R
                    );
                  var ra =
                    "?." === U ? c.lb() : c.Db.getElementById(U.substring(1));
                  if (!ra)
                    return (
                      B.Gb("Result document href=" + U + ": no such node", 1),
                      D.R
                    );
                  if ("?." === U && ra !== c.Db && ra.ownerDocument !== c.Db)
                    return (
                      B.Gb(
                        "Result document href=" +
                          U +
                          ": current node is not in master document",
                        1
                      ),
                      D.R
                    );
                  e && (ra.innerHTML = "");
                  f = function () {
                    ka(Ka, ra);
                    c.Db.xq = {};
                  };
                } else
                  throw new q(
                    "xsl:result-document/@href value in browser must be '?.' or '#frag'"
                  );
              } else {
                if ("raw" === M)
                  throw new q(
                    "Unsupported result-document destination " + M,
                    "FOXT0001"
                  );
                throw new q(
                  "Unsupported result-document destination " + M,
                  "XXXX9999"
                );
              }
              if ("html-page" !== M && ("" === U || X.toString() === Z)) {
                var ia = c.fixed.eo;
                ia && ia.Pp();
              }
              if ("html-page" !== M) {
                c.Mi(X.toString());
                var Va = L(b, "content"),
                  Fa = Bb.yf(Y);
                Bb.push(Va, c, Fa);
                Fa.close();
              }
              f();
              c.jk();
              return D.R;
            } catch (Ze) {
              aa(Ze, b);
            }
          };
        },
        root: function (a) {
          return function (b) {
            b.Wc("XPDY0002", "/", a);
            b = b.lb();
            if (!la.da(b))
              throw new q("Context item for '/' must be a node", "XPTY0020", a);
            var c = la.be(b);
            if (9 !== c.nodeType && 11 !== c.nodeType)
              throw new q(
                "Root node for '/' must be a document node",
                "XPDY0050",
                a
              );
            return D.l(la.be(b));
          };
        },
        sequence: d,
        slash: function (a) {
          var b = p(a),
            c = y(a);
          return function (a) {
            var e = a.ja(!1);
            e.focus = D.Da(b(a));
            return e.focus.Ya(function () {
              return c(e);
            });
          };
        },
        some: function (a) {
          var b = parseInt(a.slot, 10),
            c = p(a),
            e = y(a);
          return function (a) {
            var d = c(a);
            return D.ka(
              d.some(function (c) {
                a.Ha[b] = [c];
                return r(e(a));
              })
            );
          };
        },
        sort: function (a) {
          var b = Q.Kp(a);
          return function (c) {
            try {
              return b(c);
            } catch (Ta) {
              if (Ta instanceof q && "FOCH0002" === Ta.code)
                throw new q(Ta.message, "XTDE1035", a);
              if (Ta instanceof q && "XPTY0004" === Ta.code)
                throw new q(Ta.message, "XTDE1030", a);
              throw Ta;
            }
          };
        },
        sourceDoc: ja,
        str: function (a) {
          var b = a.val;
          return function () {
            return D.ua(b);
          };
        },
        subscript: function (a) {
          var b = p(a),
            c = y(a);
          return function (a) {
            var e = b(a),
              d = c(a).next();
            if ("ADI" === d.code) d = d.value;
            else if (d.ia(d.round(0))) d = C.O.Ma.aa(d).value;
            else return D.R;
            if (e instanceof D.K)
              return (
                (a = e.expand()[d - 1]), void 0 === a && (a = null), D.l(a)
              );
            a = e
              .Ia(function (a, b) {
                return b + 1 === d ? a : null;
              })
              .next();
            return D.l(a);
          };
        },
        supplied: function (a) {
          var b = parseInt(a.slot, 10);
          return function (a) {
            return D.K(a.Ha[b]);
          };
        },
        tail: function (a) {
          var b = parseInt(a.start, 10) - 1,
            c = p(a);
          return function (a) {
            var e = b;
            return c(a).filter(function () {
              return 0 >= e--;
            });
          };
        },
        tailCallLoop: d,
        to: function (a) {
          var b = p(a),
            c = y(a);
          return function (a) {
            var e = b(a).next();
            a = c(a).next();
            return null === e || null === a || 0 < e.ab(a) ? D.R : v(e, a);
          };
        },
        treat: function (a) {
          var b = I.Xc(a.as),
            c = b.ta(),
            e = p(a);
          return function (d) {
            return e(d).Ia(function (e) {
              if (c(e)) return e;
              var d = m(a.diag);
              throw new q(
                "Required item type of " +
                  d.required +
                  " is " +
                  b.toString() +
                  "; supplied value is " +
                  B.oa(e),
                d.code,
                a
              );
            });
          };
        },
        true: function () {
          return function () {
            return D.ka(!0);
          };
        },
        try: function (a) {
          var b = p(a),
            c = w(a, "catch");
          c.forEach(function (a) {
            var b = a.errors.split(" ").map(function (a) {
              if ("*" === a)
                return function () {
                  return !0;
                };
              if (/^\*:/.test(a)) {
                var b = a.substring(2);
                return function (a) {
                  return a.local === b;
                };
              }
              if (/}\*$/.test(a)) {
                var c = a.substring(2, a.length - 2);
                return function (a) {
                  return a.uri === c;
                };
              }
              var e = M.X.rb(a);
              return function (a) {
                return a.ia(e);
              };
            });
            a.test =
              1 === b.length
                ? b[0]
                : function (a) {
                    return b.some(function (b) {
                      return b(a);
                    });
                  };
          });
          return function (e) {
            try {
              return D.K(b(e).expand());
            } catch (Oa) {
              if (Oa instanceof q && !Oa.yi) {
                e.Yg = Oa;
                Oa.oe || Ea(Oa, a.C[0]);
                var d = Oa.code.match("^Q{")
                  ? M.X.rb(Oa.code)
                  : M.X.xa("", "http://www.w3.org/2005/xqt-errors", Oa.code);
                for (var f = 0; f < c.length; f++) {
                  var h = c[f];
                  if (h.test(d)) return p(h)(e);
                }
                throw Oa;
              }
              Oa instanceof q || (Error.Gj && Error.Gj());
              throw Oa;
            }
          };
        },
        ufCall: function (a) {
          var b = (a.C || []).map(u);
          return function (c) {
            var e = xa(a, c, "function"),
              d = b.map(function (a) {
                return a(c).expand();
              });
            return Ja(a, e, d, c);
          };
        },
        ufRef: function (a) {
          var b = a.name;
          b = /^[a-z]+:/.test(b)
            ? S(a, b, !0)
            : /^Q\{/.test(b)
            ? M.X.rb(b)
            : M.X.xa("", F.cb, b);
          var c = parseInt(a.arity, 10),
            e = wb.find("SaxonJS").XPath;
          return function (a) {
            var d = e.getFnSignature(b, c, a);
            if (d && d.isUserFunction) return (a = new nb.jj(d, a)), D.l(a);
            B.ra("Named user function " + b + "#" + c + " not found");
          };
        },
        union: function (a) {
          var b = p(a),
            c = y(a);
          return function (a) {
            return D.qj(b(a), c(a), la.qc);
          };
        },
        useAS: ja,
        valueOf: ja,
        varRef: function (a) {
          var b = parseInt(a.slot, 10);
          return function (a) {
            return D.K(a.Ha[b]);
          };
        },
        vc: function (a) {
          function b(a) {
            return null === a ? null : M.Ua.matches(a) ? M.T.aa(a) : a;
          }
          var c = a.op,
            e = a.onEmpty,
            d = p(a),
            f = y(a);
          return function (h) {
            var g = d(h),
              k = f(h),
              p = b(g.next()),
              x = b(k.next());
            if (null === p || null === x) return e ? D.ka("1" === e) : D.R;
            if (null !== g.next() || null !== k.next())
              throw new q(
                "Value comparison only applicable to single values",
                "XPTY0004",
                a
              );
            if (
              (C.Xl(p.type, "numeric") && isNaN(p.value)) ||
              (C.Xl(x.type, "numeric") && isNaN(x.value))
            )
              return D.ka("ne" === c);
            h = Q.Wg(a.comp, h);
            return ["=", "eq", "!=", "ne"].includes(c)
              ? D.ka(Q.Fm(c, h.ia(p, x)))
              : D.ka(Q.Vi(c, h.compare(p, x)));
          };
        },
      },
      bb = 0,
      V = "                       ";
    oa.prototype = {
      value: null,
      Xa: function (a) {
        return "undefined" !== typeof this.value[a];
      },
      get: function (a) {
        return Ya(this.value[a]);
      },
      Ta: function () {
        throw new q("inSituPut() not allowed for JSValue", "SXJS0005");
      },
      put: function () {
        throw new q("put() not allowed for JSValue", "SXJS0005");
      },
      remove: function () {
        throw new q("remove() not allowed for JSValue", "SXJS0005");
      },
      keys: function () {
        throw new q("keys() not allowed for JSValue", "SXJS0005");
      },
      Cb: function () {
        throw new q("forEach() not allowed for JSValue", "SXJS0005");
      },
      pf: function () {
        throw new q("conforms() not allowed for JSValue", "SXJS0005");
      },
      oa: function () {
        return "JSValue " + B.oa(this.value);
      },
    };
    ka.prototype = {
      value: null,
      oa: function () {
        return "XDMValue " + B.oa(this.value);
      },
    };
    return {
      qa: L,
      bi: z,
      Wd: l,
      un: k,
      zq: function () {
        return "ancestor ancestor-or-self attribute child descendant descendant-or-self following following-sibling namespace parent preceding preceding-sibling self preceding-or-ancestor".split(
          " "
        );
      },
      Aj: ra,
      Ec: w,
      gl: T,
      rc: ia,
      ah: za,
      Rj: xa,
      dg: r,
      Kb: p,
      ml: y,
      Fc: u,
      escape: function (a, b) {
        var c = "";
        Ma.Bc(a).forEach(function (a) {
          var e = Ma.ld([a]);
          c += b(a, e) ? encodeURIComponent(e) : e;
        });
        return c;
      },
      evaluate: a,
      Zd: function (b, c) {
        return null === b ? D.R : a(b, c);
      },
      Sn: function (a, b, c, e) {
        var d = Fb[a.local];
        d || h(a.toString() + "()", e);
        return d(
          b.map(function (a) {
            return D.K(a);
          }),
          c,
          e
        );
      },
      Tn: function (a, b, c, e) {
        return Qa(
          a.uri,
          a.local,
          b.map(function (a) {
            return D.K(a);
          }),
          c,
          e
        );
      },
      flatten: Ia,
      Ml: Y,
      Mq: function (a) {
        if ("undefined" !== typeof a)
          return ma(a, "module", 20) + "#" + ma(a, "line", 10);
      },
      Gc: O,
      De: fa,
      isArray: Z,
      isMap: U,
      ng: X,
      Yl: function (a) {
        return a instanceof Hb;
      },
      Mo: c,
      hj: oa,
      hr: h,
      yp: m,
      Gp: function (b) {
        a = b ? Ka : Ba;
      },
      rp: function (a) {
        Qa = a;
      },
      nr: aa,
      yb: A,
      Gg: Fa,
      qk: S,
      Hg: N,
      Im: function (a) {
        return "untypedAtomic" === a.type ? M.za.aa(a) : a;
      },
      Rp: t,
      Ob: Ya,
      wq: ka,
    };
  })();
  abstractNode = Node;
  HostPlatform = (function () {
    function a() {
      Math.trunc =
        Math.trunc ||
        function (a) {
          return 0 > a ? Math.ceil(a) : Math.floor(a);
        };
      Array.prototype.findIndex ||
        Object.defineProperty(Array.prototype, "findIndex", {
          value: function (a, b) {
            if (null === this || "undefined" == typeof this)
              throw new TypeError(
                "Array.prototype.findIndex called on null or undefined"
              );
            if ("function" !== typeof a)
              throw new TypeError("predicate must be a function");
            for (var c = Object(this), d = c.length >>> 0, l, m = 0; m < d; m++)
              if (((l = c[m]), a.call(b, l, m, c))) return m;
            return -1;
          },
          enumerable: !1,
          configurable: !1,
          writable: !1,
        });
      Array.prototype.includes ||
        Object.defineProperty(Array.prototype, "includes", {
          value: function (a) {
            if (null === this || "undefined" == typeof this)
              throw new TypeError(
                "Array.prototype.includes called on null or undefined"
              );
            return this.findIndex(function (b) {
              return b === a;
            });
          },
        });
      String.prototype.includes ||
        (String.prototype.includes = function (a, b) {
          "number" !== typeof b && (b = 0);
          return b + a.length > this.length ? !1 : -1 !== this.indexOf(a, b);
        });
    }
    var b = Resources,
      d,
      m = {
        name: "Browser",
        init: function () {
          a();
        },
        inBrowser: function () {
          return !0;
        },
        expose: function (a, b) {
          window[b] = a;
        },
        getPromise: function (a) {
          return new Promise(function (b, c) {
            var d = new XMLHttpRequest();
            d.open("GET", a);
            d.onload = function () {
              200 <= this.status && 300 > this.status
                ? b({
                    responseText: d.responseText,
                    contentType: d.getResponseHeader("Content-Type"),
                  })
                : c(new q(d.statusText + ": " + a, "SXJS0006"));
            };
            d.onerror = function () {
              c(new q("Document fetch failed: " + a, "SXJS0006"));
            };
            d.send(null);
          });
        },
        asyncGet: function (a, b, d) {
          var c = new XMLHttpRequest();
          c.open("GET", a, !0);
          0 !== d && (c.timeout = d);
          c.onload = function () {
            4 === c.readyState &&
              (200 === c.status
                ? b({
                    responseText: c.responseText,
                    contentType: c.getResponseHeader("Content-Type"),
                  })
                : b(new q(c.statusText + ": " + a, "SXJS0006")));
          };
          c.ontimeout = function () {
            b(new q("Document fetch timeout: " + a, "SXJS0008"));
          };
          c.onabort = function () {
            b(new q("Document fetch aborted: " + a, "SXJS0008"));
          };
          c.onerror = function () {
            b(new q("Document fetch failed: " + a, "SXJS0006"));
          };
          c.send(null);
          return c;
        },
        addDoc: function (a, b, d, k) {
          function c(c) {
            B.Gb("Add to response pool " + a, 2);
            d[a] = c;
            b(d);
          }
          if (!d[a] || d[a] instanceof q) return m.asyncGet(a, c, k);
          B.Gb("Doc already in pool " + a, 2);
          b(d);
          return null;
        },
        addMultipleDocs: function (a, b, d, k) {
          function c(a) {
            0 >= --f && d(a);
          }
          for (var f = a.length, l = {}, z = 0; z < a.length; z++)
            a[z] ? (l[a[z]] = m.addDoc(a[z], c, b, k)) : f--;
          return l;
        },
        makeHttpRequest: function (a, b, d) {
          function c(a) {
            if (a instanceof DocumentFragment) {
              var b = document.implementation.createDocument("", "", null);
              a = b.importNode(a, !0);
              b.appendChild(a);
              a = b;
            }
            return a;
          }
          function f(a, c) {
            return function (d) {
              t.status = 0;
              t.message = a + ": " + l.href;
              t.error = c;
              t.type = d.type;
              b(P.Gg(P.Ob(t)));
            };
          }
          var l = P.rc(a, !0);
          (function (a) {
            function b(b) {
              throw new q(b + " in HTTP request to: " + a.href, "SXJS0006");
            }
            if (!a.href)
              throw new q(
                "'href' must be specified in HTTP request",
                "SXJS0006"
              );
            a.method || b("'method' must be specified");
            a.method = a.method.toUpperCase();
            "status-only" in a &&
              "boolean" !== typeof a["status-only"] &&
              b("'status-only' parameter must be of type xs:boolean");
            a.rn = "GET" != a.method && "HEAD" != a.method;
            a.vi = "body" in a || "multipart-bodies" in a;
            ("multipart-bodies" in a || "multipart-headers" in a) &&
              b("Multipart requests not yet implemented");
            !a.rn &&
              a.vi &&
              b(
                "Body and multipart body content must be null for " +
                  a.method +
                  " request"
              );
            "headers" in a || (a.headers = {});
            var d = a["media-type"] || a.headers["content-type"] || "";
            a.vi && "" === d && b("No content type specified");
            a.vi && "media-type" in a && (a.headers["content-type"] = d);
            "multipart-bodies" in a &&
              !/$multipart\//.test(d) &&
              b(
                "Content type must be multipart media type for multipart request"
              );
            (("username" in a && !("password" in a)) ||
              (!("username" in a) && "password" in a)) &&
              b("Must set both (or neither) username and password");
            a.body instanceof DocumentFragment && (a.body = c(a.body, d));
            !a.vi ||
              ("text/xml" != d &&
                "application/xml" != d &&
                "text/xml-external-parsed-entity" != d &&
                "application/xml-external-parsed-entity" != d &&
                !/\+xml$/.test(d) &&
                "text/html" != d) ||
              a.body instanceof Document ||
              b(
                "HTTP request body must be a document node, supplied item is: " +
                  B.oa(a.body)
              );
            B.Gb("HTTP request prepared", 2);
            return a;
          })(l);
          "undefined" == typeof XMLHttpRequest &&
            (XMLHttpRequest = function () {
              return new ActiveXObject("Msxml2.XMLHTTP.6.0");
            });
          var w = new XMLHttpRequest();
          "override-media-type" in l &&
            w.overrideMimeType(l["override-media-type"]);
          "username" in l
            ? w.open(l.method, l.href, !0, l.username, l.password)
            : w.open(l.method, l.href, !0);
          "timeout" in l && 0 === d && (d = l.timeout);
          0 !== d && (w.timeout = d);
          for (var z in l.headers)
            l.headers.hasOwnProperty(z) && w.setRequestHeader(z, l.headers[z]);
          var t = {};
          w.ontimeout = f("HTTP request timeout", "SXJS0008");
          w.onabort = f("HTTP request aborted", "SXJS0008");
          w.onerror = f("HTTP request failed", "SXJS0009");
          w.onload = function (a) {
            B.Gb("Saxon-JS processing httpRequest response", 2);
            t.headers = {};
            t.status = w.status;
            t.message = w.statusText;
            t.type = a.type;
            if (!l["status-only"] && "HEAD" !== l.method) {
              a = (w.getResponseHeader("Content-Type") || "").split(/;/)[0];
              a = l["override-media-type"] || a;
              t["media-type"] = a;
              var c = m.parseXmlFromString;
              switch (a) {
                case "text/xml":
                case "application/xml":
                case "text/xml-external-parsed-entity":
                case "application/xml-external-parsed-entity":
                  t.body = w.responseXML || c(w.responseText);
                  break;
                case "text/html":
                  t.body = w.responseXML || c(w.responseText);
                  break;
                default:
                  t.body = /\+xml$/.test(a)
                    ? w.responseXML || c(w.responseText)
                    : w.responseText;
              }
            }
            (function (a, b) {
              var c = b.getAllResponseHeaders();
              "" !== c &&
                c.split(/\r\n/).forEach(function (b) {
                  if ("" !== b.trim()) {
                    var c = b.indexOf(":");
                    0 <= c
                      ? (a.headers[b.substring(0, c).toLowerCase()] = b
                          .substring(c + 1)
                          .trim())
                      : B.Gb(
                          "No ':' separator found in HTTP response header " + b,
                          2
                        );
                  }
                });
            })(t, w);
            b(P.Gg(P.Ob(t)));
          };
          w.send(l.body);
          return w;
        },
        parseXmlFromString: function (a) {
          a = a.replace(/\r\n|\r(?!\n)/g, "\n");
          try {
            if (/^.+<\?xml/i.test(a)) throw Error();
            var b = new DOMParser().parseFromString(a, "application/xml");
            if (0 === b.getElementsByTagName("parsererror").length) var c = !1;
            else {
              if (!d)
                try {
                  d = new DOMParser()
                    .parseFromString("<", "text/xml")
                    .getElementsByTagName("parsererror")[0].namespaceURI;
                } catch (k) {}
              c = 0 < b.getElementsByTagNameNS(d, "parsererror").length;
            }
            if (c)
              throw Error(
                b.getElementsByTagNameNS(d, "parsererror")[0].textContent
              );
            return b;
          } catch (k) {
            throw new q(
              "Misplaced or malformed XML" +
                (k.message ? ": " + k.message : ""),
              "FODC0002"
            );
          }
        },
        resource: function (a) {
          return b[a];
        },
        readFile: function (a, b) {
          b = void 0 === b ? !1 : b;
          var c = new XMLHttpRequest();
          try {
            c.open("GET", a, !1), c.send(null);
          } catch (k) {
            throw new q("Get failure " + a, "FODC0002");
          }
          if (200 === c.status)
            c = b
              ? {
                  responseText: c.responseText,
                  contentType: c.getResponseHeader("Content-Type"),
                }
              : c.responseText;
          else throw new q("Failed to read file at " + a, "FODC0002");
          return c;
        },
        resourcePromise: function (a) {
          var b = "file";
          if (a.file)
            var c = Promise.reject(
              new q(
                "File access not supported in browser (" + a.file + ")",
                "SXJS0006"
              )
            );
          else
            a.location &&
              ((c = a = a.location),
              a instanceof URL ? (a = a.toString()) : (c = new URL(a)),
              (b = a),
              (c =
                "file:" === c.protocol
                  ? Promise.reject(
                      new q(
                        "File access not supported in browser (" + c + ")",
                        "SXJS0006"
                      )
                    )
                  : m.getPromise(a).then(function (a) {
                      return a.responseText;
                    })));
          return c["catch"](function (a) {
            return Promise.reject(
              new q("Failed to read " + b + "(" + a.message + ")", "SXJS0006")
            );
          }).then(function (a) {
            65279 === a.codePointAt(0) && (a = a.substring(1));
            return Promise.resolve(a);
          });
        },
        resolveUri: function (a, b) {
          try {
            return (
              b && null !== b && "" !== b
                ? a && "" !== a
                  ? new URL(a, b)
                  : new URL(b)
                : new URL(a)
            ).toString();
          } catch (f) {
            throw new q(
              "Failed URI resolution: href=" + a + " base=" + b + " -- " + f,
              "FODC0005"
            );
          }
        },
        getDefaultDeliverMessage: function () {
          return function (a) {
            var b = "";
            P.Wd(a)
              .expand()
              .forEach(function (a) {
                b += ("" === b ? "" : " ") + a.toString();
              });
            console.log("xsl:message: " + b);
          };
        },
        isHTMLElement: function (a) {
          return "http://www.w3.org/1999/xhtml" === a.namespaceURI;
        },
        saxonPrint: function (a) {
          console.log(a);
        },
        createDocument: function () {
          return document.implementation.createDocument("", "", null);
        },
        setDocURI: function (a, b) {
          a._saxonBaseUri = b;
          return a;
        },
        newURL: function (a, b) {
          b = void 0 === b ? null : b;
          return null !== b ? new URL(a, b) : new URL(a);
        },
        extraProperties: { platform: "Browser" },
      };
    return m;
  })();
  var R = {},
    Ib = {};
  R[0] = "<eof>";
  R[1] = "|";
  R[2] = "/";
  R[3] = "@";
  R[48] = "~";
  R[4] = "[";
  R[5] = "(";
  R[6] = "=";
  R[7] = ",";
  R[8] = "//";
  R[9] = "or";
  R[10] = "and";
  R[11] = ">";
  R[12] = "<";
  R[13] = ">=";
  R[14] = "<=";
  R[15] = "+";
  R[16] = "-";
  R[299] = "-";
  R[17] = "*";
  R[18] = "div";
  R[19] = "mod";
  R[20] = "is";
  R[21] = "$";
  R[22] = "!=";
  R[40] = "!";
  R[30] = "||";
  R[23] = "intersect";
  R[24] = "except";
  R[25] = "return";
  R[26] = "then";
  R[27] = "else";
  R[29] = "to";
  R[31] = "in";
  R[32] = "some";
  R[33] = "every";
  R[34] = "satisfies";
  R[35] = "<function>(";
  R[36] = "<axis>";
  R[37] = "if(";
  R[38] = "<<";
  R[39] = ">>";
  R[41] = "::";
  R[42] = ":*";
  R[44] = "#";
  R[45] = "instance of";
  R[46] = "cast as";
  R[47] = "treat as";
  R[50] = "eq";
  R[51] = "ne";
  R[52] = "gt";
  R[54] = "ge";
  R[53] = "lt";
  R[55] = "le";
  R[56] = "idiv";
  R[57] = "castable as";
  R[58] = ":=";
  R[71] = "as";
  R[75] = ":";
  R[76] = "=>";
  R[79] = "otherwise";
  R[80] = "andAlso";
  R[81] = "orElse";
  R[201] = "<name>";
  R[202] = "<string-literal>";
  R[203] = "]";
  R[204] = ")";
  R[205] = ".";
  R[206] = "..";
  R[207] = "*";
  R[208] = "<prefix:*>";
  R[209] = "<numeric-literal>";
  R[69] = "<node-type>()";
  R[211] = "for";
  R[70] = "<*:local-name>";
  R[213] = "?";
  R[59] = "{";
  R[60] = "<keyword> {";
  R[215] = "}";
  R[216] = "let";
  R[299] = "-";
  function Jb(a, b) {
    Ib[a] = b;
    R[b] = a;
  }
  Jb("instance of", 45);
  Jb("cast as", 46);
  Jb("treat as", 47);
  Jb("castable as", 57);
  var Kb = {
      Hq: function () {
        return null;
      },
    },
    Lb;
  for (Lb in F) Kb[Lb.toUpperCase()] = F[Lb];
  Kb.pq = F.Rd;
  Kb.hn = F.Ve;
  function Mb(a) {
    a = a.charCodeAt(0);
    return (65 <= a && 90 >= a) || (97 <= a && 122 >= a);
  }
  var Nb = Na.Yc;
  function Ob(a) {
    var b = a.charCodeAt(0);
    return Mb(a) || (48 <= b && 57 >= b);
  }
  function Pb(a, b) {
    return new q(a, void 0 === b ? "XPST0003" : b);
  }
  function Qb(a) {
    return new q(void 0 === a ? "Illegal Argument" : a, "XPST0003");
  }
  function Rb(a, b, d, m) {
    this.kind = a;
    this.ip = b;
    this.hp = d;
    this.errorCode = void 0 === m ? "XPTY0004" : m;
  }
  Rb.prototype = {
    eh: function () {
      return this.errorCode;
    },
    save: function () {
      var a = this.kind + "|" + this.hp + "|";
      a += ("XPTY0004" === this.errorCode ? "" : this.errorCode) + "|";
      return (a += this.ip);
    },
  };
  function W() {
    this.b = J.B.Qa;
  }
  ba = W.prototype;
  ba.start = function (a, b) {
    b = void 0 === b ? {} : b;
    a.start(this.V, b);
    this.Jd && a.Re("role", this.Jd);
    this.b && (B.assert(this.b instanceof J.Ka), a.Re("sT", this.b.va()));
    this.Al && a.Re("sType", this.b.va());
  };
  ba.vd = function () {
    return !ib(this.b.na);
  };
  ba.Ub = function (a, b) {
    b = void 0 === b ? {} : b;
    this.start(a, b);
    a.end();
  };
  ba.j = function (a) {
    this.Ub(a);
  };
  ba.V = "Expression";
  ba.kind = null;
  ba.Jd = null;
  ba.Al = null;
  ba.ib = function (a, b) {
    return new Rb(this.kind, this.V, a, void 0 === b ? "XPTY0004" : b);
  };
  ba.kb = function () {
    throw new Pb(B.Ip(this) + " is not a valid pattern", "XTSE0340");
  };
  ba.eg = function () {
    return this;
  };
  function Sb(a, b, d) {
    W.call(this);
    this.Lb = b;
    this.Ca = a;
    this.Fa = d;
    if (this.Ca.Mb || this.Fa.Mb) this.Mb = !0;
    this.Ca.Ed && this.Fa.Ed && (this.Ed = !0);
  }
  n(Sb, W);
  Sb.prototype.j = function (a) {
    W.prototype.start.call(this, a, this.Lb ? { op: R[this.Lb] } : {});
    this.Ca.j(a);
    this.Fa.j(a);
    a.end();
  };
  Sb.prototype.kind = 1;
  function Tb(a) {
    W.call(this);
    this.bb = a;
    this.bb.Mb && (this.Mb = !0);
    this.bb.Ed && (this.Ed = !0);
  }
  n(Tb, W);
  Tb.prototype.j = function (a) {
    W.prototype.start.call(this, a);
    this.bb.j(a);
    a.end();
  };
  Tb.prototype.kind = 9;
  var Ub = [!1, !1, !0, !0, !0, !0, !0, !0, !0, !0, !1, !1, !0, !1];
  function Vb(a) {
    return "ancestor ancestor-or-self attribute child descendant descendant-or-self following following-sibling namespace parent preceding preceding-sibling self preceding-or-ancestor".split(
      " "
    )[a];
  }
  var Wb = [1, 1, 2, 1, 1, 1, 1, 1, 13, 1, 1, 1, 1, 1],
    Xb = [4, 5, 9, 9, 0, 1, 10, 11, 9, 3, 6, 7, 12];
  function Yb(a) {
    switch (a) {
      case "self":
        return 12;
      case "child":
        return 3;
      case "parent":
        return 9;
      case "ancestor":
        return 0;
      case "attribute":
        return 2;
      case "following":
        return 6;
      case "namespace":
        return 8;
      case "preceding":
        return 10;
      case "descendant":
        return 4;
      case "ancestor-or-self":
        return 1;
      case "following-sibling":
        return 7;
      case "preceding-sibling":
        return 11;
      case "descendant-or-self":
        return 5;
    }
    throw new Pb("Unknown axis name: " + a);
  }
  function Zb() {
    W.call(this);
    this.b = J.B.qe;
  }
  n(Zb, W);
  Zb.prototype.kb = function () {
    return this;
  };
  Zb.prototype.j = function (a) {
    W.prototype.Ub.call(this, a);
  };
  function $b(a) {
    Zb.apply(this, arguments);
  }
  n($b, Zb);
  $b.prototype.V = "p.any";
  function ac(a, b) {
    b = void 0 === b ? "match" : b;
    Zb.call(this);
    this.message = a;
    this.Jd = b;
    this.b = J.B.qe;
  }
  n(ac, Zb);
  ac.prototype.j = function (a) {
    Zb.prototype.Ub.call(this, a, { message: this.message });
  };
  ac.prototype.V = "p.warning";
  function bc(a) {
    Zb.call(this);
    this.Nb = a;
    this.b = J.B.qe;
  }
  n(bc, Zb);
  bc.prototype.j = function (a) {
    Zb.prototype.start.call(this, a);
    this.Nb.j(a);
    a.end();
  };
  bc.prototype.V = "p.booleanExp";
  function cc(a, b) {
    Zb.call(this);
    B.assert(b instanceof I.mc);
    this.test = b;
    this.b = new J.Ka(b, kb);
  }
  n(cc, Zb);
  cc.prototype.j = function (a) {
    Zb.prototype.Ub.call(this, a, { test: this.test.va() });
  };
  cc.prototype.V = "p.nodeTest";
  function dc(a, b) {
    Zb.call(this);
    this.pattern = a;
    this.Nb = b;
    this.b = a.b;
    a.code && (this.code = a.code);
  }
  n(dc, Zb);
  dc.prototype.j = function (a) {
    Zb.prototype.start.call(this, a);
    this.code && a.Re("code", this.code);
    this.pattern.j(a);
    this.Nb.j(a);
    a.end();
  };
  dc.prototype.V = "p.withPredicate";
  function ec(a) {
    Zb.call(this);
    this.ho = a;
    this.b = a.b.Va(kb);
  }
  n(ec, Zb);
  ec.prototype.j = function (a) {
    Zb.prototype.start.call(this, a);
    this.ho.j(a);
    a.end();
  };
  ec.prototype.V = "p.nodeSet";
  function fc(a) {
    Zb.call(this);
    this.bb = a;
    this.b = a.b.Va(kb);
  }
  n(fc, Zb);
  fc.prototype.j = function (a) {
    Zb.prototype.start.call(this, a);
    this.bb.j(a);
    a.end();
  };
  fc.prototype.V = "p.genNode";
  function gc(a, b) {
    Zb.call(this);
    this.Nb = b;
    this.code = a.b.va();
    this.b = a.b.Va(kb);
  }
  n(gc, Zb);
  gc.prototype.j = function (a) {
    Zb.prototype.start.call(this, a, { test: this.code });
    this.Nb.j(a);
    a.end();
  };
  gc.prototype.V = "p.genPos";
  function hc(a, b) {
    Zb.call(this);
    this.code = a.va();
    this.zg = b;
    this.b = a.Va(kb);
  }
  n(hc, Zb);
  hc.prototype.j = function (a) {
    Zb.prototype.Ub.call(this, a, { test: this.code, pos: this.zg });
  };
  hc.prototype.V = "p.simPos";
  function ic(a, b, d) {
    Zb.call(this);
    this.axis = Xb[a];
    this.Bb = b;
    this.upper = d;
    this.b = b.b;
  }
  n(ic, Zb);
  ic.prototype.j = function (a) {
    Zb.prototype.start.call(this, a, { axis: Vb(this.axis) });
    this.Bb.j(a);
    this.upper.j(a);
    a.end();
  };
  ic.prototype.V = "p.withUpper";
  function lc(a, b, d, m) {
    Zb.call(this);
    this.Lb = b;
    this.Ca = a;
    this.Fa = d;
    this.b = m.Va(kb);
  }
  n(lc, Zb);
  lc.prototype.j = function (a) {
    Zb.prototype.start.call(this, a, {
      op: 1 === this.Lb ? "union" : R[this.Lb],
    });
    this.Ca.j(a);
    this.Fa.j(a);
    a.end();
  };
  lc.prototype.V = "p.venn";
  function nc(a, b, d) {
    lc.call(this, a, 1, b, d);
  }
  n(nc, lc);
  function oc(a) {
    var b = [];
    a.Ca instanceof nc ? (b = oc(a.Ca)) : b.push(a.Ca);
    a.Fa instanceof nc ? (b = b.concat(oc(a.Fa))) : b.push(a.Fa);
    return b;
  }
  function pc(a) {
    Zb.call(this);
    this.lm = a;
    a = sa(this.lm);
    for (var b = a.next(); !b.done; b = a.next()) b.value.Al = !0;
  }
  n(pc, Zb);
  pc.prototype.j = function (a) {
    Zb.prototype.start.call(this, a);
    for (var b = sa(this.lm), d = b.next(); !d.done; d = b.next()) d.value.j(a);
    a.end();
  };
  pc.prototype.V = "UnionExprP";
  function qc() {
    this.G = this.state = 0;
    this.ba = null;
    this.la = this.$g = 0;
    this.Fb = null;
    this.dc = 0;
    this.input = null;
    this.eb = this.I = 0;
    this.$j = this.lineNumber = 1;
    this.vg = null;
    this.lc = -1;
    this.vh = "";
    this.Wk = this.In = !1;
  }
  ba = qc.prototype;
  ba.getState = function () {
    return this.state;
  };
  function rc(a, b) {
    a.state = b;
    0 === b
      ? ((a.lc = -1), (a.vh = ""), (a.G = -1))
      : b === sc && ((a.lc = 204), (a.vh = ")"), (a.G = 204));
  }
  function tc(a, b) {
    a.state = 0;
    a.la = 0;
    a.Fb = null;
    a.dc = 0;
    a.I = 0;
    a.input = b;
    a.lineNumber = 0;
    a.$j = 0;
    a.eb = b.length;
    uc(a);
    a.next();
  }
  ba.next = function () {
    this.lc = this.G;
    this.vh = this.ba;
    this.G = this.la;
    this.ba = this.Fb;
    null === this.ba && (this.ba = "");
    this.$g = this.dc;
    this.lineNumber = this.$j;
    switch (this.G) {
      case 201:
        var a = vc(this, this.ba);
        -1 === a || 150 >= this.lc || 213 === this.lc || (this.G = a);
        break;
      case 207:
        150 >= this.lc || 213 === this.lc || (this.G = 17);
    }
    if (
      215 !== this.G &&
      ((a = this.lc), uc(this), 201 === this.G && this.state !== wc && 21 !== a)
    )
      switch (this.la) {
        case 5:
          var b = vc(this, this.ba);
          -1 === b || 150 >= a
            ? ((this.G = this.Qj(this.ba)), uc(this))
            : (this.G = b);
          break;
        case 59:
          this.state !== xc && ((this.G = 60), uc(this));
          break;
        case 41:
          uc(this);
          this.G = 36;
          break;
        case 44:
          uc(this);
          this.G = 43;
          break;
        case 42:
          uc(this);
          this.G = 208;
          break;
        case 21:
          "for" === this.ba
            ? (this.G = 211)
            : "some" === this.ba
            ? (this.G = 32)
            : "every" === this.ba
            ? (this.G = 33)
            : "let" === this.ba && (this.G = 216);
          break;
        case 201:
          (a = this.ba + " " + this.Fb),
            (b = Ib[a]),
            null != b && ((this.G = b), (this.ba = a), uc(this));
      }
  };
  function uc(a) {
    a.lc = a.la;
    a.vh = a.Fb;
    a.Fb = null;
    for (a.dc = a.I; ; ) {
      if (a.I >= a.eb) {
        a.la = 0;
        break;
      }
      var b = a.input.charAt(a.I++);
      switch (b) {
        case "/":
          if (a.I < a.eb && "/" === a.input.charAt(a.I)) {
            a.I++;
            a.la = 8;
            return;
          }
          a.la = 2;
          return;
        case ":":
          if (a.I < a.eb) {
            ":" === a.input.charAt(a.I)
              ? (a.I++, (a.la = 41))
              : "=" === a.input.charAt(a.I)
              ? ((a.la = 58), a.I++)
              : (a.la = 75);
            return;
          }
          throw new Pb("Unexpected colon at start of token");
        case "@":
          a.la = 3;
          return;
        case "~":
          a.la = 48;
          return;
        case "?":
          a.la = 213;
          return;
        case "[":
          a.la = 4;
          return;
        case "]":
          a.la = 203;
          return;
        case "{":
          a.la = 59;
          return;
        case "}":
          a.la = 215;
          return;
        case "(":
          if (a.I < a.eb && ":" === a.input.charAt(a.I)) {
            a.I++;
            for (b = 1; 0 < b && a.I < a.eb - 1; )
              "\n" === a.input.charAt(a.I)
                ? yc(a)
                : ":" === a.input.charAt(a.I) && ")" === a.input.charAt(a.I + 1)
                ? (b--, a.I++)
                : "(" === a.input.charAt(a.I) &&
                  ":" === a.input.charAt(a.I + 1) &&
                  (b++, a.I++),
                a.I++;
            if (0 < b) throw new Pb("Unclosed XPath comment");
            uc(a);
          } else a.la = 5;
          return;
        case ")":
          a.la = 204;
          return;
        case "+":
          a.la = 15;
          return;
        case "-":
          a.la = 16;
          return;
        case "=":
          if (a.I < a.eb && ">" === a.input.charAt(a.I)) {
            a.I++;
            a.la = 76;
            return;
          }
          a.la = 6;
          return;
        case "!":
          if (a.I < a.eb && "=" === a.input.charAt(a.I)) {
            a.I++;
            a.la = 22;
            return;
          }
          a.la = 40;
          return;
        case "*":
          (b = a.I < a.eb && ":" === a.input.charAt(a.I) && a.I + 1 < a.eb) &&
            !(b = 127 < a.input.charAt(a.I + 1)) &&
            ((b = a.input.charAt(a.I + 1)), (b = Mb(b) || "_" === b));
          if (b) {
            a.I++;
            a.la = 70;
            return;
          }
          a.la = 207;
          return;
        case ",":
          a.la = 7;
          return;
        case "$":
          a.la = 21;
          return;
        case "|":
          if (a.I < a.eb && "|" === a.input.charAt(a.I)) {
            a.I++;
            a.la = 30;
            return;
          }
          a.la = 1;
          return;
        case "#":
          a.la = 44;
          return;
        case "<":
          if (a.I < a.eb && "=" === a.input.charAt(a.I)) {
            a.I++;
            a.la = 14;
            return;
          }
          if (a.I < a.eb && "<" === a.input.charAt(a.I)) {
            a.I++;
            a.la = 38;
            return;
          }
          a.la = 12;
          return;
        case ">":
          if (a.I < a.eb && "=" === a.input.charAt(a.I)) {
            a.I++;
            a.la = 13;
            return;
          }
          if (a.I < a.eb && ">" === a.input.charAt(a.I)) {
            a.I++;
            a.la = 39;
            return;
          }
          a.la = 11;
          return;
        case ".":
          if (a.I < a.eb && "." === a.input.charAt(a.I)) {
            a.I++;
            a.la = 206;
            return;
          }
          if (
            a.I === a.eb ||
            "0" > a.input.charAt(a.I) ||
            "9" < a.input.charAt(a.I)
          ) {
            a.la = 205;
            return;
          }
        case "0":
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
          var d = !0,
            m = !1,
            c = !0;
          a: for (;;) {
            switch (b) {
              case "0":
              case "1":
              case "2":
              case "3":
              case "4":
              case "5":
              case "6":
              case "7":
              case "8":
              case "9":
                m = !1;
                break;
              case ".":
                if (c) m = c = !1;
                else {
                  a.I--;
                  break a;
                }
                break;
              case "E":
              case "e":
                if (d) (m = !0), (d = !1);
                else {
                  a.I--;
                  break a;
                }
                break;
              case "+":
              case "-":
                if (m) m = !1;
                else {
                  a.I--;
                  break a;
                }
                break;
              default:
                if (("a" <= b && "z" >= b) || 127 < b)
                  throw (
                    ((b = a),
                    (a = a.I),
                    (d = (a = void 0 === a ? null : a) ? a : b.I),
                    (a =
                      " at line:" +
                      b.getLineNumber(a) +
                      " col:" +
                      b.getColumnNumber(a) +
                      " near '" +
                      b.input.slice(5 > d ? 0 : d - 5, d + 5) +
                      "'"),
                    new Pb("Separator needed after numeric literal" + a))
                  );
                a.I--;
                break a;
            }
            if (a.I >= a.eb) break;
            b = a.input.charAt(a.I++);
          }
          a.Fb = a.input.substring(a.dc, a.I);
          a.la = 209;
          return;
        case '"':
        case "'":
          for (a.Fb = ""; ; ) {
            a.I = a.input.indexOf(b, a.I);
            if (0 > a.I)
              throw ((a.I = a.dc + 1), new Pb("Unmatched quote in expression"));
            a.Fb += a.input.substring(a.dc + 1, a.I++);
            if (a.I < a.eb)
              if (a.input.charAt(a.I) === b) (a.Fb += b), (a.dc = a.I), a.I++;
              else break;
            else break;
          }
          if (0 <= a.Fb.indexOf("\n"))
            for (b = 0; b < a.Fb.length; b++)
              "\n" === a.Fb.charAt(b) && yc(a, a.dc + b + 1);
          a.la = 202;
          return;
        case "\n":
          yc(a, a.I);
        case " ":
        case "\t":
        case "\r":
          a.dc = a.I;
          break;
        case "¶":
        case "Q":
          if (a.I < a.eb && "{" === a.input.charAt(a.I)) {
            d = a.input.indexOf("}", a.I++);
            if (d < a.I) throw new Pb("Missing closing brace in EQName");
            b = a.input.substring(a.I, d);
            b = Na.collapse(b);
            if (b.includes("{"))
              throw new Pb("EQName must not contain opening brace");
            a.I = d + 1;
            m = a.I;
            for (d = !1; a.I < a.eb; )
              if (
                ((c = a.input.charAt(a.I)),
                128 < c || Ob(c) || "_" === c || "." === c || "-" === c)
              )
                a.I++;
              else {
                "*" === c && m === a.I && (a.I++, (d = !0));
                break;
              }
            m = a.input.substring(m, a.I);
            a.Fb = "Q{" + b + "}" + m;
            a.la = d ? 208 : 201;
            return;
          }
        default:
          if (128 > b.charCodeAt(0) && !Mb(b))
            throw new Pb("Invalid character '" + b + "' in expression");
        case "_":
          d = !1;
          a: for (; a.I < a.eb; a.I++)
            switch (((b = a.input.charAt(a.I)), b)) {
              case ":":
                if (d) break a;
                else {
                  if (213 === a.lc || 70 === a.lc) {
                    a.Fb = a.input.substring(a.dc, a.I);
                    a.la = 201;
                    return;
                  }
                  if (a.I + 1 < a.eb) {
                    b = a.input.charAt(a.I + 1);
                    if (":" === b) {
                      a.Fb = a.input.substring(a.dc, a.I);
                      a.la = 36;
                      a.I += 2;
                      return;
                    }
                    if ("*" === b) {
                      a.Fb = a.input.substring(a.dc, a.I);
                      a.la = 208;
                      a.I += 2;
                      return;
                    }
                    if (!("_" === b || 127 < b || Mb(b))) {
                      a.Fb = a.input.substring(a.dc, a.I);
                      a.la = 201;
                      return;
                    }
                  }
                  d = !0;
                }
                break;
              case ".":
              case "-":
                if (
                  150 < a.lc &&
                  213 !== a.lc &&
                  70 !== a.lc &&
                  -1 !== vc(a, a.input.substring(a.dc, a.I)) &&
                  (201 !== a.lc || -1 === vc(a, a.vh))
                ) {
                  a.la = vc(a, a.input.substring(a.dc, a.I));
                  return;
                }
              case "_":
                break;
              default:
                if (128 > b.charCodeAt(0) && !Ob(b)) break a;
            }
          a.Fb = a.input.substring(a.dc, a.I);
          a.la = 201;
          return;
      }
    }
  }
  function vc(a, b) {
    var d = {
      or: 9,
      is: 20,
      to: 29,
      in: 31,
      eq: 50,
      ne: 51,
      le: 55,
      lt: 53,
      gt: 52,
      ge: 54,
      as: 71,
      and: 10,
      div: 18,
      mod: 19,
      idiv: 56,
      then: 26,
      else: 27,
      case: 67,
      where: 28,
      union: 1,
      except: 24,
      return: 25,
      otherwise: 79,
      orElse: 81,
      default: 212,
      andAlso: 80,
      intersect: 23,
      satisfies: 34,
    }[b];
    return (1 === d && a.In) || ([81, 80].includes(d) && !a.Wk) ? -1 : d || -1;
  }
  ba.Qj = function (a) {
    var b = {
      if: 37,
      array: 69,
      attribute: 69,
      comment: 69,
      "document-node": 69,
      element: 69,
      "empty-sequence": 69,
      function: 69,
      map: 69,
      item: 69,
      "namespace-node": 69,
      node: 69,
      "processing-instruction": 69,
      "schema-attribute": 69,
      "schema-element": 69,
      switch: 69,
      otherwise: 79,
      text: 69,
      tuple: 69,
      typeswitch: 69,
      union: 69,
    }[a];
    return b ? (["tuple", "union"].includes(a) && !this.Wk ? 35 : b) : 35;
  };
  function yc(a, b) {
    b = void 0 === b ? -1 : b;
    a.lineNumber++;
    a.$j++;
    null === a.vg && (a.vg = []);
    a.vg.push(-1 === b ? a.I - 1 : b);
  }
  function zc(a) {
    a.I > a.eb && (a.I = a.eb);
    return 34 > a.I
      ? a.input.substring(0, a.I)
      : Na.collapse("..." + a.input.substring(a.I - 30, a.I)).toString();
  }
  function Ac(a, b) {
    if (null === a.vg) return b;
    for (var d = a.vg.length - 1; 0 <= d; d--) {
      var m = a.vg[d];
      if (b > m) return ((d + 1) << 16) | (b - m);
    }
    return b;
  }
  ba.getLineNumber = function (a) {
    return (a = void 0 === a ? null : a) ? Ac(this, a) >> 16 : this.lineNumber;
  };
  ba.getColumnNumber = function (a) {
    a = void 0 === a ? null : a;
    return Ac(this, a ? a : this.$g) & 32767;
  };
  var wc = 1,
    xc = 2,
    sc = 3;
  function Bc() {}
  function Cc(a, b) {
    W.call(this);
    Array.isArray(a) || B.ra("Literal value must be array");
    (b instanceof J.Ka && b.ca.va) ||
      B.ra("Literal type must be a SequenceType");
    a && ((this.value = a), b && (this.b = b));
    this.Jd = null;
  }
  n(Cc, W);
  function Dc(a) {
    return 1 === a.value.length && I.Nh.pa.ta()(a.value[0]);
  }
  Cc.prototype.toString = function () {
    return this.value.toString();
  };
  Cc.prototype.j = function (a) {
    function b(b, d) {
      var c = { val: b.toString() };
      d && (c.role = d);
      var k = C.type[b.type].code;
      switch (k) {
        case "AS":
          a.start("str", c);
          break;
        case "AO":
          a.start("dbl", c);
          break;
        case "AB":
          a.start(b.value ? "true" : "false", {});
          break;
        case "AD":
          a.start("dec", c);
          break;
        case "ADI":
          a.start("int", c);
          break;
        case "AQ":
          a.start("qName", { pre: b.prefix, uri: b.uri, loc: b.local });
          break;
        default:
          (c.type = k), a.start("atomic", c);
      }
      a.end();
    }
    if (0 === this.value.length)
      a.start("empty", this.Jd ? { role: this.Jd } : {}), a.end();
    else if (1 === this.value.length) b(this.value[0], this.Jd);
    else {
      var d = { count: this.value.length };
      this.Jd && (d.role = this.Jd);
      a.start("atomic", d);
      d = sa(this.value);
      for (var m = d.next(); !m.done; m = d.next()) b(m.value);
      a.end();
    }
  };
  function Ec(a) {
    return a instanceof Cc && Dc(a);
  }
  function Fc(a, b) {
    return new Cc(a, b);
  }
  function Gc() {
    return new Cc([], J.B.fj);
  }
  Cc.prototype.V = "literal";
  Cc.prototype.Ed = !0;
  function Hc(a) {
    Cc.call(this, [C.O.T.g(a)], J.B.Td);
    this.b = J.B.Td;
  }
  n(Hc, Cc);
  var Ic = { 6: 50, 22: 51, 11: 52, 12: 53, 13: 54, 14: 55 };
  function Jc(a, b) {
    var d = a.ea().p;
    b.ea();
    if ("AZ" === d && b.qg()) return !1;
    if ("A" === d && b.Ga()) return !0;
    "" === d && b.Ga();
    return !0;
  }
  function Kc(a) {
    return /^A[BAMT2XQ]/.test(a);
  }
  function Lc(a, b, d, m) {
    Sb.call(this, a, b, d);
    a = m.lo();
    b = "GAC";
    switch (a) {
      case Q.Rl:
        b = "CAC";
    }
    a.startsWith(Q.Op) && (b = "CAC");
    d.b === J.B.cn && (b = "EQC");
    this.bg = b + "|" + a;
    this.b = J.B.ic;
  }
  n(Lc, Sb);
  Lc.prototype.j = function (a) {
    Sb.prototype.start.call(this, a, { op: R[this.Lb], comp: this.bg });
    this.Ca.j(a);
    this.Fa.j(a);
    a.end();
  };
  function Mc(a, b, d, m) {
    Lc.call(this, a, b, d, m);
  }
  n(Mc, Lc);
  Mc.prototype.j = function (a) {
    Lc.prototype.start.call(this, a, {
      op: R[this.Lb],
      comp: this.bg,
      card: "1:1",
    });
    this.Ca.j(a);
    this.Fa.j(a);
    a.end();
  };
  function Nc(a, b, d, m) {
    Lc.call(this, a, b, d, m);
    a = Oc(a, J.B.Ng, this.ib(0));
    d = Oc(d, J.B.Ng, this.ib(1));
    var c = a.b.ea(),
      l = d.b.ea();
    var f = c.p;
    var k = l.p;
    f === k || [f, k].includes("AZ") || [f, k].includes("A")
      ? (f = !0)
      : (/^A[ODF]/.test(f) && (f = "AO"),
        /^A[ODF]/.test(k) && (k = "AO"),
        /^A[SU]/.test(f) && (f = "AS"),
        /^A[SU]/.test(k) && (k = "AS"),
        (f = "E" === f || "E" === k ? !0 : f === k));
    if (!f)
      if (
        ((f =
          "Cannot compare items of types " +
          a.b.ca.toString() +
          " and " +
          d.b.ca.toString()),
        /[*?]/.test(c.o) || /[*?]/.test(l.o))
      )
        B.Gb(
          "Cannot compare items of types " +
            a.b.ca.toString() +
            " and " +
            d.b.ca.toString() +
            ": the comparison can succeed only if one of the values is an empty sequence",
          2
        );
      else throw new Pb(f, "XPTY0004");
    if ((c = a.b.na === kb && d.b.na === kb && Ic[b]))
      (c = a.b.ca),
        (l = d.b.ca),
        (f = c.ea().p),
        (k = l.ea().p),
        (c =
          Kc(f) || Kc(k)
            ? f === k
            : c.qg() && l.qg()
            ? !0
            : /^A[SZU]/.test(f) && /^A[SZU]/.test(k));
    if (c) return new Pc(a, Ic[b], d, m);
    this.Ca = a;
    this.Fa = d;
  }
  n(Nc, Mc);
  Nc.prototype.V = "gc";
  function Qc(a, b, d, m) {
    Lc.call(this, a, b, d, m);
  }
  n(Qc, Mc);
  Qc.prototype.V = "gc10";
  function Pc(a, b, d, m, c) {
    c = void 0 === c ? !0 : c;
    Lc.call(this, a, b, d, m);
    var l = a.b.ca,
      f = d.b.ca,
      k = l.ea().p,
      r = f.ea().p;
    if (
      !(
        ("A" === k && f.Ga()) ||
        ("A" === r && l.Ga()) ||
        "" === k ||
        "" === r ||
        (l.ea().p.startsWith("AM") && f.ea().p.startsWith("AM")) ||
        (Kc(k) || Kc(r) ? k === r : Jc(l, f) || Jc(f, l))
      )
    )
      throw new Pb(
        "Cannot compare " + a.b.toString() + " " + R[b] + " " + d.b.toString(),
        "XPTY0004"
      );
    a = Oc(a, J.B.Sd, this.ib(0));
    d = Oc(d, J.B.Sd, this.ib(1));
    if (51 !== b && 50 !== b && /^A[QGHIJK]/.test(a.b.ca.ea().p))
      throw new Pb(
        "Cannot order-compare " +
          a.b.toString() +
          " " +
          R[b] +
          " " +
          d.b.toString(),
        "XPTY0004"
      );
    if (c) {
      if (Ec(d) && C.O.Ma.matches(d.value[0]) && "ADI" === a.b.ea().p)
        return new Rc(a, b, d, m);
      if (d instanceof Hc) return new Sc(a, b, d, m);
    }
    this.Ca = a;
    this.Fa = d;
  }
  n(Pc, Lc);
  Pc.prototype.V = "vc";
  function Tc(a, b, d, m) {
    return Pc.call(this, a, b, d, m, !1) || this;
  }
  n(Tc, Pc);
  Tc.prototype.j = function (a) {
    Pc.prototype.start.call(this, a, { op: R[this.Lb], val: this.Fa.value[0] });
    this.Ca.j(a);
    a.end();
  };
  function Rc(a, b, d, m) {
    return Tc.call(this, a, b, d, m) || this;
  }
  n(Rc, Tc);
  Rc.prototype.V = "compareToInt";
  function Sc(a, b, d, m) {
    return Tc.call(this, a, b, d, m) || this;
  }
  n(Sc, Tc);
  Sc.prototype.j = function (a) {
    Tc.prototype.start.call(this, a, {
      op: R[this.Lb],
      val: this.Fa.value[0].toString(),
      comp: this.bg,
    });
    this.Ca.j(a);
    a.end();
  };
  Sc.prototype.V = "compareToString";
  function Uc(a, b, d, m) {
    Lc.call(this, a, b, d, m);
    a = Oc(a, J.B.Oh, this.ib(0));
    d = Oc(d, J.B.Oh, this.ib(0));
    this.Ca = a;
    this.Fa = d;
    this.V = 38 === b ? "precedes" : 39 === b ? "follows" : "is";
  }
  n(Uc, Lc);
  Uc.prototype.j = function (a) {
    Lc.prototype.start.call(this, a);
    this.Ca.j(a);
    this.Fa.j(a);
    a.end();
  };
  function Vc(a, b) {
    W.call(this);
    this.En = a;
    this.actions = b;
    this.Mb = b.some(function (a) {
      return a.Mb;
    });
    var d = pb.ug(
        b.map(function (a) {
          return a.b.ca;
        })
      ),
      m = rb(
        b.map(function (a) {
          return a.b.na;
        })
      );
    this.b = new J.Ka(d, m);
  }
  n(Vc, W);
  Vc.prototype.j = function (a) {
    W.prototype.start.call(this, a);
    for (var b = 0, d = sa(this.En), m = d.next(); !m.done; m = d.next())
      m.value.j(a), this.actions[b++].j(a);
    a.end();
  };
  function Wc(a, b, d) {
    a = [a, Fc([C.O.Ea.cf], J.B.ic)];
    return new Vc(a, [b, d]);
  }
  Vc.prototype.V = "choose";
  function Xc(a, b) {
    return (
      a instanceof Yc && a.name.name.uri === F.cb && a.name.name.local === b
    );
  }
  function Zc(a, b) {
    return (
      a instanceof Pc && a.Lb === b && Xc(a.Ca, "position") && Xc(a.Fa, "last")
    );
  }
  function $c(a, b) {
    W.call(this);
    if (b) {
      var d = Xc(b, "last") || Zc(b, 50);
      if (d) return new ad(a);
      d = d || Zc(b, 53);
      var m = b.Mb || b instanceof bd,
        c = b.Ed;
      if (!m && c && b.b.ia(J.B.bf)) return new cd(a, b);
      m ||
        ((m = b.b.ca.ea().p),
        (m =
          "AB" === m || m.startsWith("N")
            ? !1
            : "A" === m || /^A[ODF]/.test(m)));
      this.step = a;
      this.b = a.b;
      b instanceof dd
        ? (this.b = b.type.Va(this.b.na))
        : b instanceof Cc && Dc(b) && (this.b = this.b.Va(lb));
      m && (this.Mb = !0);
      c && (this.Ed = !0);
      this.Nb = d ? new ed(50 === b.Lb ? "1" : "0") : b;
    }
  }
  n($c, W);
  ba = $c.prototype;
  ba.xf = function () {
    return this.step.xf();
  };
  ba.vd = function () {
    return W.prototype.vd.call(this) || this.step.vd();
  };
  ba.kb = function () {
    if (!this.b.ca.pg()) {
      var a = fd("exists", this);
      return new bc(a);
    }
    return this.Mb && this.step instanceof gd && !(this.Nb instanceof ed)
      ? new gc(this.step, this.Nb)
      : this.Mb
      ? new fc(this.eg())
      : new dc(this.step.kb(), this.Nb);
  };
  ba.eg = function () {
    if (this.step instanceof hd) return this.Nb;
    this.step =
      this.step instanceof gd ? id(new hd(), this.step) : this.step.eg();
    return this;
  };
  ba.j = function (a) {
    W.prototype.start.call(this, a);
    var b = "";
    this.Ed && (b += "i");
    this.Mb && (b += "p");
    "" !== b && a.Re("flags", b);
    this.step.j(a);
    this.Nb.j(a);
    a.end();
  };
  ba.V = "filter";
  function cd(a, b) {
    var d = $c.call(this, a, null) || this;
    if (Ec(b) && C.O.Ma.matches(b.value[0]) && 1 === b.value[0].value)
      return new jd(a);
    d.step = a;
    d.b = a.b.Va(lb);
    d.Nb = b;
    d.Mb = !0;
    return d;
  }
  n(cd, $c);
  cd.prototype.kb = function () {
    return this.step instanceof hd
      ? new ac(
          "Numeric predicates other than 1 in PredicatePatterns never match. Value provided:" +
            this.Nb.value.value
        )
      : this.step instanceof gd
      ? new hc(this.step.b, this.Nb.value[0].value)
      : new fc(this.eg());
  };
  cd.prototype.V = "subscript";
  function jd(a) {
    var b = cd.call(this, a, null) || this;
    b.step = a;
    b.Mb = !0;
    b.b = a.b.Va(lb);
    return b;
  }
  n(jd, cd);
  jd.prototype.kb = function () {
    return this.b.ca.pg()
      ? this.step instanceof gd
        ? new fc(new jd(id(new hd(), this.step)))
        : new fc(this.eg())
      : new bc(this);
  };
  jd.prototype.j = function (a) {
    cd.prototype.start.call(this, a);
    this.step.j(a);
    a.end();
  };
  jd.prototype.V = "first";
  function ad(a) {
    var b = cd.call(this, a, null) || this;
    b.step = a;
    b.Mb = !0;
    b.b = a.b.Va(lb);
    return b;
  }
  n(ad, cd);
  ad.prototype.kb = function () {
    if (!(this.step instanceof gd)) return new fc(this.eg());
    if (3 === this.step.axis) {
      var a = new gd(7, this.step.Nb);
      return new dc(this.step.kb(), fd("empty", [a]));
    }
    return new hc(this.step.b, 1);
  };
  ad.prototype.j = function (a) {
    cd.prototype.start.call(this, a);
    this.step.j(a);
    a.end();
  };
  ad.prototype.V = "lastOf";
  function ed(a) {
    a = void 0 === a ? "1" : a;
    W.call(this);
    this.test = a;
    this.b = J.B.ic;
  }
  n(ed, W);
  ed.prototype.j = function (a) {
    this.Ub(a, { test: this.test });
  };
  ed.prototype.V = "isLast";
  function kd() {
    W.call(this);
    this.action = this.value = this.Qd = this.Nc = null;
    this.slot = 0;
  }
  n(kd, W);
  ba = kd.prototype;
  ba.Bh = function (a) {
    this.Nc = a;
  };
  ba.hg = function () {
    return this.Nc;
  };
  ba.Ue = function (a) {
    this.action = a;
    this.b = a.b;
  };
  ba.Si = function () {};
  ba.Eg = function (a) {
    this.value = a;
    this.Qd = a.b;
  };
  ba.j = function (a) {
    W.prototype.start.call(this, a, { name: this.Nc.ha(), slot: this.slot });
    this.value.j(a);
    this.action.j(a);
    a.end();
  };
  function ld() {
    kd.call(this);
  }
  n(ld, kd);
  ld.prototype.Eg = function (a) {
    this.value = a;
    this.Qd = a.b.Va(kb);
    this.action && (this.b = this.action.b.Fi(a.b.na));
  };
  ld.prototype.Ue = function (a) {
    this.action = a;
    this.value && (this.b = a.b.Fi(this.value.b.na));
  };
  ld.prototype.V = "for";
  function md() {
    kd.call(this);
  }
  n(md, kd);
  md.prototype.V = "let";
  function nd(a, b) {
    Sb.call(this, a, null, b);
    this.b = J.B.ic;
  }
  n(nd, Sb);
  function od(a, b) {
    nd.call(this, a, b);
  }
  n(od, nd);
  od.prototype.V = "and";
  function pd(a, b) {
    nd.call(this, a, b);
  }
  n(pd, nd);
  pd.prototype.V = "or";
  function qd(a) {
    return Ec(a) && C.O.Ma.matches(a.value[0]) && 1e7 > a.value[0].value;
  }
  function rd(a, b, d) {
    d = void 0 === d ? !1 : d;
    Sb.call(this, a, null, b);
    d && ((a = sd(a)), (b = sd(b)));
    a = Oc(a, J.B.Ek, this.ib(0));
    b = Oc(b, J.B.Ek, this.ib(1));
    if (qd(a) && qd(b)) return new td(a.value[0], b.value[0]);
    this.Ca = a;
    this.Fa = b;
    this.b = J.B.gj;
  }
  n(rd, Sb);
  rd.prototype.V = "to";
  function td(a, b) {
    W.call(this);
    if (a.value > b.value) return Gc();
    if (a.value === b.value) return new Cc([a], J.B.gj);
    this.from = a;
    this.Np = b;
    this.b = J.B.gj;
  }
  n(td, W);
  td.prototype.j = function (a) {
    W.prototype.Ub.call(this, a, { from: this.from, to: this.Np });
  };
  td.prototype.V = "range";
  function ud(a, b) {
    W.call(this);
    this.bb = a;
    this.next = b;
    this.b = b.b.Fi(a.b.na);
  }
  n(ud, W);
  ud.prototype.j = function (a) {
    W.prototype.start.call(this, a);
    this.bb.j(a);
    this.next.j(a);
    a.end();
  };
  ud.prototype.V = "forEach";
  var vd =
    "array attribute comment document-node element empty-sequence function if item map namespace-node node processing-instruction schema-attribute schema-element switch text typeswitch".split(
      " "
    );
  function wd(a, b) {
    if ("" === a.prefix && vd.includes(a.local))
      throw new Pb(
        "The unprefixed function name '" + a.local + "' is reserved",
        "XPST0003"
      );
    this.name = a;
    this.arity = b;
  }
  wd.prototype.ha = function () {
    return this.name.ha();
  };
  wd.prototype.toString = function () {
    return this.name.ha() + "#" + this.arity;
  };
  var xd = {
      array: "http://www.w3.org/2005/xpath-functions/array",
      fn: "http://www.w3.org/2005/xpath-functions",
      map: "http://www.w3.org/2005/xpath-functions/map",
      math: "http://www.w3.org/2005/xpath-functions/math",
      saxon: "http://saxon.sf.net/",
      xml: "http://www.w3.org/XML/1998/namespace",
      xs: "http://www.w3.org/2001/XMLSchema",
      xsl: "http://www.w3.org/1999/XSL/Transform",
    },
    yd = {},
    zd;
  for (zd in xd) yd[xd[zd]] = zd;
  function Ad(a, b, d, m) {
    W.call(this);
    this.name = C.O.X.xa(yd[d], d, a);
    this.arity = b;
    this.uri = d;
    this.b = J.B.mj;
    this.resultType = m;
  }
  n(Ad, W);
  function Bd(a, b) {
    var d = new wd(a.name, a.arity),
      m = J.B.Qa;
    switch (a.uri) {
      case F.map:
        m = J.B.Kk;
        switch (a.name.local) {
          case "get":
            m = b[0].b.valueType;
            break;
          case "merge":
            m = J.B.Kk;
            break;
          case "entry":
            m = J.ad(new I.oj(b[0].b, b[1].b));
        }
        return new Cd(d, b, m);
      case F.kf:
        switch (a.name.local) {
          case "_from-sequence":
            m = J.ad(new I.nj(b[0].b), kb);
        }
        return new Dd(d, b, m);
      case F.Jc:
        switch (a.name.local) {
          case "apply":
            (m = b[0].b),
              (m = m.ca ? m.ca : m),
              (m = m.resultType ? m.resultType : J.B.Qa);
        }
        return new Ed(d, b, m);
    }
  }
  Ad.prototype.V = "function";
  function Fd() {}
  Fd.prototype.uri = F.cb;
  function Gd(a, b, d) {
    return new Ad(b, d, a.uri, J.B.Qa);
  }
  function Hd() {}
  n(Hd, Fd);
  Hd.prototype.uri = F.map;
  var Id = new Hd();
  function Jd() {}
  n(Jd, Fd);
  Jd.prototype.uri = F.kf;
  var Kd = new Jd();
  function Ld() {}
  n(Ld, Fd);
  Ld.prototype.uri = F.Jc;
  function Md() {}
  n(Md, Ld);
  var Nd = new Md();
  function Od(a, b, d, m, c) {
    c = void 0 === c ? {} : c;
    B.assert(b);
    B.assert(b instanceof J.Ka);
    B.assert(a.b);
    B.assert(a.b instanceof J.Ka);
    var l = b.ea(),
      f = a,
      k,
      r = b.ca,
      v = b.na,
      w = ib(v),
      z = null,
      t = -1,
      g = v === jb;
    g || ((t = a.b.na), (g = (v | t) === v));
    l = "" === l.p;
    v === hb && (l = !0);
    l ||
      ((z = a.b.ca),
      (t = a.b.na),
      (l = pb.Zc(r, z)),
      l === pb.wd && (l = z === I.pe.pa ? pb.Ud : r === I.pe.pa ? pb.gd : l),
      (l = l === pb.Dc || l === pb.gd));
    if (l && g) return f;
    if (
      c.kd &&
      !w &&
      (ib(t) && ((f = k = new jd(f)), (t = lb), (g = (v | t) === v)), !l)
    ) {
      if (r.Ga("AS")) {
        try {
          k = Od(f, J.B.Fk, d, m);
        } catch (K) {
          throw K;
        }
        f = fd("string", k);
        z = I.Lk;
        t = kb;
        f.b = J.B.Td;
        g = (v | t) === v;
        l = !0;
      }
      if (r.Ge() || r.Ga("AO")) {
        try {
          k = Od(f, J.B.Fk, d, m);
        } catch (K) {
          throw K;
        }
        f = fd("number", k);
        z = I.af;
        t = kb;
        f.b = J.B.Qh;
        g = (v | t) === v;
        l = !0;
      }
    }
    if (!l)
      if (r.Ga()) {
        if (!z.Ga() && t !== hb) {
          if (!z.Ao)
            throw (
              ((b = new q(
                "An atomic value is required for the " +
                  d.gg() +
                  ", but the supplied value (type " +
                  z.toString() +
                  ") cannot be atomized",
                "error()" === z.name ? "FOER0000" : "FOTY0013",
                a
              )),
              b)
            );
          z = !ib(t);
          t = !ib(v);
          k = z ? new Pd(f, m, gb(v)) : new Qd(f, m);
          t && !z && (k = Rd(k, v, m));
          f = k;
          z = f.b.ca;
          t = f.b.na;
          g = (v | t) === v;
        }
        z.Ga("AZ") &&
          (r.Ge() || (!r.Ga("AZ") && "A" !== r.ea().p)) &&
          ((f = k = Sd(f, r, m)), (l = !0), (z = r));
        "A" !== z.va() ||
          ["A", "AZ"].includes(r.va()) ||
          ((f = k = Sd(f, r, m)), (z = f.b.ca));
        r.Ga() &&
          (r.Ga("AO") && pb.Zc(z, I.Nh.pa) !== pb.wd
            ? ((f = k = new Td(f, J.B.Qh, m)), (z = I.Jb.af), (t = -1))
            : r.Ga("AF") &&
              pb.Zc(z, I.Nh.pa) !== pb.wd &&
              !pb.Ko(z, I.Jb.af) &&
              ((f = k = new Td(f, J.B.bn, m)), (z = I.Jb.FLOAT), (t = -1)),
          r.Ga("AS") &&
            z.Ga("AU") &&
            ((l = !0), (f = k = new Td(f, J.B.Td, m)), (z = I.Jb.Lk)));
      } else
        r.ng() &&
          "F" === r.ea().p &&
          (z.ng() || ((f = new Ud(f, I.Xe.pa, m)), (z = I.Xe.pa)),
          r instanceof I.Xe ||
            ((k = z.ea()),
            ("FM" === k.p || "FA" === k.p) && 1 === r.wf().length) ||
            (f = new Vd(f, J.ad(r), m)),
          (l = !0));
    if (l && g) return f;
    -1 === t && ((t = f.b.na), g || (g = (v | t) === v));
    if (g && t === hb) return f;
    if (t === hb && !gb(v))
      throw (
        ((b = new q(
          "An empty sequence is not allowed as the " + d.gg(),
          d.eh()
        )),
        b)
      );
    l = l ? pb.Ud : pb.Zc(z, r);
    l === pb.wd && (l = z === I.pe.pa ? pb.gd : r === I.pe.pa ? pb.Ud : l);
    v === hb && (l = pb.Dc);
    if (l === pb.wd)
      if (gb(t) && gb(v))
        t !== hb &&
          ((k = d.Bj(r, z)),
          B.Gb(
            k +
              ". The expression can succeed only if the supplied value is an empty sequence.",
            1
          ));
      else
        throw (
          ((k = d.Bj(r, z)),
          (b = new q(k, "error()" === z.name ? "FOER0000" : d.eh())),
          b)
        );
    if (l !== pb.Dc && l !== pb.Ud) {
      if (f.Go) {
        m = C.O.T.g(f.getAttribute("val"));
        if (b.Ga && b.matches(m)) return f;
        k = d.Bj(r, z);
        b = new q(k, d.eh());
        throw b;
      }
      f = k = Wd(f, new J.Ka(r, v), m);
      g = !0;
    }
    if (!g) {
      if (f.Go)
        throw (
          ((b = new q(
            "Required cardinality of " +
              d.gg() +
              " is " +
              eb(v) +
              "; supplied value has cardinality " +
              eb(t),
            d.eh()
          )),
          b)
        );
      f = k = Rd(f, v, m);
    }
    return f;
  }
  function Sd(a, b, d) {
    b = b.Ge() ? "AO" : b.ea().p;
    return new Xd(a, b, d);
  }
  var ce = {
    wr: {
      QuantifiedExpr: "1AB",
      OrExpr: "1AB",
      AndExpr: "1AB",
      ComparisonExpr: "1AB",
      StringConcatExpr: "1AS",
      RangeExpr: "*ADI",
      AdditiveExpr: "?A",
      MultiplicativeExpr: "?A",
      IntersectExceptExpr: "*N",
      InstanceOfExpr: "1AB",
      CastableExpr: "1AB",
      UnaryExpr: "?A m[UO,UD,UF]",
      StringLiteral: "1AS",
      IntegerLiteral: "1ADI",
      DecimalLiteral: "1AD",
      DoubleLiteral: "1AO",
      NamedFunctionRef: "1F",
      InlineFunctionExpr: "1F",
      MapExpr: "1FM",
      Root: "1ND",
    },
    Vp: {
      "http://www.w3.org/2005/xpath-functions": {
        QName: {
          argNames: "paramURI,paramQName",
          maxArgs: 2,
          minArgs: 2,
          sig: "1F r[1AQ] a[?AS,1AS]",
        },
        abs: {
          argNames: "arg",
          maxArgs: 1,
          minArgs: 1,
          sig: "1F r[?A m[AO,AD,AF]] a[?A m[AO,AD,AF]]",
        },
        "accumulator-after": {
          XSLTonly: !0,
          argNames: "name",
          maxArgs: 1,
          minArgs: 1,
          sig: "1F a[1AS] r[*]",
        },
        "accumulator-before": {
          XSLTonly: !0,
          argNames: "name",
          maxArgs: 1,
          minArgs: 1,
          sig: "1F a[1AS] r[*]",
        },
        "adjust-date-to-timezone": {
          argNames: "arg,timezone",
          maxArgs: 2,
          minArgs: 1,
          sig: "1F r[?AA] a[?AA,?ARD]",
        },
        "adjust-dateTime-to-timezone": {
          argNames: "arg,timezone",
          maxArgs: 2,
          minArgs: 1,
          sig: "1F r[?AM] a[?AM,?ARD]",
        },
        "adjust-time-to-timezone": {
          argNames: "arg,timezone",
          maxArgs: 2,
          minArgs: 1,
          sig: "1F r[?AT] a[?AT,?ARD]",
        },
        "analyze-string": {
          argNames: "input,pattern,flags",
          maxArgs: 3,
          minArgs: 2,
          sig: "1F r[1NE nQ{http://www.w3.org/2005/xpath-functions}analyze-string-result] a[?AS,1AS,1AS]",
        },
        apply: {
          argNames: "function,array",
          maxArgs: 2,
          minArgs: 2,
          sig: "1F a[1F,1FA] r[*]",
        },
        "available-environment-variables": {
          argNames: "",
          maxArgs: 0,
          minArgs: 0,
          sig: "1F r[*AS] a[]",
        },
        "available-system-properties": {
          XSLTonly: !0,
          argNames: "",
          maxArgs: 0,
          minArgs: 0,
          sig: "1F r[*AQ] a[]",
        },
        avg: { argNames: "arg", maxArgs: 1, minArgs: 1, sig: "1F r[?A] a[*A]" },
        "base-uri": {
          argNames: "arg",
          defaultToDot: !0,
          maxArgs: 1,
          minArgs: 0,
          sig: "1F r[?AU] a[?N]",
        },
        boolean: {
          argNames: "arg",
          maxArgs: 1,
          minArgs: 1,
          sig: "1F r[1AB] a[*]",
        },
        ceiling: {
          argNames: "arg",
          maxArgs: 1,
          minArgs: 1,
          sig: "1F r[?A m[AO,AD,AF]] a[?A m[AO,AD,AF]]",
        },
        "codepoint-equal": {
          argNames: "comparand1,comparand2",
          maxArgs: 2,
          minArgs: 2,
          sig: "1F r[?AB] a[?AS,?AS]",
        },
        "codepoints-to-string": {
          argNames: "arg",
          maxArgs: 1,
          minArgs: 1,
          sig: "1F r[1AS] a[*ADI]",
        },
        "collation-key": {
          argNames: "key,collation",
          maxArgs: 2,
          minArgs: 1,
          sig: "1F r[1A2] a[1AS,1AS]",
        },
        collection: {
          argNames: "arg",
          maxArgs: 1,
          minArgs: 0,
          sig: "1F a[?AS] r[*]",
        },
        compare: {
          argNames: "comparand1,comparand2,collation",
          maxArgs: 3,
          minArgs: 2,
          sig: "1F r[?ADI] a[?AS,?AS,1AS]",
        },
        concat: {
          argNames: "arg1,arg2,...",
          maxArgs: 1e3,
          minArgs: 2,
          sig: "1F r[1AS] a[?A,?A,?A]",
          variadic: !0,
        },
        contains: {
          argNames: "arg1,arg2,collation",
          maxArgs: 3,
          minArgs: 2,
          sig: "1F r[1AB] a[?AS,?AS,1AS]",
        },
        "contains-token": {
          argNames: "input,token,collation",
          maxArgs: 3,
          minArgs: 2,
          sig: "1F r[1AB] a[*AS,1AS,1AS]",
        },
        "copy-of": {
          XSLTonly: !0,
          argNames: "input",
          defaultToDot: !0,
          maxArgs: 1,
          minArgs: 0,
          sig: "1F a[*] r[*]",
        },
        count: {
          argNames: "arg",
          maxArgs: 1,
          minArgs: 1,
          sig: "1F r[1ADI] a[*]",
        },
        current: {
          XSLTonly: !0,
          argNames: "",
          maxArgs: 0,
          minArgs: 0,
          sig: "1F r[1] a[]",
        },
        "current-date": {
          argNames: "",
          maxArgs: 0,
          minArgs: 0,
          sig: "1F r[1AA] a[]",
        },
        "current-dateTime": {
          argNames: "",
          maxArgs: 0,
          minArgs: 0,
          sig: "1F r[1AMP] a[]",
        },
        "current-group": {
          XSLTonly: !0,
          argNames: "",
          maxArgs: 0,
          minArgs: 0,
          sig: "1F a[] r[*]",
        },
        "current-grouping-key": {
          XSLTonly: !0,
          argNames: "",
          maxArgs: 0,
          minArgs: 0,
          sig: "1F r[*A] a[]",
        },
        "current-merge-group": {
          XSLTonly: !0,
          argNames: "source",
          maxArgs: 1,
          minArgs: 0,
          sig: "1F a[1AS] r[*]",
        },
        "current-merge-key": {
          XSLTonly: !0,
          argNames: "",
          maxArgs: 0,
          minArgs: 0,
          sig: "1F r[*A] a[]",
        },
        "current-output-uri": {
          XSLTonly: !0,
          argNames: "",
          maxArgs: 0,
          minArgs: 0,
          sig: "1F r[?AU] a[]",
        },
        "current-time": {
          argNames: "",
          maxArgs: 0,
          minArgs: 0,
          sig: "1F r[1AT] a[]",
        },
        data: {
          argNames: "arg",
          defaultToDot: !0,
          maxArgs: 1,
          minArgs: 0,
          sig: "1F r[*A] a[*]",
        },
        dateTime: {
          argNames: "arg1,arg2",
          maxArgs: 2,
          minArgs: 2,
          sig: "1F r[?AM] a[?AA,?AT]",
        },
        "day-from-date": {
          argNames: "arg",
          maxArgs: 1,
          minArgs: 1,
          sig: "1F r[?ADI] a[?AA]",
        },
        "day-from-dateTime": {
          argNames: "arg",
          maxArgs: 1,
          minArgs: 1,
          sig: "1F r[?ADI] a[?AM]",
        },
        "days-from-duration": {
          argNames: "arg",
          maxArgs: 1,
          minArgs: 1,
          sig: "1F r[?ADI] a[?AR]",
        },
        "deep-equal": {
          argNames: "parameter1,parameter2,collation",
          maxArgs: 3,
          minArgs: 2,
          sig: "1F r[1AB] a[*,*,1AS]",
        },
        "default-collation": {
          argNames: "",
          maxArgs: 0,
          minArgs: 0,
          sig: "1F r[1AS] a[]",
        },
        "default-language": {
          argNames: "",
          maxArgs: 0,
          minArgs: 0,
          sig: "1F r[1ASNTL] a[]",
        },
        "distinct-values": {
          argNames: "arg,collation",
          maxArgs: 2,
          minArgs: 1,
          sig: "1F r[*A] a[*A,1AS]",
        },
        doc: {
          argNames: "uri",
          maxArgs: 1,
          minArgs: 1,
          sig: "1F r[?ND] a[?AS]",
        },
        "doc-available": {
          argNames: "uri",
          maxArgs: 1,
          minArgs: 1,
          sig: "1F r[1AB] a[?AS]",
        },
        document: {
          XSLTonly: !0,
          argNames: "uri-sequence,base-node",
          maxArgs: 2,
          minArgs: 1,
          sig: "1F r[*N] a[*,1N]",
        },
        "document-uri": {
          argNames: "arg",
          defaultToDot: !0,
          maxArgs: 1,
          minArgs: 0,
          sig: "1F r[?AU] a[?N]",
        },
        "element-available": {
          XSLTonly: !0,
          argNames: "element-name",
          maxArgs: 1,
          minArgs: 1,
          sig: "1F r[1AB] a[1AS]",
        },
        "element-with-id": {
          argNames: "arg,node",
          defaultToDot: !0,
          maxArgs: 2,
          minArgs: 1,
          sig: "1F r[*NE] a[*AS,1N]",
        },
        empty: {
          argNames: "arg",
          maxArgs: 1,
          minArgs: 1,
          sig: "1F r[1AB] a[*]",
        },
        "encode-for-uri": {
          argNames: "uri-part",
          maxArgs: 1,
          minArgs: 1,
          sig: "1F r[1AS] a[?AS]",
        },
        "ends-with": {
          argNames: "arg1,arg2,collation",
          maxArgs: 3,
          minArgs: 2,
          sig: "1F r[1AB] a[?AS,?AS,1AS]",
        },
        "environment-variable": {
          argNames: "name",
          maxArgs: 1,
          minArgs: 1,
          sig: "1F r[?AS] a[1AS]",
        },
        error: {
          argNames: "code,description,error-object",
          maxArgs: 3,
          minArgs: 0,
          sig: "1F r[0E] a[?AQ,1AS,*]",
        },
        "escape-html-uri": {
          argNames: "uri",
          maxArgs: 1,
          minArgs: 1,
          sig: "1F r[1AS] a[?AS]",
        },
        "exactly-one": {
          argNames: "arg",
          maxArgs: 1,
          minArgs: 1,
          sig: "1F r[1] a[*]",
        },
        exists: {
          argNames: "arg",
          maxArgs: 1,
          minArgs: 1,
          sig: "1F r[1AB] a[*]",
        },
        false: { argNames: "", maxArgs: 0, minArgs: 0, sig: "1F r[1AB] a[]" },
        filter: {
          argNames: "seq,f",
          maxArgs: 2,
          minArgs: 2,
          sig: "1F r[*] a[*,1F r[1AB] a[1]]",
        },
        floor: {
          argNames: "arg",
          maxArgs: 1,
          minArgs: 1,
          sig: "1F r[?A m[AO,AD,AF]] a[?A m[AO,AD,AF]]",
        },
        "fold-left": {
          argNames: "seq,zero,f",
          maxArgs: 3,
          minArgs: 3,
          sig: "1F a[*,*,1F a[*,1] r[*]] r[*]",
        },
        "fold-right": {
          argNames: "seq,zero,f",
          maxArgs: 3,
          minArgs: 3,
          sig: "1F a[*,*,1F a[1,*] r[*]] r[*]",
        },
        "for-each": {
          argNames: "seq,action",
          maxArgs: 2,
          minArgs: 2,
          sig: "1F a[*,1F a[1] r[*]] r[*]",
        },
        "for-each-pair": {
          argNames: "seq1,seq2,action",
          maxArgs: 3,
          minArgs: 3,
          sig: "1F a[*,*,1F a[1,1] r[*]] r[*]",
        },
        "format-date": {
          argNames: "value,picture,language,calendar,place",
          maxArgs: 5,
          minArgs: 2,
          sig: "1F r[?AS] a[?AA,1AS,?AS,?AS,?AS]",
        },
        "format-dateTime": {
          argNames: "value,picture,language,calendar,place",
          maxArgs: 5,
          minArgs: 2,
          sig: "1F r[?AS] a[?AM,1AS,?AS,?AS,?AS]",
        },
        "format-integer": {
          argNames: "value,picture,lang",
          maxArgs: 3,
          minArgs: 2,
          sig: "1F r[1AS] a[?ADI,1AS,?AS]",
        },
        "format-number": {
          argNames: "value,picture,decimal-format-name",
          maxArgs: 3,
          minArgs: 2,
          sig: "1F r[1AS] a[?A m[AO,AD,AF],1AS,?AS]",
        },
        "format-time": {
          argNames: "value,picture,language,calendar,place",
          maxArgs: 5,
          minArgs: 2,
          sig: "1F r[?AS] a[?AT,1AS,?AS,?AS,?AS]",
        },
        "function-arity": {
          argNames: "func",
          maxArgs: 1,
          minArgs: 1,
          sig: "1F r[1ADI] a[1F]",
        },
        "function-available": {
          XSLTonly: !0,
          argNames: "function-name,arity",
          maxArgs: 2,
          minArgs: 1,
          sig: "1F r[1AB] a[1AS,1ADI]",
        },
        "function-lookup": {
          argNames: "name,arity",
          maxArgs: 2,
          minArgs: 2,
          sig: "1F r[?F] a[1AQ,1ADI]",
        },
        "function-name": {
          argNames: "func",
          maxArgs: 1,
          minArgs: 1,
          sig: "1F r[?AQ] a[1F]",
        },
        "generate-id": {
          argNames: "arg",
          defaultToDot: !0,
          maxArgs: 1,
          minArgs: 0,
          sig: "1F r[1AS] a[?N]",
        },
        "has-children": {
          argNames: "node",
          defaultToDot: !0,
          maxArgs: 1,
          minArgs: 0,
          sig: "1F r[1AB] a[?N]",
        },
        head: { argNames: "arg", maxArgs: 1, minArgs: 1, sig: "1F r[?] a[*]" },
        "hours-from-dateTime": {
          argNames: "arg",
          maxArgs: 1,
          minArgs: 1,
          sig: "1F r[?ADI] a[?AM]",
        },
        "hours-from-duration": {
          argNames: "arg",
          maxArgs: 1,
          minArgs: 1,
          sig: "1F r[?ADI] a[?AR]",
        },
        "hours-from-time": {
          argNames: "arg",
          maxArgs: 1,
          minArgs: 1,
          sig: "1F r[?ADI] a[?AT]",
        },
        id: {
          argNames: "arg,node",
          defaultToDot: !0,
          maxArgs: 2,
          minArgs: 1,
          sig: "1F r[*NE] a[*AS,1N]",
        },
        idref: {
          argNames: "arg,node",
          defaultToDot: !0,
          maxArgs: 2,
          minArgs: 1,
          sig: "1F r[*N] a[*AS,1N]",
        },
        "implicit-timezone": {
          argNames: "",
          maxArgs: 0,
          minArgs: 0,
          sig: "1F r[1ARD] a[]",
        },
        "in-scope-prefixes": {
          argNames: "element",
          maxArgs: 1,
          minArgs: 1,
          sig: "1F r[*AS] a[1NE]",
        },
        "index-of": {
          argNames: "seq,search,collation",
          maxArgs: 3,
          minArgs: 2,
          sig: "1F r[*ADI] a[*A,1A,1AS]",
        },
        innermost: {
          argNames: "nodes",
          maxArgs: 1,
          minArgs: 1,
          sig: "1F r[*N] a[*N]",
        },
        "insert-before": {
          argNames: "target,position,inserts",
          maxArgs: 3,
          minArgs: 3,
          sig: "1F a[*,1ADI,*] r[*]",
        },
        "iri-to-uri": {
          argNames: "iri",
          maxArgs: 1,
          minArgs: 1,
          sig: "1F r[1AS] a[?AS]",
        },
        "json-doc": {
          argNames: "href,options",
          maxArgs: 2,
          minArgs: 1,
          sig: "1F r[?] a[?AS,1FM]",
        },
        "json-to-xml": {
          argNames: "json-text,options",
          maxArgs: 2,
          minArgs: 1,
          sig: "1F r[?ND] a[?AS,1FM]",
        },
        key: {
          XSLTonly: !0,
          argNames: "key-name,key-value,top",
          maxArgs: 3,
          minArgs: 2,
          sig: "1F r[*N] a[1AS,*A,1N]",
        },
        lang: {
          argNames: "testlang,node",
          defaultToDot: !0,
          maxArgs: 2,
          minArgs: 1,
          sig: "1F r[1AB] a[?AS,1N]",
        },
        last: { argNames: "", maxArgs: 0, minArgs: 0, sig: "1F r[1ADI] a[]" },
        "load-xquery-module": {
          argNames: "module-uri,options",
          maxArgs: 2,
          minArgs: 1,
          sig: "1F r[1FM] a[1AS,1FM]",
        },
        "local-name": {
          argNames: "arg",
          defaultToDot: !0,
          maxArgs: 1,
          minArgs: 0,
          sig: "1F r[1AS] a[?N]",
        },
        "local-name-from-QName": {
          argNames: "arg",
          maxArgs: 1,
          minArgs: 1,
          sig: "1F r[?ASNTNC] a[?AQ]",
        },
        "lower-case": {
          argNames: "arg",
          maxArgs: 1,
          minArgs: 1,
          sig: "1F r[1AS] a[?AS]",
        },
        matches: {
          argNames: "input,pattern,flags",
          maxArgs: 3,
          minArgs: 2,
          sig: "1F r[1AB] a[?AS,1AS,1AS]",
        },
        max: {
          argNames: "arg,collation",
          maxArgs: 2,
          minArgs: 1,
          sig: "1F r[?A] a[*A,1AS]",
        },
        min: {
          argNames: "arg,collation",
          maxArgs: 2,
          minArgs: 1,
          sig: "1F r[?A] a[*A,1AS]",
        },
        "minutes-from-dateTime": {
          argNames: "arg",
          maxArgs: 1,
          minArgs: 1,
          sig: "1F r[?ADI] a[?AM]",
        },
        "minutes-from-duration": {
          argNames: "arg",
          maxArgs: 1,
          minArgs: 1,
          sig: "1F r[?ADI] a[?AR]",
        },
        "minutes-from-time": {
          argNames: "arg",
          maxArgs: 1,
          minArgs: 1,
          sig: "1F r[?ADI] a[?AT]",
        },
        "month-from-date": {
          argNames: "arg",
          maxArgs: 1,
          minArgs: 1,
          sig: "1F r[?ADI] a[?AA]",
        },
        "month-from-dateTime": {
          argNames: "arg",
          maxArgs: 1,
          minArgs: 1,
          sig: "1F r[?ADI] a[?AM]",
        },
        "months-from-duration": {
          argNames: "arg",
          maxArgs: 1,
          minArgs: 1,
          sig: "1F r[?ADI] a[?AR]",
        },
        name: {
          argNames: "arg",
          defaultToDot: !0,
          maxArgs: 1,
          minArgs: 0,
          sig: "1F r[1AS] a[?N]",
        },
        "namespace-uri": {
          argNames: "arg",
          defaultToDot: !0,
          maxArgs: 1,
          minArgs: 0,
          sig: "1F r[1AU] a[?N]",
        },
        "namespace-uri-for-prefix": {
          argNames: "prefix,element",
          maxArgs: 2,
          minArgs: 2,
          sig: "1F r[?AU] a[?AS,1NE]",
        },
        "namespace-uri-from-QName": {
          argNames: "arg",
          maxArgs: 1,
          minArgs: 1,
          sig: "1F r[?AU] a[?AQ]",
        },
        nilled: {
          argNames: "arg",
          defaultToDot: !0,
          maxArgs: 1,
          minArgs: 0,
          sig: "1F r[?AB] a[?N]",
        },
        "node-name": {
          argNames: "arg",
          defaultToDot: !0,
          maxArgs: 1,
          minArgs: 0,
          sig: "1F r[?AQ] a[?N]",
        },
        "normalize-space": {
          argNames: "arg",
          maxArgs: 1,
          minArgs: 0,
          sig: "1F r[1AS] a[?AS]",
        },
        "normalize-unicode": {
          argNames: "arg,normalizationForm",
          maxArgs: 2,
          minArgs: 1,
          sig: "1F r[1AS] a[?AS,1AS]",
        },
        not: { argNames: "arg", maxArgs: 1, minArgs: 1, sig: "1F r[1AB] a[*]" },
        number: {
          argNames: "arg",
          defaultToDot: !0,
          maxArgs: 1,
          minArgs: 0,
          sig: "1F r[1AO] a[?A]",
        },
        "one-or-more": {
          argNames: "arg",
          maxArgs: 1,
          minArgs: 1,
          sig: "1F r[+] a[*]",
        },
        outermost: {
          argNames: "nodes",
          maxArgs: 1,
          minArgs: 1,
          sig: "1F r[*N] a[*N]",
        },
        "parse-ietf-date": {
          argNames: "value",
          maxArgs: 1,
          minArgs: 1,
          sig: "1F r[?AM] a[?AS]",
        },
        "parse-json": {
          argNames: "json-text,options",
          maxArgs: 2,
          minArgs: 1,
          sig: "1F r[?] a[?AS,1FM]",
        },
        "parse-xml": {
          argNames: "arg",
          maxArgs: 1,
          minArgs: 1,
          sig: "1F r[?ND e[NE]] a[?AS]",
        },
        "parse-xml-fragment": {
          argNames: "arg",
          maxArgs: 1,
          minArgs: 1,
          sig: "1F r[?ND] a[?AS]",
        },
        path: {
          argNames: "arg",
          defaultToDot: !0,
          maxArgs: 1,
          minArgs: 0,
          sig: "1F r[?AS] a[?N]",
        },
        position: {
          argNames: "",
          maxArgs: 0,
          minArgs: 0,
          sig: "1F r[1ADI] a[]",
        },
        "prefix-from-QName": {
          argNames: "arg",
          maxArgs: 1,
          minArgs: 1,
          sig: "1F r[?ASNTNC] a[?AQ]",
        },
        "random-number-generator": {
          argNames: "seed",
          maxArgs: 1,
          minArgs: 0,
          sig: "1F r[1FM k[AS] v[1]] a[?A]",
        },
        "regex-group": {
          XSLTonly: !0,
          argNames: "group-number",
          maxArgs: 1,
          minArgs: 1,
          sig: "1F r[1AS] a[1ADI]",
        },
        remove: {
          argNames: "target,position",
          maxArgs: 2,
          minArgs: 2,
          sig: "1F r[*] a[*,1ADI]",
        },
        replace: {
          argNames: "input,pattern,replacement,flags",
          maxArgs: 4,
          minArgs: 3,
          sig: "1F r[1AS] a[?AS,1AS,1AS,1AS]",
        },
        "resolve-QName": {
          argNames: "qname,element",
          maxArgs: 2,
          minArgs: 2,
          sig: "1F r[?AQ] a[?AS,1NE]",
        },
        "resolve-uri": {
          argNames: "relative,base",
          maxArgs: 2,
          minArgs: 1,
          sig: "1F r[?AU] a[?AS,1AS]",
        },
        reverse: {
          argNames: "arg",
          maxArgs: 1,
          minArgs: 1,
          sig: "1F a[*] r[*]",
        },
        root: {
          argNames: "arg",
          defaultToDot: !0,
          maxArgs: 1,
          minArgs: 0,
          sig: "1F r[?N] a[?N]",
        },
        round: {
          argNames: "arg,precision",
          maxArgs: 2,
          minArgs: 1,
          sig: "1F r[?A m[AO,AD,AF]] a[?A m[AO,AD,AF],1ADI]",
        },
        "round-half-to-even": {
          argNames: "arg,precision",
          maxArgs: 2,
          minArgs: 1,
          sig: "1F r[?A m[AO,AD,AF]] a[?A m[AO,AD,AF],1ADI]",
        },
        "seconds-from-dateTime": {
          argNames: "arg",
          maxArgs: 1,
          minArgs: 1,
          sig: "1F r[?AD] a[?AM]",
        },
        "seconds-from-duration": {
          argNames: "arg",
          maxArgs: 1,
          minArgs: 1,
          sig: "1F r[?AD] a[?AR]",
        },
        "seconds-from-time": {
          argNames: "arg",
          maxArgs: 1,
          minArgs: 1,
          sig: "1F r[?AD] a[?AT]",
        },
        serialize: {
          argNames: "arg,params",
          maxArgs: 2,
          minArgs: 1,
          sig: "1F r[1AS] a[*,?]",
        },
        snapshot: {
          XSLTonly: !0,
          argNames: "input",
          defaultToDot: !0,
          maxArgs: 1,
          minArgs: 0,
          sig: "1F a[*] r[*]",
        },
        sort: {
          argNames: "input,collation,key",
          maxArgs: 3,
          minArgs: 1,
          sig: "1F r[*] a[*,?AS,1F r[*A] a[1]]",
        },
        "starts-with": {
          argNames: "arg1,arg2,collation",
          maxArgs: 3,
          minArgs: 2,
          sig: "1F r[1AB] a[?AS,?AS,1AS]",
        },
        "static-base-uri": {
          argNames: "",
          maxArgs: 0,
          minArgs: 0,
          sig: "1F r[?AU] a[]",
        },
        "stream-available": {
          XSLTonly: !0,
          argNames: "uri",
          maxArgs: 1,
          minArgs: 1,
          sig: "1F r[1AB] a[?AS]",
        },
        string: {
          argNames: "arg",
          defaultToDot: !0,
          maxArgs: 1,
          minArgs: 0,
          sig: "1F r[1AS] a[?]",
        },
        "string-join": {
          argNames: "arg1,arg2",
          maxArgs: 2,
          minArgs: 1,
          sig: "1F r[1AS] a[*A,1AS]",
        },
        "string-length": {
          argNames: "arg",
          maxArgs: 1,
          minArgs: 0,
          sig: "1F r[1ADI] a[?AS]",
        },
        "string-to-codepoints": {
          argNames: "arg",
          maxArgs: 1,
          minArgs: 1,
          sig: "1F r[*ADI] a[?AS]",
        },
        subsequence: {
          argNames: "sourceSeq,startingLoc,length",
          maxArgs: 3,
          minArgs: 2,
          sig: "1F a[*,1AO,1AO] r[*]",
        },
        substring: {
          argNames: "sourceString,start,length",
          maxArgs: 3,
          minArgs: 2,
          sig: "1F r[1AS] a[?AS,1AO,1AO]",
        },
        "substring-after": {
          argNames: "arg1,arg2,collation",
          maxArgs: 3,
          minArgs: 2,
          sig: "1F r[1AS] a[?AS,?AS,1AS]",
        },
        "substring-before": {
          argNames: "arg1,arg2,collation",
          maxArgs: 3,
          minArgs: 2,
          sig: "1F r[1AS] a[?AS,?AS,1AS]",
        },
        sum: {
          argNames: "arg,zero",
          maxArgs: 2,
          minArgs: 1,
          sig: "1F r[?A] a[*A,?A]",
        },
        "system-property": {
          XSLTonly: !0,
          argNames: "property-name",
          maxArgs: 1,
          minArgs: 1,
          sig: "1F r[1AS] a[1AS]",
        },
        tail: { argNames: "arg", maxArgs: 1, minArgs: 1, sig: "1F a[*] r[*]" },
        "timezone-from-date": {
          argNames: "arg",
          maxArgs: 1,
          minArgs: 1,
          sig: "1F r[?ARD] a[?AA]",
        },
        "timezone-from-dateTime": {
          argNames: "arg",
          maxArgs: 1,
          minArgs: 1,
          sig: "1F r[?ARD] a[?AM]",
        },
        "timezone-from-time": {
          argNames: "arg",
          maxArgs: 1,
          minArgs: 1,
          sig: "1F r[?ARD] a[?AT]",
        },
        tokenize: {
          argNames: "input,pattern,flags",
          maxArgs: 3,
          minArgs: 1,
          sig: "1F r[*AS] a[?AS,1AS,1AS]",
        },
        trace: {
          argNames: "value,label",
          maxArgs: 2,
          minArgs: 1,
          sig: "1F a[*,1AS] r[*]",
        },
        transform: {
          argNames: "options",
          maxArgs: 1,
          minArgs: 1,
          sig: "1F r[1FM] a[1FM]",
        },
        translate: {
          argNames: "arg,mapString,transString",
          maxArgs: 3,
          minArgs: 3,
          sig: "1F r[1AS] a[?AS,1AS,1AS]",
        },
        true: { argNames: "", maxArgs: 0, minArgs: 0, sig: "1F r[1AB] a[]" },
        "type-available": {
          XSLTonly: !0,
          argNames: "type-name",
          maxArgs: 1,
          minArgs: 1,
          sig: "1F r[1AB] a[1AS]",
        },
        unordered: {
          argNames: "sourceSeq",
          maxArgs: 1,
          minArgs: 1,
          sig: "1F r[*] a[*]",
        },
        "unparsed-entity-public-id": {
          XSLTonly: !0,
          argNames: "entity-name,doc",
          maxArgs: 2,
          minArgs: 1,
          sig: "1F r[1AS] a[1AS,1N]",
        },
        "unparsed-entity-uri": {
          XSLTonly: !0,
          argNames: "entity-name,doc",
          maxArgs: 2,
          minArgs: 1,
          sig: "1F r[1AU] a[1AS,1N]",
        },
        "unparsed-text": {
          argNames: "href,encoding",
          maxArgs: 2,
          minArgs: 1,
          sig: "1F r[?AS] a[?AS,1AS]",
        },
        "unparsed-text-available": {
          argNames: "href,encoding",
          maxArgs: 2,
          minArgs: 1,
          sig: "1F r[1AB] a[?AS,1AS]",
        },
        "unparsed-text-lines": {
          argNames: "href,encoding",
          maxArgs: 2,
          minArgs: 1,
          sig: "1F r[*AS] a[?AS,1AS]",
        },
        "upper-case": {
          argNames: "arg",
          maxArgs: 1,
          minArgs: 1,
          sig: "1F r[1AS] a[?AS]",
        },
        "uri-collection": {
          argNames: "arg",
          maxArgs: 1,
          minArgs: 0,
          sig: "1F r[*AU] a[?AS]",
        },
        "xml-to-json": {
          argNames: "input,options",
          maxArgs: 2,
          minArgs: 1,
          sig: "1F r[?AS] a[?N,1FM]",
        },
        "year-from-date": {
          argNames: "arg",
          maxArgs: 1,
          minArgs: 1,
          sig: "1F r[?ADI] a[?AA]",
        },
        "year-from-dateTime": {
          argNames: "arg",
          maxArgs: 1,
          minArgs: 1,
          sig: "1F r[?ADI] a[?AM]",
        },
        "years-from-duration": {
          argNames: "arg",
          maxArgs: 1,
          minArgs: 1,
          sig: "1F r[?ADI] a[?AR]",
        },
        "zero-or-one": {
          argNames: "arg",
          maxArgs: 1,
          minArgs: 1,
          sig: "1F r[?] a[*]",
        },
      },
      "http://www.w3.org/2005/xpath-functions/array": {
        append: {
          argNames: "array,appendage",
          maxArgs: 2,
          minArgs: 2,
          sig: "1F r[1FA] a[1FA,*]",
        },
        filter: {
          argNames: "array,function",
          maxArgs: 2,
          minArgs: 2,
          sig: "1F r[1FA] a[1FA,1F r[1AB] a[*]]",
        },
        flatten: {
          argNames: "input",
          maxArgs: 1,
          minArgs: 1,
          sig: "1F a[*] r[*]",
        },
        "fold-left": {
          argNames: "array,zero,function",
          maxArgs: 3,
          minArgs: 3,
          sig: "1F a[1FA,*,1F a[*,*]] r[*]",
        },
        "fold-right": {
          argNames: "array,zero,function",
          maxArgs: 3,
          minArgs: 3,
          sig: "1F a[1FA,*,1F a[*,*]] r[*]",
        },
        "for-each": {
          argNames: "array,action",
          maxArgs: 2,
          minArgs: 2,
          sig: "1F r[1FA] a[1FA,1F a[*]]",
        },
        "for-each-pair": {
          argNames: "array1,array2,function",
          maxArgs: 3,
          minArgs: 3,
          sig: "1F r[1FA] a[1FA,1FA,1F a[*,*]]",
        },
        get: {
          argNames: "array,position",
          maxArgs: 2,
          minArgs: 2,
          sig: "1F a[1FA,1ADI] r[*]",
        },
        head: {
          argNames: "array",
          maxArgs: 1,
          minArgs: 1,
          sig: "1F a[1FA] r[*]",
        },
        "insert-before": {
          argNames: "array,position,member",
          maxArgs: 3,
          minArgs: 3,
          sig: "1F r[1FA] a[1FA,1ADI,*]",
        },
        join: {
          argNames: "arrays",
          maxArgs: 1,
          minArgs: 1,
          sig: "1F r[1FA] a[*FA]",
        },
        put: {
          argNames: "array,position,member",
          maxArgs: 3,
          minArgs: 3,
          sig: "1F r[1FA] a[1FA,1ADI,*]",
        },
        remove: {
          argNames: "array,positions",
          maxArgs: 2,
          minArgs: 2,
          sig: "1F r[1FA] a[1FA,*ADI]",
        },
        reverse: {
          argNames: "array",
          maxArgs: 1,
          minArgs: 1,
          sig: "1F r[1FA] a[1FA]",
        },
        size: {
          argNames: "array",
          maxArgs: 1,
          minArgs: 1,
          sig: "1F r[1ADI] a[1FA]",
        },
        sort: {
          argNames: "array,collation,key",
          maxArgs: 3,
          minArgs: 1,
          sig: "1F r[1FA] a[1FA,?AS,1F r[*A] a[*]]",
        },
        subarray: {
          argNames: "array,start,length",
          maxArgs: 3,
          minArgs: 2,
          sig: "1F r[1FA] a[1FA,1ADI,1ADI]",
        },
        tail: {
          argNames: "array",
          maxArgs: 1,
          minArgs: 1,
          sig: "1F r[1FA] a[1FA]",
        },
      },
      "http://www.w3.org/2005/xpath-functions/map": {
        contains: {
          argNames: "map,key",
          maxArgs: 2,
          minArgs: 2,
          sig: "1F r[1AB] a[1FM,1A]",
        },
        entry: {
          argNames: "key,value",
          maxArgs: 2,
          minArgs: 2,
          sig: "1F r[1FM] a[1A,*]",
        },
        find: {
          argNames: "input,key",
          maxArgs: 2,
          minArgs: 2,
          sig: "1F r[1FA] a[*,1A]",
        },
        "for-each": {
          argNames: "map,action",
          maxArgs: 2,
          minArgs: 2,
          sig: "1F r[*] a[1FM,1F a[1A,*]]",
        },
        get: {
          argNames: "map,key",
          maxArgs: 2,
          minArgs: 2,
          sig: "1F a[1FM,1A] r[*]",
        },
        keys: {
          argNames: "map",
          maxArgs: 1,
          minArgs: 1,
          sig: "1F r[*A] a[1FM]",
        },
        merge: {
          argNames: "maps,options",
          maxArgs: 2,
          minArgs: 1,
          sig: "1F r[1FM] a[*FM,1FM]",
        },
        put: {
          argNames: "map,key,value",
          maxArgs: 3,
          minArgs: 3,
          sig: "1F r[1FM] a[1FM,1A,*]",
        },
        remove: {
          argNames: "map,keys",
          maxArgs: 2,
          minArgs: 2,
          sig: "1F r[1FM] a[1FM,*A]",
        },
        size: {
          argNames: "map",
          maxArgs: 1,
          minArgs: 1,
          sig: "1F r[1ADI] a[1FM]",
        },
      },
      "http://www.w3.org/2005/xpath-functions/math": {
        acos: {
          argNames: "arg",
          maxArgs: 1,
          minArgs: 1,
          sig: "1F r[?AO] a[?AO]",
        },
        asin: {
          argNames: "arg",
          maxArgs: 1,
          minArgs: 1,
          sig: "1F r[?AO] a[?AO]",
        },
        atan: {
          argNames: "arg",
          maxArgs: 1,
          minArgs: 1,
          sig: "1F r[?AO] a[?AO]",
        },
        atan2: {
          argNames: "y,x",
          maxArgs: 2,
          minArgs: 2,
          sig: "1F r[1AO] a[1AO,1AO]",
        },
        cos: { argNames: "θ", maxArgs: 1, minArgs: 1, sig: "1F r[?AO] a[?AO]" },
        exp: {
          argNames: "arg",
          maxArgs: 1,
          minArgs: 1,
          sig: "1F r[?AO] a[?AO]",
        },
        exp10: {
          argNames: "arg",
          maxArgs: 1,
          minArgs: 1,
          sig: "1F r[?AO] a[?AO]",
        },
        log: {
          argNames: "arg",
          maxArgs: 1,
          minArgs: 1,
          sig: "1F r[?AO] a[?AO]",
        },
        log10: {
          argNames: "arg",
          maxArgs: 1,
          minArgs: 1,
          sig: "1F r[?AO] a[?AO]",
        },
        pi: { argNames: "", maxArgs: 0, minArgs: 0, sig: "1F r[1AO] a[]" },
        pow: {
          argNames: "x,y",
          maxArgs: 2,
          minArgs: 2,
          sig: "1F r[?AO] a[?AO,1A m[AO,AD,AF]]",
        },
        sin: { argNames: "θ", maxArgs: 1, minArgs: 1, sig: "1F r[?AO] a[?AO]" },
        sqrt: {
          argNames: "arg",
          maxArgs: 1,
          minArgs: 1,
          sig: "1F r[?AO] a[?AO]",
        },
        tan: { argNames: "θ", maxArgs: 1, minArgs: 1, sig: "1F r[?AO] a[?AO]" },
      },
    },
  };
  var de = {
    zp: {
      apply: {
        argNames: "functionI, key",
        maxArgs: 2,
        minArgs: 2,
        sig: "1F r[*] a[1F,1FA]",
      },
      "column-number": {
        argNames: "node",
        maxArgs: 1,
        minArgs: 0,
        sig: "1F r[1ADI] a[1N]",
      },
      "compile-XPath": {
        argNames: "xpath,options,params",
        maxArgs: 3,
        minArgs: 1,
        sig: "1F r[1ND] a[1AS,?,?]",
        returnType: "document-1N",
      },
      "compile-GlobalContext": {
        argNames: "variables,functions,accumulators",
        maxArgs: 3,
        minArgs: 3,
        sig: "1F r[1] a[1FM,1FM,1FM]",
      },
      "discard-document": {
        argNames: "doc",
        maxArgs: 1,
        minArgs: 1,
        sig: "1F r[1ND] a[1ND]",
        returnType: "document-1N",
      },
      "has-uniform-namespaces": {
        argNames: "node",
        maxArgs: 1,
        minArgs: 1,
        sig: "1F r[1AB] a[1N]",
      },
      "line-number": {
        argNames: "node",
        maxArgs: 1,
        minArgs: 0,
        sig: "1F r[1ADI] a[1N]",
      },
      "marshal-type": {
        argNamess: "code",
        maxArgs: 1,
        minArgs: 1,
        sig: "1F r[1FM] a[1AS]",
      },
      "message-count": {
        argNames: "errCode",
        maxArgs: 1,
        minArgs: 1,
        sig: "1F r[1ADI] a[?AQ]",
      },
      "parse-sequence-type": {
        argNames: "type,context,defaultXPathNamespace",
        maxArgs: 3,
        minArgs: 2,
        sig: "1F r[1FM] a[1AS,1NE,?AS]",
      },
      "parse-XPath": {
        argNames: "xpath,options,params",
        maxArgs: 3,
        minArgs: 1,
        sig: "1F r[1ND] a[1AS,?AS,?]",
      },
      permute: {
        argNames: "input",
        maxArgs: 1,
        minArgs: 1,
        sig: "1F r[*] a[*]",
      },
      "system-id": {
        argNames: "",
        maxArgs: 0,
        minArgs: 0,
        sig: "1F r[*AU] a[]",
      },
      timestamp: {
        argNames: "",
        maxArgs: 0,
        minArgs: 0,
        sig: "1F r[1AMP] a[]",
      },
    },
    Oo: {
      apply: {
        argNames: "function,arguments",
        maxArgs: 2,
        minArgs: 2,
        sig: "1F r[*] a[1F,1FA]",
      },
      call: {
        argNames: "object,method,arguments",
        maxArgs: 3,
        minArgs: 3,
        sig: "1F r[*] a[1,1AS,1FA]",
      },
      contains: {
        argNames: "object,property",
        maxArgs: 2,
        minArgs: 2,
        sig: "1F r[1AB] a[1,1AS]",
      },
      eval: {
        argNames: "script",
        maxArgs: 1,
        minArgs: 1,
        sig: "1F r[*] a[1AS]",
      },
      event: { argNames: "", maxArgs: 0, minArgs: 0, sig: "1F r[?] a[]" },
      get: {
        argNames: "object,property",
        maxArgs: 2,
        minArgs: 2,
        sig: "1F r[*] a[?,1AS]",
      },
      location: { argNames: "", maxArgs: 0, minArgs: 0, sig: "1F r[1AS] a[]" },
      page: { argNames: "", maxArgs: 0, minArgs: 0, sig: "1F r[1N] a[]" },
      "query-params": {
        argNames: "",
        maxArgs: 0,
        minArgs: 0,
        sig: "1F r[1FM] a[]",
      },
      "set-property": {
        argNames: "property,value,object",
        maxArgs: 3,
        minArgs: 3,
        sig: "1F r[0E] a[1AS,*,1NE]",
      },
      source: { argNames: "", maxArgs: 0, minArgs: 0, sig: "1F r[?N] a[]" },
      style: {
        argNames: "node",
        maxArgs: 1,
        minArgs: 1,
        sig: "1F r[1FM] a[?N]",
      },
      window: { argNames: "", maxArgs: 0, minArgs: 0, sig: "1F r[1] a[]" },
    },
    Vn: {
      "node-set": {
        argNames: "node",
        maxArgs: 1,
        minArgs: 1,
        sig: "1F r[?N] a[?N]",
      },
    },
  };
  var ge = (function () {
    function a(a) {
      var b;
      var c = {};
      for (b in a) {
        var d = a[b];
        c[b] = d;
      }
      return c;
    }
    function b() {}
    function d(a) {
      var b = {};
      if (a) {
        a = a.split(" ");
        for (var c = 0; c < a.length; c++) {
          var d = a[c].split("=");
          b[d[0]] = "~" === d[1] ? F.me[d[0]] : d[1];
        }
      }
      return b;
    }
    function m(a) {
      var b = [];
      (a.C || []).forEach(function (a) {
        "arg" === a.N && b.push(a);
      });
      return b;
    }
    function c(a, c, d) {
      if (c.globalContext) var e = c.globalContext.value.ja();
      else {
        e = new b();
        e.Uj();
        var f = c.globals;
        f && (e.Be = f);
        if ((f = c.accumulators)) e.Tc = f;
      }
      f = c.language;
      A && A.language && (f = A.language);
      var h = c.staticContext;
      h && h.language && (f = h.language);
      h = c.html5Mode;
      e.hh = h ? h : !1;
      e.Tb = f ? "XSLT" === f : !1;
      e.Ee = c.inTry;
      e.wi = c.inCatch;
      e.kd = c.backwardCompatibility;
      var g, k;
      if ((f = c.slotMap)) {
        h = -1;
        for (g in f) {
          var x = f[g];
          e.Ld[g] = x;
          h = x > h ? x : h;
        }
        e.wg = h + 1;
      }
      e.Ep(a);
      if ((a = c.slotTypes)) for (g in a) e.Lf[g] = J.Kc(a[g]);
      for (k in d) e.namespaces[k] = d[k];
      e.namespaces[""] = "";
      if ((d = c.staticTyping)) e.Ti = d;
      if ((d = c.xpathDefaultNamespace)) e.Mg = d;
      if ((d = c.defaultCollation)) e.Bd = d;
      if ((d = c.staticBaseURI)) e.Ac = d;
      d = c.contextType;
      e.type = d ? new J.Ka(I.ni(d), kb) : e.Tb ? null : J.B.qe;
      e.sh = e.type;
      if ((c = c.requiredType)) e.zh = J.Kd(c);
      return e;
    }
    function l(a) {
      var c = new b();
      c.type = J.B.qe;
      c.Cp(a.params, a.inputConvert);
      ["xs", "map", "array", "math", "saxon"].forEach(function (a) {
        return (c.namespaces[a] = xd[a]);
      });
      for (var d in a.namespaceContext) c.namespaces[d] = a.namespaceContext[d];
      a.xpathDefaultNamespace && (c.Mg = a.xpathDefaultNamespace);
      return c;
    }
    function f(a, b, c) {
      var e = "pattern" === b.type,
        d = b.splitPattern,
        f = "XSLT" === b.language;
      b = b.allowEmpty;
      wb.find("SaxonJS");
      a = fe.process(a, e, d, c, f, b);
      return D.l(a);
    }
    function k(a, b) {
      b = void 0 === b ? !1 : b;
      var c = { function: {}, globalVariable: {}, globalParam: {} },
        e;
      for (e in a)
        if ("PRIVATE" !== a[e].visibility) {
          var d = a[e].actor,
            f = G.da(d) ? d.nodeName : d.N,
            g = G.da(d) ? d.getAttribute("name") : d.name;
          switch (f) {
            case "function":
              if (
                b &&
                "PUBLIC" !== a[e].visibility &&
                "FINAL" !== a[e].visibility
              )
                break;
              d = (G.da(d) ? G.xe(d, "arg") : m(d)).length;
              c[f][g + "#" + d] = a[e];
              break;
            case "globalVariable":
            case "globalParam":
              c[f][g] = a[e];
          }
        }
      return c;
    }
    function r(a, b) {
      b = void 0 === b ? !0 : b;
      var c = { N: a.nodeName },
        e = a.attributes,
        d;
      for (d = 0; d < e.length; d++) {
        var f = e[d].name;
        if (
          "xmlns" !== f.substring(0, 5) ||
          (5 !== f.length && ":" !== f.charAt(5))
        )
          c[f] = e[d].value;
      }
      e = a.childNodes || [];
      if (0 !== e.length) {
        f = [];
        for (d = 0; d < e.length; d++) {
          var g = r(e[d], b);
          b && (g.parentNode = c);
          f.push(g);
        }
        c.C = f;
      }
      return c;
    }
    function v(a) {
      a.C &&
        a.C.forEach(function (b) {
          b.parentNode = a;
          v(b);
        });
    }
    function w(a, b, c) {
      a = {
        N: "co",
        id: a,
        binds: c,
        ci: c.split(/\s+/).map(function (a) {
          return parseInt(a, 10);
        }),
        actor: b,
        C: [b],
      };
      return (b.parentNode = a);
    }
    function z(a) {
      if (!G.da(a)) return [];
      var b = [];
      a.childNodes.forEach(function (a) {
        return (b = b.concat(z(a)));
      });
      return b;
    }
    function t(a, b) {
      "ufRef" === a.nodeName
        ? a.setAttribute("bSlot", b[a.getAttribute("name")])
        : a.hasChildNodes() &&
          a.childNodes.forEach(function (a) {
            return t(a, b);
          });
    }
    var g = Q.ag,
      K = J.B,
      A = null;
    b.prototype = {
      type: void 0,
      zh: void 0,
      sh: void 0,
      nb: [],
      kl: void 0,
      wg: 0,
      Zj: 1,
      Ld: {},
      Lf: {},
      Tj: {},
      Le: {},
      Be: {},
      Tc: {},
      Ti: !1,
      Tb: !1,
      Ee: !1,
      wi: !1,
      hk: !1,
      kd: !1,
      namespaces: {},
      Mg: "",
      Bd: g,
      Uj: function () {
        this.Zj = this.wg = 0;
        this.Le = {};
        this.Ld = {};
        this.Lf = {};
        this.Ti = !1;
        this.Tj = {};
        this.Be = {};
        this.namespaces = {
          "": "",
          xml: "http://www.w3.org/XML/1998/namespace",
          fn: "http://www.w3.org/2005/xpath-functions",
        };
        this.Bd = g;
      },
      toString: function () {
        var a = 0,
          b;
        for (b in this.Be) a++;
        return "CompileContext:" + ("\n\t" + a + " global variables/params");
      },
      Ep: function (a) {
        if (void 0 !== a && ((a = a.next()), null != a))
          for (var b = D.K(a.keys()), c; null != (c = b.next()); ) {
            var d = C.O.X.matches(c) ? c.ha() : c.toString();
            /^Q{/.test(d) || (d = "Q{}" + d);
            var f = this.Ld.hasOwnProperty(d) ? this.Ld[d] : this.wg++;
            this.Ld[d] = f;
            c = a.get(c);
            this.Le[f] = c;
            this.Lf[d] = K.Qa;
          }
      },
      Cp: function (a, b) {
        this.Uj();
        if (void 0 !== a)
          for (var c in a) {
            var e = c.toString();
            /^Q{/.test(e) || (e = "Q{}" + e);
            var d = this.wg++;
            this.Ld[e] = d;
            var f = P.Ob(a[c]);
            "strong" === b && (f = P.Gg(f));
            if ((this.Le[d] = f))
              (d = f.type),
                (this.Lf[e] = void 0 !== d ? new J.Ka(C.type[d], kb) : K.Qa);
          }
      },
      ja: function () {
        var c = new b();
        c.type = this.type;
        c.zh = this.zh;
        c.sh = this.sh;
        c.nb = this.nb;
        c.kl = this.kl;
        c.wg = this.wg;
        c.Zj = this.Zj;
        c.Ld = a(this.Ld);
        c.Lf = a(this.Lf);
        c.Ti = this.Ti;
        c.Tb = this.Tb;
        c.Ee = this.Ee;
        c.wi = this.wi;
        c.kd = this.kd;
        c.Tj = a(this.Tj);
        c.Le = a(this.Le);
        c.Be = this.Be;
        c.Tc = this.Tc;
        c.namespaces = a(this.namespaces);
        c.Mg = this.Mg;
        c.Bd = this.Bd;
        c.Zb = this.Zb;
        return c;
      },
    };
    return {
      compile: function (a, b, h, g, l) {
        h = c(h, b, d(b.nsAttribute));
        if (
          !b.globalContext &&
          ((h.Zb = k(l.fixed.qb)), (l = b.globalFunctions))
        ) {
          g = {};
          var e = 0,
            p;
          for (p in l) {
            var m = l[p],
              x = G.da(m);
            m = x ? m.parentNode : m.parent;
            var t = x ? m.parentNode : m.parent;
            g[e++] = {
              actor: m,
              Rb: t,
              id: parseInt(x ? t.getAttribute("id") : t.id, 10),
            };
          }
          h.Zb = k(g);
        }
        return f(a, b, h);
      },
      compileGlobalContext: function (a, c, d) {
        var e = new b();
        e.Uj();
        e.Be = a;
        e.Iq = c;
        e.Tc = d;
        a = {};
        d = 0;
        for (var f in c) {
          var h = c[f],
            g = G.da(h);
          h = g ? h.parentNode : h.parent;
          var l = g ? h.parentNode : h.parent;
          a[d++] = {
            actor: h,
            Rb: l,
            id: parseInt(g ? l.getAttribute("id") : l.id, 10),
          };
        }
        e.Zb = k(a);
        return D.l(e);
      },
      evaluateXDM: function (a, b, d, g) {
        function e(a) {
          return X[void 0 === a ? "" : a];
        }
        var h,
          l = wb.find("SaxonJS"),
          p = l.U;
        l = l.getPlatform();
        var m = c(g.params, g, g.namespaces);
        m.qb = d.fixed.qb;
        m.Ac || (m.Ac = d.fixed.Ac);
        var x = d.fixed.qb;
        m.Zb = k(d.fixed.qb, g.dynamicEval);
        a = f(a, g, m).next();
        var N = { N: "package", name: "evaluate" },
          S = { name: "evaluate", Rb: N, Vc: {} };
        a.parentNode = N;
        var A = !1;
        var K = z(a);
        if (0 < K.length) {
          A = !0;
          var Ja = [];
          for (var za = 0; za < K.length; za++) Ja.push(1001 + za);
          var Ka = 1001,
            Va = 0,
            Ba = [],
            ja = {};
          K.forEach(function (a) {
            var b = w(Ka, r(a), "");
            a = a.getAttribute("name") + "#" + a.getAttribute("arity");
            b.parentNode = N;
            m.Zb["function"][a] = { actor: b, Rb: null, id: Ka };
            ja[a] = Va++;
            x[Ka] = b;
            Ka++;
            Ba.push(b);
          });
          t(a, ja);
          a = r(a);
          Ja = w(1e3, a, Ja.join(" "));
          Ja.parentNode = N;
          x[1e3] = Ja;
          Ba.unshift(Ja);
          N.C = Ba;
        } else
          G.da(a) ? (a = r(a)) : v(a),
            (N.C = [w(1e3, a, "")]),
            (a.parentNode = N);
        za = P.ah(d.La.actor, d);
        for (h in za.Vc) S.Vc[h] = za.Vc[h];
        K = new p.Context();
        K.fixed = {
          tc: {},
          Ah: {},
          Od: {},
          Pk: 0,
          md: new Date(),
          Vc: {},
          qb: d.fixed.qb,
          ya: P,
          options: d.fixed.options,
          Ad: d.fixed.Ad,
          Ac: d.fixed.Ac,
          Ch: null,
          xg: { evaluate: S },
        };
        K.fixed.xg[za.name] = za;
        g.staticBaseURI && (K.fixed.Ac = g.staticBaseURI);
        if ((za = g.staticContext)) {
          var aa = za.decimalFormats;
          if (aa) for (h in aa) S.Vc[h] = r(aa[h]);
          if ((S = za.resources))
            for (h in S)
              if (((aa = S[h]), aa.hasOwnProperty("err"))) {
                var ra = aa.err;
                ra = ra.replace(
                  /Q{http:\/\/www\.w3\.org\/2005\/xqt-errors\}/,
                  ""
                );
                K.fixed.Od[h] = new q(ra + " " + aa.description, ra);
              } else K.fixed.Od[h] = aa;
          if ((S = za.sources))
            for (h in S)
              if ("." !== h)
                try {
                  var Z = S[h];
                  aa = void 0;
                  if ("string" == typeof Z) {
                    var U = l.readFile(Z);
                    U = Ab.el(Ab.dl(U));
                    aa = p.obtainDocumentNumber(l.parseXmlFromString(U));
                    aa._saxonBaseUri = Z;
                    aa._saxonDocUri = Z;
                  } else aa = Z;
                  K.fixed.tc[h] = aa;
                } catch (oa) {
                  K.fixed.tc[h] = oa;
                }
          if ((h = za.collectionFinder)) {
            var X = h;
            K.fixed.options.hl = e;
          }
          h = za.staticBaseURI;
          "undefined" != typeof h &&
            (K.fixed.Ac = "#UNDEFINED" === h ? null : h);
        }
        g.staticBaseURI && (K.fixed.Ac = g.staticBaseURI);
        K.wa = l.createDocument();
        if (null != b) {
          g = b.next();
          if (null != b.next())
            throw new q(
              "Context item is a sequence of more than one item",
              "XTTE3210"
            );
          K.Ha = [];
          for (var T in m.Le) K.Ha[T] = m.Le[T];
          K.La = A ? Ja : d.La;
          null != g ? ((g = D.jc(g)), (K.focus = g)) : (K.focus = D.Da(D.R));
          return p.evaluate(a, K);
        }
        return D.R;
      },
      evaluate: function (a, b, c) {
        var e = wb.find("SaxonJS"),
          d = e.XError,
          h = e.U,
          g = e.getPlatform(),
          k = g.inBrowser();
        c || (c = {});
        c.params || (c.params = {});
        e = c.inputConvert || "strong";
        var m = l(c);
        a = f(a, c, m).next();
        var t = { N: "package", name: "evaluate", C: [a] };
        a.parentNode = t;
        var x = { name: "evaluate", Rb: t, Vc: {} };
        t = new h.Context();
        t.wa = g.createDocument();
        t.fixed = {
          tc: {},
          Od: {},
          Ah: {},
          Pk: 0,
          md: new Date(),
          Vc: { "Q{}": t.wa.createElement("decimal-format") },
          xg: { evaluate: x },
          Ac: k ? window.location.href : null,
          ya: P,
        };
        c.staticBaseURI && (t.fixed.Ac = c.staticBaseURI);
        var w;
        if (c.namedDecimalFormats)
          for (var v in c.namedDecimalFormats) {
            g = c.namedDecimalFormats[v];
            k = t.wa.createElement("decimal-format");
            for (w in g) {
              var z = g[w];
              k.setAttribute(
                w,
                ["infinity", "NaN"].includes(w) ? z : h.stringToCodepoints(z)[0]
              );
            }
            x.Vc[/^Q\{/.test(v) ? v : "Q{}" + v] = r(k);
          }
        if (c.defaultDecimalFormat) {
          g = c.defaultDecimalFormat;
          k = t.wa.createElement("decimal-format");
          for (w in g)
            (z = g[w]),
              k.setAttribute(
                w,
                ["infinity", "NaN"].includes(w) ? z : h.stringToCodepoints(z)[0]
              );
          x.Vc["Q{}"] = r(k);
        }
        t.Ha = m.Le;
        if (b) {
          if (Array.isArray(b) && 1 < b.length)
            throw new d(
              "Context item is a sequence of more than one item",
              "XTTE3210"
            );
          b = P.Ob(b);
          "strong" === e && (b = P.Gg(b));
          t.focus = null != b ? D.jc(b[0]) : D.Da(D.R);
        } else t.focus = D.Da(D.R);
        b = h.evaluate(a, t);
        return h.convertResult(b, c.resultForm || "default");
      },
      forceBaseURI: function (a, b) {
        a._saxonBaseUri = b;
        a._saxonDocUri = b;
        return a;
      },
      getFnSignature: function (a, b, c) {
        function e(a) {
          a.sig ||
            (a.sig =
              "F a[" +
              P.Ec(a, "arg")
                .map(function (a) {
                  return a.as;
                })
                .join(",") +
              "] r[" +
              a.as +
              "]");
          return a.sig;
        }
        var d = null,
          f = ce.Vp[a.uri];
        f && (d = f[a.local]);
        if (d && !c.Tb && d.XSLTonly) return null;
        d ||
          a.uri !== F.Rd ||
          (C.type[a.local]
            ? (d = {
                name: "xs:" + a.local,
                argNames: "arg",
                sig: "1F a[?A] r[?" + C.type[a.local].code + "]",
                maxArgs: 1,
                minArgs: 1,
              })
            : I.$k[a.local] &&
              (d = {
                name: "xs:" + a.local,
                argNames: "arg",
                sig: "1F a[1AS] r[*" + I.$k[a.local] + "]",
                maxArgs: 1,
                minArgs: 1,
              }));
        if (!d && c.Zb && c.Zb["function"]) {
          f = a.ha();
          var h = c.Zb["function"][f + "#" + b];
          h &&
            ((a = f),
            (d = h.actor),
            G.da(d)
              ? ((f = G.xe(d, "arg")),
                (d = {
                  argNames: f
                    .map(function (a) {
                      return a.getAttribute("name");
                    })
                    .join(","),
                  maxArgs: f.length,
                  minArgs: f.length,
                  sig: d.getAttribute("sig"),
                }))
              : ((f = m(d)),
                (d = {
                  argNames: f
                    .map(function (a) {
                      return a.name;
                    })
                    .join(","),
                  maxArgs: f.length,
                  minArgs: f.length,
                  sig: e(d),
                })),
            (d.isUserFunction = !0),
            (d.componentBinding = h.id));
        } else if (!d && c.fixed && c.fixed.qb)
          for (h in ((f = a.ha()), c.fixed.qb)) {
            var g = c.fixed.qb[h].actor;
            if ("function" === g.N && g.name === f) {
              var k = m(g);
              if (k.length === b) {
                d = {
                  argNames: k
                    .map(function (a) {
                      return a.name;
                    })
                    .join(","),
                  maxArgs: b,
                  minArgs: b,
                  sig: e(g),
                  isUserFunction: !0,
                  componentBinding: h,
                };
                break;
              }
            }
          }
        if (
          !d &&
          c.Tb &&
          (a.uri === F.Jc && (d = de.zp[a.local]) && (d.isSaxonFn = !0),
          a.uri === F.sg && (d = de.Oo[a.local]),
          "http://exslt.org/common" === a.uri &&
            ((d = de.Vn[a.local]), (d.isIdempotent = !0)),
          a.uri === F.am)
        ) {
          c = "*";
          for (d = 1; d < b; d++) c += ",*";
          d = {
            name: a.local,
            maxArgs: b,
            minArgs: b,
            sig: "1F a[" + c + "] r[*]",
          };
        }
        d && !d.alphaTree && (d.alphaTree = Ua(d.sig));
        return d &&
          null != b &&
          (d.minArgs > b || (b > d.maxArgs && !d.variadic))
          ? null
          : d;
      },
      parseNsAttribute: d,
      sefToJSON: r,
      setStaticContext: function (a) {
        A = P.rc(a.value, !0);
        a = {};
        var b = A.resources,
          c;
        for (c in b) {
          var d = b[c];
          if (d.hasOwnProperty("err")) {
            var f = d.err;
            f = f.replace(/Q{http:\/\/www\.w3\.org\/2005\/xqt-errors\}/, "");
            a[c] = new q(f + " " + d.description, f);
          } else a[c] = d;
        }
        A.resources = a;
        return null;
      },
      resetStaticContext: function () {
        return (A = null);
      },
      resetNameBase: function () {},
    };
  })();
  var he = {
    parse: function (a, b) {
      if (void 0 == b || null == b) b = "parse";
      switch (b) {
        case "parse":
        case "parseFast":
          var d = fe.process(a, null, null, !0);
          return D.l(d);
        case "pattern.parseFast":
          return (d = fe.process(a, !0, null, !0)), D.l(d);
      }
      return D.R;
    },
    parseFast: fe,
    evaluateXDM: ge.evaluateXDM,
    evaluate: ge.evaluate,
    compile: ge.compile,
    compileGlobalContext: ge.compileGlobalContext,
    forceBaseURI: ge.forceBaseURI,
    getFnSignature: ge.getFnSignature,
    sefToJSON: ge.sefToJSON,
    setStaticContext: ge.setStaticContext,
    resetStaticContext: ge.resetStaticContext,
    resetNameBase: ge.resetNameBase,
  };
  var ie = {
      FUNCTION: 0,
      $p: 1,
      rq: 2,
      vq: 3,
      iq: 4,
      gq: 5,
      nq: 6,
      qq: 7,
      oq: 8,
      sq: 9,
      uq: 10,
      hq: 11,
      EVALUATE_RESULT: 12,
      bq: 13,
      Xp: 14,
      kq: 15,
      aq: 16,
      cq: 17,
    },
    je = ["doc", "id", "element-with-id", "key", "root"];
  function ke(a, b, d, m) {
    return ie[a] + "|" + b + "|" + d + "|" + m;
  }
  function le(a, b, d, m) {
    return {
      gg: function () {
        return b;
      },
      Bj: m,
      eh: function () {
        return a;
      },
      save: function () {
        return d;
      },
    };
  }
  function me(a, b) {
    var d = P.yp(b).required;
    return le(a, d, b, function (a, b) {
      return (
        "Required type of " +
        d +
        " is " +
        a.toString() +
        ": actual type is " +
        b.toString()
      );
    });
  }
  function ne(a, b) {
    var d = null;
    this.name = a;
    if (b) {
      this.zc = b;
      d = b.alphaTree;
      var m = b.argNames.split(","),
        c = [],
        l,
        f;
      for (f = 0; f < a.arity; f++) {
        var k = l ? l : J.Kc(d.a[f]);
        c.push(k);
        "..." === m[f] && (l = k);
      }
      this.arity = f;
      d = d.r ? J.Kc(d.r) : J.B.Qa;
      this.b = J.ad(new I.re(c, d));
    }
    this.resultType = d ? d : J.B.Qa;
    this.b || (this.b = J.B.mj);
  }
  ne.prototype.resultType = J.B.Qa;
  var fe = (function () {
    function a() {
      E = new qc();
      H = [];
      Ga = [];
      jc = 0;
    }
    function b(a) {
      var b = fb[a];
      b || c("No namespace binding for prefix '" + a + "'", "XPST0081");
      return b;
    }
    function d(a, b, c) {
      b = void 0 === b ? this.yc : b;
      c =
        void 0 === c
          ? function () {
              return "";
            }
          : c;
      return C.O.X.g(a, function (a) {
        return "" === a ? c() : b(a);
      });
    }
    function m() {
      return 201 === E.G
        ? 'name "' + E.ba + '"'
        : -1 === E.G
        ? "(unknown token)"
        : '"' + R[E.G] + '"' + (E.ba ? E.ba : "");
    }
    function c(a, b, c) {
      b = void 0 === b ? "XPST0003" : b;
      c = void 0 === c ? -1 : c;
      zc(E);
      -1 === c
        ? (E.getLineNumber(), E.getColumnNumber())
        : (E.getLineNumber(c), E.getColumnNumber(c));
      throw new Pb(a, b);
    }
    function l(a) {
      var b = zc(E);
      b = (a.startsWith("...") ? "near" : "in") + " " + b + ":\n    ";
      console.log(b + a);
    }
    function f() {
      try {
        E.next();
      } catch (Yd) {
        c(Yd.message);
      }
    }
    function k(a) {
      E.G !== a && c('expected "' + R[a] + '", found ' + m());
    }
    function r(a) {
      a = v(void 0 === a ? !1 : a);
      for (var b = null; 7 === E.G; ) {
        null == b && ((b = []), b.push(a));
        f();
        var c = v();
        b.push(c);
      }
      null != b && (a = new oe(b));
      return a;
    }
    function v(a) {
      a = void 0 === a ? !1 : a;
      switch (E.G) {
        case 0:
          if (a) return Gc();
          c("Expected an expression, but reached the end of the input");
          break;
        case 211:
        case 216:
          a = 0;
          var b = E.G,
            e = null,
            d = null;
          do {
            f();
            k(21);
            f();
            k(201);
            var h = E.ba;
            if (211 === b) {
              var g = new ld();
              g.Si(J.B.qe);
            } else (g = new md()), g.Si(J.B.Qa);
            a++;
            g.Bh(la(h, ""));
            f();
            k(216 === b ? 58 : 31);
            f();
            Ga.push(null);
            g.Eg(v());
            Ga.pop();
            ia(g);
            null == d ? (e = g) : d.Ue(g);
            d = g;
          } while (7 === E.G);
          k(25);
          f();
          d.Ue(v());
          for (b = 0; b < a; b++) Ga.pop();
          return e;
        case 32:
        case 33:
          a = 0;
          b = E.G;
          d = e = null;
          do
            f(),
              k(21),
              f(),
              k(201),
              (h = E.ba),
              a++,
              (h = new pe(b, la(h, ""))),
              f(),
              k(31),
              f(),
              h.Eg(v()),
              ia(h),
              null != d ? d.Ue(h) : (e = h),
              (d = h);
          while (7 === E.G);
          k(34);
          f();
          d.Ue(v());
          for (b = 0; b < a; b++) Ga.pop();
          return e;
        case 37:
          return (
            f(),
            (a = r()),
            k(204),
            f(),
            k(26),
            f(),
            (e = v()),
            k(27),
            f(),
            (b = v()),
            Wc(a, e, b)
          );
        default:
          return t(K(), 4);
      }
    }
    function w() {
      return z(E.G);
    }
    function z(a) {
      switch (a) {
        case 9:
        case 81:
          return 4;
        case 10:
        case 80:
          return 5;
        case 50:
        case 51:
        case 55:
        case 53:
        case 54:
        case 52:
        case 6:
        case 22:
        case 14:
        case 12:
        case 13:
        case 11:
        case 20:
        case 38:
        case 39:
          return 6;
        case 30:
          return 7;
        case 29:
          return 8;
        case 15:
        case 16:
          return 9;
        case 17:
        case 18:
        case 56:
        case 19:
          return 10;
        case 79:
          return 11;
        case 1:
          return 12;
        case 23:
        case 24:
          return 13;
        case 45:
          return 14;
        case 47:
          return 15;
        case 57:
          return 16;
        case 46:
          return 17;
        case 76:
          return 18;
        case 40:
          return 20;
        default:
          return -1;
      }
    }
    function t(a, b) {
      for (; w() >= b; ) {
        var e = E.G,
          h = w();
        switch (e) {
          case 45:
          case 47:
            f();
            var l = u();
            a: {
              var m = a;
              switch (e) {
                case 45:
                  a = new dd(m, l);
                  break a;
                case 47:
                  a = Wd(m, l);
                  break a;
                default:
                  throw new Qb(R[e]);
              }
            }
            w() >= h && c("Left operand of '" + R[E.G] + "' needs parentheses");
            break;
          case 46:
          case 57:
            f();
            var p = void 0;
            if (69 === E.G && "union" === E.ba)
              throw new q("Saxon union types not supported");
            k(201);
            if (E.ba)
              a: {
                try {
                  var x = d(E.ba, V.yc, V.Cd);
                  break a;
                } catch (ee) {
                  c(ee.message, ee.code);
                }
                x = void 0;
              }
            else x = c("Parser tokenization error NAME");
            l = x;
            l.uri !== F.Rd &&
              c(
                "Unknown simple type " +
                  E.ba +
                  " in cast (Saxon-JS is not schema-aware)"
              );
            f();
            if ((m = 213 === E.G)) (E.G = 204), f();
            var r =
              { numeric: "u", ENTITIES: "l", NMTOKENS: "l", IDREFS: "l" }[
                l.local
              ] || "a";
            if ("a" === r) {
              ["anyType", "anyAtomicType", "NOTATION"].includes(l.local) &&
                c(
                  "Casting to xs:" +
                    l.local +
                    " is not possible (it's an abstract type)",
                  "XPST0080"
                );
              p = C.type[l.local];
              if (!p) throw new q("Cannot find type " + l.ha());
              p = new I.Ze(p);
            }
            a = (57 === e ? qe : re)(a, r, l, p, m);
            w() >= h && c("Left operand of '" + R[E.G] + "' needs parentheses");
            break;
          case 76:
            a = Y(a);
            break;
          default:
            m = 40 === e;
            f();
            m && H.push(a.b.Va(kb));
            l = K();
            for (m && H.pop(); w() > h; ) l = t(l, w());
            if (!(h = w() !== h))
              a: switch (E.G) {
                case 50:
                case 51:
                case 55:
                case 53:
                case 54:
                case 52:
                case 6:
                case 22:
                case 14:
                case 12:
                case 13:
                case 11:
                case 20:
                case 38:
                case 39:
                case 29:
                  h = !1;
                  break a;
                default:
                  h = !0;
              }
            h || c("Left operand of '" + R[E.G] + "' needs parentheses");
            a = g(a, e, l);
        }
      }
      return a;
    }
    function g(a, b, c) {
      switch (b) {
        case 9:
          return new pd(a, c);
        case 10:
          return new od(a, c);
        case 50:
        case 51:
        case 55:
        case 53:
        case 54:
        case 52:
          return new Pc(a, b, c, V);
        case 6:
        case 22:
        case 14:
        case 12:
        case 13:
        case 11:
          return V.kh() ? new Qc(a, b, c, V) : new Nc(a, b, c, V);
        case 20:
        case 38:
        case 39:
          return new Uc(a, b, c, V);
        case 29:
          return new rd(a, c, V.kh());
        case 30:
          b = [];
          var e;
          if (
            a instanceof Yc &&
            "concat" === a.name.name.local &&
            a.name.name.uri === F.cb
          )
            for (a = sa(a.vb), e = a.next(); !e.done; e = a.next())
              b.push(e.value);
          else {
            e = ke("BINARY_OP", 0, "", "concat");
            var d = me("FOTY0013", e);
            a = Od(a, J.B.Sd, d, e, V);
            b.push(a);
          }
          e = ke("BINARY_OP", 1, "", "concat");
          d = me("FOTY0013", e);
          c = Od(c, J.B.Sd, d, e, V);
          b.push(c);
          c = fd("concat", b);
          c.b = J.B.Td;
          return c;
        case 15:
        case 16:
        case 17:
        case 18:
        case 56:
        case 19:
          return new bd(a, b, c, V);
        case 79:
          return (
            (e = C.O.X.xa("vv", F.wk, "otherwise")),
            (b = new md()),
            b.Bh(e),
            b.Eg(a),
            ia(b),
            (a = new se(b)),
            (e = [fd("exists", [a]), Fc([C.O.Ea.cf], J.B.ic)]),
            b.Ue(new Vc(e, [a, c])),
            b
          );
        case 1:
        case 23:
        case 24:
          return new te(a, b, c, 1 === Za);
        case 81:
          return (c = fd("boolean", c)), Wc(a, Fc([C.O.Ea.cf], J.B.ic), c);
        case 80:
          return (c = fd("boolean", c)), Wc(a, c, Fc([C.O.Ea.Qg], J.B.ic));
        default:
          throw new Qb(R[b]);
      }
    }
    function K() {
      switch (E.G) {
        case 16:
          f();
          var a = K();
          a = A(299, a);
          break;
        case 15:
          f();
          a = K();
          a = A(15, a);
          break;
        default:
          for (a = e(); 40 === E.G; ) {
            f();
            H.push(a.b.Va(kb));
            var b = e();
            H.pop();
            a = new ud(a, b);
          }
      }
      return a;
    }
    function A(a, b) {
      if (Ec(b)) {
        var c = b.value[0];
        return 299 === a ? Fc([c.Gi()], b.b) : b;
      }
      return new bd(Fc([C.O.Ma.fa(0)], J.B.bf), a, b, V);
    }
    function x() {
      switch (E.G) {
        case 36:
        case 3:
        case 201:
        case 208:
        case 70:
        case 207:
        case 69:
        case 205:
        case 206:
        case 35:
        case 202:
        case 209:
        case 5:
        case 21:
        case 43:
          return !0;
        case 60:
          return ["ordered", "unordered"].includes(E.ba);
        default:
          return !1;
      }
    }
    function e() {
      var a = E.$g;
      switch (E.G) {
        case 2:
          return f(), (a = new ue()), x() ? h(a) : a;
        case 8:
          f();
          a = new ue();
          var b = new gd(5, null);
          a = id(a, b);
          return h(a);
        default:
          201 === E.G &&
            ["true", "false"].includes(E.ba) &&
            l(
              "The expression is looking for a child element named '" +
                E.ba +
                "' - perhaps " +
                E.ba +
                "() was intended? To avoid this warning, use child::" +
                E.ba +
                " or ./" +
                E.ba +
                "."
            );
          201 === E.G &&
            -1 !== vc(E, E.ba) &&
            1 !== Za &&
            (0 < a || 0 !== E.la) &&
            ((a = E.ba),
            l(
              "The keyword '" +
                a +
                "' in this context means 'child::" +
                a +
                "'. If this was intended, use 'child::" +
                a +
                "' or './" +
                a +
                "' to avoid this warning."
            ));
          for (a = p(1 === Za && 0 === jc); [2, 8].includes(E.G); ) {
            H.push(a.b.Va(kb));
            var c = E.G;
            f();
            b = p(!1);
            2 === c
              ? (a = id(a, b))
              : b instanceof gd && 3 === b.axis
              ? ((b = new gd(4, b.Nb)), (a = id(a, b)))
              : ((c = new gd(5, null)), (a = id(a, c)), (a = id(a, b)));
            a = ve(a);
            H.pop();
          }
          return a;
      }
    }
    function h(a) {
      var b = a,
        c = 2;
      for (H.push(a.b.Va(kb)); ; ) {
        a = p(!1);
        H.pop();
        H.push(a.b.Va(kb));
        2 === c
          ? ((b = id(b, a)), (b = ve(b)))
          : 8 === c
          ? ((c = new gd(5, null)), (c = id(c, a)), (b = id(b, c)), (b = ve(b)))
          : (b = new ud(b, a));
        c = E.G;
        if (2 !== c && 8 !== c && 40 !== c) break;
        f();
      }
      H.pop();
      return b;
    }
    function p(a) {
      a = N(a);
      for (var b = a instanceof gd && !Ub[a.xf()]; ; )
        if (4 === E.G) H.push(a.b.Va(kb)), (a = y(a)), H.pop();
        else if (5 === E.G) a = Ka(a, null);
        else if (213 === E.G) a = Va(a);
        else break;
      b && ((a = fd("reverse", a)), (a.gr = !0));
      return a;
    }
    function y(a) {
      a = void 0 === a ? null : a;
      if (!a) return r(null);
      f();
      jc++;
      var b = y();
      jc--;
      k(203);
      f();
      return (a = new $c(a, b));
    }
    function u() {
      var a = "empty-sequence" === E.ba,
        b = L();
      if (a) return J.B.fj;
      switch (E.G) {
        case 207:
        case 17:
          a = jb;
          E.G = 204;
          f();
          break;
        case 15:
          a = 6;
          E.G = 204;
          f();
          break;
        case 213:
          a = lb;
          E.G = 204;
          f();
          break;
        default:
          a = kb;
      }
      return new J.Ka(b, a);
    }
    function L() {
      if (5 === E.G) {
        f();
        var a = L();
        k(204);
        f();
      } else if (201 === E.G) {
        a = null;
        try {
          a = d(E.ba, V.yc, V.Cd);
        } catch ($d) {
          c($d.message, $d.code);
        }
        var b = a,
          e = b.uri;
        "" === e && (e = V.Cd());
        var h = b.local;
        a = b.toString();
        e === F.Rd
          ? "numeric" === h
            ? (a = I.Nh.pa)
            : ((b = C.type[h]) || c("Unknown atomic type " + a, "XPST0051"),
              (a = new I.Ze(b)))
          : (c(
              "Unknown atomic type " +
                b.ha() +
                " (Saxon-JS is not schema-aware)",
              "XPST0051"
            ),
            (a = void 0));
        f();
      } else if (69 === E.G)
        switch (E.ba) {
          case "item":
            f();
            k(204);
            f();
            a = I.pe.pa;
            break;
          case "function":
            a = O();
            break;
          case "map":
            a = fa();
            break;
          case "array":
            a = E;
            f();
            [207, 17].includes(a.G)
              ? (f(), k(204), f(), (a = I.bj.pa))
              : ((a = u()), k(204), f(), (a = new I.nj(a)));
            break;
          case "empty-sequence":
            f();
            k(204);
            f();
            a = I.Lh.pa;
            break;
          case "switch":
          case "typeswitch":
            c(E.ba + "() is reserved in XPath; it is available only in XQuery");
            break;
          default:
            a = ra();
        }
      else {
        if (4 === Za && 208 === E.G) return (a = E.ba), f(), La(1, a);
        if (4 === Za && 70 === E.G)
          return f(), k(201), (a = E.ba), f(), M(1, a);
        if (4 === Za && 3 === E.G) {
          f();
          if (208 === E.G) return (a = E.ba), f(), La(2, a);
          if (70 === E.G) return f(), k(201), (a = E.ba), f(), M(2, a);
          c("Expected NodeTest after '@'");
          return I.Jb.Gh;
        }
        c("Expected type name in SequenceType, found " + R[E.G]);
        return I.Jb.Gh;
      }
      return a;
    }
    function O() {
      f();
      var a = [];
      if ([207, 17].includes(E.G)) return f(), k(204), f(), I.Xe.pa;
      for (; 204 !== E.G; ) {
        var b = u();
        a.push(b);
        if (204 === E.G) break;
        else
          7 === E.G
            ? f()
            : c(
                "Expected ',' or ')' after function argument type, found '" +
                  R[E.G] +
                  "'"
              );
      }
      f();
      if (71 === E.G) return f(), (b = u()), new I.re(a, b);
      0 < a.length
        ? c(
            "Result type must be given if an argument type is given: expected 'as (type)'"
          )
        : c(
            "function() is not allowed for a general function type: must be function(*)"
          );
      return null;
    }
    function fa() {
      var a = E;
      f();
      if ([207, 17].includes(a.G)) return f(), k(204), f(), I.cj.pa;
      a = L();
      k(7);
      f();
      var b = u();
      k(204);
      f();
      return a instanceof I.Ze
        ? new I.oj(a, b)
        : (c("Key type of a map must be atomic"), null);
    }
    function Y(a) {
      f();
      var b = E.G;
      if ([201, 35].includes(b)) return T(a);
      if (21 === b) return (b = za()), k(5), Ka(b, a);
      if (5 === b) return (b = S()), k(5), Ka(b, a);
      c("Unexpected " + R[b] + " after '=>'");
      return null;
    }
    function N(a) {
      function b(a) {
        return a instanceof hd || (a instanceof $c && b(a.step));
      }
      switch (E.G) {
        case 21:
          return za();
        case 5:
          var e = S();
          a &&
            b(e) &&
            c("Predicate pattern cannot be parenthesized", "XTSE0340");
          return e;
        case 4:
          return U();
        case 202:
          return Ja(!0);
        case 209:
          return ma(!0);
        case 35:
          return (
            (e = E.ba),
            0 === jc &&
              1 === Za &&
              ((V.hk = !0),
              a
                ? je.includes(e) ||
                  e.includes(":") ||
                  c(
                    "Function " +
                      e +
                      "() is not permitted at first position in pattern",
                    "XTSE0340"
                  )
                : c(
                    "Function call not at first position in pattern",
                    "XTSE0340"
                  )),
            (e = T(null)),
            (V.hk = !1),
            e
          );
        case 213:
          return Va(new hd());
        case 205:
          return f(), new hd(H[H.length - 1]);
        case 206:
          return f(), new gd(9, null);
        case 69:
          if ("function" === E.ba) return ja();
        case 201:
        case 208:
        case 70:
        case 207:
          return (
            (e = 3),
            69 === E.G && ["attribute", "schema-attribute"].includes(E.ba)
              ? (e = 2)
              : 69 === E.G && "namespace-node" === E.ba
              ? (e = 8)
              : a && 69 === E.G && "document-node" === E.ba && (e = 12),
            (a = aa(1)),
            new gd(e, a)
          );
        case 3:
          f();
          switch (E.G) {
            case 201:
            case 208:
            case 70:
            case 207:
            case 69:
              return (e = aa(2)), new gd(2, e);
            default:
              c("@ must be followed by a NodeTest");
          }
          break;
        case 36:
          try {
            e = Yb(E.ba);
          } catch (Pe) {
            c(Pe.message), (e = 3);
          }
          a = Wb[e];
          f();
          switch (E.G) {
            case 201:
            case 208:
            case 70:
            case 207:
            case 69:
              a = aa(a);
              var d = null;
              if (2 === e) {
                var h = pb.Zc(a, new I.nc(2));
                h === pb.wd
                  ? (d = "attribute axis can never yield nodes of type " + a)
                  : h === pb.gd && (a = new I.nc(2));
              }
              3 === e &&
                9 === a.kind &&
                (d = a.name + " nodes can never be children");
              2 !== a.kind ||
                [2, 12].includes(e) ||
                (d = "axis " + Vb(e) + " can never yield attribute nodes");
              if (d) {
                if (1 === Za) return new ac(d);
                l(d);
                return Gc();
              }
              return new gd(e, a);
            default:
              c("Unexpected token " + m() + " after axis name");
          }
          break;
        case 60:
          switch (E.ba) {
            case "map":
              return Z();
            case "array":
              return X();
            case "fn":
              return Ta.kr(this);
          }
          break;
        case 43:
          return Fa();
        default:
          c("Unexpected token " + m() + " at start of expression");
      }
    }
    function S() {
      f();
      if (204 === E.G) return f(), Gc();
      var a = r();
      k(204);
      f();
      return a;
    }
    function ma() {
      var a = E.ba ? xa(E.ba) : c("Parser tokenization error NUMBER");
      isNaN(a) && c("Invalid numeric literal (" + E.ba + ")");
      f();
      return Fc(
        [a],
        "double" === a.type ? J.B.Qh : "decimal" === a.type ? J.B.an : J.B.bf
      );
    }
    function xa(a) {
      try {
        return 0 <= a.indexOf("e") || 0 <= a.indexOf("E")
          ? C.O.za.g(a)
          : 0 <= a.indexOf(".")
          ? C.O.od.g(a)
          : C.O.Ma.g(a);
      } catch (pf) {
        return NaN;
      }
    }
    function Ja() {
      var a = new Hc(E.ba);
      f();
      return a;
    }
    function za() {
      f();
      k(201);
      var a = E.ba;
      f();
      a = la(a, "");
      var b;
      a: {
        for (b = Ga.length - 1; 0 <= b; b--) {
          var e = Ga[b];
          if (e && e.hg().ia(a)) {
            b = e;
            break a;
          }
        }
        b = void 0;
      }
      if (null != b) var d = new se(b);
      else if (a.uri === F.Qn && 0 < be) {
        b = a.local;
        if (
          "code description value module line-number column-number"
            .split(" ")
            .includes(b)
        )
          return (
            (d = new wd(la("dynamic-error-info", F.Jc), 1)),
            (d = new Ed(d, [Fc([C.O.T.g(b)], J.B.Td)], J.B.Qa))
          );
        c("Unknown error variable " + a.ha(), "XPST0008");
      } else c("No binding for variable " + a.ha(), "XPST0008");
      return d;
    }
    function Ka(a, b) {
      var c = [];
      null != b && c.push(b);
      var e = null;
      f();
      if (204 !== E.G) {
        for (;;) {
          var d = Ya();
          if (null == d || d instanceof we)
            null == e && (e = []), e.push(c.length);
          c.push(d);
          if (7 === E.G) f();
          else break;
        }
        k(204);
      }
      f();
      if (null == e) {
        e = a;
        var h = c;
        if (e instanceof xe) {
          d = ke("FUNCTION", 1, "XPTY0004", "array:get");
          var g = me("XPTY0004", d);
          h = Od(h[0], J.B.bf, g, d, V);
          c = Gd(Kd, "get", 2);
          e = Bd(c, [e, h]);
        } else
          (h = new xe(h)),
            (c = Gd(Nd, "apply", 2)),
            (d = ke("FUNCTION", 0, "XPTY0004", "apply")),
            (g = me("XPTY0004", d)),
            (e = Od(e, J.B.mj, g, d, V)),
            (e = Bd(c, [e, h]));
      } else e = new ye(a, c, e);
      return e;
    }
    function Va(a) {
      var b = E;
      rc(b, wc);
      b.G = 5;
      f();
      var e = b.G;
      rc(b, sc);
      if (201 === e)
        (b = b.ba),
          Nb(b) || c("The name following '?' must be a valid NCName"),
          f(),
          (a = new ze(a, new Hc(b)));
      else if (209 === e)
        (b = b.ba ? xa(b.ba) : c("Parser tokenization error NUMBER")),
          (isNaN(b) || "integer" !== b.type) &&
            c("Number following '?' must be an integer"),
          f(),
          (a = Ba(this, a, Fc([b], J.B.bf)));
      else if ([17, 207].includes(e)) f(), (a = new Ae(a));
      else if (5 === e) a = Ba(this, a, S());
      else return c("Unexpected " + R[e] + " after '?'"), null;
      return a;
    }
    function Ba(a, b, c) {
      if (ib(b.b.na)) {
        a = new ld();
        a.Qd = b.b.Va(kb);
        var e = la("zibble", ""),
          d = new se(a);
        a.Bh(e);
        a.Eg(b);
        ia(a);
        a.Ue(new ze(d, c));
        Ga.pop();
        return a;
      }
      return new ze(b, c);
    }
    function ja() {
      var a = E,
        b = new Be();
      b.ck = [];
      for (var e = sa(Ga), d = e.next(); !d.done; d = e.next())
        b.ck.push(d.value);
      b.jp = [];
      b.so = [];
      Oa.push(b);
      f();
      d = [];
      e = [];
      for (var h, g = 0; 204 !== a.G; ) {
        k(21);
        f();
        k(201);
        for (
          var l = la(a.ba, ""), m = sa(d), p = m.next();
          !p.done;
          p = m.next()
        )
          p.value.ia(l) &&
            c("Duplicate parameter name $" + l.toString(), "XQST0039");
        d.push(l);
        p = J.B.Qa;
        f();
        71 === a.G ? (f(), (p = u())) : ua[g] && (p = ua[g]);
        m = new Ce();
        m.Si(p);
        m.Bh(l);
        l = g++;
        m.slot = l;
        e.push(m);
        ia(m);
        if (204 === a.G) break;
        else
          7 === a.G
            ? f()
            : c(
                "Expected ',' or ')' after function argument, found '" +
                  R[a.G] +
                  "'"
              );
      }
      rc(a, wc);
      f();
      71 === a.G && (rc(a, xc), f(), (h = u()));
      k(59);
      rc(a, 0);
      f();
      215 === a.G
        ? (uc(a), f(), (g = Gc()))
        : ((g = r()), k(215), uc(a), f(), h || (h = g.b));
      h || (h = J.B.Qa);
      a = d.length;
      for (d = 0; d < a; d++) Ga.pop();
      h = new De(b, e, h, g);
      Ga = b.ck;
      Oa.pop();
      return h;
    }
    function aa(a) {
      var b = E.ba;
      switch (E.G) {
        case 201:
          f();
          var e = b;
          b = la(e, 1 === a ? V.Cd() : "");
          1 === a && "" === b.uri && V.hh
            ? ((e = la(e, "http://www.w3.org/1999/xhtml")),
              (a = new I.Vm(new I.xd(a, b), new I.xd(a, e))))
            : (a = new I.xd(a, b));
          return a;
        case 208:
          return f(), La(a, b);
        case 70:
          return f(), (b = E.ba), k(201), f(), M(a, b);
        case 207:
          return f(), I.nc["for"](a);
        case 69:
          return ra();
        default:
          throw (c("Unrecognized node test"), new Pb(""));
      }
    }
    function ra() {
      function a() {
        e || c("No arguments are allowed in " + b + "()", "XPST0003");
      }
      var b = E.ba,
        e = !1;
      f();
      204 === E.G && ((e = !0), f());
      switch (b) {
        case "item":
        case "switch":
        case "typeswitch":
          return c(b + "() is not allowed in a path expression"), null;
        case "node":
          return a(), I.Ye.pa;
        case "text":
          return a(), I.nc.Mk;
        case "comment":
          return a(), I.nc.yk;
        case "namespace-node":
          if (e) return I.nc.Ck;
          if (4 === Za && 201 === E.G)
            return f(), k(204), f(), new I.xd(13, "");
          c("No arguments are allowed in namespace-node()");
          return null;
        case "document-node":
          if (e) return I.nc.ej;
          if ("element" !== E.ba)
            return (
              c("Argument to document-node() must be an element type"), null
            );
          var h = ra();
          k(204);
          f();
          return new I.Tm(J.ad(h));
        case "processing-instruction":
          if (e) return I.nc.Ik;
          202 === E.G
            ? (h = E.ba
                ? Na.trim(unescape(E.ba))
                : c("Parser tokenization error STRING_LIITERAL"))
            : 201 === E.G
            ? (h = E.ba)
            : c(
                "Processing instruction name must be an NCName or a string literal"
              );
          Nb(h) ||
            c(
              "Processing instruction name must be a valid NCName: '" +
                h +
                "' is not"
            );
          /^[Xx][Mm][Ll]$/.test(h) &&
            c("Processing instruction name must not be 'xml'");
          f();
          k(204);
          f();
          return new I.xd(7, C.O.X.xa("", "", h));
        case "attribute":
        case "element":
          h = "element" === b ? 1 : 2;
          var g = "",
            l = !1;
          if (e) return I.nc["for"](h);
          [207, 17].includes(E.G)
            ? (g = "*")
            : 201 === E.G
            ? (g = E.ba)
            : 70 === E.G
            ? (f(), (l = !0), (g = E.ba))
            : c("Unexpected " + R[E.G] + " after '(' in SequenceType");
          f();
          if (204 === E.G)
            return (
              f(),
              "*" === g
                ? I.nc["for"](h)
                : l
                ? new I.ij(h, g)
                : new I.xd(
                    h,
                    d(
                      g,
                      V.yc,
                      1 === h
                        ? V.Cd
                        : function () {
                            return "";
                          }
                    )
                  )
            );
          if (7 === E.G) {
            f();
            k(201);
            l = !1;
            var m = d(E.ba, V.yc, V.Cd);
            m.uri === F.Rd
              ? 1 === h
                ? ["untyped", "anyType"].includes(m.local) ||
                  (["untypedAtomic", "anyAtomicType"].includes(m.local)
                    ? (l = !0)
                    : c(
                        "Unsupported type annotation " +
                          E.ba +
                          " (Saxon-JS is not schema-aware, so all nodes are untyped)"
                      ))
                : ["untypedAtomic", "anyAtomicType"].includes(m.local) ||
                  c(
                    "Unsupported type annotation " +
                      E.ba +
                      " (Saxon-JS is not schema-aware, so all nodes are untyped)"
                  )
              : c(
                  "Unsupported type annotation " +
                    E.ba +
                    " (Saxon-JS is not schema-aware, so only built-in types are recognized)"
                );
            f();
            213 === E.G && f();
            k(204);
            f();
            if (l) return I.Lh.pa;
            if ("*" === g) return I.nc["for"](h);
            g = d(
              g,
              V.yc,
              1 === h
                ? V.Cd
                : function () {
                    return "";
                  }
            );
            return new I.xd(h, g);
          }
          c("Expected ')' or ',' in SequenceType");
          return null;
        case "schema-attribute":
        case "schema-element":
          return (
            c("Type " + b + "() not allowed: Saxon-JS is not schema-aware"),
            null
          );
        default:
          return c("Unknown node kind " + b), null;
      }
    }
    function Z() {
      var a = [];
      f();
      var b = [],
        c = !0;
      if (215 !== E.G)
        for (;;) {
          var e = v();
          k(75);
          f();
          var d = v(),
            h = ke("FUNCTION", 0, "", "map:entry"),
            g = me("XPTY0004", h);
          e = Od(e, J.B.lj, g, h, V);
          !c || e instanceof Cc
            ? -1 === b.indexOf(e)
              ? b.push(e)
              : (c = !1)
            : (c = !1);
          e = new Ee(e, d);
          a.push(e);
          if (215 === E.G) break;
          else k(7), f();
        }
      uc(E);
      f();
      if (0 === a.length) return Bd(Gd(Id, "_new", 1), []);
      if (1 === a.length) return a[0];
      if (c) {
        var l = [];
        a.forEach(function (a) {
          l.push([a.key, a.value]);
        });
        return new Fe(l);
      }
      a = new oe(a);
      b = [];
      b = new Fe([
        [new Hc("duplicates"), new Hc("reject")],
        [new Hc("duplicates-error-code"), new Hc("XQDY0137")],
      ]);
      return Bd(Gd(Id, "merge", 2), [a, b]);
    }
    function U() {
      var a = [];
      f();
      if (203 === E.G) return f(), new xe(a);
      for (;;) {
        var b = v();
        a.push(b);
        if (7 === E.G) f();
        else {
          if (203 === E.G) {
            f();
            break;
          }
          c("Expected ',' or ']', found " + R[E.G]);
        }
      }
      return new xe(a);
    }
    function X() {
      f();
      var a = Gd(Kd, "_from-sequence", 1);
      if (215 === E.G) return uc(E), f(), Bd(a, [Gc()]);
      var b = r();
      k(215);
      uc(E);
      f();
      return Bd(a, [b]);
    }
    function T(a) {
      function b() {
        if (209 === E.G) return ma(!0);
        if (202 === E.G) return Ja(E.ba);
        if (21 === E.G) return za();
        c(
          "The arguments to a function call in a pattern must be literals or variable references",
          "XTSE0340"
        );
      }
      var e = E.ba,
        d = E.$g,
        h = [];
      null != a && h.push(a);
      a = ka(e);
      e = null;
      ua = [];
      var g = "fold-left" === a.local,
        l = "fold-right" === a.local,
        m = ("for-each" === a.local) | ("filter" === a.local);
      l = [F.cb, F.kf].includes(a.uri) && (g || l || m);
      1 === Za &&
        a.uri === F.cb &&
        [
          "current-group",
          "current-grouping-key",
          "current-merge-group",
          "current-merge-key",
        ].includes(a.local) &&
        c(a.local + "() is not permitted in a pattern", "XTSE1060");
      var p = 0;
      f();
      if (204 !== E.G) {
        for (;;) {
          var t = V.hk ? b() : Ya();
          if (l) {
            var x = void 0;
            switch (p) {
              case 0:
                switch (a.uri) {
                  case F.kf:
                    x = t.b.ca.valueType;
                    break;
                  case F.cb:
                    x = t.b.Va(kb);
                }
                ua[g ? 1 : 0] = x;
                break;
              case 1:
                if (!m) {
                  switch (a.uri) {
                    case F.kf:
                      x = t.b.Eo() ? J.B.Qa : t.b.Va(jb);
                      break;
                    case F.cb:
                      x = J.B.Qa;
                  }
                  ua[g ? 0 : 1] = x;
                }
            }
          }
          if (null == t || t instanceof we)
            null == e && (e = []), e.push(h.length);
          h.push(t);
          if (7 === E.G) f();
          else break;
          p++;
        }
        k(204);
      }
      f();
      ua = [];
      g = new wd(a, h.length);
      if (null != e)
        return (
          (d = V.si().Kl(g, V)),
          null == d &&
            c(
              "No function " +
                a.toString() +
                "#" +
                h.length +
                " is known for partial application",
              "XPST0017"
            ),
          new ye(d, h, e)
        );
      e = [];
      g = V.si().bind(g, h, V, e);
      return null == g ? oa(d, a, h, e) : g;
    }
    function oa(a, b, e, d) {
      var f =
        "Cannot find a " +
        e.length +
        "-argument function named " +
        b.ha() +
        "()";
      d = sa(d);
      for (var h = d.next(); !h.done; h = d.next()) f += ". " + h.value;
      d = !1;
      for (h = 0; h < e.length + 5; h++)
        if (h !== e.length) {
          var g = new wd(b, h);
          if (V.si().Rq(g)) {
            d = !0;
            break;
          }
        }
      d
        ? (f +=
            ". The namespace URI and local name are recognized, but the number of arguments is wrong")
        : ((e = b.uri),
          (b =
            e === F.Ve
              ? b.local.ia("original")
                ? "Function name xsl:original is only available within an overriding function"
                : "There are no functions defined in the XSLT namespace"
              : e === F.Jc
              ? "Most Saxon extension functions are not available under Saxon-JS"
              : e.startsWith("java:")
              ? "Calls to Java methods are not available under Saxon-JS"
              : e.startsWith("clitype:")
              ? "Calls to .NET methods are not available under Saxon-JS"
              : null),
          null != b && (f += b));
      if (V.kh())
        return fd("error", [
          fd("QName", [new Hc(""), new Hc("XTDE1425")]),
          new Hc(f),
        ]);
      c(f, "XPST0017", a);
    }
    function ka(a) {
      var b = null;
      try {
        b = d(a, V.yc, V.Jl);
      } catch (ub) {
        c(ub.message, ub.code);
      }
      return b;
    }
    function Ya() {
      return 213 === E.G && [7, 204].includes(E.la) ? (f(), new we()) : v();
    }
    function Fa() {
      var a = E,
        b = a.ba,
        e = a.$g,
        h = V;
      f();
      k(209);
      a = a.ba ? xa(a.ba) : c("Parser tokenization error NUMBER");
      isNaN(a) || "integer" !== a.type
        ? c("Number following '#' is invalid")
        : (0 > a.value || a.value > Number.MAX_SAFE_INTEGER) &&
          c("Number following '#' is out of range", "FOAR0002");
      a = a.value;
      f();
      var g = null;
      try {
        g = d(b, h.yc, h.Jl);
      } catch (ae) {
        c(ae.message, ae.code);
      }
      b = h.si();
      var l = new wd(g, a);
      h = b.Kl(l, h);
      null == h &&
        c("Function " + g.ha() + "#" + a + " not found", "XPST0017", e);
      return h.zc.$l && !g.zf(Kb.hn) ? new Ge(h) : new He(h);
    }
    function ia(a) {
      a.slot = Ga.length;
      Ga.push(a);
    }
    function Ia(a, b) {
      return d(a, V.yc, function () {
        return b;
      });
    }
    function la(a, b) {
      try {
        return Ia(a, b);
      } catch (ub) {
        c(ub.message, ub.code);
      }
    }
    function La(a, b) {
      if (b.startsWith("Q{")) {
        var e = b.substring(2, b.length - 2);
        return new I.kj(a, e);
      }
      try {
        return (
          (e = d(b + ":dummy", V.yc, function () {
            return "";
          })),
          new I.kj(a, e.uri)
        );
      } catch (Zd) {
        return c(Zd.message, Zd.code), null;
      }
    }
    function M(a, b) {
      Nb(b) || c("Local name [" + b + "] contains invalid characters");
      return new I.ij(a, b);
    }
    function Qa(a, b, c, e) {
      this.global = void 0 === e ? !1 : e;
      this.Nc = this.name = a;
      this.Qd = b;
      this.slot = c;
    }
    var E,
      bb,
      V = {},
      Ga = [],
      H = [],
      ua = [],
      Ta = new Bc(),
      Za = 0,
      be = 0,
      jc = 0,
      Oa = [],
      kc = {
        Kl: function (a, b) {
          var c = b.getContext();
          if ((c = he.getFnSignature(a.name, a.arity, c))) return new ne(a, c);
        },
        bind: function (a, b, c) {
          var e = c.getContext(),
            f = he.getFnSignature(a.name, a.arity, e);
          if (f) {
            if (a.name.uri === F.cb)
              switch (a.name.local) {
                case "false":
                  return Fc([C.O.Ea.Qg], J.B.ic);
                case "true":
                  return Fc([C.O.Ea.cf], J.B.ic);
                case "normalize-unicode":
                  1 === b.length && b.push(new Hc("NFC"));
                  break;
                case "copy-of":
                  return new Ie(b[0] ? b[0] : new hd(H[H.length - 1]));
                case "current-group":
                  return new Je();
                case "current-grouping-key":
                  return new Ke();
                default:
                  0 === a.arity &&
                    0 < f.maxArgs &&
                    f.defaultToDot &&
                    (b.push(new hd(H[H.length - 1])), a.arity++);
              }
            else if (f.isIdempotent && 1 === b.length) return b[0];
            e = [];
            var h,
              g = f.alphaTree;
            g && "F" === g.p && !g.r && (g.r = { p: "", o: "*" });
            (g && "F" === g.p && g.a && g.r) ||
              B.ra("Bad function signature for " + a.name.local);
            var k;
            f.argNames && (k = f.argNames.split(","));
            for (var l = 0; l < b.length; l++) {
              var m = h ? h : g.a[l],
                p = ke("FUNCTION", l, "", a.name.toString()),
                t = me("XPTY0004", p);
              f.variadic && (h = m);
              k && "collation" === k[l] && 2 === l && a.name.uri === F.cb
                ? ((m = Od(b[l], J.B.Td, t, p, c)),
                  (m = fd("resolve-uri", [m, fd("static-base-uri", [])])),
                  (m.b = J.B.Zm),
                  e.push(m))
                : e.push(Od(b[l], J.Kc(m), t, p, c));
            }
            b = J.Kc(g.r);
            if (f.isUserFunction) return new Le(a, e, b, f.componentBinding);
            switch (a.name.uri) {
              case F.cb:
              case F.Rd:
                switch (a.name.local) {
                  case "current":
                    H[0] && (b = H[0]);
                    break;
                  case "accumulator-before":
                  case "accumulator-after":
                    if (e[0] instanceof Hc) {
                      f = d(e[0].value[0].value, c.yc, function () {
                        return "";
                      }).ha();
                      c = c.Tc[f];
                      if (!c)
                        throw new q("Unknown accumulator " + f, "XTDE3340");
                      b = J.Kd(c);
                      e[0] = new Hc(f);
                    }
                }
                return new Yc(a, e, b);
              case F.map:
                return new Cd(a, e, b);
              case F.kf:
                return new Dd(a, e, b);
              case F.cm:
                return new Me(a, e, b);
              case F.Jc:
                return new Ed(a, e, b);
              case F.sg:
                return new Ne(a, e, b);
              case F.am:
                return new Oe(a, e, b);
              default:
                if (f.$l) return new Le(a, e, b, f.Aq);
                B.ra("No function call generator for:" + a.toString());
            }
          } else {
            if (
              (f = he.getFnSignature(a.name, null, e)) &&
              (f.dr > a.arity || a.arity > f.br)
            )
              throw new q(
                "Wrong argument arity " +
                  b.length +
                  " for function " +
                  a.name.local +
                  "() - should be between " +
                  f.minArgs +
                  " and " +
                  f.maxArgs,
                "XPST0017"
              );
            if (c.kd)
              return fd("error", [
                fd("QName", [new Hc(""), new Hc("XTDE1425")]),
                new Hc("Unknown function " + a.toString()),
              ]);
            throw new q("Unknown function " + a.ha() + "()", "XPST0017");
          }
        },
      };
    V = {
      Cd: function () {
        return "";
      },
      Bd: "http://www.w3.org/2005/xpath-functions/collation/codepoint",
      hh: !1,
      Zb: {},
      Tc: {},
      Tb: !1,
      Ee: !1,
      kd: !1,
      Ap: function () {
        V.Cd = function () {
          return "";
        };
        V.Bd = "http://www.w3.org/2005/xpath-functions/collation/codepoint";
        V.Zb = {};
        V.Tc = {};
        V.Tb = !1;
        V.Ee = !1;
        V.kd = !1;
      },
      getContext: function () {
        return { Tb: V.Tb, Tq: 1 === Za, Zb: V.Zb };
      },
      lo: function () {
        return V.Bd;
      },
      Jl: function () {
        return F.cb;
      },
      si: function () {
        return kc;
      },
      Kq: function () {
        return null;
      },
      Sq: function () {
        return !1;
      },
      kh: function () {
        return V.kd;
      },
      ar: function () {
        return null;
      },
    };
    var fb = {};
    Qa.prototype.hg = function () {
      return this.name;
    };
    return {
      process: function (e, f, h, g, k, l) {
        k = void 0 === k ? !1 : k;
        l = void 0 === l ? !1 : l;
        a();
        bb = e;
        Za = f ? 1 : 0;
        e = [];
        fb = {};
        V.Ap();
        V.yc = b;
        f && (V.Tb = !0);
        if (g) {
          be = g.wi ? 1 : 0;
          g.Ee && (V.Ee = !0);
          for (var p in g.namespaces) fb[p] = g.namespaces[p];
          for (var t in g.Be) {
            p = d(t, V.yc, function () {
              return "";
            });
            var x = g.Be[t],
              w = J.Kd(x.getAttribute("sType"));
            e.push(new Qa(p, w, x, !0));
          }
          for (var v in g.Ld)
            (t = d(v, V.yc, function () {
              return "";
            })),
              e.push(new Qa(t, g.Lf[v], g.Ld[v]));
          Ga = e;
          V.Tc = g.Tc;
          g.hh && (V.hh = g.hh);
          g.Bd && (V.Bd = g.Bd);
          g.Zb && (V.Zb = g.Zb);
          g.Tb && (V.Tb = g.Tb);
          g.kd && (V.kd = g.kd);
          g.sh && (H = [g.sh.Va(kb)]);
          g.Mg &&
            (V.Cd = function () {
              return g.Mg;
            });
          V.yb = g.yb ? g.yb : null;
        }
        v = "";
        for (var u in fb)
          (e = fb[u]), (e = e === F.me[u] ? "~" : e), (v += u + "=" + e + " ");
        tc(E, bb);
        try {
          var N = r(l);
        } catch (mc) {
          throw (
            (mc instanceof q &&
              g &&
              g.Mp &&
              ((mc.code = g.Mp),
              (mc.message =
                "Invalid XPath expression supplied to xsl:evaluate {" +
                bb +
                "}: " +
                mc.message)),
            mc)
          );
        }
        0 !== E.G && c("Found " + m() + " beyond end of expression");
        f
          ? ((N = N.kb()), N instanceof nc && h && (N = new pc(oc(N))))
          : g &&
            g.zh &&
            ((f = me("XPTY0004", ke("EVALUATE_RESULT", 0, "", null))),
            (N = Od(N, g.zh, f, ke)));
        f = k ? new Qe() : new Re();
        N.j(f);
        f = f.current;
        k
          ? ((f = f.documentElement),
            N.b && f.setAttribute("sType", N.b.va()),
            "" !== v && f.setAttribute("ns", v),
            g && g.yb && f.setAttribute("baseUri", g.yb))
          : ((f = f.C[0]), "" !== v && (f.ir = v), g && g.yb && (f.pc = g.yb));
        return f;
      },
      parseSequenceType: function (b, e, d) {
        a();
        V.yc = e;
        V.Cd = d;
        Za = 0;
        fb = {};
        tc(E, b);
        b = u();
        0 !== E.G && c("Unexpected " + m() + " after SequenceType");
        return b;
      },
      getTokenizer: function () {
        return E;
      },
    };
  })();
  function Re() {
    this.stack = [];
    this.current = { C: [] };
  }
  Re.prototype = {
    start: function (a, b) {
      b = void 0 === b ? {} : b;
      var d = { N: a, C: [] },
        m;
      for (m in b) d[m] = b[m];
      this.current.C.push(d);
      this.stack.push(this.current);
      this.current = d;
    },
    Re: function (a, b) {
      this.current[a] = b;
    },
    end: function () {
      this.current = this.stack.pop();
    },
    Ub: function (a, b) {
      b = void 0 === b ? {} : b;
      var d = { N: a },
        m;
      for (m in b) d[m] = b[m];
      this.current.C.push(d);
    },
  };
  function Qe() {
    this.Yj = wb.find("SaxonJS").getPlatform().createDocument();
    this.stack = [];
    this.current = this.Yj;
  }
  Qe.prototype = {
    start: function (a, b) {
      b = void 0 === b ? {} : b;
      var d = this.Yj.createElement(a),
        m;
      for (m in b) d.setAttribute(m, b[m]);
      this.current.appendChild(d);
      this.stack.push(this.current);
      this.current = d;
    },
    Re: function (a, b) {
      this.current.setAttribute(a, b);
    },
    end: function () {
      this.current = this.stack.pop();
    },
    Ub: function (a, b) {
      b = void 0 === b ? {} : b;
      var d = this.Yj.createElement(a),
        m;
      for (m in b) d.setAttribute(m, b[m]);
      this.current.appendChild(d);
    },
  };
  function Yc(a, b, d) {
    W.call(this);
    var m = a.name.local;
    if (a.name.uri === F.Rd) {
      var c = b[0].b;
      return c.na === kb && c.ca.Ga() && m === c.ca.Qf.name
        ? b[0]
        : ["NMTOKENS", "ENTITIES", "IDREFS"].includes(m)
        ? re(b[0], "l", a.name, null, !0)
        : "numeric" === m
        ? re(b[0], "u", a.name, null, !0)
        : re(b[0], "a", null, d.ca, !0);
    }
    this.name = a;
    this.vb = b;
    this.b = d;
    switch (m) {
      case "exactly-one":
        this.b = b[0].b.Va(kb);
        break;
      case "head":
        this.b = b[0].b.Va(gb(b[0].b.na) ? lb : kb);
        break;
      case "tail":
      case "subsequence":
        this.b = b[0].b.Va(jb);
        break;
      case "ceiling":
      case "floor":
      case "reverse":
      case "snapshot":
        this.b = b[0].b;
        break;
      case "last":
      case "position":
        this.Mb = !0;
        break;
      case "string-length":
      case "normalize-space":
        0 === b.length && this.vb.push(fd("string", new hd()));
        break;
      case "fold-left":
      case "fold-right":
        this.b = b[2].resultType;
        break;
      case "for-each":
        this.b = b[1].b.ca.ti().Va(jb);
        break;
      case "filter":
        this.b = b[0].b.Va(jb);
        break;
      case "current":
        this.Ed = !0;
        break;
      case "boolean":
        if (b[0].b.ia(J.B.ic)) return b[0];
    }
  }
  n(Yc, W);
  Yc.prototype.kb = function () {
    return new ec(this);
  };
  Yc.prototype.vd = function () {
    if (this.name.uri === F.cb)
      return "doc document element-with-id id innermost key outermost"
        .split(" ")
        .includes(this.name.local)
        ? !0
        : "filter one-or-more subsequence remove tail trace unordered zero-or-more"
            .split(" ")
            .includes(this.name.local)
        ? this.vb[0].vd()
        : !1;
  };
  Yc.prototype.j = function (a) {
    W.prototype.start.call(this, a, { name: this.name.name.local });
    for (var b = sa(this.vb), d = b.next(); !d.done; d = b.next()) d.value.j(a);
    a.end();
  };
  Yc.prototype.V = "fn";
  function Se(a, b, d) {
    W.call(this);
    this.name = a;
    this.vb = b;
    this.b = d;
  }
  n(Se, W);
  Se.prototype.j = function (a) {
    W.prototype.start.call(this, a, { name: this.name.ha() });
    for (var b = sa(this.vb), d = b.next(); !d.done; d = b.next()) d.value.j(a);
    a.end();
  };
  Se.prototype.V = "ifCall";
  function Cd(a, b, d) {
    W.call(this);
    this.name = a;
    this.vb = b;
    this.b = d;
    if ((a = "merge" === a.name.local))
      (a = b[0]), (a = !(a instanceof Cc && 0 === a.value.length));
    a && (this.b = b[0].b.Va(kb));
  }
  n(Cd, W);
  Cd.prototype.j = function (a) {
    W.prototype.start.call(this, a, { name: this.name.ha() });
    for (var b = sa(this.vb), d = b.next(); !d.done; d = b.next()) d.value.j(a);
    a.end();
  };
  Cd.prototype.V = "ifCall";
  function Dd(a, b, d) {
    W.call(this);
    this.name = a;
    this.vb = b;
    this.b = d;
  }
  n(Dd, W);
  Dd.prototype.j = function (a) {
    W.prototype.start.call(this, a, { name: this.name.ha() });
    for (var b = sa(this.vb), d = b.next(); !d.done; d = b.next()) d.value.j(a);
    a.end();
  };
  Dd.prototype.V = "ifCall";
  function Me(a, b, d) {
    Se.call(this, a, b, d);
  }
  n(Me, Se);
  function Ed(a, b, d) {
    W.call(this);
    this.name = a;
    this.vb = b;
    this.b = d;
  }
  n(Ed, W);
  Ed.prototype.j = function (a) {
    W.prototype.start.call(this, a, { name: this.name.ha() });
    for (var b = sa(this.vb), d = b.next(); !d.done; d = b.next()) d.value.j(a);
    a.end();
  };
  Ed.prototype.V = "ifCall";
  function Ne(a, b, d) {
    W.call(this);
    this.name = a;
    this.vb = b;
    this.b = d;
  }
  n(Ne, W);
  Ne.prototype.j = function (a) {
    W.prototype.start.call(this, a, { name: this.name.ha() });
    for (var b = sa(this.vb), d = b.next(); !d.done; d = b.next()) d.value.j(a);
    a.end();
  };
  Ne.prototype.V = "ifCall";
  function Oe(a, b, d) {
    Ne.call(this, a, b, d);
    var m = new wd(C.O.X.xa("ixsl", F.sg, "call"), 3),
      c = new wd(C.O.X.xa("ixsl", F.sg, "window"), 0);
    this.name = m;
    this.vb = [new Ne(c, [], J.B.qe), new Hc(a.name.local), new xe(b)];
    this.b = d;
  }
  n(Oe, Ne);
  function Le(a, b, d, m) {
    W.call(this);
    this.name = a;
    this.vb = b;
    this.b = d;
    this.zn = m;
  }
  n(Le, W);
  Le.prototype.j = function (a) {
    W.prototype.start.call(this, a, { name: this.name.ha(), coId: this.zn });
    for (var b = sa(this.vb), d = b.next(); !d.done; d = b.next()) d.value.j(a);
    a.end();
  };
  Le.prototype.V = "ufCall";
  function He(a) {
    W.call(this);
    this.name = a.name.name;
    this.zc = a.zc;
    this.arity = a.name.arity;
    this.b = a.b;
    this.resultType = a.resultType;
  }
  n(He, W);
  He.prototype.j = function (a) {
    this.Ub(a, {
      name: this.name.ha(),
      arity: this.arity,
      resultType: this.resultType.va(),
    });
  };
  He.prototype.V = "fnRef";
  function Ge(a) {
    He.call(this, a);
    this.vn = 0;
  }
  n(Ge, He);
  Ge.prototype.j = function (a) {
    this.Ub(a, {
      name: this.name.ha(),
      arity: this.arity,
      resultType: this.resultType.va(),
      bSlot: this.vn,
    });
  };
  Ge.prototype.V = "ufRef";
  function we() {
    W.call(this);
    this.b = J.B.Qa;
  }
  n(we, W);
  we.prototype.j = function (a) {
    this.Ub(a, { asCode: "*" });
  };
  we.prototype.V = "null";
  function Be() {
    W.call(this);
  }
  n(Be, W);
  Be.prototype.ck = {};
  Be.prototype.jp = {};
  Be.prototype.so = {};
  function Ce() {
    W.call(this);
    this.b = J.B.Qa;
    this.slot = this.Nc = this.name = this.Qd = null;
  }
  n(Ce, W);
  ba = Ce.prototype;
  ba.Si = function (a) {
    this.Qd = this.b = a;
  };
  ba.Bh = function (a) {
    this.Nc = this.name = a;
  };
  ba.hg = function () {
    return this.name;
  };
  ba.toString = function () {
    return "$" + this.name + " as " + this.b.toString();
  };
  ba.j = function (a) {
    this.Ub(a, { name: this.name, asCode: this.b.va(), slot: this.slot });
  };
  ba.V = "arg";
  function De(a, b, d, m) {
    W.call(this);
    this.Eq = a;
    this.jm = b;
    this.resultType = d;
    var c = [];
    b.forEach(function (a) {
      c.push(a.b);
    });
    m = Oc(m, d, this.ib("body"));
    this.b = J.ad(new I.re(c, d));
    this.arity = b.length;
    this.body = m;
    m.Jd = "body";
  }
  n(De, W);
  ba = De.prototype;
  ba.j = function (a) {
    W.prototype.start.call(this, a, {
      arity: this.arity,
      name: this.name,
      as: this.resultType.va(),
    });
    for (var b = sa(this.jm), d = b.next(); !d.done; d = b.next()) d.value.j(a);
    this.body.j(a);
    a.end();
  };
  ba.V = "inlineFn";
  ba.kind = 5;
  ba.ib = function (a, b) {
    b = void 0 === b ? "XPTY0004" : b;
    return new Rb(
      this.kind,
      "(" +
        this.jm
          .map(function (a) {
            return a.toString();
          })
          .join(",") +
        ")" +
        (this.resultType ? " as " + this.resultType.toString() : ""),
      a,
      b
    );
  };
  ba.name = "inline";
  function ye(a, b, d) {
    W.call(this);
    var m = this;
    if (a.b && a.b.ca instanceof I.re && a.b.ea().a.length !== b.length)
      throw new q(
        "Partially-applied function requires " +
          a.arity +
          " arguments, but " +
          (b.length < a.arity ? "only " : "") +
          b.length +
          " were supplied",
        "XPTY0004"
      );
    this.cb = a;
    if (a instanceof ne) {
      var c = a.resultType;
      this.xl = a.zc.$l
        ? new Ge({
            name: { name: a.name, arity: a.arity },
            zc: a.zc,
            b: a.b,
            resultType: c,
          })
        : new He({
            name: { name: a.name, arity: a.arity },
            zc: a.zc,
            b: a.b,
            resultType: c,
          });
    } else this.xl = a;
    this.vb = [];
    var l = 0,
      f;
    if (a.zc) {
      var k = a.zc.alphaTree,
        r = a.zc.variadic;
      b.forEach(function (a) {
        var b = k.a[l];
        b = f ? f : J.Kc(b);
        a instanceof we ? (a.b = b) : (a = Oc(a, b, m.ib(l)));
        m.vb.push(a);
        r && (f = b);
        l++;
      });
    } else
      b.forEach(function (a) {
        m.vb.push(a);
      });
    a.b.ca instanceof I.re && (this.b = J.ad(a.b.ca.xp(d)));
  }
  n(ye, W);
  ye.prototype.j = function (a) {
    W.prototype.start.call(this, a);
    this.xl.j(a);
    this.vb.forEach(function (b) {
      b.j(a);
    });
    a.end();
  };
  ye.prototype.V = "partialApply";
  ye.prototype.kind = 5;
  function Ee(a, b) {
    W.call(this);
    this.key = a;
    this.value = b;
    this.b = J.Kd("1FM");
  }
  n(Ee, W);
  Ee.prototype.toString = function () {
    return "map{" + this.key.toString + " : " + this.value.toString() + "}";
  };
  Ee.prototype.j = function (a) {
    W.prototype.start.call(this, a);
    this.key.j(a);
    this.value.j(a);
    a.end();
  };
  Ee.prototype.V = "map";
  function Fe(a) {
    W.call(this);
    this.entries = a;
    var b = pb.ug(
        a.map(function (a) {
          return a[0].b.ca;
        })
      ),
      d = pb.ug(
        a.map(function (a) {
          return a[1].b.ca;
        })
      );
    a = a.map(function (a) {
      return a[1].b.na;
    });
    var m = kb;
    a.some(function (a) {
      return gb(a);
    }) && (m += hb);
    a.some(function (a) {
      return ib(a);
    }) && (m += 4);
    this.b = J.ad(new I.oj(b, new J.Ka(d, m)));
  }
  n(Fe, W);
  Fe.prototype.toString = function () {
    var a = "map{";
    this.entries.forEach(function (b) {
      a += b[0].toString + " : " + b[1].toString();
    });
    return a + "}";
  };
  Fe.prototype.j = function (a) {
    W.prototype.start.call(this, a);
    this.entries.forEach(function (b) {
      b[0].j(a);
      b[1].j(a);
    });
    a.end();
  };
  Fe.prototype.V = "map";
  function gd(a, b) {
    W.call(this);
    B.assert(!b || b instanceof I.mc);
    this.axis = a;
    this.V = "axis";
    b = b || I.Ye.pa;
    2 === a && b instanceof I.Ye
      ? (b = I.nc.xk)
      : 3 === a && b instanceof I.Ye && (b = I.Nm.pa);
    this.Nb = b;
    this.b =
      9 === a && b instanceof I.Ye ? J.B.Oh : b ? new J.Ka(b, jb) : J.B.Mh;
  }
  n(gd, W);
  gd.prototype.xf = function () {
    return this.axis;
  };
  gd.prototype.vd = function () {
    return [2, 3, 4, 5, 6, 7, 9, 12].includes(this.axis);
  };
  gd.prototype.kb = function () {
    return new cc(this.axis, this.Nb);
  };
  gd.prototype.j = function (a) {
    W.prototype.Ub.call(this, a, {
      name: Vb(this.axis),
      nodeTest: this.b.va(),
    });
  };
  function Te(a, b) {
    Sb.call(this, a, 2, b);
    this.Ca = a = Oc(a, J.B.Mh, this.ib(0, "XPTY0019"));
    this.b = b.b.Fi(a.b.na);
  }
  n(Te, Sb);
  Te.prototype.vd = function () {
    return !0;
  };
  Te.prototype.kb = function () {
    if (this.Fa instanceof Yc || this.Fa instanceof Cc)
      throw new Pb("Not an axis step for a pattern", "XTSE0340");
    return this.Mb
      ? new fc(this)
      : new ic(this.Fa.xf(), this.Fa.kb(), this.Ca.kb());
  };
  Te.prototype.j = function (a) {
    Sb.prototype.start.call(this, a, this.Lb ? { op: R[this.Lb] } : {});
    this.Ca.j(a);
    this.Fa.j(a);
    a.end();
  };
  Te.prototype.V = "slash";
  function ue() {
    W.call(this);
    this.b = J.B.Oh;
  }
  n(ue, W);
  ue.prototype.kb = function () {
    return new cc(12, I.nc.ej);
  };
  ue.prototype.V = "root";
  function Ue(a, b) {
    if (a instanceof ue && b instanceof gd && 9 === b.xf()) return Gc();
    if (
      a instanceof Te &&
      a.Ca instanceof ue &&
      5 === a.Fa.axis &&
      b instanceof gd &&
      3 === b.axis
    )
      return Ue(a.Ca, new gd(4, b.Nb));
    if (b instanceof Te || (b instanceof Ve && b.bb instanceof Te)) {
      var d = We(b);
      Xe(d.Ca) instanceof gd &&
        Xe(d.Fa) instanceof gd &&
        ((a = id(a, d.Ca)), (b = d.Fa));
    }
    d = new Te(a, b);
    return $e(d)
      ? d
      : d.Fa.b.ca.pg()
      ? ((d.Ca = af(d.Ca)), (d.Fa = af(d.Fa)), new Ve(d))
      : d;
  }
  function $e(a) {
    if (!ib(a.Ca.b.na)) return a.Fa.vd();
    var b = Xe(a.Ca);
    return b instanceof gd &&
      3 === b.axis &&
      ((a = Xe(a.Fa)),
      a instanceof Ve && (a = a.bb),
      (a instanceof gd && [3, 2, 4, 5, 8].includes(a.axis)) ||
        (a instanceof Te && $e(a)))
      ? !0
      : !1;
  }
  function We(a) {
    return a instanceof Ve ? a.bb : a;
  }
  function Xe(a) {
    return a instanceof $c ? Xe(a.step) : a instanceof Ve ? Xe(a.bb) : a;
  }
  var id = Ue;
  function bf(a) {
    return a.vd() ? a : new Ve(a);
  }
  var af = We;
  function fd(a, b) {
    var d = new C.O.X.xa("fn", F.cb, a);
    b = Array.isArray(b) ? b : [b];
    d = new wd(d, b.length);
    return new Yc(d, b, J.B.Qa);
  }
  function Oc(a, b, d) {
    var m = void 0 === m ? null : m;
    m = me(m ? m : d.errorCode ? d.errorCode : "XPTY0004", d.save());
    return Od(a, b, m, d.save());
  }
  function sd(a) {
    return ib(a.b.na) ? new jd(a) : a;
  }
  function oe(a) {
    W.call(this);
    this.value = a;
    this.b =
      0 === a.length
        ? J.B.fj
        : new J.Ka(
            pb.ug(
              a.map(function (a) {
                return a.b.ca;
              })
            ),
            jb
          );
    var b = !0;
    a.forEach(function (a) {
      b = b && a instanceof Cc;
    });
    b && (this.Fo = !0);
  }
  n(oe, W);
  oe.prototype.j = function (a) {
    W.prototype.start.call(this, a);
    this.Fo && a.Re("literal", !0);
    for (var b = sa(this.value), d = b.next(); !d.done; d = b.next())
      d.value.j(a);
    a.end();
  };
  oe.prototype.V = "sequence";
  function xe(a) {
    W.call(this);
    this.value = a;
    if (0 === a.length) this.b = J.ad(I.bj.pa);
    else {
      var b = pb.ug(
          a.map(function (a) {
            return a.b.ca;
          })
        ),
        d = 0;
      a.forEach(function (a) {
        return (d |= a.b.na);
      });
      a = new J.Ka(b, d);
      this.b = J.ad(new I.nj(a));
    }
  }
  n(xe, W);
  xe.prototype.j = function (a) {
    W.prototype.start.call(this, a);
    for (var b = sa(this.value), d = b.next(); !d.done; d = b.next())
      d.value.j(a);
    a.end();
  };
  xe.prototype.V = "arrayBlock";
  function pe(a, b) {
    W.call(this);
    this.Lb = a;
    this.V = R[a];
    this.Nc = b;
    this.action = this.Dg = void 0;
    this.slot = 0;
    this.Qd = this.value = null;
    this.b = J.B.ic;
  }
  n(pe, W);
  pe.prototype.hg = function () {
    return this.Nc;
  };
  pe.prototype.Ue = function (a) {
    this.action = a;
  };
  pe.prototype.Eg = function (a) {
    this.value = a;
    this.Qd = a.b.Va(kb);
  };
  pe.prototype.j = function (a) {
    W.prototype.start.call(this, a, { var: this.Nc.ha(), slot: this.slot });
    this.value.j(a);
    this.action.j(a);
    a.end();
  };
  function te(a, b, d, m) {
    m = void 0 === m ? !1 : m;
    Sb.call(this, a, b, d);
    this.V = 1 === b ? "union" : R[b];
    m = m ? "XTSE0340" : "XPTY0004";
    a = Oc(a, J.B.Mh, this.ib(0, m));
    d = Oc(d, J.B.Mh, this.ib(1, m));
    a = bf(a);
    d = bf(d);
    this.Ca = a;
    this.Fa = d;
    B.assert(a.b);
    B.assert(d.b);
    switch (b) {
      case 24:
        this.b = a.b;
        break;
      case 23:
        b = (a.b.na & d.b.na) | hb | kb;
        this.b = new J.Ka(
          pb.qo(
            [a, d].map(function (a) {
              return a.b.ca;
            }),
            b
          )
        );
        break;
      case 1:
        this.b = new J.Ka(
          pb.ug(
            [a, d].map(function (a) {
              return a.b.ca;
            })
          ),
          sb(a.b.na, d.b.na)
        );
    }
  }
  n(te, Sb);
  te.prototype.vd = function () {
    return !0;
  };
  te.prototype.xf = function () {
    return this.Ca.xf();
  };
  te.prototype.kb = function () {
    return 1 === this.Lb
      ? new nc(this.Ca.kb(), this.Fa.kb(), this.b)
      : new lc(this.Ca.kb(), this.Lb, this.Fa.kb(), this.b);
  };
  function hd(a) {
    a = void 0 === a ? J.B.qe : a;
    W.call(this);
    this.b = a;
  }
  n(hd, W);
  hd.prototype.j = function (a) {
    this.Ub(a);
  };
  hd.prototype.kb = function () {
    return new $b();
  };
  hd.prototype.V = "dot";
  function cf(a) {
    Tb.call(this, a);
    this.b = a.b;
  }
  n(cf, Tb);
  function ve(a) {
    return "" === a.b.ea().p ? new cf(a) : a;
  }
  cf.prototype.V = "homCheck";
  function df() {
    W.call(this);
    this.lf = null;
    this.b = J.B.Qa;
  }
  n(df, W);
  df.prototype.V = "varRef";
  df.prototype.Ed = !0;
  function se(a, b) {
    if ((void 0 === b || b) && a.global) return new ef(a);
    df.call(this);
    this.lf = a;
    this.b = a.Qd || J.B.Qa;
  }
  n(se, df);
  se.prototype.hg = function () {
    return this.lf.Nc;
  };
  se.prototype.j = function (a) {
    this.Ub(a, { name: this.lf.Nc.ha(), slot: this.lf.slot });
  };
  se.prototype.V = "varRef";
  function ef(a) {
    df.call(this, a, !1);
    this.lf = a;
    this.b = a.Qd;
  }
  n(ef, df);
  ef.prototype.hg = function () {
    return this.lf.Nc;
  };
  ef.prototype.kb = function () {
    return new ec(this);
  };
  ef.prototype.j = function (a) {
    this.Ub(a, { name: this.lf.Nc.ha(), bSlot: "?" });
  };
  ef.prototype.V = "gVarRef";
  function ze(a, b) {
    Sb.call(this, a, 213, b);
    this.Ca = a = Oc(a, J.B.Ak, this.ib(0));
    a.b && a.b.ca && a.b.ca.resultType && (this.b = a.b.ca.resultType);
  }
  n(ze, Sb);
  ze.prototype.V = "lookup";
  function Ae(a) {
    W.call(this);
    this.Ca = a = Oc(a, J.B.Ak, this.ib(0));
  }
  n(Ae, W);
  Ae.prototype.j = function (a) {
    W.prototype.start.call(this, a);
    this.Ca.j(a);
    a.end();
  };
  Ae.prototype.V = "lookupAll";
  function Je() {
    W.call(this);
    this.b = J.B.Qa;
  }
  n(Je, W);
  Je.prototype.V = "currentGroup";
  function Ke() {
    W.call(this);
    this.b = J.B.Ng;
  }
  n(Ke, W);
  Ke.prototype.V = "currentGroupingKey";
  function Ve(a) {
    Tb.call(this, a);
    this.b = a.b;
  }
  n(Ve, Tb);
  Ve.prototype.vd = function () {
    return !0;
  };
  Ve.prototype.kb = function () {
    return this.bb.kb();
  };
  Ve.prototype.V = "docOrder";
  function Ie(a) {
    Tb.call(this, a);
    this.b = a.b;
  }
  n(Ie, Tb);
  Ie.prototype.j = function (a) {
    Tb.prototype.start.call(this, a, { flags: this.flags });
    this.bb.j(a);
    a.end();
  };
  Ie.prototype.V = "copyOf";
  Ie.prototype.flags = "cm";
  function dd(a, b) {
    W.call(this);
    B.assert(b instanceof J.Ka);
    this.Ca = a;
    this.type = b;
    this.b = J.B.ic;
  }
  n(dd, W);
  dd.prototype.j = function (a) {
    W.prototype.start.call(this, a, { of: this.type.va() });
    this.Ca.j(a);
    a.end();
  };
  dd.prototype.V = "instance";
  function Wd(a, b, d) {
    d = void 0 === d ? null : d;
    var m = void 0 === m ? "XPDY0050" : m;
    d ||
      ((d = new Rb(2, "treat as", 0)),
      null != m && (d.errorCode = m),
      (d = d.save()));
    a = Rd(a, b.na, d);
    return new Ud(a, b.ca, d);
  }
  function ff(a, b, d) {
    Tb.call(this, a);
    this.b = new J.Ka(a.b.ca, b);
    this.om = b;
    this.Ej = d;
  }
  n(ff, Tb);
  ff.prototype.j = function (a) {
    Tb.prototype.start.call(this, a, {
      card: this.om === kb ? "1" : eb(this.om),
      diag: this.Ej,
    });
    this.bb.j(a);
    a.end();
  };
  ff.prototype.V = "check";
  function Rd(a, b, d) {
    return b === jb
      ? a
      : a instanceof Cc && (b | kb) === b
      ? a
      : new ff(a, b, d);
  }
  function Ud(a, b, d) {
    Tb.call(this, a);
    this.b = a.b;
    this.tp = b;
    this.Ej = d;
  }
  n(Ud, Tb);
  Ud.prototype.j = function (a) {
    Tb.prototype.start.call(this, a, { as: this.tp.va(), diag: this.Ej });
    this.bb.j(a);
    a.end();
  };
  Ud.prototype.V = "treat";
  function gf(a) {
    Tb.call(this, a);
    this.V = "cast";
    this.kind = 2;
    this.Jf = {};
  }
  n(gf, Tb);
  gf.prototype.j = function (a) {
    Tb.prototype.start.call(this, a, this.Jf);
    this.bb.j(a);
    a.end();
  };
  function re(a, b, d, m, c) {
    var l = Oc(a, J.B.Sd, a.ib(0, "XPTY0004"));
    l = new gf(l);
    if (/[lu]/.test(b)) l.Jf = { flags: b + (c ? "e" : ""), as: d.ha() };
    else {
      B.assert("a" === b);
      if (
        a instanceof Cc &&
        1 === a.value.length &&
        C.Ga(a.value[0]) &&
        "AQ" !== m.ea().p
      )
        return (a = m.Qf.aa(a.value[0])), new Cc([a], new J.Ka(m, kb));
      l.Jf = { flags: c ? "ae" : "a", as: m.va() };
    }
    return l;
  }
  function hf(a) {
    Tb.call(this, a);
    this.b = J.B.ic;
    this.V = "castable";
    this.kind = 2;
    this.Jf = {};
  }
  n(hf, Tb);
  hf.prototype.j = function (a) {
    Tb.prototype.start.call(this, a, this.Jf);
    this.bb.j(a);
    a.end();
  };
  function qe(a, b, d, m, c) {
    var l = new hf(a);
    l = Oc(l, J.B.Sd, l.ib(0, "XPTY0004"));
    if (/[lu]/.test(b)) l.Jf = { flags: b + (c ? "e" : ""), as: d.ha() };
    else {
      B.assert("a" === b);
      if (
        a instanceof Cc &&
        1 === a.value.length &&
        C.Ga(a.value[0]) &&
        "AQ" !== m.ea().p
      )
        try {
          return m.Qf.aa(a.value[0]), new Cc([C.O.Ea.cf], J.B.ic);
        } catch (f) {
          return new Cc([C.O.Ea.Qg], J.B.ic);
        }
      l.Jf = { flags: c ? "ae" : "a", as: m.va() };
    }
    return l;
  }
  function Qd(a, b) {
    if (a instanceof gd && 2 === a.axis && a.b.ca instanceof I.xd)
      return new jf(a.b);
    Tb.call(this, a);
    this.tf = b;
    this.b = a.b.ca.pg() ? J.B.gn : J.B.Ng;
  }
  n(Qd, Tb);
  Qd.prototype.j = function (a) {
    Tb.prototype.start.call(this, a, { diag: this.tf });
    this.bb.j(a);
    a.end();
  };
  Qd.prototype.V = "data";
  function Pd(a, b, d) {
    if (a instanceof gd && 2 === a.axis && a.b.ca instanceof I.xd)
      return new jf(a.b);
    b = Qd.call(this, a, b) || this;
    b.ap = d;
    a.b.ca.pg() ? (b.b = d ? J.B.Gk : J.B.dn) : (b.b = d ? J.B.Sd : J.B.lj);
    return b;
  }
  n(Pd, Qd);
  Pd.prototype.j = function (a) {
    Qd.prototype.start.call(this, a, { diag: this.tf });
    this.ap && a.Re("card", "?");
    this.bb.j(a);
    a.end();
  };
  Pd.prototype.V = "atomSing";
  function jf(a) {
    W.call(this);
    this.name = a.ca.name.ha();
    this.b = J.B.Gk;
  }
  n(jf, W);
  jf.prototype.j = function (a) {
    W.prototype.Ub.call(this, a, { name: this.name });
  };
  jf.prototype.V = "attVal";
  function Xd(a, b, d) {
    Tb.call(this, a);
    this.code = b;
    this.tf = d;
    this.b = J.B.Ng;
  }
  n(Xd, Tb);
  Xd.prototype.j = function (a) {
    Tb.prototype.start.call(this, a, { to: this.code, diag: this.tf });
    this.bb.j(a);
    a.end();
  };
  Xd.prototype.V = "cvUntyped";
  function Td(a, b, d) {
    Tb.call(this, a);
    this.type = b;
    this.tf = d;
    this.flags = "";
    this.b = new J.Ka(b.ca, a.b.na);
  }
  n(Td, Tb);
  Td.prototype.j = function (a) {
    Tb.prototype.start.call(this, a, {
      to: this.type.va().replace(/^[01?*+]/, ""),
      flags: this.flags,
    });
    this.bb.j(a);
    a.end();
  };
  Td.prototype.V = "convert";
  function Vd(a, b, d) {
    Tb.call(this, a);
    this.type = b;
    this.resultType = a.resultType;
    this.tf = d;
    this.b = b;
  }
  n(Vd, Tb);
  Vd.prototype.j = function (a) {
    Tb.prototype.start.call(this, a, {
      to: this.type.va().replace(/^[01?*+]/, ""),
      diag: this.tf,
    });
    this.bb.j(a);
    a.end();
  };
  Vd.prototype.V = "fnCoercer";
  var kf = {
      ADI: "i",
      ADIL: "c",
      ADILI: "i",
      ADILIS: "i",
      ADILISB: "i",
      ADIN: "c",
      ADINN: "c",
      ADIP: "c",
      ADIPP: "c",
      ADIPL: "c",
      ADIPLI: "i",
      ADIPLIS: "i",
      ADIPLISB: "i",
      AD: "c",
      AO: "d",
      AF: "f",
      A: "a",
      AZ: "a",
      AT: "t",
      AA: "t",
      AM: "t",
      AMP: "t",
      AH: "t",
      AI: "t",
      AJ: "t",
      AG: "t",
      AK: "t",
      ARD: "u",
      ARY: "u",
      E: "a",
    },
    lf = { 19: "%", 18: "/", 56: "~", 15: "+", 16: "-", 299: "-", 17: "*" };
  function mf(a, b) {
    var d = new Xd(a, "AO", b.save());
    d.b = a.b.na === kb ? J.B.Qh : J.B.$m;
    return d;
  }
  function bd(a, b, d, m) {
    function c(a) {
      return a instanceof I.Ze && a.Qf.Bb ? new I.Ze(C.pp(a.Qf)) : a;
    }
    function l() {
      throw new Pb(
        "Cannot evaluate " + r.toString() + " " + R[b] + " " + v.toString(),
        "XPTY0004"
      );
    }
    Sb.call(this, a, b, d);
    var f = m.kh(),
      k = a.Mb || d.Mb;
    f && ((a = sd(a)), (d = sd(d)));
    a = Oc(a, J.B.Sd, this.ib(0));
    d = Oc(d, J.B.Sd, this.ib(1));
    var r = c(a.b.ca),
      v = c(d.b.ca),
      w = r.ea().p,
      z = v.ea().p;
    f || (!/^AS/.test(w) && !/^AS/.test(z)) || l();
    "AZ" === w &&
      ((a = mf(a, this.ib(0, "FORG0001"))), (r = I.Jb.af), (w = "AO"));
    "AZ" === z &&
      ((d = mf(d, this.ib(1, "FORG0001"))), (v = I.Jb.af), (z = "AO"));
    var t = kf[w],
      g = kf[z],
      K = r.qg(),
      A = v.qg();
    z = I.Jb.Gh;
    w = gb(a.b.na) || gb(a.b.na);
    t || (t = "a");
    g || (g = "a");
    var x;
    f
      ? ((t = g = "d"), (z = I.Jb.af))
      : K &&
        A &&
        ("d" === t || "d" === g
          ? ((t = g = "d"), (z = x = I.Jb.af))
          : "f" === t || "f" === g
          ? ((t = g = "f"), (z = x = I.Jb.FLOAT))
          : "c" === t || "c" === g
          ? ((t = g = "c"), (z = x = I.Jb.Jh))
          : "i" === t && "i" === g && 18 === b
          ? ((t = g = "c"), (z = I.Jb.Jh))
          : "i" !== t ||
            "i" !== g ||
            (15 !== b && 16 !== b && 17 !== b && 19 !== b)
          ? "i" === t && "i" === g && 18 === b && (z = I.Jb.Jh)
          : (z = I.Jb.Bk));
    56 === b && (z = I.Jb.Bk);
    z.qg() &&
      x &&
      ((x = new J.Ka(x, lb)),
      (a = Oc(a instanceof ff ? a.bb : a, x, this.ib(0))),
      (d = Oc(d instanceof ff ? d.bb : d, x, this.ib(1))));
    [t, g].includes("a") && (t = g = "a");
    ((r.Ga("ARY") && v.Ga("AT")) || (v.Ga("ARY") && r.Ga("AT"))) && l();
    "t" === t && "t" === g && (16 === b ? (z = I.Jb.Qm) : l());
    "u" === t && "t" === g && (15 === b ? (z = v) : l());
    "u" === t && "u" === g && (17 === b && l(), (z = 18 === b ? I.Jb.Jh : r));
    K && "u" === g && 18 === b && l();
    "t" !== t || "u" !== g || (16 !== b && 15 !== b)
      ? "i" === t && "u" === g && 17 === b
        ? ((t = "n"), (z = v))
        : "u" !== t || ("d" !== g && "i" !== g && "c" !== g)
        ? "u" !== g ||
          ("d" !== t && "i" !== t && "c" !== t) ||
          ((t = "n"), (z = v))
        : ((z = r), (g = "n"))
      : (z = r);
    t = t + lf[b] + g;
    if (
      !m.kh() &&
      "AF" !== z.ea().p &&
      !m.Ee &&
      (m.xn ? 0 === m.xn : 1) &&
      Ec(a) &&
      Ec(d) &&
      ((m = a.value[0]), (x = d.value[0]), 18 !== b || 0 !== x.J())
    )
      return (
        (a = Pa[t](m, x)),
        (d = new I.Ze(C.type[a.type])),
        Fc([a], new J.Ka(d, kb))
      );
    this.Ca = a;
    this.Fa = d;
    a.b.ia(d.b) && (this.b = a.b);
    z && (this.b = new J.Ka(z, w ? lb : kb));
    this.wn = t;
    k && (this.Mb = !0);
    f && (this.V = "arith10");
    this.b || (this.b = J.B.lj);
  }
  n(bd, Sb);
  bd.prototype.kb = function () {
    throw new Pb(
      "The arithmetic expression  " + R[this.Lb] + " is not a patternXTSE0340"
    );
  };
  bd.prototype.j = function (a) {
    Sb.prototype.start.call(
      this,
      a,
      this.Lb ? { op: R[this.Lb], calc: this.wn } : {}
    );
    this.Ca.j(a);
    this.Fa.j(a);
    a.end();
  };
  bd.prototype.V = "arith";
  (function () {
    function a(a, f, v, w, z) {
      switch (a) {
        case F.cb + "/math":
          return l(f, v, w, z);
        case F.cb + "/map":
          return c(f, v, w, z);
        case F.cb + "/array":
          return m(f, v, w, z);
        case F.sg:
          return d(f, v, w, z);
        case F.Jc:
          return b(f, v, w, z);
        default:
          throw new q("Unknown namespace " + a, "SXJS0003", z);
      }
    }
    function b(a, b, c, d) {
      var k = {
        apply: Fb.apply,
        "compile-XPath": function (a) {
          var b = a[0].next().toString(),
            f;
          if (1 < a.length) {
            var k = a[1].next();
            k = null !== k ? P.rc(k, !0) : {};
          }
          2 < a.length && (f = a[2]);
          return wb.find("SaxonJS").XPath.compile(b, k, f, d, c);
        },
        "compile-GlobalContext": function (a) {
          var b = a[0].next();
          b = null !== b ? P.rc(b, !0) : {};
          var f = a[1].next();
          f = null !== f ? P.rc(f, !0) : {};
          a = a[2].next();
          a = null !== a ? P.rc(a, !0) : {};
          return wb.find("SaxonJS").XPath.compileGlobalContext(b, f, a, d, c);
        },
        "discard-document": function (a, b, c) {
          a = a[0].next();
          if (null === a || 9 != a.nodeType || !a._saxonBaseUri)
            throw new q(
              "Node supplied to saxon:discard-document() is not a document node",
              "XPTY0004",
              c
            );
          c = a._saxonBaseUri;
          a = b.fixed.tc[c];
          delete b.fixed.tc[c];
          delete b.fixed.Ah[c];
          return D.l(a);
        },
        doc: Fb.doc,
        "dynamic-error-info": function (a) {
          var b = c.Yg;
          if (null === b) return D.R;
          a = a[0].next().toString();
          switch (a) {
            case "description":
              return D.ua(b.message);
            case "code":
              return D.l(
                /^Q\{/.test(b.code)
                  ? f.X.g(b.code)
                  : f.X.xa("err", "http://www.w3.org/2005/xqt-errors", b.code)
              );
            case "value":
              return D.R;
            case "module":
              return D.ua(b.vk || "");
            case "line-number":
              return D.Vb(b.oe);
            case "column-number":
              return D.Vb(-1);
            default:
              throw new q("unknown error info field " + a, "SXJS0003");
          }
        },
        "has-uniform-namespaces": function (a) {
          return D.ka(G.Ql(a[0].next()));
        },
        "line-number": function (a) {
          a = a[0].next().Xq;
          return D.Vb(a || -1);
        },
        "marshal-type": function (a) {
          a = a[0].next().toString();
          a = Ua(a);
          return D.l(P.Gg(P.Ob(a))[0]);
        },
        "message-count": function (a, b) {
          var c = a[0].next(),
            d = 0;
          if (c) (c = c.ha()), (d = b.de[c]) || (d = 0);
          else for (var f in b.de) d += b.de[f];
          return D.Vb(d);
        },
        "parse-sequence-type": function (a) {
          var b = a[0].next().toString(),
            c = a[1].next();
          a = G.no(c, F.Un, "ns");
          if (null != a) {
            var d = ge.parseNsAttribute(a);
            a = function (a) {
              return d[a];
            };
          } else
            a = function (a) {
              return c.lookupNamespaceURI(a);
            };
          b = fe.parseSequenceType(b, a, function () {
            for (var a = c; a && 1 === a.nodeType; ) {
              if (
                G.ma(a).uri === F.Ve &&
                a.hasAttributeNS("", "xpath-default-namespace")
              )
                return a.getAttributeNS("", "xpath-default-namespace");
              if (a.hasAttributeNS(F.Ve, "xpath-default-namespace"))
                return a.getAttributeNS(F.Ve, "xpath-default-namespace");
              a = G.hc(a);
            }
          });
          return D.l(P.Gg(P.Ob(b.ea()))[0]);
        },
        "parse-XPath": function (a) {
          var b = a[0].next().toString(),
            c = "parse";
          1 < a.length && (c = a[1].next().toString());
          a = fe.process(b, "pattern.parseFast" === c, null, !0);
          return D.l(a);
        },
        permute: function (a) {
          var b = [];
          a[0].expand().forEach(function (a) {
            return b.push({ key: Math.random(), Qp: a });
          });
          b = b.sort(function (a, b) {
            return a.key - b.key;
          });
          a = b.map(function (a) {
            return a.Qp;
          });
          return D.K(a);
        },
        "system-id": function (a, b) {
          var c = b.lb();
          c = G.da(c) ? G.baseURI(c) : null;
          return D.l(null === c ? null : f.kc.g(c));
        },
        timestamp: function () {
          return D.l(f.cg.Sb(new Date(), -c.fixed.md.getTimezoneOffset()));
        },
      };
      if (!k[a]) throw new q("Unknown saxon function: " + a, "SXJS0003", d);
      return k[a](b, c, d);
    }
    function d(a, b, c, d) {
      function k(a, b) {
        for (var c = a, e = 0; e < b.length; e++) {
          try {
            c = c[b[e]];
          } catch (y) {
            if (null !== y.code) throw y;
            throw new q("Failed to get property " + b[e], "SXJS0007", d);
          }
          if ("undefined" === typeof c) return;
        }
        return c;
      }
      function l(a, b, c) {
        try {
          var e = a.apply(c, b);
        } catch (y) {
          if (null !== y.code) throw y;
          throw new q("Failed to call method " + a, "SXJS0007", d);
        }
        return null === e || "undefined" === typeof e ? D.R : D.K(P.Ob(e));
      }
      function g(a) {
        return a instanceof P.hj ? a.value : a;
      }
      function m(a, b) {
        B.Gb("Warning " + a + ": " + b, 1);
      }
      var r = {
        apply: function (a) {
          var b = g(a[0].next());
          if ("function" !== typeof b)
            throw new q(
              "ixsl:apply: first argument is not a function",
              "SXJS0007",
              d
            );
          a = P.rc(a[1].next());
          return l(b, a, null);
        },
        call: function (a) {
          var b = g(a[0].next()),
            c = a[1].next().toString(),
            f = k(b, c.split("."));
          if ("undefined" == typeof f)
            throw new q(
              "ixsl:call: object method '" + c + "' not found",
              "SXJS0007",
              d
            );
          if ("function" != typeof f)
            throw new q(
              "ixsl:call: property '" + c + "' is not a function",
              "SXJS0007",
              d
            );
          a = P.rc(a[2].next());
          return l(f, a, b);
        },
        contains: function (a) {
          var b = g(a[0].next()),
            c = !0;
          null === b && (c = !1);
          a = a[1].next().toString().split(".");
          "undefined" == typeof k(b, a) && (c = !1);
          return D.K(P.Ob(c));
        },
        eval: function (a) {
          a = a[0].next().toString();
          a = new Function("return " + a);
          return D.K(P.Ob(a()));
        },
        event: function (a, b) {
          return null === b.Zg ? D.R : D.l(P.Ob(b.Zg)[0]);
        },
        get: function (a) {
          var b = g(a[0].next());
          if (null === b) return D.R;
          a = a[1].next().toString();
          b = k(b, a.split("."));
          return "undefined" == typeof b
            ? (m("ixsl:get", "object property '" + a + "' not found"), D.R)
            : D.K(P.Ob(b));
        },
        location: function () {
          return D.l(P.Ob(window.location.toString())[0]);
        },
        page: function () {
          return D.l(P.Ob(c.Db)[0]);
        },
        "query-params": function () {
          function a(a) {
            return f.T.g(decodeURIComponent(a.replace(c, " ")));
          }
          for (
            var b,
              c = /\+/g,
              d = /([^&=]+)=?([^&]*)/g,
              g = window.location.search.substring(1),
              k = new cb();
            null !== (b = d.exec(g));

          ) {
            var l = k.get(a(b[1]));
            l.push(a(b[2]));
            k.Ta(a(b[1]), l);
          }
          return D.l(k);
        },
        source: function (a, b) {
          return null === b.fixed.Ae ? D.R : D.l(P.Ob(b.fixed.Ae)[0]);
        },
        style: function (a) {
          a = a[0].next();
          a = G.Ul(a) ? window.getComputedStyle(a) : {};
          for (var b = new cb(), c = 0; c < a.length; c++) {
            var d = a.item(c),
              g = a.getPropertyValue(d);
            "undefined" === typeof g || null === g
              ? b.Ta(f.T.g(d), [])
              : b.Ta(f.T.g(d), [f.T.g(g.toString())]);
          }
          return D.l(b);
        },
        window: function () {
          return D.l(P.Ob(window)[0]);
        },
        "remove-attribute": function (a, b, c) {
          var e = a[0].next().toString();
          a = a[1].next();
          if (1 !== a.nodeType || a.ownerDocument !== b.Db)
            throw new q(
              "Context item for ixsl:remove-attribute must be an element in the master document",
              "SXJS0007",
              c
            );
          b = P.qk(c, e, !1);
          "" !== b.uri
            ? a.removeAttributeNS(b.uri, b.local)
            : a.removeAttribute(b.local);
          return D.R;
        },
        "remove-property": function (a) {
          var b = a[0].next().toString(),
            c = g(a[1].next()),
            d = b.split(".");
          a = d.pop();
          c = k(c, d);
          if ("undefined" == typeof c || "undefined" == typeof c[a])
            return (
              m(
                "ixsl:remove-property",
                "'" + b + "' not found for supplied object"
              ),
              D.R
            );
          d = c.hasOwnProperty(a);
          (delete c[a] && d) ||
            m(
              "ixsl:remove-property",
              "'" + b + "' could not be removed for supplied object"
            );
          return D.R;
        },
        "schedule-action": function () {
          throw new q(
            "ixsl:schedule-action - shouldn't be here",
            "SXJS0007",
            d
          );
        },
        "set-attribute": function (a, b, c) {
          var e = a[0].next().toString(),
            d = a[1].next().toString();
          a[2] || b.Wc("SXJS0007", "ixsl:set-attribute", c);
          a = a[2] ? a[2].next() : b.lb();
          if (1 !== a.nodeType || a.ownerDocument !== b.Db)
            throw new q(
              "Context item for ixsl:set-attribute must be an element in the master document",
              "SXJS0007",
              c
            );
          var f = P.qk(c, e, !1);
          "" !== f.uri
            ? ("" === f.prefix &&
                G.De(a).forEach(function (a) {
                  a.uri === f.uri && (f.prefix = a.prefix);
                }),
              a.setAttributeNS(f.uri, f.toString(), d))
            : a.setAttribute(f.local, d);
          return D.R;
        },
        "set-property": function (a) {
          var b = a[0].next().toString(),
            c = P.rc(a[1].next()),
            d = g(a[2].next()),
            f = b.split(".");
          a = f.pop();
          d = k(d, f);
          if ("undefined" == typeof d)
            return (
              m(
                "ixsl:set-property",
                "'" + b + "' not found for supplied object"
              ),
              D.R
            );
          d[a] = c;
          return D.R;
        },
        "set-style": function (a) {
          var b = a[0].next().toString(),
            c = P.rc(a[1].next());
          a = a[2].next();
          if (!(a instanceof Element && "style" in a))
            return (
              m(
                "ixsl:set-style",
                "style '" + b + "' cannot be set for supplied object"
              ),
              D.R
            );
          a.style[b] = c;
          return D.R;
        },
      };
      if (!r[a]) throw new q("Unknown ixsl function: " + a, "SXJS0003", d);
      return r[a](b, c, d);
    }
    function m(a, b, c, d) {
      function k(a, b) {
        if (1 > a || a > b)
          throw new q(
            "Array index (" + a + ") out of bounds (1 to " + b + ")",
            "FOAY0001",
            d
          );
      }
      function l(a) {
        return a[0].next().value;
      }
      function g(a) {
        return D.l(new mb(a));
      }
      function m(a, b, c, d) {
        var e = b.fixed.ya,
          f = a[1].expand(),
          g = a[2].expand()[0],
          h = Object.keys(b.Ha).length;
        if (g instanceof nb.gb)
          (a = l(a)),
            d || (a = a.reverse()),
            a.forEach(function (a) {
              f = g.evaluate(d ? [f, a] : [a, f], b, c).expand();
            });
        else {
          var k;
          "function" !== g.N && (k = g);
          a[0].sa(function (a) {
            var c = b.ja(!0);
            k && (c.La = k);
            c.Zf();
            c.Ja = "function";
            c.$b = {};
            c.Xb = null;
            c.focus = null;
            d
              ? ((c.Ha[h] = f), (c.Ha[h + 1] = [a]))
              : ((c.Ha[h] = [a]), (c.Ha[h + 1] = f));
            f = e.evaluate(void 0, c).expand();
          });
        }
        return D.K(f);
      }
      var r = {
        append: function (a) {
          return g(l(a).concat([a[1].expand()]));
        },
        filter: function (a, b, c) {
          var e = a[1].expand()[0];
          Object.keys(b.Ha);
          a = l(a);
          if (e instanceof nb.gb) {
            var d = [];
            a.forEach(function (a) {
              var g = e.evaluate([a], b, c).expand();
              if ((Array.isArray(g) && 1 !== g.length) || !f.Ea.matches(g[0]))
                throw new q(
                  "Wrong type for function result in filter(). Expecting xs:boolean, supplied value is " +
                    B.oa(g),
                  "XPTY0004",
                  c
                );
              g[0].value && d.push(a);
            });
            return g(d);
          }
        },
        flatten: function (a) {
          return P.flatten(a[0]);
        },
        "fold-left": function (a, b, c) {
          return m(a, b, c, !0);
        },
        "fold-right": function (a, b, c) {
          return m(a, b, c, !1);
        },
        "for-each": function (a, b, c) {
          var e = a[1].expand()[0];
          a = l(a);
          Object.keys(b.Ha);
          if (e instanceof nb.gb) {
            var d = [];
            a.forEach(function (a) {
              d.push(e.evaluate([a], b, c).expand());
            });
            return g(d);
          }
        },
        "for-each-pair": function (a, b, c) {
          var e = a[2].expand();
          if (1 !== e.length)
            throw new q(
              "for-each-pair() must have exactly one function item as the third argument. Supplied length " +
                e.length,
              "XPTY0004",
              c
            );
          e = e[0];
          Object.keys(b.Ha);
          var d = [];
          ha();
          pa();
          ha();
          pa();
          var f = a[0].next().value[Symbol.iterator]();
          a = a[1].next().value[Symbol.iterator]();
          var h = f.next().value,
            k = a.next().value;
          if (e instanceof nb.gb)
            for (; h && k; )
              d.push(e.evaluate([h, k], b, c).expand()),
                (h = f.next().value),
                (k = a.next().value);
          return g(d);
        },
        "_from-sequence": function (a) {
          var b = [];
          a[0].sa(function (a) {
            b.push([a]);
          });
          return g(b);
        },
        get: function (a) {
          var b = l(a);
          a = a[1].next().J();
          k(a, b.length);
          return D.K(b[a - 1]);
        },
        head: function (a) {
          a = l(a);
          k(1, a.length);
          return D.K(a[0]);
        },
        "insert-before": function (a) {
          var b = l(a),
            c = a[1].next().J();
          k(c, b.length + 1);
          a = a[2].expand();
          return g(
            b
              .slice(0, c - 1)
              .concat([a])
              .concat(b.slice(c - 1))
          );
        },
        join: function (a) {
          var b = [];
          a[0].sa(function (a) {
            a.value.forEach(function (a) {
              b.push(a);
            });
          });
          return g(b);
        },
        put: function (a) {
          var b = l(a),
            c = a[1].next().J();
          k(c, b.length);
          a = a[2].expand();
          return g(
            b
              .slice(0, c - 1)
              .concat([a])
              .concat(b.slice(c))
          );
        },
        remove: function (a) {
          var b = l(a),
            c = [];
          a[1].sa(function (a) {
            a = a.J();
            k(a, b.length);
            c.push(a - 1);
          });
          return g(
            b.filter(function (a, b) {
              return 0 > c.indexOf(b);
            })
          );
        },
        reverse: function (a) {
          return g(l(a).slice().reverse());
        },
        size: function (a) {
          return D.Vb(l(a).length);
        },
        sort: function (a, b, c) {
          var e = Q.ri(c, a[1], b),
            d = P.Wd;
          if (a[2]) {
            var f = a[2].next();
            d = function (a) {
              return f.evaluate([[a]], b, c);
            };
          }
          return g(
            l(a)
              .slice()
              .sort(function (b, c) {
                return a[1]
                  ? vb.Ai(D.K(b).Ya(d), D.K(c).Ya(d), e)
                  : vb.Ai(D.K(b).Ya(d), D.K(c).Ya(d));
              })
          );
        },
        subarray: function (a) {
          var b = l(a),
            c = a[1].next().J();
          k(c, b.length + 1);
          a = a[2] ? a[2].next().J() : b.length - c + 1;
          if (0 > a) throw new q("Length is negative", "FOAY0002");
          k(c + a, b.length + 1);
          return g(b.slice(c - 1, c + a - 1));
        },
        tail: function (a) {
          a = l(a);
          k(1, a.length);
          return g(a.slice(1));
        },
        "_to-sequence": function (a) {
          var b = [];
          l(a).forEach(function (a) {
            a.forEach(function (a) {
              b.push(a);
            });
          });
          return D.K(b);
        },
      };
      if (!r[a]) throw new q("Unknown array function: " + a, "SXJS0003", d);
      return r[a](b, c, d);
    }
    function c(a, b, c, d) {
      var k = {
        contains: function (a) {
          var b = a[0].next();
          a = a[1].next();
          return D.ka(b.Xa(a));
        },
        create: function (a) {
          var b = new cb();
          a[0].sa(function (a) {
            a.Cb(function (a) {
              b.Ta(a.k, a.v);
            });
          });
          return D.l(b);
        },
        entry: function (a) {
          var b = new cb();
          b.Ta(a[0].next(), a[1].expand());
          return D.l(b);
        },
        find: function (a) {
          function b(a) {
            P.isArray(a)
              ? a.value.forEach(c)
              : P.isMap(a) &&
                (a.Xa(f) && d.push(a.get(f)),
                a.keys().forEach(function (b) {
                  c(a.get(b));
                }));
          }
          function c(a) {
            a.forEach(b);
          }
          var d = [],
            f = a[1].next();
          c(a[0].expand());
          return D.l(new mb(d));
        },
        "for-each": function (a, b, c) {
          var d = a[0].next(),
            f = d.keys(),
            e = a[1].expand()[0];
          if (e instanceof nb.gb) {
            var g = [];
            f.forEach(function (a) {
              g = g.concat(e.evaluate([[a], d.get(a)], b, c).expand());
            });
            return D.K(g);
          }
        },
        get: function (a) {
          var b = a[0].next();
          a = a[1].next();
          return D.K(b.get(a));
        },
        keys: function (a) {
          a = a[0].next();
          return D.K(a.keys());
        },
        merge: function (a) {
          var b = new cb(),
            c = a[1] ? a[1].next() : null;
          a[0].sa(function (a) {
            a.Cb(function (a) {
              var e = f.T.g("duplicates");
              e = c && c.Xa(e) ? c.get(e).toString() : "use-first";
              if (
                !b.Xa(a.k) ||
                ["use-last", "unspecified", "use-any"].includes(e)
              )
                b.Ta(a.k, a.v);
              else {
                if ("reject" === e)
                  throw (
                    ((e = f.T.g("duplicates-error-code")),
                    (e = c.Xa(e) ? c.get(e).toString() : "FOJS0003"),
                    new q("Duplicate key value '" + a.k.toString() + "'", e, d))
                  );
                if ("combine" === e) {
                  var g = b.get(a.k);
                  a.v.forEach(function (a) {
                    g.push(a);
                  });
                  b.Ta(a.k, g);
                }
              }
            });
          });
          return D.l(b);
        },
        _new: function (a) {
          var b = new cb();
          a[0] &&
            a[0].sa(function (a) {
              a.Cb(function (a) {
                if (b.Xa(a.k))
                  throw new q(
                    "Duplicate key value '" + a.k.toString() + "'",
                    "XSLT" === c.fixed.options.language
                      ? "XTDE3365"
                      : "XQDY0137",
                    d
                  );
                b.Ta(a.k, a.v);
              });
            });
          return D.l(b);
        },
        put: function (a) {
          var b = a[0].next(),
            c = a[1].next();
          a = a[2].expand();
          return D.l(b.put(c, a));
        },
        remove: function (a) {
          var b = a[0].next();
          a[1].sa(function (a) {
            b = b.remove(a);
          });
          return D.l(b);
        },
        size: function (a) {
          var b = 0;
          a[0].next().Cb(function () {
            b++;
          });
          return D.Vb(b);
        },
        "untyped-contains": function (a) {
          var b = a[0].next();
          a = a[1].next();
          return D.ka(b.Xa(a));
        },
      };
      if (!k[a]) throw new q("Unknown map function: " + a, "SXJS0003", d);
      return k[a](b, c, d);
    }
    function l(a, b, c, d) {
      function f(a) {
        return null === a ? ((l = !0), Number.NaN) : a.J();
      }
      function k() {
        var a = b[0].next();
        return f(a ? a : P.Kb(d)(c).next());
      }
      function g() {
        var a = b[1].next();
        return f(a ? a : P.ml(d)(c).next());
      }
      var l = !1,
        m = (function () {
          switch (a) {
            case "pi":
              return Math.PI;
            case "exp":
              return Math.exp(k());
            case "exp10":
              return Math.pow(10, k());
            case "log":
              return Math.log(k());
            case "log10":
              return Math.log(k()) / Math.LN10;
            case "pow":
              var b = k(),
                c = g();
              return (-1 === b && (Infinity === c || -Infinity === c)) ||
                1 === b
                ? 1
                : Math.pow(b, c);
            case "sqrt":
              return Math.sqrt(k());
            case "sin":
              return Math.sin(k());
            case "cos":
              return Math.cos(k());
            case "tan":
              return Math.tan(k());
            case "asin":
              return Math.asin(k());
            case "acos":
              return Math.acos(k());
            case "atan":
              return Math.atan(k());
            case "atan2":
              return Math.atan2(k(), g());
            default:
              throw new q("Unknown math function " + d.name, "XPST0017", d);
          }
        })();
      return l ? D.R : D.gp(m);
    }
    var f = C.O;
    P.rp(a);
    return a;
  })();
  var nf = (function () {
    function a(a, b) {
      return a.Ic === b.Ic
        ? a.Qe === b.Qe
          ? a.Cg === b.Cg
            ? b.nm - a.nm
            : a.Cg - b.Cg
          : a.Qe - b.Qe
        : a.Ic - b.Ic;
    }
    function b(a, b) {
      return a.Ic === b.Ic ? (a.Qe === b.Qe ? 0 : a.Qe - b.Qe) : a.Ic - b.Ic;
    }
    function d(b, c) {
      var d = this;
      this.Sh = b;
      this.hm = b.onNo;
      this.fm = c.Gc(b, "t");
      c.Gc(b, "F") && (this.Jj = !0);
      this.Rk = (b.C || [])
        .map(function (a) {
          return {
            Bg: a,
            Ic: parseInt(a.prec, 10),
            Qe: parseFloat(a.prio),
            Cg: parseInt(a.seq, 10),
            Wo: parseInt(a.minImp, 10),
            nm: parseInt(a.rank, 10),
            pattern: xb.Df(c.qa(a, "match")),
            matches: I.Xc(a.matches || "1"),
            action: c.qa(a, "action"),
          };
        })
        .sort(a)
        .reverse();
      this.yd = {};
      this.Rk.forEach(function (a) {
        var b = a.matches.ea();
        var c = [];
        /^N[EAP]/.test(b.p)
          ? ((c = b.p),
            b.n &&
              !/}\*$/.test(b.n) &&
              (c += " " + b.n.replace(/^(\*:|Q\{.*\})/, "")),
            (c = [c]))
          : (c = ["."]);
        c.forEach(function (b) {
          var c = d.yd[b];
          c || (d.yd[b] = c = []);
          c.push(a);
        });
      });
    }
    var m = C.O,
      c = G.Ab,
      l = {
        TC: function (a, b, d, f) {
          if (G.da(a))
            switch (a.nodeType) {
              case 9:
              case 11:
              case 1:
                d = d.ja(!1);
                d.focus = D.Da(c.pb(a));
                b.Uc(d, f);
                break;
              case 3:
              case 4:
                f.append(a);
                break;
              case 2:
                f.text(a.value);
            }
          else if (m.wj.matches(a)) f.text(a.toString());
          else if (P.isArray(a)) {
            var k = [];
            a.value.forEach(function (a) {
              k = k.concat(a);
            });
            a = d.ja(!1);
            a.focus = D.Da(D.K(k));
            b.Uc(a, f);
          }
        },
        SC: function (a, b, d, f) {
          return Bb.xm(
            a,
            d,
            "c",
            function () {
              var k = d.ja(!1);
              k.focus = D.Da(c.ob(a));
              b.Uc(k, f);
              k.focus = D.Da(c.pb(a));
              b.Uc(k, f);
            },
            f
          );
        },
        DC: function (a, b, c, d) {
          G.da(a) && (d.pc = G.baseURI(a));
          d.append(a);
        },
        DS: function (a, b, d, f) {
          if (G.da(a))
            switch (a.nodeType) {
              case 9:
              case 11:
                d = d.ja(!1);
                var k = [];
                k[0] = D.Da(c.ob(a));
                k[1] = D.Da(c.pb(a));
                d.focus = D.Rc(k);
                b.Uc(d, f);
            }
        },
        SS: function (a, b, d, f) {
          if (G.da(a))
            switch (a.nodeType) {
              case 9:
              case 11:
              case 1:
                (d = d.ja(!1)),
                  (d.focus = D.Da(c.ob(a))),
                  b.Uc(d, f),
                  (d.focus = D.Da(c.pb(a))),
                  b.Uc(d, f);
            }
          else if (P.isArray(a)) {
            var k = [];
            a.value.forEach(function (a) {
              k = k.concat(a);
            });
            a = d.ja(!1);
            a.focus = D.Da(D.K(k));
            b.Uc(a, f);
          }
        },
        bubble: function (a, b, d, f) {
          G.da(a)
            ? 1 === a.nodeType &&
              ((d = d.ja(!1)), (d.focus = D.Da(c.parent(a))), b.Uc(d, f))
            : f.append(a);
        },
      };
    l.TO = l.TC;
    var f = {
      1: "NE",
      2: "NA",
      3: "NT",
      7: "NP",
      8: "NC",
      9: "ND",
      11: "ND",
      13: "NN",
    };
    d.prototype = {
      Sh: null,
      Rk: null,
      hm: "TC",
      fm: !1,
      Jj: !1,
      Uc: function (a, b) {
        var c = this;
        a.focus.sa(function (d) {
          return c.sj(d, a, b);
        });
      },
      sn: function (a, b) {
        var c = a.Xb;
        if (!c) throw new q("No current template rule", "XTDE0560");
        return this.sj(a.lb(), a, b, function (a) {
          return a.Ic >= c.Wo && a.Ic < c.Ic;
        });
      },
      $o: function (b, c) {
        var d = b.Xb;
        if (!d) throw new q("No current template rule", "XTDE0560");
        return this.sj(b.lb(), b, c, function (b) {
          return 0 > a(b, d);
        });
      },
      Yn: function (c, d, l) {
        var k = null,
          m = null,
          r = this.Jj,
          g = [];
        if (G.da(c)) {
          var v = f[c.nodeType],
            A = G.ma(c);
          if ((A = A ? A.local : null))
            (A = v + " " + A), this.yd[A] && g.push(this.yd[A]);
          this.yd[v] && g.push(this.yd[v]);
          this.yd.N && g.push(this.yd.N);
        }
        this.yd["."] && g.push(this.yd["."]);
        (function (f) {
          f.forEach(function (e) {
            e.forEach(function (e) {
              if (!l || l(e))
                if (!k || 0 < a(e, k) || (r && 0 <= b(e, k))) {
                  var f = !1;
                  try {
                    f = xb.matches(e.pattern, c, d);
                  } catch (y) {}
                  f && ((m = k), (k = e));
                }
            });
          });
        })(g);
        if (this.Jj && k && m && 0 === b(k, m) && k.Cg !== m.Cg)
          throw (
            ((g = "Multiple templates matched item (" + B.oa(c) + "): "),
            (g += k.Bg.module + "#" + k.Bg.line),
            (g += " and " + m.Bg.module + "#" + m.Bg.line),
            new q(g, "XTDE0540"))
          );
        return k;
      },
      Vl: function () {
        var a = this.Sh.name;
        return a && a.startsWith("Q{" + F.sg + "}");
      },
      sj: function (a, b, c, d) {
        var f = b.fixed.ya;
        d = this.Yn(a, b, d);
        if (null !== d)
          f.Aj(d.Bg, b),
            (b.Xb = d),
            (b.$b = b.La),
            d.action || B.ra("Template rule without action child"),
            Bb.push(d.action, b, c);
        else if (
          ((f = this.Vl() ? "bubble" : this.hm.split("+")[0]), (f = l[f]))
        )
          f(a, this, b, c);
        else
          throw new q("No matching template rule for " + B.oa(a), "XTDE0555");
      },
    };
    return d;
  })();
  function ab(a, b, d) {
    d = void 0 === d ? null : d;
    this.prefix = null === a ? "" : a;
    this.uri = null === b ? "" : b;
    d && (this.parentNode = d);
  }
  ab.prototype = { prefix: null, uri: null, parentNode: null, nodeType: 13 };
  function $a(a, b, d) {
    this.je = a;
    this.value = b;
    this.parent = d;
    this.name = this.je.toString();
    this.namespaceURI = this.je.uri;
    this.localName = this.je.local;
    this.prefix = this.je.prefix;
  }
  $a.prototype = { je: null, value: null, parent: null, nodeType: 2 };
  var of = { forceBaseURI: ge.forceBaseURI };
  SaxonJS = (function () {
    function a(a) {
      u = a;
      u.init();
      Da.Fp(a);
    }
    function b(a) {
      function b(a) {
        switch (a.nodeType) {
          case 9:
            a.documentElement && b(a.documentElement);
            break;
          case 11:
          case 1:
            var d = G.ma(a),
              e = G.mo(a, "xml:space");
            d =
              11 !== a.nodeType &&
              c(d.uri, d.local) &&
              !(e && "preserve" === e);
            e = a.childNodes;
            for (var f = 0; f < e.length; ) {
              var g = e[f];
              if (4 === g.nodeType) {
                var h = G.be(a).createTextNode(g.nodeValue);
                a.replaceChild(h, g);
                g = h;
              }
              3 === g.nodeType
                ? d && "" === Na.trim(g.nodeValue)
                  ? a.removeChild(g)
                  : f++
                : (b(g), f++);
            }
        }
      }
      if (a)
        if ("strip.all" === a.N)
          var c = function () {
            return !0;
          };
        else if ("strip.none" === a.N)
          c = function () {
            return !1;
          };
        else {
          var d = {},
            e = {},
            f = {},
            g = {},
            h = {},
            k = function (a, b, c) {
              a[b]
                ? parseInt(c.Ic, 10) > parseInt(a[b].Ic, 10) && (a[b] = c)
                : (a[b] = c);
            };
          (a.C || []).forEach(function (a) {
            var b = I.Xc(a.test);
            b instanceof I.xd
              ? ((a.PREC = parseInt(a.prec, 10)),
                (a.PRIO = 2),
                k(d, b.name.ha(), a))
              : b instanceof I.kj
              ? ((a.PREC = parseInt(a.prec, 10)), (a.PRIO = 1), k(e, b.uri, a))
              : b instanceof I.ij
              ? ((a.PREC = parseInt(a.prec, 10)),
                (a.PRIO = 1),
                k(f, b.localName, a))
              : b instanceof I.nc
              ? ((a.PREC = parseInt(a.prec, 10)), (a.PRIO = 0), k(g, "*", a))
              : B.ra("Unrecognised strip-space " + a.test);
          });
          var l = function (a, b) {
            var c = [],
              h = d["Q{" + a + "}" + b];
            h && c.push(h);
            (h = e[a]) && c.push(h);
            (h = f[b]) && c.push(h);
            g["*"] && c.push(g["*"]);
            c.sort(function (a, b) {
              var c = a.PREC,
                d = b.PREC;
              return c === d ? b.PRIO - a.PRIO : d - c;
            });
            return 0 < c.length ? "s" === c[0].N : !1;
          };
          c = function (a, b) {
            var c = "Q{" + a + "}" + b,
              d = h[c];
            if (d) return "s" === d;
            d = l(a, b);
            h[c] = d ? "s" : "p";
            return d;
          };
        }
      else
        c = function () {
          return !1;
        };
      return function (a) {
        b(a);
        return a;
      };
    }
    function d(a, c, d) {
      function f(a) {
        a = new Cb.Wm(a);
        N.fixed.eo = a;
        return new Bb.yf(a);
      }
      function k() {}
      function l() {
        L && !d.nonInteractive && z(N);
      }
      var p = P.Ec(a, "strip")[0] || P.Ec(a, "strip.all")[0],
        r = null;
      if (p || L) (r = b(p)), c && r && (c = r(c));
      d.pr = null;
      var t = d.async,
        N = g(a, c, d);
      N.fixed.yr = N.fixed.Kg.Rb.version;
      K(N, function (a) {
        return "globalParam" === a.N && a.flags && -1 !== a.flags.indexOf("r");
      })
        .map(function (a) {
          return a.name;
        })
        .map(function (a) {
          if ("undefined" === typeof N.fixed.options.Em.get(C.O.X.rb(a)))
            throw new q(
              "No value has been provided for required stylesheet parameter '" +
                a +
                "'",
              "XTDE0050"
            );
        });
      N.fixed.Ch = r;
      c && (G.fe(c), (N.fixed.tc[c._saxonBaseUri] = c));
      var v = d.destination || "application";
      d.ki ||
        (d.ki = L
          ? function () {
              return {
                destination: "html-page",
                save: function (a, b) {
                  d.Ag[a.toString()] = b;
                },
              };
            }
          : t
          ? function () {
              return {
                destination: "file",
                save: function (a, b, c) {
                  a = u.writeFileAsync(a, b, c);
                  N.fixed.Lg.push(a);
                },
              };
            }
          : function () {
              return {
                destination: "file",
                save: function (a, b, c) {
                  u.writeFileSync(a, b, c);
                },
              };
            });
      var w = d.vp || "default",
        S,
        A = {};
      p = N.fixed.Kg;
      var ma = p.dk["#unnamed"];
      if (ma) {
        ma = ma.C;
        for (var T, O, ka = 0; ka < ma.length; ka++) {
          var Y = ma[ka].name;
          "parameter-document" === Y
            ? (T = ma[ka].value)
            : "Q{http://saxon.sf.net/}parameter-document-base-uri" === Y
            ? (O = ma[ka].value)
            : (A[Y] =
                "use-character-maps" === Y
                  ? Eb.Yi(Y, ma[ka].value, p)
                  : Eb.Zi(Y, ma[ka].value));
        }
        T &&
          O &&
          ((T = Da.$c(T, O)), (T = Ab.ve(T, N)), Eb.Ki(T.documentElement, A));
      }
      if (d.sb)
        for (T = sa(Object.entries(d.sb)), O = T.next(); !O.done; O = T.next())
          (ma = sa(O.value)),
            (O = ma.next().value),
            (ma = ma.next().value),
            (ka = void 0),
            (ka =
              "use-character-maps" === O
                ? Array.isArray(ma)
                  ? Eb.fp(ma, p)
                  : Eb.Ro(ma)
                : ma),
            (A[O] = Eb.Ji(O, ka, A[O]));
      if (["appendToBody", "prependToBody", "replaceBody"].includes(v))
        if (L) {
          N.wa = window.document;
          var Fa = Cb.ae(N);
          k = function () {
            Fa.Bp();
            var a = f(Fa);
            a.tb();
            return a;
          };
          l = function () {
            Fa.hb();
            Fa.close();
            var a = fa.pb(Fa.result()[0]);
            if (a) {
              var b = window.document.body;
              if ("appendToBody" === v)
                a.sa(function (a) {
                  b.appendChild(a);
                });
              else if ("prependToBody" === v) {
                var c = b.firstChild;
                a.sa(function (a) {
                  b.insertBefore(a, c);
                });
              } else if ("replaceBody" === v) {
                for (; 0 < b.childNodes.length; )
                  b.removeChild(b.childNodes[0]);
                a.sa(function (a) {
                  b.appendChild(a);
                });
              }
            } else throw new q("No result from transformation", "SXJS0006");
            z(N);
          };
        } else
          throw new q(
            "Destination=" + v + " is allowed only when running in the browser",
            "SXJS0006"
          );
      else if (["serialized", "file", "stdout"].includes(v)) {
        if ("stdout" === v) var ia = u.getStdOut();
        else {
          var Ia = "",
            la = !1;
          ia = {
            write: function (a) {
              la = !0;
              Ia += a;
            },
            end:
              "serialized" === v
                ? function () {
                    d.principalResult = la ? y(D.ua(Ia), w) : null;
                  }
                : function () {
                    var a = A.encoding || "utf-8";
                    la &&
                      (t
                        ? ((a = u.writeFileAsync(new URL(d.Ad), Ia, a)),
                          N.fixed.Lg.push(a))
                        : u.writeFileSync(new URL(d.Ad), Ia, a));
                  },
          };
        }
        k = function () {
          S = Eb.Pl(A, ia, N);
          return f(S);
        };
      } else if (["raw", "document", "application"].includes(v)) {
        var La = "document" === v;
        "application" === v &&
          "undefined" !== typeof A["build-tree"] &&
          (La = A["build-tree"]);
        var M = Cb.ae(N);
        k = function () {
          S = M;
          La && (S = new Cb.Rg(M));
          return f(S);
        };
        l = function () {
          d.principalResult = 0 === M.result().length ? null : y(M.rg(), w);
          L && !d.nonInteractive && z(N);
        };
      } else
        throw new q(
          "Invalid SaxonJS.transform() destination: " + v + " : " + typeof v,
          "SXJS0006"
        );
      if ((T = d.yo)) (T = T.toString()), /^Q{/.test(T) || (T = "Q{}" + T);
      p = (p = d.wo) ? p.toString() : a.defaultMode ? a.defaultMode : "";
      "#unnamed" === p && (p = "");
      "" !== p && 0 > p.indexOf("Q{") && (p = "Q{}" + p);
      O = "Q{" + F.Ve + "}initial-template";
      c || T || (e(N, O) && (T = O));
      var Qa = d.vo;
      if (Qa) {
        c = d.Cl ? d.Cl : [];
        a = c.length;
        p = h(N, Qa.toString(), a);
        if (!p)
          throw new q("Unknown initial function " + Qa + "#" + a, "XTDE0041");
        if ("PUBLIC" !== p.Rb.vis && "FINAL" !== p.Rb.vis)
          throw new q(
            "Uninvocable initial function " +
              Qa +
              "#" +
              a +
              " with visibility " +
              p.Rb.vis,
            "XTDE0041"
          );
        var E = p.Rb.C[0];
        N.focus = {};
        N.La = p;
        N.Zf();
        N.Ja = "function";
        N.$b = {};
        N.Xb = null;
        var bb = 0;
        N.Ha = c.map(function (a) {
          var b = E.C[bb++].as;
          b = J.Kd(b || "*");
          return P.gl(P.Ob(a), b, function () {
            return "function parameter for " + Qa;
          });
        });
        c = k();
        Bb.push(P.qa(E, "body"), N, c);
        c.close();
      } else if (T) {
        a = e(N, T);
        if (!a) throw new q("Unknown initial template " + T, "XTDE0040");
        p = a.Rb.C[0];
        N.fixed.Ae
          ? (N.focus = D.jc(c))
          : ((N.focus = D.Da(D.R)), N.focus.next());
        P.Aj(p, N);
        N.La = a;
        N.$b = {};
        m(d, N);
        c = k();
        Bb.push(p.C[0], N, c);
        c.close();
      } else {
        T = d.xo;
        Array.isArray(T) &&
          r &&
          T.filter(G.da)
            .map(function (a) {
              return G.mg(a) ? a : a.ownerDocument;
            })
            .map(function (a) {
              return r(a);
            });
        O = x(N, p);
        if (!O) throw new q("Unknown initial mode " + p, "XTDE0045");
        if ("PRIVATE" === O.visibility && p !== a.defaultMode && "" !== p)
          throw new q(
            "Uninvokable initial mode " + p + " with visibility " + O.Rb.vis,
            "XTDE0045"
          );
        if (!c && !T)
          throw new q(
            "No source input supplied for apply-templates invocation",
            "XTDE0044"
          );
        a = O.mode;
        N.La = O;
        N.focus = D.Da(T ? D.K(Array.isArray(T) ? T : [T]) : D.l(c));
        c = a.Sh.useAcc;
        null != c && "#all" !== c && (N.Eh = c.split(/\s+/));
        m(d, N);
        c = k();
        a.Uc(N, c);
        c.close();
      }
      l();
      if (t) {
        var V = function () {
          var a = N.fixed.Lg;
          N.fixed.Lg = [];
          return Promise.all(a)
            .then(function () {
              if (0 < N.fixed.Lg.length) return V();
            })
            ["catch"](function (a) {
              throw a;
            })
            .then(function () {
              return Promise.resolve(d);
            });
        };
        d.wp = V();
      }
    }
    function m(a, b) {
      a.Dh &&
        (B.assert(
          a.Dh instanceof cb,
          "options?templateParams must be an instance of HashTrie. Supplied:" +
            a.Dh
        ),
        (b.He = a.Dh));
      a.cd &&
        (B.assert(
          a.Dh instanceof cb,
          "options?tunnelParams must be an instance of HashTrie. Supplied:" +
            a.cd
        ),
        (b.cd = a.cd));
    }
    function c(a) {
      var b = L ? window.document.baseURI : u.fileURL(u.cwd()),
        c = a.Dm || null;
      if (!c) {
        if (a.Lc) {
          var e = u.resolveUri(a.Lc.toString(), b);
          a.Lc = e;
          e = u.readFile(e);
        } else if (a.rk) e = a.rk;
        else if (a.Of) {
          if (L)
            throw new q(
              "Cannot supply stylesheetFileName in browser",
              "SXJS0006"
            );
          e = u.readFile(a.Of);
        } else throw new q("No stylesheet supplied");
        try {
          c = JSON.parse(e);
        } catch (Ka) {
          throw new q("Supplied SEF is not in JSON format", "SXJS0006");
        }
      }
      v(c);
      c.PRIMED || (w(c), l(c), (c.PRIMED = !0));
      e = a.Nf || null;
      a.Nf && a.Nf.baseURI && (e._saxonBaseUri = a.Nf.baseURI);
      if (!e) {
        if (a.Md) {
          var f = u.resolveUri(a.Md.toString(), b);
          a.Md = f;
          var g = u.readFile(f);
        } else if (a.pk) g = a.pk;
        else if (a.Mf) {
          if (L)
            throw new q("Cannot supply sourceFileName in browser", "SXJS0006");
          g = u.readFile(a.Mf);
          f = u.resolveUri(a.Mf, b);
        }
        g && ((e = u.parseXmlFromString(g)), f && (e._saxonBaseUri = f));
      }
      d(c, e, a);
      return {
        principalResult: a.principalResult,
        masterDocument: a.Db,
        resultDocuments: a.Ag,
        stylesheetInternal: c,
      };
    }
    function l(a) {
      a.C &&
        a.C.forEach(function (b) {
          b.parentNode = a;
          l(b);
        });
    }
    function f(a) {
      if (a instanceof cb) return a;
      var b = new cb();
      a &&
        Object.keys(a).forEach(function (c) {
          return b.Ta(C.O.X.rb(c), P.Ob(a[c]));
        });
      return b;
    }
    function k(a) {
      var b = {};
      a = sa(Object.entries(a));
      for (var c = a.next(); !c.done; c = a.next()) {
        var d = sa(c.value);
        c = d.next().value;
        d = d.next().value;
        b[c] = "use-character-maps" === c ? d : Eb.Ji(c, d, null);
      }
      return b;
    }
    function r(a) {
      return {
        rk: a.stylesheetText,
        Dm: a.stylesheetInternal,
        Lc: a.stylesheetLocation,
        Of: a.stylesheetFileName,
        Em: f(a.stylesheetParams),
        Nf: a.sourceNode,
        pk: a.sourceText,
        Md: a.sourceLocation,
        Mf: a.sourceFileName,
        Db: a.masterDocument,
        yo: a.initialTemplate,
        vo: a.initialFunction,
        Cl: a.functionParams,
        Dh: f(a.templateParams),
        cd: f(a.tunnelParams),
        wo: a.initialMode,
        tc: a.documentPool,
        Od: a.textResourcePool,
        destination: a.destination,
        Ad:
          a.baseOutputURI ||
          (a.masterDocument ? a.masterDocument._saxonBaseUri : void 0),
        Ii: a.output,
        sb: a.outputProperties,
        principalResult: void 0,
        Dj: a.deliverMessage,
        ki: a.deliverResultDocument,
        mf: a.collations,
        hl: a.collectionFinder,
        Bi: a.logLevel,
        Ae: a.globalContextItem,
        xo: a.initialSelection,
        xi: a.isDynamicStylesheet,
        language: a.language,
        dm: a.messages,
        Ag: a.resultDocuments,
        vp: a.resultForm,
        Cm: a.stylesheetBaseURI,
        Gq: a.extraOptions,
      };
    }
    function v(a) {
      if ("package" === a.N) {
        var b = a.target || "not specified",
          c = a.targetVersion || "",
          d = a.saxonProduct,
          e = a.saxonVersion || "9.8.0.5";
        d && !/Saxon/.test(e) && (e = d + " " + e);
        B.Gb(
          "SEF generated by " +
            e +
            " at " +
            (a.buildDateTime || "2000-01-01") +
            " with -target:" +
            b +
            " -relocate:" +
            (a.relocatable || "false"),
          2
        );
        if ("JS" !== b || "2" !== c)
          throw new q(
            "Supplied SEF is not customized for use with Saxon-JS. The option -target:JS should be set when generating the export. target is: " +
              b,
            "SXJS0006"
          );
        if ("9" === e.charAt(0))
          throw new q(
            "For use with Saxon-JS 2.x, SEF must be generated by Saxon-EE 10.0 or later. Supplied SEF is generated by Saxon-EE version " +
              e,
            "SXJS0006"
          );
        if (a.expiry && 0 > O.nd.g(a.expiry).ab(O.nd.Sb(new Date(), 0)))
          throw new q(
            "Development license for supplied stylesheet has expired",
            "SXJS0006"
          );
      }
    }
    function w(a) {
      function b(a, b) {
        for (var c = b << 8, d = 0; d < a.length; d++)
          c = (c << 1) + a.charCodeAt(d);
        return c;
      }
      function c(a, c, d) {
        return b(a, d) ^ b(c, d);
      }
      function d(a) {
        e ^= c(a.N, "http://ns.saxonica.com/xslt/export", f++);
        for (var g in a)
          a.hasOwnProperty(g) &&
            "N" !== g &&
            "C" !== g &&
            g !== String.fromCharCode(931) &&
            ((e ^= c(g, "", f)), (e ^= b(a[g], f)));
        a.C &&
          a.C.forEach(function (a) {
            d(a);
          });
        e ^= 1;
      }
      var e = 0,
        f = 0;
      d(a);
      a = a[String.fromCharCode(931)] || "unspecified";
      var g = (0 > e ? 4294967295 + e + 1 : e).toString(16);
      if (g !== a) {
        if ("unspecified" === a)
          throw new q("No checksum found in SEF", "SXJS0006");
        throw new q("Invalid checksum in SEF " + a + " != " + g, "SXJS0006");
      }
    }
    function z(a) {
      function b(b, c) {
        function d(c) {
          var d = c.target,
            f = a.ja(!0);
          f.Ja = !1;
          f.Zg = c;
          f.focus = D.Da(D.l(P.Ob(d)[0]));
          f.La = b;
          c = Cb.ae(a);
          c = new Bb.yf(c);
          return (f = e.Uc(f, c)) ? f.expand() : [];
        }
        var e = b.mode;
        -1 ===
        "httpabort afterprint beforeprint beforeunload hashchange languagechange message offline online pagehide pageshow popstate storage unhandledrejection unload"
          .split(" ")
          .indexOf(c)
          ? window.document.addEventListener(c, d, !1)
          : window.addEventListener(c, d, !1);
      }
      var c = a.fixed.qb;
      Object.keys(c).forEach(function (a) {
        a = c[a];
        a.mode && a.mode.Vl() && b(a, a.name.split("}on")[1]);
      });
    }
    function t(a, b) {
      return a.C
        ? a.C.filter(function (a) {
            return a.N === b;
          })
        : [];
    }
    function g(a, b, c) {
      function d(b, c) {
        e(a, b, c);
      }
      function e(a, b, c) {
        a.N === b && c(a);
        a.C &&
          a.C.forEach(function (a) {
            e(a, b, c);
          });
      }
      function f(a) {
        return (a = a.name) ? (/^Q\{/.test(a) ? a : "Q{}" + a) : null;
      }
      function g(a, b) {
        function c(a) {
          a = t(a, "co");
          for (var c = 0; c < a.length; c++) b(a[c]);
        }
        c(a);
        if (a.C) {
          var d = a.C.filter(function (a) {
            return "overridden" === a.N;
          });
          d[0] && c(d[0]);
        }
      }
      function h(a, b) {
        var c = a.C ? a.C[0] : null;
        return null === c
          ? a.base
            ? h(b.fixed.qb[parseInt(a.base, 10)].Rb, b)
            : null
          : c;
      }
      var k = new p();
      k.fixed = {
        Ad: c.Ad || "",
        qb: {},
        md: new Date(),
        tc: {},
        ya: P,
        Ae: c.Ae || b,
        ro: "",
        xi: c.xi,
        Pk: 0,
        options: c,
        xg: {},
        Ah: {},
        qm: {},
        Ac: "",
        sr: a,
        Od: {},
        Kg: null,
        Lg: [],
        sp: [],
      };
      if (c.tc) {
        var l = c.tc;
        Object.keys(l).forEach(function (a) {
          var b = l[a];
          if (G.mg(b)) k.fixed.tc[a] = b;
          else
            throw new q("Supplied value for " + a + " is not a document node");
        });
      }
      if (c.Od) {
        var m = c.Od;
        Object.keys(m).forEach(function (a) {
          k.fixed.Od[a] = m[a].toString();
        });
      }
      c.mf || (c.mf = {});
      c.mf[Q.ag] = Q.An();
      c.mf[Q.co] = Q.al();
      c.mf[Q.Rl] = Q.tn();
      c.mf[Q.Wp] = Q.al();
      d("package", function (a) {
        var b = {
          name: a.name,
          Rb: a,
          Tc: {},
          bl: {},
          Vc: {},
          dk: {},
          keys: {},
          Hm: null,
        };
        k.fixed.xg[b.name] = b;
        k.fixed.Kg || (k.fixed.Kg = b);
        g(a, function (a) {
          var c = parseInt(a.id, 10);
          k.fixed.qb[c] = {
            id: c,
            visibility: a.vis,
            Rb: a,
            im: b,
            actor: null,
            ci: a.binds.split(" ").map(function (a) {
              return parseInt(a, 10);
            }),
          };
        });
      });
      d("package", function (a) {
        var b = k.fixed.xg[a.name];
        g(a, function (a) {
          var c = k.fixed.qb[parseInt(a.id, 10)];
          a = c.actor = h(a, k);
          null !== a &&
            ((c.name = f(a)),
            "globalVariable" === a.N || "globalParam" === a.N
              ? (c.value = null)
              : "mode" === a.N &&
                ((c.mode = new nf(a, P)), null === f(a) && (b.Hm = c.mode)),
            "ABSTRACT" === a.parentNode.vis && (c.visibility = "ABSTRACT"));
        });
        for (var c = t(a, "decimalFormat"), d = 0; d < c.length; d++) {
          var e = c[d],
            l = f(e);
          b.Vc[null === l ? "Q{}" : l] = e;
        }
        c = t(a, "output");
        for (d = 0; d < c.length; d++)
          (e = c[d]), (b.dk[e.name ? f(e) : "#unnamed"] = e);
        c = t(a, "key");
        d = Math.floor(1e8 * Math.random());
        for (e = 0; e < c.length; e++) {
          l = c[e];
          var m = f(l);
          b.keys[m]
            ? b.keys[m].tg.push(l)
            : (b.keys[m] = { tk: d + "k" + e, tg: [l] });
        }
        c = t(a, "accumulator");
        d = Math.floor(1e8 * Math.random());
        for (e = 0; e < c.length; e++)
          (l = c[e]), (b.Tc[f(l)] = { tk: d + "a" + e, on: l });
        a = t(a, "charMap");
        c = {};
        for (d = 0; d < a.length; c = { Qc: c.Qc }, d++)
          (e = a[d]),
            (l = f(e)),
            (c.Qc = { min: 0, max: 0, Wa: {} }),
            e.C &&
              (e.C.forEach(
                (function (a) {
                  return function (b) {
                    var c = Number(b.c);
                    0 === a.Qc.min
                      ? (a.Qc.min = c)
                      : c < a.Qc.min && (a.Qc.min = c);
                    c > a.Qc.max && (a.Qc.max = c);
                    a.Qc.Wa[c] = b.s;
                  };
                })(c)
              ),
              55296 < c.Qc.min && (c.Qc.min = 55296)),
            (b.bl[l] = c.Qc);
      });
      d("glob", function (a) {
        var b = k.fixed.Ae;
        if ("req" === a.use && (null === b || void 0 === b))
          throw new q(
            "The stylesheet requires a global context item",
            "XTDE3086"
          );
        if ("pro" === a.use) k.fixed.Ae = null;
        else {
          var c,
            d = a.cxt;
          d && (c = I.Xc(d).ta());
          if (null !== b && c && !c(b))
            throw new q(
              "The global context item must be an instance of " + a.type,
              "XTTE0590"
            );
        }
      });
      k.he = c.Ii ? [c.Ii] : [];
      if (!c.xi) {
        if (c.Cm) var r = c.Cm;
        else
          c.Lc
            ? (r = c.Lc)
            : c.Of
            ? (r = u.fileURL(c.Of))
            : L && (r = window.document.baseURI);
        k.fixed.Ac = r;
      }
      if (L) {
        if (
          ((k.Db = window.document),
          (k.fixed.ro = window.document.baseURI),
          c.Lc && !G.Bf(c.Lc))
        )
          throw new q(
            "stylesheetLocation should be absolute by now",
            "SXJS0004"
          );
      } else if (c.Db) {
        if (!G.da(c.Db) || ![9, 11].includes(c.Db.nodeType))
          throw new q("masterDocument must be a document node", "SXJS0004");
        k.Db = c.Db;
      }
      k.La = null;
      k.wa = u.createDocument();
      k.mr = k.wa.createDocumentFragment();
      k.Ha = [];
      k.He = new cb();
      k.cd = new cb();
      k.de = {};
      return k;
    }
    function K(a, b) {
      for (var c = [], d = t(a.fixed.Kg.Rb, "co"), e = 0; e < d.length; e++) {
        var f = a.fixed.qb[parseInt(d[e].id, 10)],
          g = f.actor;
        g && b(g) && c.push(f);
      }
      return c;
    }
    function A(a, b) {
      for (var c = t(a.fixed.Kg.Rb, "co"), d = 0; d < c.length; d++) {
        var e = a.fixed.qb[parseInt(c[d].id, 10)],
          f = e.actor;
        if (f && b(f)) return e;
      }
    }
    function x(a, b) {
      return A(a, function (a) {
        return "mode" === a.N && (a.name ? a.name === b : "" === b);
      });
    }
    function e(a, b) {
      return A(a, function (a) {
        return "template" === a.N && a.name === b;
      });
    }
    function h(a, b, c) {
      return A(a, function (a) {
        return "function" === a.N && a.name === b && t(a, "arg").length === c;
      });
    }
    function p() {}
    function y(a, b) {
      function c(a) {
        return P.rc(a, !0);
      }
      if ("iterator" === b) return a.Ia(c);
      if ("xdm" === b) return a.expand();
      for (var d = [], e; null != (e = a.next()); ) d.push(c(e));
      switch (b) {
        case "iterator":
          return D.K(d);
        case "array":
          return d;
        default:
          return 0 === d.length ? null : 1 === d.length ? d[0] : d;
      }
    }
    var u = {},
      L = "undefined" !== typeof window,
      O = C.O,
      fa = G.Ab,
      Y =
        L && window.performance && window.performance.now
          ? window.performance.now
          : function () {
              return Date.now().valueOf();
            };
    p.prototype = {
      depth: 0,
      focus: null,
      La: null,
      wa: null,
      Db: null,
      Ja: !1,
      he: [],
      fixed: {},
      He: new cb(),
      cd: new cb(),
      Xb: null,
      $b: {},
      Yg: null,
      Zg: null,
      rf: null,
      sf: null,
      sc: null,
      Eh: null,
      Ha: [],
      de: {},
      ak: null,
      toString: function () {
        var a = "{";
        this.He.Cb(function (b) {
          return (a += b.k + ":(" + b.v + "),");
        });
        a += "}";
        return "context: " + this.lb() + " localParams: " + a;
      },
      ja: function (a) {
        var b = new p();
        b.depth = this.depth + 1;
        b.focus = this.focus;
        b.La = this.La;
        b.wa = this.wa;
        b.Db = this.Db;
        b.$b = this.$b;
        b.Xb = this.Xb;
        b.Yg = this.Yg;
        b.rf = this.rf;
        b.sf = this.sf;
        b.fixed = this.fixed;
        b.Ja = this.Ja;
        b.he = this.he;
        b.Zg = this.Zg;
        b.Eh = this.Eh;
        b.de = this.de;
        b.ak = this;
        a
          ? ((b.He = new cb()), (b.cd = new cb()), (b.Ha = []), (b.sc = null))
          : ((b.He = this.He),
            (b.cd = this.cd),
            (b.Ha = this.Ha),
            (b.sc = this.sc));
        return b;
      },
      Zf: function () {
        this.sc = this.sf = this.rf = null;
      },
      createElement: function (a, b) {
        var c = this.wa.documentElement;
        "" === a && c && Da.Fd(c)
          ? (c = this.wa.createElement(b))
          : "http://www.w3.org/1999/xhtml" === a && c && Da.Fd(c)
          ? ((c = b.indexOf(":")),
            (c = -1 === c ? b : b.substring(c + 1)),
            (c = this.wa.createElement(c)))
          : (c = this.wa.createElementNS(a, b));
        return c;
      },
      createAttribute: function (a, b) {
        return new $a(O.X.rb("Q{" + a + "}" + b), null, null);
      },
      ee: function () {
        return !this.focus || !this.focus.current;
      },
      Wc: function (a, b, c) {
        if (this.ee())
          throw new q(
            "Focus for " + b + " is absent",
            a,
            void 0 === c ? null : c
          );
      },
      lb: function () {
        return this.ee() ? null : this.focus.current;
      },
      ko: function () {
        return 0 === this.he.length ? null : this.he[this.he.length - 1];
      },
      Mi: function (a) {
        this.he.push(a);
      },
      jk: function () {
        return this.he.pop();
      },
      Gn: function (a) {
        this.de[a] || (this.de[a] = 0);
        this.de[a]++;
      },
      ui: function () {
        var a = "";
        this.ee() || (a = "    Processing " + B.oa(this.focus.current) + "\n");
        try {
          var b = this.La.actor;
          if ("mode" === b.N) {
            var c = "template rule";
            b = this.Xb.action;
          } else c = b.N + " " + b.name;
          a +=
            "    at " + c + " in " + P.Ml(b, "module") + "#" + P.Ml(b, "line");
        } catch (xa) {
          a = "";
        }
        this.ak && (a += "\n" + this.ak.ui());
        return a;
      },
    };
    Y = {
      atom: function (a, b) {
        if ("boolean" === typeof a) var c = C.O.Ea.Dd(a);
        else if ("number" === typeof a) c = C.O.za.fa(a);
        else if ("string" === typeof a) c = C.O.T.g(a);
        else
          throw new q("Value must be boolean, number, or string", "SXJS0006");
        if (b) {
          var d = C.type[b];
          if (d) return d.aa(c);
          throw new q("Unknown type " + b, "SXJS0006");
        }
        return c;
      },
      Atomic: C,
      transform: function (a, b) {
        function e(a) {
          throw a;
        }
        function f(a, b) {
          var c = new q(a, b);
          if (e) e(c);
          else throw c;
        }
        var g = !b || "sync" === b;
        try {
          var h = r(a);
          h.sb && (h.outputProperties = k(h.sb));
        } catch (aa) {
          if (g) throw aa;
          return Promise.reject(aa);
        }
        "function" === typeof u.deliverMessage && u.deliverMessage(a);
        "number" === typeof h.Bi && B.vm(h.Bi);
        if (g) return c(h);
        h.async = !0;
        var m;
        L &&
          ((g = window.document.baseURI),
          h.Lc && (h.Lc = u.resolveUri(h.Lc.toString(), g)),
          h.Md && (h.Md = u.resolveUri(h.Md.toString(), g)));
        g = [];
        a.trace && P.Gp(a.trace);
        var p = h.Dm || null;
        if (!p) {
          var t = h.rk;
          if (t)
            try {
              p = JSON.parse(t);
            } catch (aa) {
              throw new q("Error parsing supplied SEF", "SXJS0006");
            }
          else if (h.Of)
            (t = u
              .resourcePromise({ file: h.Of, encoding: "utf-8" })
              .then(function (a) {
                p = JSON.parse(a);
              })
              ["catch"](function (a) {
                return Promise.reject(
                  new q(
                    "Failed to read JSON input " + h.Of + ": " + a,
                    "SXJS0006"
                  )
                );
              })),
              g.push(t);
          else if (h.Lc)
            (t = u
              .resourcePromise({ location: h.Lc, encoding: "utf-8" })
              .then(function (a) {
                p = JSON.parse(a);
              })
              ["catch"](function (a) {
                return Promise.reject(
                  new q(
                    "Failed to read JSON input " + h.Lc + ": " + a,
                    "SXJS0006"
                  )
                );
              })),
              g.push(t);
          else {
            f("No stylesheet supplied", "SXJS0006");
            return;
          }
        }
        (m = h.Nf) && h.Nf.baseURI && (m._saxonBaseUri = h.Nf.baseURI);
        if (!m) {
          var x = function (a) {
            a = Ab.el(Ab.dl(a));
            a = u.parseXmlFromString(a);
            a._saxonBaseUri = h.Md ? h.Md : h.Mf;
            return a;
          };
          (t = h.pk)
            ? (m = x(t))
            : h.Mf
            ? h.Mf &&
              ((t = u
                .resourcePromise({ file: h.Mf })
                .then(function (a) {
                  return (m = x(a));
                })
                ["catch"](function (a) {
                  return Promise.reject(
                    new q(
                      "Failed to read XML source input (" + a.message + ")",
                      "SXJS0006"
                    )
                  );
                })),
              g.push(t))
            : h.Md &&
              ((t = u
                .resourcePromise({ location: h.Md })
                .then(function (a) {
                  m = x(a);
                })
                ["catch"](function (a) {
                  return Promise.reject(
                    new q(
                      "Failed to read XML source input (" + a.message + ")",
                      "SXJS0006"
                    )
                  );
                })),
              g.push(t));
        }
        return Promise.all(g).then(function () {
          var a = p,
            b = m,
            c = h;
          if (!a) throw new q("No stylesheet supplied", "SXJS0006");
          try {
            v(a);
            a.PRIMED || (w(a), l(a), (a.PRIMED = !0));
            d(a, b, c);
            var e = c.wp;
          } catch (X) {
            throw (
              (console.log("Transformation failure: " + (X.gg ? X.gg() : X)), X)
            );
          }
          return e;
        });
      },
      Serializer: Eb,
      serialize: function (a, b) {
        var c = { "iso-8859-1": "latin1", "iso-646": "ascii" },
          d = Eb.um(a, b);
        if (b && b.encoding) {
          var e = b.encoding;
          e = c[e] || e;
          return Da.makeBuffer(d, e);
        }
        return d;
      },
      StringWriter: Eb.pj,
      getProcessorInfo: function () {
        return {
          version: 3,
          vendor: "Saxonica",
          vendorURL: "http://www.saxonica.com/",
          productName: "Saxon-JS",
          productVersion: "2.0",
          isSchemaAware: !1,
          supportsSerialization: !0,
          supportsBackwardsCompatibility: !0,
          supportsNamespaceAxis: !0,
          supportsStreaming: !1,
          supportsDynamicEvaluation: !0,
          supportsHigherOrderFunctions: !0,
          xPathVersion: 3.1,
          xsdVersion: 1.1,
          releaseDate: "2020-06-12",
        };
      },
      getResource: function (a) {
        var b = a.type || "text";
        if (a.file) {
          var c = u.resourcePromise(a);
          var d = u.fileURL(a.file);
        } else if (a.location)
          if (
            ((c = a.location),
            c instanceof URL || (c = new URL(c)),
            (d = c.href),
            "file:" === c.protocol)
          )
            c = u.resourcePromise(a);
          else if (["http:", "https:"].includes(c.protocol))
            c = u.resourcePromise(a);
          else
            return Promise.reject(
              new q("Unsupported URL protocol " + c.protocol, "SXJS0006")
            );
        else if (a.text) c = Promise.resolve(a.text);
        else return Promise.reject(new q("No resource supplied", "SXJS0006"));
        "xml" === b
          ? (c = c.then(function (a) {
              try {
                var b = G.fe(u.parseXmlFromString(a));
                b._saxonBaseUri = d;
                b._saxonDocUri = d;
                return Promise.resolve(b);
              } catch (Ka) {
                return Promise.reject(
                  new q(
                    "Failed parsing XML in " + d + ": " + Ka.message,
                    Ka.code
                  )
                );
              }
            }))
          : "json" === b &&
            (c = c.then(function (a) {
              try {
                return Promise.resolve(zb.fk(a, new cb(), new p()));
              } catch (za) {
                return Promise.reject(
                  new q(
                    "Failed parsing JSON in " + d + ": " + za.message,
                    za.code
                  )
                );
              }
            }));
        return c;
      },
      setLogLevel: B.vm,
      getLogLevel: function () {
        return B.Bi;
      },
      setPlatform: a,
      getPlatform: function () {
        return u;
      },
      getNavigator: function () {
        return window.navigator.userAgent;
      },
      timeStamp: Y,
      internalTransform: d,
      checkOptions: r,
      makeAtomicValue: function (a, b) {
        return C.type[a].g(b);
      },
      getItemDetails: function (a) {
        if (C.Ga(a)) {
          var b = { variety: "atomic", type: a.type, value: a.toString() };
          "QName" === a.type &&
            ((b.prefix = a.prefix), (b.uri = a.uri), (b.local = a.local));
          return b;
        }
        return G.da(a)
          ? { variety: "node", type: a.nodeType() }
          : { variety: a instanceof mb ? "array" : "map" };
      },
      XdmArray: mb,
      XdmFunction: nb,
      XdmMap: cb,
      U: {
        Context: p,
        calculator: Pa,
        obtainDocumentNumber: G.fe,
        evaluate: P.evaluate,
        processExtensions: function () {},
        convertResult: y,
        stringToCodepoints: Ma.Bc,
      },
      XError: q,
      XPath: he,
      XS: O,
    };
    L
      ? ((window.SaxonJS = Y), a(HostPlatform))
      : "undefined" !== typeof HostPlatform
      ? ((HostPlatform.entryPoint = Y), a(HostPlatform), (module.exports = Y))
      : console.log("Platform binding delayed");
    Y.Developer = of;
    C.ff();
    Na.ff();
    J.ff();
    wb.register("SaxonJS", Y);
    return Y;
  })();
}.call(this));
