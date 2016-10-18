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

module.exports = {
  "facets" : {
  	"Friendliness": {
  		"Big5": "Extraversion",
  		"LowTerm": "Reserved",
  		"HighTerm": "Outgoing",
  		"LowDescription": {
  		    "male": "He is a private person and doesn't let many people in",
            "female": "She is a private person and doesn't let many people in",
            "they": "They are a private person and doesn't let many people in",
  		    "default": "You are a private person and don't let many people in"
        },
  		"HighDescription": {
            "male": "He makes friends easily and feels comfortable around other people",
            "female": "She makes friends easily and feels comfortable around other people",
            "they": "They make friends easily and feels comfortable around other people",
            "default": "You make friends easily and feel comfortable around other people"
        }
  	},
  	"Gregariousness": {
  		"Big5": "Extraversion",
  		"LowTerm": "Independent",
  		"HighTerm": "Sociable",
  		"LowDescription": {
  		    "male": "He has a strong desire to have time to himself",
            "female": "She has a strong desire to have time to herself",
            "they": "They have a strong desire to have time to themselves",
  		    "default": "You have a strong desire to have time to yourself"
        },
  		"HighDescription": {
            "male": "He enjoys being in the company of others",
            "female": "She enjoys being in the company of others",
            "they": "They enjoy being in the company of others",
            "default": "You enjoy being in the company of others"
        }
  	},
  	"Assertiveness": {
  		"Big5": "Extraversion",
  		"LowTerm": "Demure",
  		"HighTerm": "Assertive",
  		"LowDescription": {
  		    "male": "He prefers to listen than to talk, especially in group situations",
            "female": "She prefers to listen than to talk, especially in group situations",
            "they": "They prefer to listen than to talk, especially in group situations",
  		    "default": "You prefer to listen than to talk, especially in group situations"
        },
  		"HighDescription": {
            "male": "He tends to speak up and take charge of situations, and he is comfortable leading groups",
            "female": "She tends to speak up and take charge of situations, and she is comfortable leading groups",
            "they": "They tend to speak up and take charge of situations, and they are comfortable leading groups",
            "default": "You tend to speak up and take charge of situations, and you are comfortable leading groups"
        }
  	},
  	"Activity-level": {
  		"Big5": "Extraversion",
  		"LowTerm": "Laid-back",
  		"HighTerm": "Energetic",
  		"LowDescription": {
  		    "male": "He appreciates a relaxed pace in life",
            "female": "She appreciates a relaxed pace in life",
            "they": "They appreciate a relaxed pace in life",
  		    "default": "You appreciate a relaxed pace in life"
        },
  		"HighDescription": {
            "male": "He enjoys a fast-paced, busy schedule with many activities",
            "female": "She enjoys a fast-paced, busy schedule with many activities",
            "they": "They enjoy a fast-paced, busy schedule with many activities",
            "default": "You enjoy a fast-paced, busy schedule with many activities"
        }
  	},
  	"Excitement-seeking": {
  		"Big5": "Extraversion",
  		"LowTerm": "Calm-seeking",
  		"HighTerm": "Excitement-seeking",
  		"LowDescription": {
  		    "male": "He prefers activities that are quiet, calm, and safe",
            "female": "She prefers activities that are quiet, calm, and safe",
            "they": "They prefer activities that are quiet, calm, and safe",
  		    "default": "You prefer activities that are quiet, calm, and safe"
        },
  		"HighDescription": {
            "male": "He is excited by taking risks and feels bored without lots of action going on",
            "female": "She is excited by taking risks and feels bored without lots of action going on",
            "they": "They are excited by taking risks and feels bored without lots of action going on",
            "default": "You are excited by taking risks and feel bored without lots of action going on"
        }
  	},
  	"Cheerfulness": {
  		"Big5": "Extraversion",
  		"LowTerm": "Solemn",
  		"HighTerm": "Cheerful",
  		"LowDescription": {
  		    "male": "He is generally serious and do not joke much",
            "female": "She is generally serious and do not joke much",
            "they": "They are generally serious and do not joke much",
  		    "default": "You are generally serious and do not joke much"
        },
  		"HighDescription": {
            "male": "He is a joyful person and share that joy with the world",
            "female": "She is a joyful person and share that joy with the world",
            "they": "They are a joyful person and share that joy with the world",
            "default": "You are a joyful person and share that joy with the world"
        }
  	},
  	"Trust": {
  		"Big5": "Agreeableness",
  		"LowTerm": "Cautious of others",
  		"HighTerm": "Trusting of others",
  		"LowDescription": {
  		    "male": "He is wary of other people's intentions and do not trust easily",
            "female": "She is wary of other people's intentions and do not trust easily",
            "they": "They are wary of other people's intentions and do not trust easily",
  		    "default": "You are wary of other people's intentions and do not trust easily"
        },
  		"HighDescription": {
            "male": "He believes the best in others and trust people easily",
            "female": "She believes the best in others and trust people easily",
            "they": "They believe the best in others and trust people easily",
            "default": "You believe the best in others and trust people easily"
        }
  	},
  	"Cooperation": {
  		"Big5": "Agreeableness",
  		"LowTerm": "Contrary",
  		"HighTerm": "Accommodating",
  		"LowDescription": {
  		    "male": "He does not shy away from contradicting others",
            "female": "She does not shy away from contradicting others",
            "they": "They do not shy away from contradicting others",
  		    "default": "You do not shy away from contradicting others"
        },
  		"HighDescription": {
            "male": "He is easy to please and try to avoid confrontation",
            "female": "He is easy to please and try to avoid confrontation",
            "they": "They are easy to please and try to avoid confrontation",
            "default": "You are easy to please and try to avoid confrontation"
        }
  	},
  	"Altruism": {
  		"Big5": "Agreeableness",
  		"LowTerm": "Self-focused",
  		"HighTerm": "Altruistic",
  		"LowDescription": {
  		    "male": "He is more concerned with taking care of himself than taking time for others",
            "female": "She is more concerned with taking care of herself than taking time for others",
            "they": "They are more concerned with taking care of themselves than taking time for others",
  		    "default": "You are more concerned with taking care of yourself than taking time for others"
        },
  		"HighDescription": {
            "male": "He feels fulfilled when helping others, and will go out of his way to do so",
            "female": "She feels fulfilled when helping others, and will go out of her way to do so",
            "they": "They feel fulfilled when helping others, and will go out of their way to do so",
            "default": "You feel fulfilled when helping others, and will go out of your way to do so"
        }
  	},
  	"Morality": {
  		"Big5": "Agreeableness",
  		"LowTerm": "Compromising",
  		"HighTerm": "Uncompromising",
  		"LowDescription": {
  		    "male": "He is comfortable using every trick in the book to get what he wants",
            "female": "She is comfortable using every trick in the book to get what she wants",
            "they": "They are comfortable using every trick in the book to get what they want",
  		    "default": "You are comfortable using every trick in the book to get what you want"
        },
  		"HighDescription": {
            "male": "He thinks it is wrong to take advantage of others to get ahead",
            "female": "She thinks it is wrong to take advantage of others to get ahead",
            "they": "They think it is wrong to take advantage of others to get ahead",
            "default": "You think it is wrong to take advantage of others to get ahead"
        }
  	},
  	"Modesty": {
  		"Big5": "Agreeableness",
  		"LowTerm": "Proud",
  		"HighTerm": "Modest",
  		"LowDescription": {
  		    "male": "He holds himself in high regard, satisfied with who he is",
            "female": "She holds herself in high regard, satisfied with who she is",
            "they": "They hold themselves in high regard, satisfied with who they are",
  		    "default": "You hold yourself in high regard, satisfied with who you are"
        },
  		"HighDescription": {
            "male": "He is uncomfortable being the center of attention",
            "female": "She is uncomfortable being the center of attention",
            "they": "They are uncomfortable being the center of attention",
            "default": "You are uncomfortable being the center of attention"
        }
  	},
  	"Sympathy": {
  		"Big5": "Agreeableness",
  		"LowTerm": "Hardened",
  		"HighTerm": "Empathetic",
  		"LowDescription": {
  		    "male": "He thinks that people should generally rely more on themselves than on other people",
            "female": "She thinks that people should generally rely more on themselves than on other people",
  		    "they": "They think that people should generally rely more on themselves than on other people",
  		    "default": "You think that people should generally rely more on themselves than on other people"
        },
  		"HighDescription": {
            "male": "He feels what others feel and are compassionate towards them",
            "female": "She feels what others feel and are compassionate towards them",
            "they": "They feel what others feel and are compassionate towards them",
            "default": "You feel what others feel and are compassionate towards them"
        }
  	},
  	"Self-efficacy": {
  		"Big5": "Conscientiousness",
  		"LowTerm": "Self-doubting",
  		"HighTerm": "Self-assured",
  		"LowDescription": {
  		    "male": "He frequently doubts his ability to achieve his goals",
            "female": "She frequently doubts her ability to achieve her goals",
  		    "they": "They frequently doubt their ability to achieve their goals",
  		    "default": "You frequently doubt your ability to achieve your goals"
        },
  		"HighDescription": {
            "male": "He feels he has the ability to succeed in the tasks he sets out to do",
            "female": "She feels she has the ability to succeed in the tasks she sets out to do",
            "they": "They feel they have the ability to succeed in the tasks they set out to do",
            "default": "You feel you have the ability to succeed in the tasks you set out to do"
        }
  	},
  	"Orderliness": {
  		"Big5": "Conscientiousness",
  		"LowTerm": "Unstructured",
  		"HighTerm": "Organized",
  		"LowDescription": {
  		    "male": "He does not make a lot of time for organization in his daily life",
            "female": "She does not make a lot of time for organization in her daily life",
            "they": "They do not make a lot of time for organization in their daily life",
  		    "default": "You do not make a lot of time for organization in your daily life"
        },
  		"HighDescription": {
            "male": "He feels a strong need for structure in his life",
            "female": "She feels a strong need for structure in her life",
            "they": "They feel a strong need for structure in their life",
            "default": "You feel a strong need for structure in your life"
        }
  	},
  	"Dutifulness": {
  		"Big5": "Conscientiousness",
  		"LowTerm": "Carefree",
  		"HighTerm": "Dutiful",
  		"LowDescription": {
  		    "male": "He does what he wants, disregarding rules and obligations",
            "female": "She does what she wants, disregarding rules and obligations",
  		    "they": "They do what they want, disregarding rules and obligations",
  		    "default": "You do what you want, disregarding rules and obligations"
        },
  		"HighDescription": {
            "male": "He takes rules and obligations seriously, even when they're inconvenient",
            "female": "She takes rules and obligations seriously, even when they're inconvenient",
            "they": "They take rules and obligations seriously, even when they're inconvenient",
            "default": "You take rules and obligations seriously, even when they're inconvenient"
        }
  	},
  	"Achievement-striving": {
  		"Big5": "Conscientiousness",
  		"LowTerm": "Content",
  		"HighTerm": "Driven",
  		"LowDescription": {
  		    "male": "He is content with his level of accomplishment and does not feel the need to set ambitious goals",
            "female": "She is content with her level of accomplishment and does not feel the need to set ambitious goals",
  		    "they": "They are content with their level of accomplishment and do not feel the need to set ambitious goals",
  		    "default": "You are content with your level of accomplishment and do not feel the need to set ambitious goals"
        },
  		"HighDescription": {
            "male": "He has high goals for himself and works hard to achieve them",
            "female": "She has high goals for herself and works hard to achieve them",
            "they": "They have high goals for themselves and work hard to achieve them",
            "default": "You have high goals for yourself and work hard to achieve them"
        }
  	},
  	"Self-discipline": {
  		"Big5": "Conscientiousness",
  		"LowTerm": "Intermittent",
  		"HighTerm": "Persistent",
  		"LowDescription": {
  		    "male": "He has a hard time sticking with difficult tasks for a long period of time",
            "female": "She has a hard time sticking with difficult tasks for a long period of time",
  		    "they": "They have a hard time sticking with difficult tasks for a long period of time",
  		    "default": "You have a hard time sticking with difficult tasks for a long period of time"
        },
  		"HighDescription": {
            "male": "He can tackle and stick with tough tasks",
            "female": "She can tackle and stick with tough tasks",
            "they": "They can tackle and stick with tough tasks",
            "default": "You can tackle and stick with tough tasks"
        }
  	},
  	"Cautiousness": {
  		"Big5": "Conscientiousness",
  		"LowTerm": "Bold",
  		"HighTerm": "Deliberate",
  		"LowDescription": {
  		    "male": "He would rather take action immediately than spend time deliberating making a decision",
            "female": "She would rather take action immediately than spend time deliberating making a decision",
  		    "they": "They would rather take action immediately than spend time deliberating making a decision",
  		    "default": "You would rather take action immediately than spend time deliberating making a decision"
        },
  		"HighDescription": {
            "male": "He carefully thinks through decisions before making them",
            "female": "She carefully thinks through decisions before making them",
            "they": "They carefully think through decisions before making them",
            "default": "You carefully think through decisions before making them"
        }
  	},
  	"Anxiety": {
  		"Big5": "Neuroticism",
  		"LowTerm": "Self-assured",
  		"HighTerm": "Prone to worry",
  		"LowDescription": {
  		    "male": "He tends to feel calm and self-assured",
            "female": "She tends to feel calm and self-assured",
  		    "they": "They tend to feel calm and self-assured",
  		    "default": "You tend to feel calm and self-assured"
        },
  		"HighDescription": {
            "male": "He tends to worry about things that might happen",
            "female": "She tends to worry about things that might happen",
            "they": "They tend to worry about things that might happen",
            "default": "You tend to worry about things that might happen"
        }
  	},
  	"Anger": {
  		"Big5": "Neuroticism",
  		"LowTerm": "Mild-tempered",
  		"HighTerm": "Fiery",
  		"LowDescription": {
  		    "male": "It takes a lot to get him angry",
            "female": "It takes a lot to get her angry",
  		    "they": "It takes a lot to get them angry",
  		    "default": "It takes a lot to get you angry"
        },
  		"HighDescription": {
            "male": "He has a fiery temper, especially when things do not go his way",
            "female": "She has a fiery temper, especially when things do not go her way",
            "they": "They have a fiery temper, especially when things do not go their way",
            "default": "You have a fiery temper, especially when things do not go your way"
        }
  	},
  	"Depression": {
  		"Big5": "Neuroticism",
  		"LowTerm": "Content",
  		"HighTerm": "Melancholy",
  		"LowDescription": {
  		    "male": "He is generally comfortable with himself as he is",
            "female": "She is generally comfortable with herself as she is",
  		    "they": "They are generally comfortable with themselves as they are",
  		    "default": "You are generally comfortable with yourself as you are"
        },
  		"HighDescription": {
            "male": "He thinks quite often about the things he is unhappy about",
            "female": "Shee thinks quite often about the things she is unhappy about",
            "they": "They think quite often about the things they are unhappy about",
            "default": "You think quite often about the things you are unhappy about"
        }
  	},
  	"Self-consciousness": {
  		"Big5": "Neuroticism",
  		"LowTerm": "Confident",
  		"HighTerm": "Self-conscious",
  		"LowDescription": {
  		    "male": "He is hard to embarrass and is self-confident most of the time",
            "female": "She is hard to embarrass and is self-confident most of the time",
  		    "they": "They are hard to embarrass and are self-confident most of the time",
  		    "default": "You are hard to embarrass and are self-confident most of the time"
        },
  		"HighDescription": {
            "male": "He is sensitive about what others might be thinking about him",
            "female": "She is sensitive about what others might be thinking about her",
            "they": "They are sensitive about what others might be thinking about them",
            "default": "You are sensitive about what others might be thinking about you"
        }
  	},
  	"Immoderation": {
  		"Big5": "Neuroticism",
  		"LowTerm": "Self-controlled",
  		"HighTerm": "Hedonistic",
  		"LowDescription": {
  		    "male": "He has control over his desires, which are not particularly intense",
            "female": "She has control over her desires, which are not particularly intense",
  		    "they": "They have control over their desires, which are not particularly intense",
  		    "default": "You have control over your desires, which are not particularly intense"
        },
  		"HighDescription": {
            "male": "He feels his desires strongly and are easily tempted by them",
            "female": "She feels her desires strongly and are easily tempted by them",
            "they": "They feel their desires strongly and are easily tempted by them",
            "default": "You feel your desires strongly and are easily tempted by them"
        }
  	},
  	"Vulnerability": {
  		"Big5": "Neuroticism",
  		"LowTerm": "Calm under pressure",
  		"HighTerm": "Susceptible to stress",
  		"LowDescription": {
  		    "male": "He handles unexpected events calmly and effectively",
            "female": "She handles unexpected events calmly and effectively",
  		    "they": "They handle unexpected events calmly and effectively",
  		    "default": "You handle unexpected events calmly and effectively"
        },
  		"HighDescription": {
            "male": "He is easily overwhelmed in stressful situations",
            "female": "She is easily overwhelmed in stressful situations",
            "they": "They are easily overwhelmed in stressful situations",
            "default": "You are easily overwhelmed in stressful situations"
        }
  	},
  	"Imagination": {
  		"Big5": "Openness",
  		"LowTerm": "Down-to-earth",
  		"HighTerm": "Imaginative",
  		"LowDescription": {
  		    "male": "He prefers facts over fantasy",
            "female": "She prefers facts over fantasy",
  		    "they": "They prefer facts over fantasy",
  		    "default": "You prefer facts over fantasy"
        },
  		"HighDescription": {
            "male": "He has a wild imagination",
            "female": "She has a wild imagination",
            "they": "They have a wild imagination",
            "default": "You have a wild imagination"
        }
  	},
  	"Artistic-interests": {
  		"Big5": "Openness",
  		"LowTerm": "Unconcerned with art",
  		"HighTerm": "Appreciative of art",
  		"LowDescription": {
  		    "male": "He is less concerned with artistic or creative activities than most people who participated in our surveys",
            "female": "He is less concerned with artistic or creative activities than most people who participated in our surveys",
  		    "they": "They are less concerned with artistic or creative activities than most people who participated in our surveys",
  		    "default": "You are less concerned with artistic or creative activities than most people who participated in our surveys"
        },
  		"HighDescription": {
            "male": "He enjoys beauty and seeks out creative experiences",
            "female": "Shee enjoys beauty and seeks out creative experiences",
            "they": "They enjoy beauty and seek out creative experiences",
            "default": "You enjoy beauty and seek out creative experiences"
        }
  	},
  	"Emotionality": {
  		"Big5": "Openness",
  		"LowTerm": "Dispassionate",
  		"HighTerm": "Emotionally aware",
  		"LowDescription": {
  		    "male": "He does not frequently think about or openly express his emotions",
            "female": "She does not frequently think about or openly express her emotions",
  		    "they": "They do not frequently think about or openly express their emotions",
  		    "default": "You do not frequently think about or openly express your emotions"
        },
  		"HighDescription": {
            "male": "He is aware of his feelings and how to express them",
            "female": "She is aware of her feelings and how to express them",
            "they": "They are aware of their feelings and how to express them",
            "default": "You are aware of your feelings and how to express them"
        }
  	},
  	"Adventurousness": {
  		"Big5": "Openness",
  		"LowTerm": "Consistent",
  		"HighTerm": "Adventurous",
  		"LowDescription": {
  		    "male": "He enjoys familiar routines and prefer not to deviate from them",
            "female": "She enjoys familiar routines and prefer not to deviate from them",
  		    "they": "They enjoy familiar routines and prefer not to deviate from them",
  		    "default": "You enjoy familiar routines and prefer not to deviate from them"
        },
  		"HighDescription": {
            "male": "He is eager to experience new things",
            "female": "She is eager to experience new things",
            "they": "They are eager to experience new things",
            "default": "You are eager to experience new things"
        }
  	},
  	"Intellect": {
  		"Big5": "Openness",
  		"LowTerm": "Concrete",
  		"HighTerm": "Philosophical",
  		"LowDescription": {
  		    "male": "He prefers dealing with the word as it is, rarely considering abstract ideas",
            "female": "She prefers dealing with the word as it is, rarely considering abstract ideas",
  		    "they": "They prefer dealing with the world as it is, rarely considering abstract ideas",
  		    "default": "You prefer dealing with the world as it is, rarely considering abstract ideas"
        },
  		"HighDescription": {
            "male": "He is open to and intrigued by new ideas and love to explore them",
            "female": "She is open to and intrigued by new ideas and love to explore them",
            "they": "They are open to and intrigued by new ideas and love to explore them",
            "default": "You are open to and intrigued by new ideas and love to explore them"
        }
  	},
  	"Liberalism": {
  		"Big5": "Openness",
  		"LowTerm": "Respectful of authority",
  		"HighTerm": "Authority-challenging",
  		"LowDescription": {
  		    "male": "He prefers following with tradition in order to maintain a sense of stability",
            "female": "He prefers following with tradition in order to maintain a sense of stability",
  		    "they": "They prefer following with tradition in order to maintain a sense of stability",
  		    "default": "You prefer following with tradition in order to maintain a sense of stability"
        },
  		"HighDescription": {
            "male": "He prefers to challenge authority and traditional values to help bring about positive changes",
            "female": "She prefers to challenge authority and traditional values to help bring about positive changes",
            "they": "They prefer to challenge authority and traditional values to help bring about positive changes",
            "default": "You prefer to challenge authority and traditional values to help bring about positive changes"
        }
  	}
  },
  "needs": {
      "Challenge": [
          "prestige",
          "competition",
          "glory"
      ],
      "Closeness": [
          "belongingness",
          "nostalgia",
          "intimacy"
      ],
      "Curiosity": [
          "discovery",
          "mastery",
          "gaining knowledge"
      ],
      "Excitement": [
          "revelry",
          "anticipation",
          "exhiliration"
      ],
      "Harmony": [
          "well-being",
          "courtesy",
          "politeness"
      ],
      "Ideal": [
          "sophistication",
          "spirituality",
          "superiority",
          "fulfillment"
      ],
      "Liberty": [
          "modernity",
          "expanding possibility",
          "escape",
          "spontaneity",
          "novelty"
      ],
      "Love": [
          "connectedness",
          "affinity"
      ],
      "Practicality": [
          "efficiency",
          "practicality",
          "high value",
          "convenience"
      ],
      "Self-expression": [
          "self-expression",
          "personal empowerment",
          "personal strength"
      ],
      "Stability": [
          "stability",
          "authenticity",
          "trustworthiness"
      ],
      "Structure": [
          "organization",
          "straightforwardness",
          "clarity",
          "reliability"
      ]
  },
  "phrases": {
    "You are %s": "You are %s",
    "You are %s and %s": "You are %s and %s",
    "You are %s, %s and %s": "You are %s, %s and %s",
    "And you are %s": "And you are %s",
    "You are relatively unconcerned with %s": "You are relatively unconcerned with %s",
    "You are relatively unconcerned with both %s and %s": "You are relatively unconcerned with both %s and %s",
    "You don't find %s to be particularly motivating for you": "You don't find %s to be particularly motivating for you",
    "You don't find either %s or %s to be particularly motivating for you": "You don't find either %s or %s to be particularly motivating for you",
    "You value both %s a bit": "You value both %s a bit",
    "You value both %s and %s a bit": "You value both %s and %s a bit",
    "You consider %s to guide a large part of what you do" : "You consider %s to guide a large part of what you do",
    "You consider both %s and %s to guide a large part of what you do" : "You consider both %s and %s to guide a large part of what you do",
    "And %s": "And %s",
    "You value %s a bit more": "You value %s a bit more",
    "Experiences that make you feel high %s are generally unappealing to you": "Experiences that make you feel high %s are generally unappealing to you",
    "Experiences that give a sense of %s hold some appeal to you": "Experiences that give a sense of %s hold some appeal to you",
    "You are motivated to seek out experiences that provide a strong feeling of %s": "You are motivated to seek out experiences that provide a strong feeling of %s",
    "Your choices are driven by a desire for %s" : "Your choices are driven by a desire for %s",
    "a bit %s": "a bit %s",
    "somewhat %s" : "somewhat %s",
    "can be perceived as %s": "can be perceived as %s",
    "He is %s": "He is %s",
    "He is %s and %s": "He is %s and %s",
    "He is %s, %s and %s": "He is %s, %s and %s",
    "And he is %s": "And he is %s",
    "He is relatively unconcerned with both %s and %s": "He is relatively unconcerned with both %s and %s",
    "He doesn't find %s to be particularly motivating for him": "He doesn't find %s to be particularly motivating for him",
    "He values %s a bit more": "He values %s a bit more",
    "He considers %s to guide a large part of what he does": "He considers %s to guide a large part of what he does",
    "Experiences that make him feel high %s are generally unappealing to him": "Experiences that make him feel high %s are generally unappealing to him",
    "Experiences that give a sense of %s hold some appeal to him": "Experiences that give a sense of %s hold some appeal to him",
    "He is motivated to seek out experiences that provide a strong feeling of %s": "He is motivated to seek out experiences that provide a strong feeling of %s",
    "His choices are driven by a desire for %s": "His choices are driven by a desire for %s",
    "She is %s": "She is %s",
    "She is %s and %s": "She is %s and %s",
    "She is %s, %s and %s": "She is %s, %s and %s",
    "And she is %s": "And she is %s",
    "She is relatively unconcerned with both %s and %s": "She is relatively unconcerned with both %s and %s",
    "She doesn't find %s to be particularly motivating for her": "She doesn't find %s to be particularly motivating for her",
    "She values %s a bit more": "She values %s a bit more",
    "She considers %s to guide a large part of what she does": "She considers %s to guide a large part of what she does",
    "Experiences that make her feel high %s are generally unappealing to her": "Experiences that make her feel high %s are generally unappealing to her",
    "Experiences that give a sense of %s hold some appeal to her": "Experiences that give a sense of %s hold some appeal to her",
    "She is motivated to seek out experiences that provide a strong feeling of %s": "She is motivated to seek out experiences that provide a strong feeling of %s",
    "Her choices are driven by a desire for %s": "Her choices are driven by a desire for %s",
    "They are %s": "They are %s",
    "They are %s and %s": "They are %s and %s",
    "They are %s, %s and %s": "They are %s, %s and %s",
    "And they are %s": "And they are %s",
    "They are relatively unconcerned with both %s and %s": "They are relatively unconcerned with both %s and %s",
    "They don't find %s to be particularly motivating for them": "They don't find %s to be particularly motivating for them",
    "They value %s a bit more": "They value %s a bit more",
    "They consider %s to guide a large part of what they do": "They consider %s to guide a large part of what they do",
    "Experiences that make them feel high %s are generally unappealing to them": "Experiences that make them feel high %s are generally unappealing to them",
    "Experiences that give a sense of %s hold some appeal to them": "Experiences that give a sense of %s hold some appeal to them",
    "They are motivated to seek out experiences that provide a strong feeling of %s": "They are motivated to seek out experiences that provide a strong feeling of %s",
    "Their choices are driven by a desire for %s": "Their choices are driven by a desire for %s"
  },
  "traits": {
      "Agreeableness_minus_Conscientiousness_minus": [
          {
              "perceived_negatively": true,
              "word": "inconsiderate"
          },
          {
              "perceived_negatively": true,
              "word": "impolite"
          },
          {
              "perceived_negatively": true,
              "word": "distrustful"
          },
          {
              "perceived_negatively": true,
              "word": "uncooperative"
          },
          {
              "perceived_negatively": true,
              "word": "thoughtless"
          }
      ],
      "Agreeableness_minus_Conscientiousness_plus": [
          {
              "perceived_negatively": false,
              "word": "strict"
          },
          {
              "perceived_negatively": false,
              "word": "rigid"
          },
          {
              "perceived_negatively": true,
              "word": "stern"
          }
      ],
      "Agreeableness_minus_Extraversion_minus": [
          {
              "perceived_negatively": true,
              "word": "cynical"
          },
          {
              "perceived_negatively": true,
              "word": "wary of others"
          },
          {
              "perceived_negatively": true,
              "word": "seclusive"
          },
          {
              "perceived_negatively": true,
              "word": "detached"
          },
          {
              "perceived_negatively": true,
              "word": "impersonal"
          },
          {
              "perceived_negatively": true,
              "word": "glum"
          }
      ],
      "Agreeableness_minus_Extraversion_plus": [
          {
              "perceived_negatively": true,
              "word": "bullheaded"
          },
          {
              "perceived_negatively": true,
              "word": "abrupt"
          },
          {
              "perceived_negatively": true,
              "word": "crude"
          },
          {
              "perceived_negatively": true,
              "word": "combative"
          },
          {
              "perceived_negatively": true,
              "word": "rough"
          },
          {
              "perceived_negatively": false,
              "word": "sly"
          },
          {
              "perceived_negatively": true,
              "word": "manipulative"
          },
          {
              "perceived_negatively": true,
              "word": "gruff"
          },
          {
              "perceived_negatively": true,
              "word": "devious"
          }
      ],
      "Agreeableness_minus_Neuroticism_minus": [
          {
              "perceived_negatively": true,
              "word": "insensitive"
          },
          {
              "perceived_negatively": true,
              "word": "unaffectionate"
          },
          {
              "perceived_negatively": true,
              "word": "passionless"
          },
          {
              "perceived_negatively": true,
              "word": "unemotional"
          }
      ],
      "Agreeableness_minus_Neuroticism_plus": [
          {
              "perceived_negatively": true,
              "word": "critical"
          },
          {
              "perceived_negatively": true,
              "word": "selfish"
          },
          {
              "perceived_negatively": true,
              "word": "ill-tempered"
          },
          {
              "perceived_negatively": true,
              "word": "antagonistic"
          },
          {
              "perceived_negatively": true,
              "word": "grumpy"
          },
          {
              "perceived_negatively": true,
              "word": "bitter"
          },
          {
              "perceived_negatively": true,
              "word": "disagreeable"
          },
          {
              "perceived_negatively": true,
              "word": "demanding"
          }
      ],
      "Agreeableness_minus_Openness_minus": [
          {
              "perceived_negatively": true,
              "word": "coarse"
          },
          {
              "perceived_negatively": true,
              "word": "tactless"
          },
          {
              "perceived_negatively": true,
              "word": "curt"
          },
          {
              "perceived_negatively": true,
              "word": "narrow-minded"
          },
          {
              "perceived_negatively": true,
              "word": "callous"
          },
          {
              "perceived_negatively": true,
              "word": "ruthless"
          },
          {
              "perceived_negatively": true,
              "word": "uncharitable"
          },
          {
              "perceived_negatively": true,
              "word": "vindictive"
          }
      ],
      "Agreeableness_minus_Openness_plus": [
          {
              "perceived_negatively": false,
              "word": "shrewd"
          },
          {
              "perceived_negatively": false,
              "word": "eccentric"
          },
          {
              "perceived_negatively": false,
              "word": "individualistic"
          }
      ],
      "Agreeableness_plus_Conscientiousness_minus": [
          {
              "perceived_negatively": false,
              "word": "unpretentious"
          },
          {
              "perceived_negatively": false,
              "word": "self-effacing"
          }
      ],
      "Agreeableness_plus_Conscientiousness_plus": [
          {
              "perceived_negatively": false,
              "word": "helpful"
          },
          {
              "perceived_negatively": false,
              "word": "cooperative"
          },
          {
              "perceived_negatively": false,
              "word": "considerate"
          },
          {
              "perceived_negatively": false,
              "word": "respectful"
          },
          {
              "perceived_negatively": false,
              "word": "polite"
          },
          {
              "perceived_negatively": false,
              "word": "reasonable"
          },
          {
              "perceived_negatively": false,
              "word": "courteous"
          },
          {
              "perceived_negatively": false,
              "word": "thoughtful"
          },
          {
              "perceived_negatively": false,
              "word": "loyal"
          },
          {
              "perceived_negatively": false,
              "word": "moral"
          }
      ],
      "Agreeableness_plus_Extraversion_minus": [
          {
              "perceived_negatively": false,
              "word": "soft-hearted"
          },
          {
              "perceived_negatively": false,
              "word": "agreeable"
          },
          {
              "perceived_negatively": false,
              "word": "obliging"
          },
          {
              "perceived_negatively": false,
              "word": "humble"
          },
          {
              "perceived_negatively": true,
              "word": "lenient"
          }
      ],
      "Agreeableness_plus_Extraversion_plus": [
          {
              "perceived_negatively": false,
              "word": "effervescent"
          },
          {
              "perceived_negatively": false,
              "word": "happy"
          },
          {
              "perceived_negatively": false,
              "word": "friendly"
          },
          {
              "perceived_negatively": false,
              "word": "merry"
          },
          {
              "perceived_negatively": false,
              "word": "jovial"
          },
          {
              "perceived_negatively": false,
              "word": "humorous"
          }
      ],
      "Agreeableness_plus_Neuroticism_minus": [
          {
              "perceived_negatively": false,
              "word": "generous"
          },
          {
              "perceived_negatively": false,
              "word": "pleasant"
          },
          {
              "perceived_negatively": false,
              "word": "tolerant"
          },
          {
              "perceived_negatively": false,
              "word": "peaceful"
          },
          {
              "perceived_negatively": false,
              "word": "flexible"
          },
          {
              "perceived_negatively": false,
              "word": "easy-going"
          },
          {
              "perceived_negatively": false,
              "word": "fair"
          },
          {
              "perceived_negatively": false,
              "word": "charitable"
          },
          {
              "perceived_negatively": false,
              "word": "trustful"
          }
      ],
      "Agreeableness_plus_Neuroticism_plus": [
          {
              "perceived_negatively": false,
              "word": "sentimental"
          },
          {
              "perceived_negatively": false,
              "word": "affectionate"
          },
          {
              "perceived_negatively": false,
              "word": "sensitive"
          },
          {
              "perceived_negatively": false,
              "word": "soft"
          },
          {
              "perceived_negatively": false,
              "word": "passionate"
          },
          {
              "perceived_negatively": false,
              "word": "romantic"
          }
      ],
      "Agreeableness_plus_Openness_minus": [
          {
              "perceived_negatively": true,
              "word": "dependent"
          },
          {
              "perceived_negatively": true,
              "word": "simple"
          }
      ],
      "Agreeableness_plus_Openness_plus": [
          {
              "perceived_negatively": false,
              "word": "genial"
          },
          {
              "perceived_negatively": false,
              "word": "tactful"
          },
          {
              "perceived_negatively": false,
              "word": "diplomatic"
          },
          {
              "perceived_negatively": false,
              "word": "deep"
          },
          {
              "perceived_negatively": false,
              "word": "idealistic"
          }
      ],
      "Conscientiousness_minus_Agreeableness_minus": [
          {
              "perceived_negatively": true,
              "word": "rash"
          },
          {
              "perceived_negatively": true,
              "word": "uncooperative"
          },
          {
              "perceived_negatively": true,
              "word": "unreliable"
          },
          {
              "perceived_negatively": true,
              "word": "distrustful"
          },
          {
              "perceived_negatively": true,
              "word": "thoughtless"
          }
      ],
      "Conscientiousness_minus_Agreeableness_plus": [
          {
              "perceived_negatively": false,
              "word": "unpretentious"
          },
          {
              "perceived_negatively": false,
              "word": "self-effacing"
          }
      ],
      "Conscientiousness_minus_Extraversion_minus": [
          {
              "perceived_negatively": true,
              "word": "indecisive"
          },
          {
              "perceived_negatively": true,
              "word": "aimless"
          },
          {
              "perceived_negatively": false,
              "word": "wishy-washy"
          },
          {
              "perceived_negatively": false,
              "word": "noncommittal"
          },
          {
              "perceived_negatively": true,
              "word": "unambitious"
          }
      ],
      "Conscientiousness_minus_Extraversion_plus": [
          {
              "perceived_negatively": true,
              "word": "unruly"
          },
          {
              "perceived_negatively": false,
              "word": "boisterous"
          },
          {
              "perceived_negatively": true,
              "word": "reckless"
          },
          {
              "perceived_negatively": true,
              "word": "devil-may-care"
          },
          {
              "perceived_negatively": false,
              "word": "demonstrative"
          }
      ],
      "Conscientiousness_minus_Neuroticism_minus": [
          {
              "perceived_negatively": false,
              "word": "informal"
          },
          {
              "perceived_negatively": false,
              "word": "low-key"
          }
      ],
      "Conscientiousness_minus_Neuroticism_plus": [
          {
              "perceived_negatively": true,
              "word": "scatterbrained"
          },
          {
              "perceived_negatively": true,
              "word": "inconsistent"
          },
          {
              "perceived_negatively": true,
              "word": "erratic"
          },
          {
              "perceived_negatively": true,
              "word": "forgetful"
          },
          {
              "perceived_negatively": true,
              "word": "impulsive"
          },
          {
              "perceived_negatively": true,
              "word": "frivolous"
          }
      ],
      "Conscientiousness_minus_Openness_minus": [
          {
              "perceived_negatively": false,
              "word": "foolhardy"
          },
          {
              "perceived_negatively": true,
              "word": "illogical"
          },
          {
              "perceived_negatively": true,
              "word": "immature"
          },
          {
              "perceived_negatively": true,
              "word": "haphazard"
          },
          {
              "perceived_negatively": false,
              "word": "lax"
          },
          {
              "perceived_negatively": true,
              "word": "flippant"
          }
      ],
      "Conscientiousness_minus_Openness_plus": [
          {
              "perceived_negatively": false,
              "word": "unconventional"
          },
          {
              "perceived_negatively": false,
              "word": "quirky"
          }
      ],
      "Conscientiousness_plus_Agreeableness_minus": [
          {
              "perceived_negatively": true,
              "word": "stern"
          },
          {
              "perceived_negatively": false,
              "word": "strict"
          },
          {
              "perceived_negatively": false,
              "word": "rigid"
          }
      ],
      "Conscientiousness_plus_Agreeableness_plus": [
          {
              "perceived_negatively": false,
              "word": "dependable"
          },
          {
              "perceived_negatively": false,
              "word": "responsible"
          },
          {
              "perceived_negatively": false,
              "word": "reliable"
          },
          {
              "perceived_negatively": false,
              "word": "mannerly"
          },
          {
              "perceived_negatively": false,
              "word": "considerate"
          }
      ],
      "Conscientiousness_plus_Extraversion_minus": [
          {
              "perceived_negatively": false,
              "word": "cautious"
          },
          {
              "perceived_negatively": false,
              "word": "confident"
          },
          {
              "perceived_negatively": false,
              "word": "punctual"
          },
          {
              "perceived_negatively": false,
              "word": "formal"
          },
          {
              "perceived_negatively": false,
              "word": "thrifty"
          },
          {
              "perceived_negatively": false,
              "word": "principled"
          }
      ],
      "Conscientiousness_plus_Extraversion_plus": [
          {
              "perceived_negatively": false,
              "word": "ambitious"
          },
          {
              "perceived_negatively": false,
              "word": "alert"
          },
          {
              "perceived_negatively": false,
              "word": "firm"
          },
          {
              "perceived_negatively": false,
              "word": "purposeful"
          },
          {
              "perceived_negatively": false,
              "word": "competitive"
          }
      ],
      "Conscientiousness_plus_Neuroticism_minus": [
          {
              "perceived_negatively": false,
              "word": "thorough"
          },
          {
              "perceived_negatively": false,
              "word": "steady"
          },
          {
              "perceived_negatively": false,
              "word": "consistent"
          },
          {
              "perceived_negatively": false,
              "word": "self-disciplined"
          },
          {
              "perceived_negatively": false,
              "word": "logical"
          },
          {
              "perceived_negatively": false,
              "word": "decisive"
          },
          {
              "perceived_negatively": false,
              "word": "controlled"
          },
          {
              "perceived_negatively": false,
              "word": "concise"
          }
      ],
      "Conscientiousness_plus_Neuroticism_plus": [
          {
              "perceived_negatively": false,
              "word": "particular"
          },
          {
              "perceived_negatively": true,
              "word": "high-strung"
          }
      ],
      "Conscientiousness_plus_Openness_minus": [
          {
              "perceived_negatively": false,
              "word": "traditional"
          },
          {
              "perceived_negatively": false,
              "word": "conventional"
          }
      ],
      "Conscientiousness_plus_Openness_plus": [
          {
              "perceived_negatively": false,
              "word": "sophisticated"
          },
          {
              "perceived_negatively": false,
              "word": "perfectionistic"
          },
          {
              "perceived_negatively": false,
              "word": "industrious"
          },
          {
              "perceived_negatively": false,
              "word": "dignified"
          },
          {
              "perceived_negatively": false,
              "word": "refined"
          },
          {
              "perceived_negatively": false,
              "word": "cultured"
          },
          {
              "perceived_negatively": false,
              "word": "foresighted"
          }
      ],
      "Extraversion_minus_Agreeableness_minus": [
          {
              "perceived_negatively": false,
              "word": "skeptical"
          },
          {
              "perceived_negatively": false,
              "word": "wary of others"
          },
          {
              "perceived_negatively": true,
              "word": "seclusive"
          },
          {
              "perceived_negatively": true,
              "word": "uncommunicative"
          },
          {
              "perceived_negatively": true,
              "word": "unsociable"
          },
          {
              "perceived_negatively": true,
              "word": "glum"
          },
          {
              "perceived_negatively": true,
              "word": "detached"
          },
          {
              "perceived_negatively": false,
              "word": "aloof"
          }
      ],
      "Extraversion_minus_Agreeableness_plus": [
          {
              "perceived_negatively": false,
              "word": "unaggressive"
          },
          {
              "perceived_negatively": false,
              "word": "humble"
          },
          {
              "perceived_negatively": false,
              "word": "submissive"
          },
          {
              "perceived_negatively": false,
              "word": "timid"
          },
          {
              "perceived_negatively": false,
              "word": "compliant"
          },
          {
              "perceived_negatively": false,
              "word": "naïve"
          }
      ],
      "Extraversion_minus_Conscientiousness_minus": [
          {
              "perceived_negatively": true,
              "word": "indirect"
          },
          {
              "perceived_negatively": true,
              "word": "unenergetic"
          },
          {
              "perceived_negatively": true,
              "word": "sluggish"
          },
          {
              "perceived_negatively": true,
              "word": "nonpersistent"
          },
          {
              "perceived_negatively": true,
              "word": "vague"
          }
      ],
      "Extraversion_minus_Conscientiousness_plus": [
          {
              "perceived_negatively": false,
              "word": "restrained"
          },
          {
              "perceived_negatively": false,
              "word": "serious"
          },
          {
              "perceived_negatively": false,
              "word": "discreet"
          },
          {
              "perceived_negatively": false,
              "word": "cautious"
          },
          {
              "perceived_negatively": false,
              "word": "principled"
          }
      ],
      "Extraversion_minus_Neuroticism_minus": [
          {
              "perceived_negatively": false,
              "word": "tranquil"
          },
          {
              "perceived_negatively": false,
              "word": "sedate"
          },
          {
              "perceived_negatively": false,
              "word": "placid"
          },
          {
              "perceived_negatively": false,
              "word": "impartial"
          },
          {
              "perceived_negatively": false,
              "word": "unassuming"
          },
          {
              "perceived_negatively": false,
              "word": "acquiescent"
          }
      ],
      "Extraversion_minus_Neuroticism_plus": [
          {
              "perceived_negatively": false,
              "word": "guarded"
          },
          {
              "perceived_negatively": false,
              "word": "pessimistic"
          },
          {
              "perceived_negatively": false,
              "word": "secretive"
          },
          {
              "perceived_negatively": true,
              "word": "cowardly"
          },
          {
              "perceived_negatively": false,
              "word": "secretive"
          }
      ],
      "Extraversion_minus_Openness_minus": [
          {
              "perceived_negatively": false,
              "word": "somber"
          },
          {
              "perceived_negatively": true,
              "word": "meek"
          },
          {
              "perceived_negatively": true,
              "word": "unadventurous"
          },
          {
              "perceived_negatively": false,
              "word": "passive"
          },
          {
              "perceived_negatively": true,
              "word": "apathetic"
          },
          {
              "perceived_negatively": false,
              "word": "docile"
          }
      ],
      "Extraversion_minus_Openness_plus": [
          {
              "perceived_negatively": false,
              "word": "inner-directed"
          },
          {
              "perceived_negatively": false,
              "word": "introspective"
          },
          {
              "perceived_negatively": false,
              "word": "meditative"
          },
          {
              "perceived_negatively": false,
              "word": "contemplating"
          },
          {
              "perceived_negatively": false,
              "word": "self-examining"
          }
      ],
      "Extraversion_plus_Agreeableness_minus": [
          {
              "perceived_negatively": false,
              "word": "opinionated"
          },
          {
              "perceived_negatively": true,
              "word": "forceful"
          },
          {
              "perceived_negatively": true,
              "word": "domineering"
          },
          {
              "perceived_negatively": true,
              "word": "boastful"
          },
          {
              "perceived_negatively": true,
              "word": "bossy"
          },
          {
              "perceived_negatively": false,
              "word": "dominant"
          },
          {
              "perceived_negatively": false,
              "word": "cunning"
          }
      ],
      "Extraversion_plus_Agreeableness_plus": [
          {
              "perceived_negatively": false,
              "word": "social"
          },
          {
              "perceived_negatively": false,
              "word": "energetic"
          },
          {
              "perceived_negatively": false,
              "word": "enthusiastic"
          },
          {
              "perceived_negatively": false,
              "word": "communicative"
          },
          {
              "perceived_negatively": false,
              "word": "vibrant"
          },
          {
              "perceived_negatively": false,
              "word": "spirited"
          },
          {
              "perceived_negatively": false,
              "word": "magnetic"
          },
          {
              "perceived_negatively": false,
              "word": "zestful"
          }
      ],
      "Extraversion_plus_Conscientiousness_minus": [
          {
              "perceived_negatively": false,
              "word": "boisterous"
          },
          {
              "perceived_negatively": false,
              "word": "mischievous"
          },
          {
              "perceived_negatively": false,
              "word": "exhibitionistic"
          },
          {
              "perceived_negatively": false,
              "word": "gregarious"
          },
          {
              "perceived_negatively": false,
              "word": "demonstrative"
          }
      ],
      "Extraversion_plus_Conscientiousness_plus": [
          {
              "perceived_negatively": false,
              "word": "active"
          },
          {
              "perceived_negatively": false,
              "word": "competitive"
          },
          {
              "perceived_negatively": false,
              "word": "persistent"
          },
          {
              "perceived_negatively": false,
              "word": "ambitious"
          },
          {
              "perceived_negatively": false,
              "word": "purposeful"
          }
      ],
      "Extraversion_plus_Neuroticism_minus": [
          {
              "perceived_negatively": false,
              "word": "confident"
          },
          {
              "perceived_negatively": false,
              "word": "bold"
          },
          {
              "perceived_negatively": false,
              "word": "assured"
          },
          {
              "perceived_negatively": false,
              "word": "uninhibited"
          },
          {
              "perceived_negatively": false,
              "word": "courageous"
          },
          {
              "perceived_negatively": false,
              "word": "brave"
          },
          {
              "perceived_negatively": false,
              "word": "self-satisfied"
          },
          {
              "perceived_negatively": false,
              "word": "vigorous"
          },
          {
              "perceived_negatively": false,
              "word": "strong"
          }
      ],
      "Extraversion_plus_Neuroticism_plus": [
          {
              "perceived_negatively": false,
              "word": "explosive"
          },
          {
              "perceived_negatively": true,
              "word": "wordy"
          },
          {
              "perceived_negatively": false,
              "word": "extravagant"
          },
          {
              "perceived_negatively": true,
              "word": "volatile"
          },
          {
              "perceived_negatively": false,
              "word": "flirtatious"
          }
      ],
      "Extraversion_plus_Openness_minus": [
          {
              "perceived_negatively": true,
              "word": "verbose"
          },
          {
              "perceived_negatively": true,
              "word": "unscrupulous"
          },
          {
              "perceived_negatively": true,
              "word": "pompous"
          }
      ],
      "Extraversion_plus_Openness_plus": [
          {
              "perceived_negatively": false,
              "word": "expressive"
          },
          {
              "perceived_negatively": false,
              "word": "candid"
          },
          {
              "perceived_negatively": false,
              "word": "dramatic"
          },
          {
              "perceived_negatively": false,
              "word": "spontaneous"
          },
          {
              "perceived_negatively": false,
              "word": "witty"
          },
          {
              "perceived_negatively": false,
              "word": "opportunistic"
          },
          {
              "perceived_negatively": false,
              "word": "independent"
          }
      ],
      "Neuroticism_minus_Agreeableness_minus": [
          {
              "perceived_negatively": true,
              "word": "unemotional"
          },
          {
              "perceived_negatively": true,
              "word": "insensitive"
          },
          {
              "perceived_negatively": true,
              "word": "unaffectionate"
          },
          {
              "perceived_negatively": true,
              "word": "passionless"
          }
      ],
      "Neuroticism_minus_Agreeableness_plus": [
          {
              "perceived_negatively": false,
              "word": "patient"
          },
          {
              "perceived_negatively": false,
              "word": "relaxed"
          },
          {
              "perceived_negatively": false,
              "word": "undemanding"
          },
          {
              "perceived_negatively": false,
              "word": "down-to-earth"
          },
          {
              "perceived_negatively": false,
              "word": "optimistic"
          },
          {
              "perceived_negatively": false,
              "word": "conceitless"
          },
          {
              "perceived_negatively": false,
              "word": "uncritical"
          },
          {
              "perceived_negatively": false,
              "word": "unpretentious"
          }
      ],
      "Neuroticism_minus_Conscientiousness_minus": [
          {
              "perceived_negatively": false,
              "word": "informal"
          },
          {
              "perceived_negatively": false,
              "word": "low-key"
          }
      ],
      "Neuroticism_minus_Conscientiousness_plus": [
          {
              "perceived_negatively": false,
              "word": "rational"
          },
          {
              "perceived_negatively": false,
              "word": "objective"
          },
          {
              "perceived_negatively": false,
              "word": "steady"
          },
          {
              "perceived_negatively": false,
              "word": "logical"
          },
          {
              "perceived_negatively": false,
              "word": "decisive"
          },
          {
              "perceived_negatively": false,
              "word": "poised"
          },
          {
              "perceived_negatively": false,
              "word": "concise"
          },
          {
              "perceived_negatively": false,
              "word": "thorough"
          },
          {
              "perceived_negatively": false,
              "word": "economical"
          },
          {
              "perceived_negatively": false,
              "word": "self-disciplined"
          }
      ],
      "Neuroticism_minus_Extraversion_minus": [
          {
              "perceived_negatively": false,
              "word": "unassuming"
          },
          {
              "perceived_negatively": true,
              "word": "unexcitable"
          },
          {
              "perceived_negatively": false,
              "word": "placid"
          },
          {
              "perceived_negatively": false,
              "word": "tranquil"
          }
      ],
      "Neuroticism_minus_Extraversion_plus": [
          {
              "perceived_negatively": false,
              "word": "unselfconscious"
          },
          {
              "perceived_negatively": false,
              "word": "weariless"
          },
          {
              "perceived_negatively": false,
              "word": "indefatigable"
          }
      ],
      "Neuroticism_minus_Openness_minus": [
          {
              "perceived_negatively": false,
              "word": "imperturbable"
          },
          {
              "perceived_negatively": true,
              "word": "insensitive"
          }
      ],
      "Neuroticism_minus_Openness_plus": [
          {
              "perceived_negatively": false,
              "word": "heartfelt"
          },
          {
              "perceived_negatively": false,
              "word": "versatile"
          },
          {
              "perceived_negatively": false,
              "word": "creative"
          },
          {
              "perceived_negatively": false,
              "word": "intellectual"
          },
          {
              "perceived_negatively": false,
              "word": "insightful"
          }
      ],
      "Neuroticism_plus_Agreeableness_minus": [
          {
              "perceived_negatively": true,
              "word": "temperamental"
          },
          {
              "perceived_negatively": true,
              "word": "irritable"
          },
          {
              "perceived_negatively": true,
              "word": "quarrelsome"
          },
          {
              "perceived_negatively": true,
              "word": "impatient"
          },
          {
              "perceived_negatively": true,
              "word": "grumpy"
          },
          {
              "perceived_negatively": true,
              "word": "crabby"
          },
          {
              "perceived_negatively": true,
              "word": "cranky"
          }
      ],
      "Neuroticism_plus_Agreeableness_plus": [
          {
              "perceived_negatively": false,
              "word": "emotional"
          },
          {
              "perceived_negatively": true,
              "word": "gullible"
          },
          {
              "perceived_negatively": false,
              "word": "affectionate"
          },
          {
              "perceived_negatively": false,
              "word": "sensitive"
          },
          {
              "perceived_negatively": false,
              "word": "soft"
          }
      ],
      "Neuroticism_plus_Conscientiousness_minus": [
          {
              "perceived_negatively": true,
              "word": "compulsive"
          },
          {
              "perceived_negatively": true,
              "word": "nosey"
          },
          {
              "perceived_negatively": true,
              "word": "self-indulgent"
          },
          {
              "perceived_negatively": true,
              "word": "forgetful"
          },
          {
              "perceived_negatively": true,
              "word": "impulsive"
          }
      ],
      "Neuroticism_plus_Conscientiousness_plus": [
          {
              "perceived_negatively": false,
              "word": "particular"
          },
          {
              "perceived_negatively": true,
              "word": "high-strung"
          }
      ],
      "Neuroticism_plus_Extraversion_minus": [
          {
              "perceived_negatively": false,
              "word": "guarded"
          },
          {
              "perceived_negatively": true,
              "word": "fretful"
          },
          {
              "perceived_negatively": true,
              "word": "insecure"
          },
          {
              "perceived_negatively": true,
              "word": "pessimistic"
          },
          {
              "perceived_negatively": false,
              "word": "secretive"
          },
          {
              "perceived_negatively": true,
              "word": "fearful"
          },
          {
              "perceived_negatively": true,
              "word": "negativistic"
          },
          {
              "perceived_negatively": false,
              "word": "self-critical"
          }
      ],
      "Neuroticism_plus_Extraversion_plus": [
          {
              "perceived_negatively": false,
              "word": "excitable"
          },
          {
              "perceived_negatively": true,
              "word": "wordy"
          },
          {
              "perceived_negatively": false,
              "word": "flirtatious"
          },
          {
              "perceived_negatively": true,
              "word": "explosive"
          },
          {
              "perceived_negatively": false,
              "word": "extravagant"
          },
          {
              "perceived_negatively": true,
              "word": "volatile"
          }
      ],
      "Neuroticism_plus_Openness_minus": [
          {
              "perceived_negatively": false,
              "word": "easily rattled"
          },
          {
              "perceived_negatively": false,
              "word": "easily irked"
          },
          {
              "perceived_negatively": false,
              "word": "apprehensive"
          }
      ],
      "Neuroticism_plus_Openness_plus": [
          {
              "perceived_negatively": false,
              "word": "excitable"
          },
          {
              "perceived_negatively": false,
              "word": "passionate"
          },
          {
              "perceived_negatively": false,
              "word": "sensual"
          }
      ],
      "Openness_minus_Agreeableness_minus": [
          {
              "perceived_negatively": true,
              "word": "coarse"
          },
          {
              "perceived_negatively": true,
              "word": "tactless"
          },
          {
              "perceived_negatively": true,
              "word": "curt"
          },
          {
              "perceived_negatively": true,
              "word": "narrow-minded"
          },
          {
              "perceived_negatively": true,
              "word": "callous"
          }
      ],
      "Openness_minus_Agreeableness_plus": [
          {
              "perceived_negatively": true,
              "word": "simple"
          },
          {
              "perceived_negatively": true,
              "word": "dependent"
          }
      ],
      "Openness_minus_Conscientiousness_minus": [
          {
              "perceived_negatively": true,
              "word": "shortsighted"
          },
          {
              "perceived_negatively": false,
              "word": "foolhardy"
          },
          {
              "perceived_negatively": true,
              "word": "illogical"
          },
          {
              "perceived_negatively": true,
              "word": "immature"
          },
          {
              "perceived_negatively": true,
              "word": "haphazard"
          },
          {
              "perceived_negatively": false,
              "word": "lax"
          },
          {
              "perceived_negatively": true,
              "word": "flippant"
          }
      ],
      "Openness_minus_Conscientiousness_plus": [
          {
              "perceived_negatively": false,
              "word": "conventional"
          },
          {
              "perceived_negatively": false,
              "word": "traditional"
          }
      ],
      "Openness_minus_Extraversion_minus": [
          {
              "perceived_negatively": false,
              "word": "predictable"
          },
          {
              "perceived_negatively": true,
              "word": "unimaginative"
          },
          {
              "perceived_negatively": false,
              "word": "somber"
          },
          {
              "perceived_negatively": true,
              "word": "apathetic"
          },
          {
              "perceived_negatively": true,
              "word": "unadventurous"
          }
      ],
      "Openness_minus_Extraversion_plus": [
          {
              "perceived_negatively": true,
              "word": "verbose"
          },
          {
              "perceived_negatively": true,
              "word": "unscrupulous"
          },
          {
              "perceived_negatively": true,
              "word": "pompous"
          }
      ],
      "Openness_minus_Neuroticism_minus": [
          {
              "perceived_negatively": false,
              "word": "imperturbable"
          },
          {
              "perceived_negatively": true,
              "word": "insensitive"
          }
      ],
      "Openness_minus_Neuroticism_plus": [
          {
              "perceived_negatively": false,
              "word": "easily rattled"
          },
          {
              "perceived_negatively": false,
              "word": "easily irked"
          },
          {
              "perceived_negatively": false,
              "word": "apprehensive"
          }
      ],
      "Openness_plus_Agreeableness_minus": [
          {
              "perceived_negatively": false,
              "word": "shrewd"
          },
          {
              "perceived_negatively": false,
              "word": "eccentric"
          },
          {
              "perceived_negatively": false,
              "word": "individualistic"
          }
      ],
      "Openness_plus_Agreeableness_plus": [
          {
              "perceived_negatively": false,
              "word": "idealistic"
          },
          {
              "perceived_negatively": false,
              "word": "diplomatic"
          },
          {
              "perceived_negatively": false,
              "word": "deep"
          },
          {
              "perceived_negatively": false,
              "word": "tactful"
          },
          {
              "perceived_negatively": false,
              "word": "genial"
          }
      ],
      "Openness_plus_Conscientiousness_minus": [
          {
              "perceived_negatively": false,
              "word": "unconventional"
          },
          {
              "perceived_negatively": false,
              "word": "quirky"
          }
      ],
      "Openness_plus_Conscientiousness_plus": [
          {
              "perceived_negatively": false,
              "word": "analytical"
          },
          {
              "perceived_negatively": false,
              "word": "perceptive"
          },
          {
              "perceived_negatively": false,
              "word": "informative"
          },
          {
              "perceived_negatively": false,
              "word": "articulate"
          },
          {
              "perceived_negatively": false,
              "word": "dignified"
          },
          {
              "perceived_negatively": false,
              "word": "cultured"
          }
      ],
      "Openness_plus_Extraversion_minus": [
          {
              "perceived_negatively": false,
              "word": "introspective"
          },
          {
              "perceived_negatively": false,
              "word": "meditative"
          },
          {
              "perceived_negatively": false,
              "word": "contemplating"
          },
          {
              "perceived_negatively": false,
              "word": "self-examining"
          },
          {
              "perceived_negatively": false,
              "word": "inner-directed"
          }
      ],
      "Openness_plus_Extraversion_plus": [
          {
              "perceived_negatively": false,
              "word": "worldly"
          },
          {
              "perceived_negatively": false,
              "word": "theatrical"
          },
          {
              "perceived_negatively": false,
              "word": "eloquent"
          },
          {
              "perceived_negatively": false,
              "word": "inquisitive"
          },
          {
              "perceived_negatively": false,
              "word": "intense"
          }
      ],
      "Openness_plus_Neuroticism_minus": [
          {
              "perceived_negatively": false,
              "word": "creative"
          },
          {
              "perceived_negatively": false,
              "word": "intellectual"
          },
          {
              "perceived_negatively": false,
              "word": "insightful"
          },
          {
              "perceived_negatively": false,
              "word": "versatile"
          },
          {
              "perceived_negatively": false,
              "word": "inventive"
          }
      ],
      "Openness_plus_Neuroticism_plus": [
          {
              "perceived_negatively": false,
              "word": "passionate"
          },
          {
              "perceived_negatively": false,
              "word": "excitable"
          },
          {
              "perceived_negatively": false,
              "word": "sensual"
          }
      ]
  },
  "values": {
      "Hedonism": [
          {
              "Term": "Taking pleasure in life",
              "LowDescription": {
                  "male": "He prefers activities with a purpose greater than just personal enjoyment",
                  "female": "She prefers activities with a purpose greater than just personal enjoyment",
                  "they": "They prefer activities with a purpose greater than just personal enjoyment",
                  "default": "You prefer activities with a purpose greater than just personal enjoyment"
              },
              "HighDescription": {
                  "male": "He is highly motivated to enjoy life to its fullest",
                  "female": "She is highly motivated to enjoy life to its fullest",
                  "they": "They are highly motivated to enjoy life to its fullest",
                  "default": "You are highly motivated to enjoy life to its fullest"
              }
          }
      ],
      "Self-transcendence": [
          {
              "Term": "Helping others",
              "LowDescription": {
                  "male": "He thinks people can handle their own business without interference",
                  "female": "She thinks people can handle their own business without interference",
                  "they": "They think people can handle their own business without interference",
                  "default": "You think people can handle their own business without interference"
              },
              "HighDescription": {
                  "male": "He thinks it is important to take care of the people around him",
                  "female": "She thinks it is important to take care of the people around her",
                  "they": "They think it is important to take care of the people around them",
                  "default": "You think it is important to take care of the people around you"
              }
          },
          {
              "Term": "Fairness",
              "LowDescription": {
                  "male": "He believes that people create their own opportunities",
                  "female": "He believes that people create their own opportunities",
                  "they": "They believe that people create their own opportunities",
                  "default": "You believe that people create their own opportunities"
              },
              "HighDescription": {
                  "male": "He believes in social justice and equality for all",
                  "female": "She believes in social justice and equality for all",
                  "they": "They believe in social justice and equality for all",
                  "default": "You believe in social justice and equality for all"
              }
          },
          {
              "Term": "Social justice",
              "LowDescription": {
                  "male": "He believes that people create their own opportunities",
                  "female": "She believes that people create their own opportunities",
                  "they": "They believe that people create their own opportunities",
                  "default": "You believe that people create their own opportunities"
              },
              "HighDescription": {
                  "male": "He believes in social justice and equality for all",
                  "female": "She believes in social justice and equality for all",
                  "they": "They believe in social justice and equality for all",
                  "default": "You believe in social justice and equality for all"
              }
          },
          {
              "Term": "Equality",
              "LowDescription": {
                  "male": "He believes that people create their own opportunities",
                  "female": "She believes that people create their own opportunities",
                  "they": "They believe that people create their own opportunities",
                  "default": "You believe that people create their own opportunities"
              },
              "HighDescription": {
                  "male": "He believes in social justice and equality for all",
                  "female": "She believes in social justice and equality for all",
                  "they": "They believe in social justice and equality for all",
                  "default": "You believe in social justice and equality for all"
              }
          },
          {
              "Term": "Community service",
              "LowDescription": {
                  "male": "He thinks people can handle their own business without interference",
                  "female": "She thinks people can handle their own business without interference",
                  "they": "They think people can handle their own business without interference",
                  "default": "You think people can handle their own business without interference"
              },
              "HighDescription": {
                  "male": "He thinks it is important to take care of the people around him",
                  "female": "She thinks it is important to take care of the people around her",
                  "they": "They think it is important to take care of the people around them",
                  "default": "You think it is important to take care of the people around you"
              }
          }
      ],
      "Conservation": [
          {
              "Term": "Tradition",
              "LowDescription": {
                  "male": "He cares more about making his own path than following what others have done",
                  "female": "She cares more about making her own path than following what others have done",
                  "they": "They care more about making their own path than following what others have done",
                  "default": "You care more about making your own path than following what others have done"
              },
              "HighDescription": {
                  "male": "He highly respects the groups he belongs to and follows their guidance",
                  "female": "She highly respects the groups she belongs to and follows their guidance",
                  "they": "They highly respect the groups they belong to and follow their guidance",
                  "default": "You highly respect the groups you belong to and follow their guidance"
              }
          },
          {
              "Term": "Harmony",
              "LowDescription": {
                  "male": "He decides what is right based on his beliefs, not what other people think",
                  "female": "She decides what is right based on her beliefs, not what other people think",
                  "they": "They decide what is right based on their beliefs, not what other people think",
                  "default": "You decide what is right based on your beliefs, not what other people think"
              },
              "HighDescription": {
                  "male": "He knows rules are there for a reason, and he tries never to break them",
                  "female": "She knows rules are there for a reason, and she tries never to break them",
                  "they": "They know rules are there for a reason, and they try never to break them",
                  "default": "You know rules are there for a reason, and you try never to break them"
              }
          },
          {
              "Term": "Humility",
              "LowDescription": {
                  "male": "He decides what is right based on his beliefs, not what other people think",
                  "female": "She decides what is right based on her beliefs, not what other people think",
                  "they": "They decide what is right based on their beliefs, not what other people think",
                  "default": "You decide what is right based on your beliefs, not what other people think"
              },
              "HighDescription": {
                  "male": "He sees worth in deferring to others",
                  "female": "She sees worth in deferring to others",
                  "they": "They see worth in deferring to others",
                  "default": "You see worth in deferring to others"
              }
          },
          {
              "Term": "Social norms",
              "LowDescription": {
                  "male": "He decides what is right based on his beliefs, not what other people think",
                  "female": "She decides what is right based on her beliefs, not what other people think",
                  "they": "They decide what is right based on their beliefs, not what other people think",
                  "default": "You decide what is right based on your beliefs, not what other people think"
              },
              "HighDescription": {
                  "male": "He knows rules are there for a reason, and he tries never to break them",
                  "female": "She knows rules are there for a reason, and she tries never to break them",
                  "they": "They know rules are there for a reason, and they try never to break them",
                  "default": "You know rules are there for a reason, and you try never to break them"
              }
          },
          {
              "Term": "Security",
              "LowDescription": {
                  "male": "He believes that security is worth sacrificing to achieve other goals",
                  "female": "She believes that security is worth sacrificing to achieve other goals",
                  "they": "They believe that security is worth sacrificing to achieve other goals",
                  "default": "You believe that security is worth sacrificing to achieve other goals"
              },
              "HighDescription": {
                  "male": "He believes that safety and security are important things to safeguard",
                  "female": "He believes that safety and security are important things to safeguard",
                  "they": "They believe that safety and security are important things to safeguard",
                  "default": "You believe that safety and security are important things to safeguard"
              }
          },
          {
              "Term": "Safety",
              "LowDescription": {
                  "male": "He believes that safety is worth sacrificing to achieve other goals",
                  "female": "She believes that safety is worth sacrificing to achieve other goals",
                  "they": "They believe that safety is worth sacrificing to achieve other goals",
                  "default": "You believe that safety is worth sacrificing to achieve other goals"
              },
              "HighDescription": {
                  "male": "He believes that safety and security are important things to safeguard",
                  "female": "He believes that safety and security are important things to safeguard",
                  "they": "They believe that safety and security are important things to safeguard",
                  "default": "You believe that safety and security are important things to safeguard"
              }
          }
      ],
      "Openness-to-change": [
          {
              "Term": "Independence",
              "LowDescription": {
                  "male": "He welcome when others direct their activities for him",
                  "female": "She welcome when others direct their activities for her",
                  "they": "They welcome when others direct their activities for them",
                  "default": "You welcome when others direct your activities for you"
              },
              "HighDescription": {
                  "male": "He likes to set his own goals to decide how to best achieve them",
                  "female": "She likes to set her own goals to decide how to best achieve them",
                  "they": "They like to set their own goals to decide how to best achieve them",
                  "default": "You like to set your own goals to decide how to best achieve them"
              }
          },
          {
              "Term": "Excitement",
              "LowDescription": {
                  "male": "He would rather stick with things he already knows he likes than risk trying something new and risky",
                  "female": "She would rather stick with things she already knows she likes than risk trying something new and risky",
                  "they": "They would rather stick with things they already know they like than risk trying something new and risky",
                  "default": "You would rather stick with things you already know you like than risk trying something new and risky"
              },
              "HighDescription": {
                  "male": "He is eager to search out new and exciting experiences",
                  "female": "She is eager to search out new and exciting experiences",
                  "they": "They are eager to search out new and exciting experiences",
                  "default": "You are eager to search out new and exciting experiences"
              }
          },
          {
              "Term": "Creativity",
              "LowDescription": {
                  "male": "He would rather stick with things he already knows he likes than risk trying something new and risky",
                  "female": "She would rather stick with things she already knows she likes than risk trying something new and risky",
                  "they": "They would rather stick with things they already know they like than risk trying something new and risky",
                  "default": "You would rather stick with things you already know you like than risk trying something new and risky"
              },
              "HighDescription": {
                  "male": "He is eager to search out new and exciting experiences",
                  "female": "She is eager to search out new and exciting experiences",
                  "they": "They are eager to search out new and exciting experiences",
                  "default": "You are eager to search out new and exciting experiences"
              }
          },
          {
              "Term": "Curiosity",
              "LowDescription": {
                  "male": "He would rather stick with things he already knows he likes than risk trying something new and risky",
                  "female": "She would rather stick with things she already knows she likes than risk trying something new and risky",
                  "they": "They would rather stick with things they already know they like than risk trying something new and risky",
                  "default": "You would rather stick with things you already know you like than risk trying something new and risky"
              },
              "HighDescription": {
                  "male": "He is eager to search out new and exciting experiences",
                  "female": "She is eager to search out new and exciting experiences",
                  "they": "They are eager to search out new and exciting experiences",
                  "default": "You are eager to search out new and exciting experiences"
              }
          },
          {
              "Term": "Self-direction",
              "LowDescription": {
                  "male": "He welcome when others direct their activities for him",
                  "female": "She welcome when others direct their activities for her",
                  "they": "They welcome when others direct their activities for them",
                  "default": "You welcome when others direct your activities for you"
              },
              "HighDescription": {
                  "male": "He likes to set his own goals to decide how to best achieve them",
                  "female": "She likes to set her own goals to decide how to best achieve them",
                  "they": "They like to set their own goals to decide how to best achieve them",
                  "default": "You like to set your own goals to decide how to best achieve them"
              }
          },
          {
              "Term": "Freedom",
              "LowDescription": {
                  "male": "He welcome when others direct their activities for him",
                  "female": "She welcome when others direct their activities for her",
                  "they": "They welcome when others direct their activities for them",
                  "default": "You welcome when others direct your activities for you"
              },
              "HighDescription": {
                  "male": "He likes to set his own goals to decide how to best achieve them",
                  "female": "She likes to set her own goals to decide how to best achieve them",
                  "they": "They like to set their own goals to decide how to best achieve them",
                  "default": "You like to set your own goals to decide how to best achieve them"
              }
          }
      ],
      "Self-enhancement": [
          {
              "Term": "Achieving success",
              "LowDescription": {
                  "male": "He makes decisions with little regard for how they show off his talents",
                  "female": "She makes decisions with little regard for how they show off her talents",
                  "they": "They make decisions with little regard for how they show off their talents",
                  "default": "You make decisions with little regard for how they show off your talents"
              },
              "HighDescription": {
                  "male": "He seeks out opportunities to improve himself and demonstrates that he is a capable person",
                  "female": "She seeks out opportunities to improve herself and demonstrates that she is a capable person",
                  "they": "They seek out opportunities to improve themselves and demonstrate that they are a capable person",
                  "default": "You seek out opportunities to improve yourself and demonstrate that you are a capable person"
              }
          },
          {
              "Term": "Gaining social status",
              "LowDescription": {
                  "male": "He is comfortable with his social status and doesn't feel a strong need to improve it",
                  "female": "She is comfortable with her social status and doesn't feel a strong need to improve it",
                  "they": "They are comfortable with their social status and don't feel a strong need to improve it",
                  "default": "You are comfortable with your social status and don't feel a strong need to improve it"
              },
              "HighDescription": {
                  "male": "He puts substantial effort into improving his status and public image",
                  "female": "She puts substantial effort into improving her status and public image",
                  "they": "They put substantial effort into improving their status and public image",
                  "default": "You put substantial effort into improving your status and public image"
              }
          },
          {
              "Term": "Ambition",
              "LowDescription": {
                  "male": "He is comfortable with his social status and doesn't feel a strong need to improve it",
                  "female": "She is comfortable with her social status and doesn't feel a strong need to improve it",
                  "they": "They are comfortable with their social status and don't feel a strong need to improve it",
                  "default": "You are comfortable with your social status and don't feel a strong need to improve it"
              },
              "HighDescription": {
                  "male": "He feels it is important to push forward towards goals",
                  "female": "She feels it is important to push forward towards goals",
                  "they": "They feel it is important to push forward towards goals",
                  "default": "You feel it is important to push forward towards goals"
              }
          },
          {
              "Term": "High achievement",
              "LowDescription": {
                  "male": "He makes decisions with little regard for how they show off his talents",
                  "female": "She makes decisions with little regard for how they show off her talents",
                  "they": "They make decisions with little regard for how they show off their talents",
                  "default": "You make decisions with little regard for how they show off your talents"
              },
              "HighDescription": {
                  "male": "He seeks out opportunities to improve himself and demonstrates that he is a capable person",
                  "female": "She seeks out opportunities to improve herself and demonstrates that she is a capable person",
                  "they": "They seek out opportunities to improve themselves and demonstrate that they are a capable person",
                  "default": "You seek out opportunities to improve yourself and demonstrate that you are a capable person"
              }
          }
      ]
  }
};
