/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, f as addAttribute, e as renderComponent, i as renderTransition } from '../astro_D9J-35kJ.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import 'cssesc';
import { C as CardPlayButton, p as playlists, $ as $$Layout } from './_id__CeriYz0z.mjs';

const $$Astro$1 = createAstro();
const $$PlayListItemCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PlayListItemCard;
  const { playlist } = Astro2.props;
  const { id, cover, title, artists, color } = playlist;
  const artistsString = artists.join(", ");
  return renderTemplate`${maybeRenderHead()}<article class="group relative hover:bg-zinc-800 shadow-lg hover:shadow-xl bg-zinc-500/30 rounded-md ransi transition-all duration-300"> <div${addAttribute(`absolute right-4 bottom-20 translate-y-4
    transition-all duration-500 opacity-0
    group-hover:translate-y-0 group-hover:opacity-100
    z-10`, "class")}> ${renderComponent($$result, "CardPlayButton", CardPlayButton, { "id": id, "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/ManDenDev/Workspace/aprendiendo-astro/projects/01-spotify-clone/src/components/CardPlayButton", "client:component-export": "CardPlayButton" })} </div> <a${addAttribute(`/playlist/${id}`, "href")} class="playlist-item transition-all duration-300 flex relative p-2 overflow-hidden gap-2 pb-6 rounded-md w-44 flex-col"${addAttribute(renderTransition($$result, "iyk6g74u", "", `playlist-${id}-box`), "data-astro-transition-scope")}> <picture class="aspect-square w-full h-auto flex-none"> <img${addAttribute(cover, "src")}${addAttribute(`Cover of ${title} by ${artistsString}`, "alt")} class="object-cover w-full h-full rounded-md"${addAttribute(renderTransition($$result, "ogeug6cu", "", `playlist-${id}-image`), "data-astro-transition-scope")}> </picture> <div class="flex flex-auto flex-col px-2"> <h4 class="text-white text-sm"${addAttribute(renderTransition($$result, "ls2g7uvg", "", `playlist-${id}-title`), "data-astro-transition-scope")}> ${title} </h4> <span class="text-xs text-gray-400"${addAttribute(renderTransition($$result, "b2lel7vz", "", `playlist-${id}-artists`), "data-astro-transition-scope")}> ${artistsString} </span> </div> </a> </article>`;
}, "C:/Users/ManDenDev/Workspace/aprendiendo-astro/projects/01-spotify-clone/src/components/PlayListItemCard.astro", "self");

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Spotify Clone && Manuel Denis Developer || @manDenDev" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div id="playlist-container" class="relative transition-all duration-1000 bg-green-600"> <!-- <PageHeader /> --> <div class="relative z-10 px-6 pt-10"> <!-- <Greeting /> --> <div class="flex flex-wrap mt-6 gap-4"> ${playlists.map((playlist) => renderTemplate`${renderComponent($$result2, "PlayListItemCard", $$PlayListItemCard, { "playlist": playlist })}`)} </div> <div class="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/80 -z-[1]"></div> </div>  </div> ` })}`;
}, "C:/Users/ManDenDev/Workspace/aprendiendo-astro/projects/01-spotify-clone/src/pages/index.astro", void 0);

const $$file = "C:/Users/ManDenDev/Workspace/aprendiendo-astro/projects/01-spotify-clone/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
