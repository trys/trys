---
published: true
title: "building a synth with Web Audio API - part one"
layout: post
date: 2015-03-17
categories: web
excerpt: "Building a synthesizer using Web Audio API - part one - trys mudford. front-end developer in Sussex"
---

I have begun the construction of a browser-based synthesizer using [Web Audio API](https://dvcs.w3.org/hg/audio/raw-file/tip/webaudio/specification.html). Being a rather musical individual, I thought it would be a fun side project to undertake. The final product is a little vague at this stage - I was initially thinking about basing it on the [Minimoog](http://www.moogmusic.com/products/Minimoog-Voyagers) or the [Gaia](http://www.roland.co.uk/products/gaia_sh-01/) (I own one of these which might help), but these may be ambitious targets at this point. Still, nice to have a goal.

The intention however, is to create a working browser-based synth ideally encompassing the following features:

1. Channels - more than one. I'm thinking three channels like the Gaia, all with switchable settings.
2. Oscillators - with wave type, pitch and detune controls.
3. Envelopes - full ADSR envelopes on VCO, VCA and Filter modules.
3. Filters - LPF, HPF, Band pass might be nice too.
4. Effects - Delay, Pan, Reverb, Chorus.
5. Visualisation - whether that is waveform or something entirely different.

I'll focus on the logic to begin with before working on a UI. I think it'll be easier to design once I start getting some features down. I also don't want to get so caught up the UI that I don't make any headway on the sounds.

Progress will be documented on [GitHub](https://github.com/trys/synth/). I will be publishing to the gh-pages branch so the latest version of the synth can be viewed (and played - try it now!) [here](http://trys.github.io/Synth/).

I'm going to attempt to create it without jQuery, it's far too easy to default to it for every project and I think it can lead to sloppy coding. Therefore, it's not essential for this so I'll go at it alone. Improving my libraryless JavaScript ability is never a bad thing either.

## The synth so far

I've got classes set up for a VCO, VCA and a basic envelope. I've then set the keyboard to trigger two VCOs panned far left and far right with a bit of detune on the latter. With a sine wave set as the oscillator waveforms, it creates a nice subtle chorus-y synth. Not a bad start.

The attack and release are bit messed up but it's still early days. I'll also need to swap out the envelope to a full ADSR module and look into de-zippering. I believe that's what can stop the small clicking sound in between note changes.

If you have any ideas or suggestions for this project, please raise an [issue](https://github.com/trys/Synth/issues) or drop me a [tweet](http://twitter.com/trysmudford).