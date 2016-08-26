/**
 * Copyright 2015 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

var format = require('./format'),
    i18n   = require('./i18n');

/**
 * Provides a Text Summary for profiles.
 */
module.exports = function (lang) {
  var self = {},
    dictionary = i18n.getDictionary(lang),
    tphrase = i18n.translatorFactory.createTranslator(dictionary.phrases); // i18n for phrases

  // Download all static data.
  self.circumplexData = dictionary.traits;
  self.facetsData = dictionary.facets;
  self.valuesData = dictionary.values;
  self.needsData = dictionary.needs;

  function compareByRelevance(o1, o2) {
    var result = 0;

    if (Math.abs(0.5 - o1.percentage) > Math.abs(0.5 - o2.percentage)) {
      result = -1; // A trait with 1% is more interesting than one with 60%.
    }

    if (Math.abs(0.5 - o1.percentage) < Math.abs(0.5 - o2.percentage)) {
      result = 1;
    }

    return result;
  }

  function compareByValue(o1, o2) {
    var result = 0;

    if (Math.abs(o1.percentage) > Math.abs(o2.percentage)) {
      result = -1; // 100 % has precedence over 99%
    }

    if (Math.abs(o1.percentage) < Math.abs(o2.percentage)) {
      result = 1;
    }

    return result;
  }

  function getSentenceTemplateString(sentenceTemplate, subject) {
  	var SUBJECT_SENTENCE_TEMPLATE_MAP = {
  	  male: {
        'You are %s': 'He is %s',
        'You are %s and %s': 'He is %s and %s',
        'You are %s, %s and %s': 'He is %s, %s and %s',
        'And you are %s': 'And he is %s',
        'You are relatively unconcerned with both %s and %s': 'He is relatively unconcerned with both %s and %s',
        "You don't find %s to be particularly motivating for you": "He doesn't find %s to be particularly motivating for him",
        'You value %s a bit more': 'He values %s a bit more',
        'You consider %s to guide a large part of what you do': 'He considers %s to guide a large part of what he does',
        'Experiences that make you feel high %s are generally unappealing to you': 'Experiences that make him feel high %s are generally unappealing to him',
        'Experiences that give a sense of %s hold some appeal to you': 'Experiences that give a sense of %s hold some appeal to him',
        'You are motivated to seek out experiences that provide a strong feeling of %s': 'He is motivated to seek out experiences that provide a strong feeling of %s',
        'Your choices are driven by a desire for %s': 'His choices are driven by a desire for %s'
	  },
	  female: {
	    'You are %s': 'She is %s',
	    'You are %s and %s': 'She is %s and %s',
	    'You are %s, %s and %s': 'She is %s, %s and %s',
	    'And you are %s': 'And she is %s',
	    'You are relatively unconcerned with both %s and %s': 'She is relatively unconcerned with both %s and %s',
	    "You don't find %s to be particularly motivating for you": "She doesn't find %s to be particularly motivating for her",
	    'You value %s a bit more': 'She values %s a bit more',
	    'You consider %s to guide a large part of what you do': 'She considers %s to guide a large part of what she does',
	    'Experiences that make you feel high %s are generally unappealing to you': 'Experiences that make her feel high %s are generally unappealing to her',
	    'Experiences that give a sense of %s hold some appeal to you': 'Experiences that give a sense of %s hold some appeal to her',
	    'You are motivated to seek out experiences that provide a strong feeling of %s': 'She is motivated to seek out experiences that provide a strong feeling of %s',
	    'Your choices are driven by a desire for %s': 'Her choices are driven by a desire for %s'
	  },
	  default: {
		'You are %s': 'You are %s',
		'You are %s and %s': 'You are %s and %s',
		'You are %s, %s and %s': 'You are %s, %s and %s',
		'And you are %s': 'And you are %s',
		'You are relatively unconcerned with both %s and %s': 'You are relatively unconcerned with both %s and %s',
		"You don't find %s to be particularly motivating for you": "You don't find %s to be particularly motivating for you",
		'You value %s a bit more': 'You value %s a bit more',
		'You consider %s to guide a large part of what you do': 'You consider %s to guide a large part of what you do',
		'Experiences that make you feel high %s are generally unappealing to you': 'Experiences that make you feel high %s are generally unappealing to you',
		'Experiences that give a sense of %s hold some appeal to you': 'Experiences that give a sense of %s hold some appeal to you',
		'You are motivated to seek out experiences that provide a strong feeling of %s': 'You are motivated to seek out experiences that provide a strong feeling of %s',
		'Your choices are driven by a desire for %s': 'Your choices are driven by a desire for %s'
	  },
	  they: {
	    'You are %s': 'They are %s',
	    'You are %s and %s': 'They are %s and %s',
	    'You are %s, %s and %s': 'They are %s, %s and %s',
	    'And you are %s': 'And they are %s',
	    'You are relatively unconcerned with both %s and %s': 'They are relatively unconcerned with both %s and %s',
	    "You don't find %s to be particularly motivating for you": "They don't find %s to be particularly motivating for them",
	    'You value %s a bit more': 'They value %s a bit more',
	    'You consider %s to guide a large part of what you do': 'They consider %s to guide a large part of what they do',
	    'Experiences that make you feel high %s are generally unappealing to you': 'Experiences that make them feel high %s are generally unappealing to them',
	    'Experiences that give a sense of %s hold some appeal to you': 'Experiences that give a sense of %s hold some appeal to them',
	    'You are motivated to seek out experiences that provide a strong feeling of %s': 'They are motivated to seek out experiences that provide a strong feeling of %s',
	    'Your choices are driven by a desire for %s': 'Their choices are driven by a desire for %s'
	  }
    }, sentenceTemplateMap;

    sentenceTemplateMap = (subject && SUBJECT_SENTENCE_TEMPLATE_MAP[subject]) || SUBJECT_SENTENCE_TEMPLATE_MAP['default'];
    return sentenceTemplateMap[sentenceTemplate] || sentenceTemplate;
  }

  function getCircumplexAdjective(p1, p2, order) {
    // Sort the personality traits in the order the JSON file stored it.
    var ordered = [p1, p2].sort(function (o1, o2) {
      var
        i1 = 'EANOC'.indexOf(o1.id.charAt(0)),
        i2 = 'EANOC'.indexOf(o2.id.charAt(0));

      return i1 < i2 ? -1 : 1;
    }),
      // Assemble the identifier as the JSON file stored it.
      identifier = ordered[0].id.
      concat(ordered[0].percentage > 0.5 ? '_plus_' : '_minus_').
      concat(ordered[1].id).
      concat(ordered[1].percentage > 0.5 ? '_plus' : '_minus'),

      traitMult = self.circumplexData[identifier][0],
      sentence = "%s";

    if (traitMult.perceived_negatively) {
      switch (order) {
      case 0:
        sentence = tphrase('a bit %s');
        break;
      case 1:
        sentence = tphrase('somewhat %s');
        break;
      case 2:
        sentence = tphrase('can be perceived as %s');
        break;
      }
    }

    return format(sentence, traitMult.word);
  }

  function getFacetInfo(f) {
    var
      data = self.facetsData[f.id.replace('_', '-').replace(' ', '-')],
      t, d;

    if (f.percentage > 0.5) {
      t = data.HighTerm.toLowerCase();
      d = data.HighDescription.toLowerCase();
    } else {
      t = data.LowTerm.toLowerCase();
      d = data.LowDescription.toLowerCase();
    }

    return {
      name: f.id,
      term: t,
      description: d
    };
  }

  function intervalFor(p) {
    // The MIN handles the special case for 100%.
    return Math.min(Math.floor(p * 4), 3);
  }

  function getInfoForValue(v) {
    var
      data = self.valuesData[v.id.replace(/[_ ]/g, '-')][0],
      d = v.percentage > 0.5 ? data.HighDescription : data.LowDescription;

    return {
      name: v.id,
      term: data.Term.toLowerCase(),
      description: d
    };
  }

  function getWordsForNeed(n) {
    // Assemble the identifier as the JSON file stored it.
    var traitMult = self.needsData[n.id];
    return traitMult;
  }

  function assembleTraits(personalityTree, subject) {
    var
      sentences = [],
      big5elements = [],
      relevantBig5,
      adj, adj1, adj2, adj3;

    // Sort the Big 5 based on how extreme the number is.
    personalityTree.children[0].children.forEach(function (p) {
      big5elements.push({
        id: p.id,
        percentage: p.percentage
      });
    });
    big5elements.sort(compareByRelevance);

    // Remove everything between 32% and 68%, as it's inside the common people.
    relevantBig5 = big5elements.filter(function (item) {
      return Math.abs(0.5 - item.percentage) > 0.18;
    });
    if (relevantBig5.length < 2) {
      // Even if no Big 5 attribute is interesting, you get 1 adjective.
      relevantBig5 = [big5elements[0], big5elements[1]];
    }

    switch (relevantBig5.length) {
    case 2:
      // Report 1 adjective.
      adj = getCircumplexAdjective(relevantBig5[0], relevantBig5[1], 0);
      sentences.push(format(tphrase(getSentenceTemplateString('You are %s', subject)), adj) + '.');
      break;
    case 3:
      // Report 2 adjectives.
      adj1 = getCircumplexAdjective(relevantBig5[0], relevantBig5[1], 0);
      adj2 = getCircumplexAdjective(relevantBig5[1], relevantBig5[2], 1);
      sentences.push(format(tphrase(getSentenceTemplateString('You are %s and %s', subject)),  adj1, adj2) + '.');
      break;
    case 4:
    case 5:
      // Report 3 adjectives.
      adj1 = getCircumplexAdjective(relevantBig5[0], relevantBig5[1], 0);
      adj2 = getCircumplexAdjective(relevantBig5[1], relevantBig5[2], 1);
      adj3 = getCircumplexAdjective(relevantBig5[2], relevantBig5[3], 2);
      sentences.push(format(tphrase(getSentenceTemplateString('You are %s, %s and %s', subject)),  adj1, adj2, adj3) + '.');
      break;
    }

    return sentences;
  }

  function assembleFacets(personalityTree, subject) {
    var
      sentences = [],
      facetElements = [],
      info,
      i;

    // Assemble the full list of facets and sort them based on how extreme
    // is the number.
    personalityTree.children[0].children.forEach(function (p) {
      p.children.forEach(function (f) {
        facetElements.push({
          id: f.id,
          percentage: f.percentage,
          parent: p
        });
      });
    });
    facetElements.sort(compareByRelevance);
    // Assemble an adjective and description for the two most important facets.
    info = getFacetInfo(facetElements[0]);
    sentences.push(format(tphrase(getSentenceTemplateString('You are %s', subject)), info.term) + ': ' + info.description + '.');
    info = getFacetInfo(facetElements[1]);
    sentences.push(format(tphrase(getSentenceTemplateString('You are %s', subject)), info.term) + ': ' + info.description + '.');

    // If all the facets correspond to the same feature, continue until a
    // different parent feature is found.
    i = 2;
    if (facetElements[0].parent === facetElements[1].parent) {
      while (facetElements[0].parent === facetElements[i].parent) {
        i += 1;
      }
    }
    info = getFacetInfo(facetElements[i]);
    sentences.push(format(tphrase(getSentenceTemplateString('And you are %s', subject)), info.term) + ': ' + info.description + '.');

    return sentences;
  }

  /**
   * Assemble the list of values and sort them based on relevance.
   */
  function assembleValues(valuesTree, subject) {
    var
      sentences = [],
      valuesList = [],
      sameQI, info1, info2,
      sentence,
      valuesInfo,
      i, term1, term2;

    valuesTree.children[0].children.forEach(function (p) {
      valuesList.push({
        id: p.id,
        percentage: p.percentage
      });
    });
    valuesList.sort(compareByRelevance);

    // Are the two most relevant in the same quartile interval? (e.g. 0%-25%)
    sameQI = intervalFor(valuesList[0].percentage) === intervalFor(valuesList[1].percentage);

    // Get all the text and data required.
    info1 = getInfoForValue(valuesList[0]);
    info2 = getInfoForValue(valuesList[1]);

    if (sameQI) {
      // Assemble the first 'both' sentence.
      term1 = info1.term;
      term2 = info2.term;
      switch (intervalFor(valuesList[0].percentage)) {
      case 0:
        sentence = format(tphrase(getSentenceTemplateString('You are relatively unconcerned with both %s and %s', subject)), term1, term2) + '.';
        break;
      case 1:
        sentence = format(tphrase(getSentenceTemplateString("You don't find either %s or %s to be particularly motivating for you", subject)), term1, term2) + '.';
        break;
      case 2:
        sentence = format(tphrase(getSentenceTemplateString('You value both %s and %s a bit', subject)), term1, term2) + '.';
        break;
      case 3:
        sentence = format(tphrase(getSentenceTemplateString('You consider both %s and %s to guide a large part of what you do', subject)), term1, term2) + '.';
        break;
      }
      sentences.push(sentence);

      // Assemble the final strings in the correct format.
      sentences.push(info1.description + '.');
      sentences.push(format(tphrase('And %s'), info2.description.toLowerCase()) + '.');
    } else {
      valuesInfo = [info1, info2];
      for (i = 0; i < valuesInfo.length; i += 1) {
        // Process it this way because the code is the same.
        switch (intervalFor(valuesList[i].percentage)) {
        case 0:
          sentence = format(tphrase(getSentenceTemplateString('You are relatively unconcerned with %s', subject)), valuesInfo[i].term);
          break;
        case 1:
          sentence = format(tphrase(getSentenceTemplateString("You don't find %s to be particularly motivating for you", subject)), valuesInfo[i].term);
          break;
        case 2:
          sentence = format(tphrase(getSentenceTemplateString('You value %s a bit more', subject)),  valuesInfo[i].term);
          break;
        case 3:
          sentence = format(tphrase(getSentenceTemplateString('You consider %s to guide a large part of what you do', subject)),  valuesInfo[i].term);
          break;
        }
        sentence = sentence.concat(': ').
            concat(valuesInfo[i].description.toLowerCase()).
            concat('.');
        sentences.push(sentence);
      }
    }

    return sentences;
  }

  /**
   * Assemble the list of needs and sort them based on value.
   */
  function assembleNeeds(needsTree, subject) {
    var
      sentences = [],
      needsList = [],
      word,
      sentence;

    needsTree.children[0].children.forEach(function (p) {
      needsList.push({
        id: p.id,
        percentage: p.percentage
      });
    });
    needsList.sort(compareByValue);

    // Get the words required.
    word = getWordsForNeed(needsList[0])[0];

    // Form the right sentence for the single need.
    switch (intervalFor(needsList[0].percentage)) {
    case 0:
      sentence = tphrase(getSentenceTemplateString('Experiences that make you feel high %s are generally unappealing to you', subject));
      break;
    case 1:
      sentence = tphrase(getSentenceTemplateString('Experiences that give a sense of %s hold some appeal to you', subject));
      break;
    case 2:
      sentence = tphrase(getSentenceTemplateString('You are motivated to seek out experiences that provide a strong feeling of %s', subject));
      break;
    case 3:
      sentence = tphrase(getSentenceTemplateString('Your choices are driven by a desire for %s', subject));
      break;
    }
    sentence = format(sentence, word).concat(".");
    sentences.push(sentence);

    return sentences;
  }

  /**
   * Given a TraitTree returns a text
   * summary describing the result.
   *
   * @param tree A TraitTree.
   * @param subject An optional string to define the subject in the phrase.
   * @return An array of strings representing the
   *         paragraphs of the text summary.
   */
  function assemble(tree, subject) {
    return [
      assembleTraits(tree.children[0], subject),
      assembleFacets(tree.children[0], subject),
      assembleNeeds(tree.children[1], subject),
      assembleValues(tree.children[2], subject)
    ];
  }

  /**
   * Given a TraitTree returns a text
   * summary describing the result.
   *
   * @param tree A TraitTree.
   * @param subject An optional string to define the subject in the phrase. Default is "You", valid options
   * male|female|they.
   * @return A String containing the text summary.
   */
  function getSummary(profile, subject) {
    return assemble(profile.tree, subject).map(function (paragraph) { return paragraph.join(" "); }).join("\n");
  }

  /* Text-Summary API */
  self.assembleTraits = assembleTraits;
  self.assembleFacets = assembleFacets;
  self.assembleNeeds = assembleNeeds;
  self.assembleValues = assembleValues;
  self.assemble = assemble;
  self.getSummary = getSummary;

  return self;
};