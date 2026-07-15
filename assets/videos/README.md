# assets/videos

Place lecture recordings, demo clips, or module walkthroughs here (e.g. `.mp4`, `.webm`).

No video files ship with this project by default — reference your own with the native `<video>` tag, which is also taught in Module 13:

```html
<video controls width="480" poster="assets/images/hero-illustration.svg">
  <source src="assets/videos/your-clip.mp4" type="video/mp4">
  <source src="assets/videos/your-clip.webm" type="video/webm">
</video>
```

Keep clips reasonably compressed — large video files will slow down page loads for students on limited bandwidth.
