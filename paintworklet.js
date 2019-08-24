registerPaint(
  "test",
  class {
    static get inputProperties() {
      return ["list-style-image"]
    }
    paint(ctx, { width, height }, properties) {
      const img = properties.get("list-style-image")
      const w2 = width / 2
      const h2 = height / 2
      ctx.drawImage(img, 0, 0, w2, h2)
      ctx.drawImage(img, w2, h2, w2, h2)
    }
  }
)
