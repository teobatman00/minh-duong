import { library } from "@fortawesome/fontawesome-svg-core";
import { faEdit, faBookmark as faBookmarkRegular } from "@fortawesome/free-regular-svg-icons";
import {
    faBookmark as faBookmarkSolid,
    faArrowUp,
    faEye,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

// Central icon registration so all FontAwesome icons used across the site
// (MDX content, navbar, and the reading-progress/bookmark/view-counter widgets)
// share a single library instance.
library.add(
    faEdit,
    faBookmarkRegular,
    faBookmarkSolid,
    faArrowUp,
    faEye,
    faGithub
);
