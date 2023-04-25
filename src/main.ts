import { fromEvent, map, scan } from "rxjs";

const $ = document.querySelector.bind(document);

const counter = $("#count");

fromEvent<MouseEvent>($("#button")!, "click")
  .pipe(
    map(() => 1),
    scan((count, click) => count + click, 0)
  )
  .subscribe((count) => {
    counter!.textContent = `${count}`;
  });

const keyView = $("#key");

fromEvent<KeyboardEvent>(document, "keydown").subscribe((event) => {
  const key = event.key;
  keyView!.textContent = `${key}`;
});
