//generated from openapi-typescript
export interface paths {
    "/ping": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Ping healthcheck
         * @description Returns a plaintext response containing only the word "pong" if the API is healthy
         */
        get: operations["get-ping"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/manga": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Manga list
         * @description Search a list of Manga.
         */
        get: operations["get-search-manga"];
        put?: never;
        /**
         * Create Manga
         * @description Create a new Manga.
         */
        post: operations["post-manga"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/manga/{id}/aggregate": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Manga ID */
                id: string;
            };
            cookie?: never;
        };
        /** Get Manga volumes & chapters */
        get: operations["get-manga-aggregate"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/manga/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Manga ID */
                id: string;
            };
            cookie?: never;
        };
        /**
         * Get Manga
         * @description Get Manga.
         */
        get: operations["get-manga-id"];
        /** Update Manga */
        put: operations["put-manga-id"];
        post?: never;
        /** Delete Manga */
        delete: operations["delete-manga-id"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/auth/login": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Login
         * @deprecated
         */
        post: operations["post-auth-login"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/auth/check": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Check the set of permissions associated with the current token
         * @description The returned list of permissions is computed depending on the generic role permissions that the token user has, their personal overrides, and the OpenID scopes of the token (we do not offer granular token permissions yet)
         *
         */
        get: operations["get-auth-check"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/auth/logout": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Logout
         * @deprecated
         */
        post: operations["post-auth-logout"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/auth/refresh": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Refresh token
         * @deprecated
         */
        post: operations["post-auth-refresh"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/client": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List own Api Clients */
        get: operations["get-list-apiclients"];
        put?: never;
        /** Create ApiClient */
        post: operations["post-create-apiclient"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/client/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description ApiClient ID */
                id: string;
            };
            cookie?: never;
        };
        /** Get Api Client by ID */
        get: operations["get-apiclient"];
        put?: never;
        /** Edit ApiClient */
        post: operations["post-edit-apiclient"];
        /** Delete Api Client */
        delete: operations["delete-apiclient"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/client/{id}/secret": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description ApiClient ID */
                id: string;
            };
            cookie?: never;
        };
        /** Get Secret for Client by ID */
        get: operations["get-apiclient-secret"];
        put?: never;
        /** Regenerate Client Secret */
        post: operations["post-regenerate-apiclient-secret"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/group": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Scanlation Group list */
        get: operations["get-search-group"];
        put?: never;
        /** Create Scanlation Group */
        post: operations["post-group"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/group/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Scanlation Group ID */
                id: string;
            };
            cookie?: never;
        };
        /** Get Scanlation Group */
        get: operations["get-group-id"];
        /** Update Scanlation Group */
        put: operations["put-group-id"];
        post?: never;
        /** Delete Scanlation Group */
        delete: operations["delete-group-id"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/group/{id}/follow": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Follow Scanlation Group */
        post: operations["post-group-id-follow"];
        /** Unfollow Scanlation Group */
        delete: operations["delete-group-id-follow"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/list": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Create CustomList */
        post: operations["post-list"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/list/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description CustomList ID */
                id: string;
            };
            cookie?: never;
        };
        /** Get CustomList */
        get: operations["get-list-id"];
        /**
         * Update CustomList
         * @description The size of the body is limited to 8KB.
         */
        put: operations["put-list-id"];
        post?: never;
        /** Delete CustomList */
        delete: operations["delete-list-id"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/list/{id}/follow": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description CustomList ID */
                id: string;
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Follow CustomList
         * @description The request body is empty
         */
        post: operations["follow-list-id"];
        /**
         * Unfollow CustomList
         * @description The request body is empty
         */
        delete: operations["unfollow-list-id"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/manga/{id}/list/{listId}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Manga ID */
                id: string;
                /** @description CustomList ID */
                listId: string;
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Add Manga in CustomList */
        post: operations["post-manga-id-list-listId"];
        /** Remove Manga in CustomList */
        delete: operations["delete-manga-id-list-listId"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/user/list": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get logged User CustomList list
         * @description This will list public and private CustomList
         */
        get: operations["get-user-list"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/user/{id}/list": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description User ID */
                id: string;
            };
            cookie?: never;
        };
        /**
         * Get User's CustomList list
         * @description This will list only public CustomList
         */
        get: operations["get-user-id-list"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/user": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** User list */
        get: operations["get-user"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/user/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description User ID */
                id: string;
            };
            cookie?: never;
        };
        /** Get User */
        get: operations["get-user-id"];
        put?: never;
        post?: never;
        /**
         * Delete User
         * @deprecated
         */
        delete: operations["delete-user-id"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/user/delete/{code}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description User delete code */
                code: string;
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Approve User deletion
         * @deprecated
         */
        post: operations["post-user-delete-code"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/chapter": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Chapter list
         * @description Chapter list. If you want the Chapters of a given Manga, please check the feed endpoints.
         */
        get: operations["get-chapter"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/chapter/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Chapter ID */
                id: string;
            };
            cookie?: never;
        };
        /** Get Chapter */
        get: operations["get-chapter-id"];
        /** Update Chapter */
        put: operations["put-chapter-id"];
        post?: never;
        /** Delete Chapter */
        delete: operations["delete-chapter-id"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/user/follows/manga/feed": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get logged User followed Manga feed (Chapter list) */
        get: operations["get-user-follows-manga-feed"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/list/{id}/feed": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        /** CustomList Manga feed */
        get: operations["get-list-id-feed"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/manga/{id}/follow": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Follow Manga */
        post: operations["post-manga-id-follow"];
        /** Unfollow Manga */
        delete: operations["delete-manga-id-follow"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/cover": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** CoverArt list */
        get: operations["get-cover"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/cover/{mangaOrCoverId}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Is Manga UUID on POST */
                mangaOrCoverId: string;
            };
            cookie?: never;
        };
        /** Get Cover */
        get: operations["get-cover-id"];
        /** Edit Cover */
        put: operations["edit-cover"];
        /** Upload Cover */
        post: operations["upload-cover"];
        /** Delete Cover */
        delete: operations["delete-cover"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/author": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Author list */
        get: operations["get-author"];
        put?: never;
        /** Create Author */
        post: operations["post-author"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/author/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Author ID */
                id: string;
            };
            cookie?: never;
        };
        /** Get Author */
        get: operations["get-author-id"];
        /** Update Author */
        put: operations["put-author-id"];
        post?: never;
        /** Delete Author */
        delete: operations["delete-author-id"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/legacy/mapping": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Legacy ID mapping */
        post: operations["post-legacy-mapping"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/manga/{id}/feed": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Manga ID */
                id: string;
            };
            cookie?: never;
        };
        /** Manga feed */
        get: operations["get-manga-id-feed"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/manga/{id}/read": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        /**
         * Manga read markers
         * @description A list of chapter ids that are marked as read for the specified manga
         */
        get: operations["get-manga-chapter-readmarkers"];
        put?: never;
        /**
         * Manga read markers batch
         * @description Send a lot of chapter ids for one manga to mark as read and/or unread
         */
        post: operations["post-manga-chapter-readmarkers"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/manga/read": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Manga read markers
         * @description A list of chapter ids that are marked as read for the given manga ids
         */
        get: operations["get-manga-chapter-readmarkers-2"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/manga/random": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get a random Manga */
        get: operations["get-manga-random"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/at-home/server/{chapterId}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Chapter ID */
                chapterId: string;
            };
            cookie?: never;
        };
        /** Get MangaDex@Home server URL */
        get: operations["get-at-home-server-chapterId"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/manga/tag": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Tag list */
        get: operations["get-manga-tag"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/user/me": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Logged User details */
        get: operations["get-user-me"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/user/follows/group": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get logged User followed Groups */
        get: operations["get-user-follows-group"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/user/follows/group/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Scanlation Group id */
                id: string;
            };
            cookie?: never;
        };
        /** Check if logged User follows a Group */
        get: operations["get-user-follows-group-id"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/user/follows/user": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get logged User followed User list */
        get: operations["get-user-follows-user"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/user/follows/user/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description User id */
                id: string;
            };
            cookie?: never;
        };
        /** Check if logged User follows a User */
        get: operations["get-user-follows-user-id"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/user/follows/manga": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get logged User followed Manga list */
        get: operations["get-user-follows-manga"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/user/follows/manga/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Manga id */
                id: string;
            };
            cookie?: never;
        };
        /** Check if logged User follows a Manga */
        get: operations["get-user-follows-manga-id"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/user/follows/list": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get logged User followed CustomList list */
        get: operations["get-user-follows-list"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/user/follows/list/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description CustomList id */
                id: string;
            };
            cookie?: never;
        };
        /** Check if logged User follows a CustomList */
        get: operations["get-user-follows-list-id"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/manga/status": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get all Manga reading status for logged User */
        get: operations["get-manga-status"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/manga/{id}/status": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        /** Get a Manga reading status */
        get: operations["get-manga-id-status"];
        put?: never;
        /** Update Manga reading status */
        post: operations["post-manga-id-status"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/manga/draft/{id}": {
        parameters: {
            query?: {
                "includes[]"?: components["schemas"]["ReferenceExpansionManga"];
            };
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        /** Get a specific Manga Draft */
        get: operations["get-manga-id-draft"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/manga/draft/{id}/commit": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Submit a Manga Draft */
        post: operations["commit-manga-draft"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/manga/draft": {
        parameters: {
            query?: {
                limit?: number;
                offset?: number;
                state?: "draft" | "submitted" | "rejected";
                order?: {
                    /** @enum {string} */
                    title?: "asc" | "desc";
                    /** @enum {string} */
                    year?: "asc" | "desc";
                    /** @enum {string} */
                    createdAt?: "asc" | "desc";
                    /** @enum {string} */
                    updatedAt?: "asc" | "desc";
                };
                "includes[]"?: components["schemas"]["ReferenceExpansionManga"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get a list of Manga Drafts */
        get: operations["get-manga-drafts"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/captcha/solve": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Solve Captcha
         * @description Captchas can be solved explicitly through this endpoint, another way is to add a `X-Captcha-Result` header to any request. The same logic will verify the captcha and is probably more convenient because it takes one less request.
         *
         *     Authentication is optional. Captchas are tracked for both the client ip and for the user id, if you are logged in you want to send your session token but that is not required.
         */
        post: operations["post-captcha-solve"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/report/reasons/{category}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                category: "manga" | "chapter" | "scanlation_group" | "user" | "author";
            };
            cookie?: never;
        };
        /** Get a list of report reasons */
        get: operations["get-report-reasons-by-category"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/report": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get a list of reports by the user */
        get: operations["get-reports"];
        put?: never;
        /** Create a new Report */
        post: operations["post-report"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/upload": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get the current User upload session */
        get: operations["get-upload-session"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/upload/begin": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Start an upload session */
        post: operations["begin-upload-session"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/upload/begin/{chapterId}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                chapterId: string;
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Start an edit chapter session */
        post: operations["begin-edit-session"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/upload/{uploadSessionId}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                uploadSessionId: string;
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Upload images to the upload session */
        post: operations["put-upload-session-file"];
        /** Abandon upload session */
        delete: operations["abandon-upload-session"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/upload/{uploadSessionId}/commit": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                uploadSessionId: string;
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Commit the upload session and specify chapter data */
        post: operations["commit-upload-session"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/upload/{uploadSessionId}/{uploadSessionFileId}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                uploadSessionId: string;
                uploadSessionFileId: string;
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /** Delete an uploaded image from the Upload Session */
        delete: operations["delete-uploaded-session-file"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/upload/{uploadSessionId}/batch": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                uploadSessionId: string;
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /** Delete a set of uploaded images from the Upload Session */
        delete: operations["delete-uploaded-session-files"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/upload/check-approval-required": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Check if a given manga / locale for a User needs moderation approval */
        post: operations["upload-check-approval-required"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/manga/{mangaId}/relation": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                mangaId: string;
            };
            cookie?: never;
        };
        /** Manga relation list */
        get: operations["get-manga-relation"];
        put?: never;
        /**
         * Create Manga relation
         * @description Create a new Manga relation.
         */
        post: operations["post-manga-relation"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/manga/{mangaId}/relation/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                mangaId: string;
                id: string;
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /** Delete Manga relation */
        delete: operations["delete-manga-relation-id"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/rating": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get your ratings */
        get: operations["get-rating"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/rating/{mangaId}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                mangaId: string;
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Create or update Manga rating */
        post: operations["post-rating-manga-id"];
        /** Delete Manga rating */
        delete: operations["delete-rating-manga-id"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/statistics/chapter/{uuid}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get statistics about given chapter */
        get: operations["get-statistics-chapter-uuid"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/statistics/chapter": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get statistics about given chapters */
        get: operations["get-statistics-chapters"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/statistics/group/{uuid}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get statistics about given scanlation group */
        get: operations["get-statistics-group-uuid"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/statistics/group": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get statistics about given groups */
        get: operations["get-statistics-groups"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/statistics/manga/{uuid}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get statistics about given Manga */
        get: operations["get-statistics-manga-uuid"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/statistics/manga": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Find statistics about given Manga */
        get: operations["get-statistics-manga"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/settings/template": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get latest Settings template */
        get: operations["get-settings-template"];
        put?: never;
        /** Create Settings template */
        post: operations["post-settings-template"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/settings/template/{version}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Settings template by version id */
        get: operations["get-settings-template-version"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/settings": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get an User Settings */
        get: operations["get-settings"];
        put?: never;
        /** Create or update an User Settings */
        post: operations["post-settings"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/user/history": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get users reading history */
        get: operations["get-reading-history"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/forums/thread": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Create forums thread
         * @description Creates a thread in the forums for the given resource, which backs the comments functionality.
         *     A thread is only created if it doesn't exist yet; otherwise the preexisting thread is returned.
         *
         */
        post: operations["forums-thread-create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        /** MangaRequest */
        MangaRequest: {
            title?: components["schemas"]["LocalizedString"];
            altTitles?: components["schemas"]["LocalizedString"][];
            description?: components["schemas"]["LocalizedString"];
            authors?: string[];
            artists?: string[];
            links?: {
                [key: string]: string;
            };
            originalLanguage?: string;
            lastVolume?: string | null;
            lastChapter?: string | null;
            /** @enum {string|null} */
            publicationDemographic?: "shounen" | "shoujo" | "josei" | "seinen" | null;
            /** @enum {string} */
            status?: "completed" | "ongoing" | "cancelled" | "hiatus";
            /** @description Year of release */
            year?: number | null;
            /** @enum {string} */
            contentRating?: "safe" | "suggestive" | "erotica" | "pornographic";
            chapterNumbersResetOnNewVolume?: boolean;
            tags?: string[];
            /** Format: uuid */
            primaryCover?: string | null;
            version?: number;
        };
        /** LocalizedString */
        LocalizedString: {
            [key: string]: string;
        };
        /** MangaResponse */
        MangaResponse: {
            /** @enum {string} */
            result?: "ok" | "error";
            /** @default entity */
            response: string;
            data?: components["schemas"]["Manga"];
        };
        /** ChapterResponse */
        ChapterResponse: {
            /** @enum {string} */
            result?: "ok" | "error";
            /** @default entity */
            response: string;
            data?: components["schemas"]["Chapter"];
        };
        /** Relationship */
        Relationship: {
            /** Format: uuid */
            id?: string;
            type?: string;
            /**
             * @description Related Manga type, only present if you are on a Manga entity and a Manga relationship
             * @enum {string}
             */
            related?: "monochrome" | "main_story" | "adapted_from" | "based_on" | "prequel" | "side_story" | "doujinshi" | "same_franchise" | "shared_universe" | "sequel" | "spin_off" | "alternate_story" | "alternate_version" | "preserialization" | "colored" | "serialization";
            /** @description If Reference Expansion is applied, contains objects attributes */
            attributes?: Record<string, never> | null;
        };
        /** Chapter */
        Chapter: {
            /** Format: uuid */
            id?: string;
            /** @enum {string} */
            type?: "chapter";
            attributes?: components["schemas"]["ChapterAttributes"];
            relationships?: components["schemas"]["Relationship"][];
        };
        /** Manga */
        Manga: {
            /** Format: uuid */
            id?: string;
            /** @enum {string} */
            type?: "manga";
            attributes?: components["schemas"]["MangaAttributes"];
            relationships?: components["schemas"]["Relationship"][];
        };
        /** ErrorResponse */
        ErrorResponse: {
            /** @default error */
            result: string;
            errors?: components["schemas"]["Error"][];
        };
        /** Error */
        Error: {
            id?: string;
            status?: number;
            title?: string;
            detail?: string | null;
            context?: string | null;
        };
        /** ChapterAttributes */
        ChapterAttributes: {
            title?: string | null;
            volume?: string | null;
            chapter?: string | null;
            /** @description Count of readable images for this chapter */
            pages?: number;
            translatedLanguage?: string;
            /** Format: uuid */
            uploader?: string;
            /** @description Denotes a chapter that links to an external source. */
            externalUrl?: string | null;
            version?: number;
            createdAt?: string;
            updatedAt?: string;
            publishAt?: string;
            readableAt?: string;
            isUnavailable?: boolean;
        };
        /** MangaAttributes */
        MangaAttributes: {
            title?: components["schemas"]["LocalizedString"];
            altTitles?: components["schemas"]["LocalizedString"][];
            description?: components["schemas"]["LocalizedString"];
            isLocked?: boolean;
            links?: {
                [key: string]: string;
            };
            originalLanguage?: string;
            lastVolume?: string | null;
            lastChapter?: string | null;
            /** @enum {string|null} */
            publicationDemographic?: "shounen" | "shoujo" | "josei" | "seinen" | null;
            /** @enum {string} */
            status?: "completed" | "ongoing" | "cancelled" | "hiatus";
            /** @description Year of release */
            year?: number | null;
            /** @enum {string} */
            contentRating?: "safe" | "suggestive" | "erotica" | "pornographic";
            chapterNumbersResetOnNewVolume?: boolean;
            availableTranslatedLanguages?: string[];
            /** Format: uuid */
            latestUploadedChapter?: string;
            tags?: components["schemas"]["Tag"][];
            /** @enum {string} */
            state?: "draft" | "submitted" | "published" | "rejected";
            version?: number;
            createdAt?: string;
            updatedAt?: string;
        };
        MangaCreate: components["schemas"]["MangaRequest"] & unknown;
        MangaEdit: components["schemas"]["MangaRequest"] & unknown;
        ChapterEdit: components["schemas"]["ChapterRequest"] & unknown;
        /** Response */
        Response: {
            /** @enum {string} */
            result?: "ok" | "error";
        };
        /** Login */
        Login: {
            username?: string;
            email?: string;
            password: string;
        };
        /** LoginResponse */
        LoginResponse: {
            /** @enum {string} */
            result?: "ok" | "error";
            token?: {
                session?: string;
                refresh?: string;
            };
        };
        /** CheckResponse */
        CheckResponse: {
            /** @default ok */
            result: string;
            isAuthenticated?: boolean;
            roles?: string[];
            permissions?: string[];
        };
        /** LogoutResponse */
        LogoutResponse: {
            /** @enum {string} */
            result?: "ok" | "error";
        };
        /** RefreshToken */
        RefreshToken: {
            token: string;
        };
        /** RefreshResponse */
        RefreshResponse: {
            /** @enum {string} */
            result: "ok" | "error";
            token?: {
                session?: string;
                refresh?: string;
            };
            message?: string;
        };
        /** AccountActivateResponse */
        AccountActivateResponse: {
            /** @enum {string} */
            result?: "ok";
        };
        /** CreateAccount */
        CreateAccount: {
            username: string;
            password: string;
            /** Format: email */
            email: string;
        };
        /** ScanlationGroupResponse */
        ScanlationGroupResponse: {
            /** @enum {string} */
            result?: "ok";
            /** @default entity */
            response: string;
            data?: components["schemas"]["ScanlationGroup"];
        };
        /** ScanlationGroup */
        ScanlationGroup: {
            /** Format: uuid */
            id?: string;
            /** @enum {string} */
            type?: "scanlation_group";
            attributes?: components["schemas"]["ScanlationGroupAttributes"];
            relationships?: components["schemas"]["Relationship"][];
        };
        /** ScanlationGroupAttributes */
        ScanlationGroupAttributes: {
            name?: string;
            altNames?: components["schemas"]["LocalizedString"][];
            website?: string | null;
            ircServer?: string | null;
            ircChannel?: string | null;
            discord?: string | null;
            contactEmail?: string | null;
            description?: string | null;
            /** Format: uri */
            twitter?: string | null;
            /** Format: uri */
            mangaUpdates?: string | null;
            focusedLanguage?: string[] | null;
            locked?: boolean;
            official?: boolean;
            verified?: boolean;
            inactive?: boolean;
            exLicensed?: boolean;
            /**
             * @description Should respected ISO 8601 duration specification: https://en.wikipedia.org/wiki/ISO_8601#Durations
             * @example P4D
             */
            publishDelay?: string;
            version?: number;
            createdAt?: string;
            updatedAt?: string;
        };
        /** User */
        User: {
            /** Format: uuid */
            id?: string;
            /** @enum {string} */
            type?: "user";
            attributes?: components["schemas"]["UserAttributes"];
            relationships?: components["schemas"]["Relationship"][];
        };
        /** UserAttributes */
        UserAttributes: {
            username?: string;
            roles?: string[];
            version?: number;
        };
        /** CreateScanlationGroup */
        CreateScanlationGroup: {
            name: string;
            website?: string | null;
            ircServer?: string | null;
            ircChannel?: string | null;
            discord?: string | null;
            contactEmail?: string | null;
            description?: string | null;
            /** Format: uri */
            twitter?: string | null;
            mangaUpdates?: string | null;
            inactive?: boolean;
            publishDelay?: string | null;
        };
        /** ScanlationGroupEdit */
        ScanlationGroupEdit: {
            name?: string;
            /** Format: uuid */
            leader?: string;
            members?: string[];
            website?: string | null;
            ircServer?: string | null;
            ircChannel?: string | null;
            discord?: string | null;
            contactEmail?: string | null;
            description?: string | null;
            /** Format: uri */
            twitter?: string | null;
            /** Format: uri */
            mangaUpdates?: string | null;
            focusedLanguages?: string[] | null;
            inactive?: boolean;
            locked?: boolean;
            publishDelay?: string;
            version: number;
        };
        /** CustomListCreate */
        CustomListCreate: {
            name: string;
            /** @enum {string} */
            visibility?: "public" | "private";
            manga?: string[];
            version?: number;
        };
        /** CustomListEdit */
        CustomListEdit: {
            name?: string;
            /** @enum {string} */
            visibility?: "public" | "private";
            manga?: string[];
            version: number;
        };
        /** CustomListResponse */
        CustomListResponse: {
            /** @enum {string} */
            result?: "ok" | "error";
            /** @default entity */
            response: string;
            data?: components["schemas"]["CustomList"];
        };
        /** CustomList */
        CustomList: {
            /** Format: uuid */
            id?: string;
            /** @enum {string} */
            type?: "custom_list";
            attributes?: components["schemas"]["CustomListAttributes"];
            relationships?: components["schemas"]["Relationship"][];
        };
        /** CustomListAttributes */
        CustomListAttributes: {
            name?: string;
            /** @enum {string} */
            visibility?: "private" | "public";
            version?: number;
        };
        /** CoverResponse */
        CoverResponse: {
            result?: string;
            /** @default entity */
            response: string;
            data?: components["schemas"]["Cover"];
        };
        /** Cover */
        Cover: {
            /** Format: uuid */
            id?: string;
            /** @enum {string} */
            type?: "cover_art";
            attributes?: components["schemas"]["CoverAttributes"];
            relationships?: components["schemas"]["Relationship"][];
        };
        /** CoverAttributes */
        CoverAttributes: {
            volume?: string | null;
            fileName?: string;
            description?: string | null;
            locale?: string | null;
            version?: number;
            createdAt?: string;
            updatedAt?: string;
        };
        /** CoverEdit */
        CoverEdit: {
            volume: components["schemas"]["CoverVolume"];
            description?: string | null;
            locale?: string | null;
            version: number;
        };
        /** CoverVolume */
        CoverVolume: string | null;
        /** ChapterVolume */
        ChapterVolume: string | null;
        /** AuthorResponse */
        AuthorResponse: {
            result?: string;
            /** @default entity */
            response: string;
            data?: components["schemas"]["Author"];
        };
        /** Author */
        Author: {
            /** Format: uuid */
            id?: string;
            /** @enum {string} */
            type?: "author";
            attributes?: components["schemas"]["AuthorAttributes"];
            relationships?: components["schemas"]["Relationship"][];
        };
        /** AuthorAttributes */
        AuthorAttributes: {
            name?: string;
            imageUrl?: string | null;
            biography?: components["schemas"]["LocalizedString"];
            /** Format: uri */
            twitter?: string | null;
            /** Format: uri */
            pixiv?: string | null;
            /** Format: uri */
            melonBook?: string | null;
            /** Format: uri */
            fanBox?: string | null;
            /** Format: uri */
            booth?: string | null;
            /** Format: uri */
            nicoVideo?: string | null;
            /** Format: uri */
            skeb?: string | null;
            /** Format: uri */
            fantia?: string | null;
            /** Format: uri */
            tumblr?: string | null;
            /** Format: uri */
            youtube?: string | null;
            /** Format: uri */
            weibo?: string | null;
            /** Format: uri */
            naver?: string | null;
            /** Format: uri */
            namicomi?: string | null;
            /** Format: uri */
            website?: string | null;
            version?: number;
            createdAt?: string;
            updatedAt?: string;
        };
        /** AuthorEdit */
        AuthorEdit: {
            name?: string;
            biography?: components["schemas"]["LocalizedString"];
            /** Format: uri */
            twitter?: string | null;
            /** Format: uri */
            pixiv?: string | null;
            /** Format: uri */
            melonBook?: string | null;
            /** Format: uri */
            fanBox?: string | null;
            /** Format: uri */
            booth?: string | null;
            /** Format: uri */
            nicoVideo?: string | null;
            /** Format: uri */
            skeb?: string | null;
            /** Format: uri */
            fantia?: string | null;
            /** Format: uri */
            tumblr?: string | null;
            /** Format: uri */
            youtube?: string | null;
            /** Format: uri */
            weibo?: string | null;
            /** Format: uri */
            naver?: string | null;
            /** Format: uri */
            website?: string | null;
            version: number;
        };
        /** AuthorCreate */
        AuthorCreate: {
            name: string;
            biography?: components["schemas"]["LocalizedString"];
            /** Format: uri */
            twitter?: string | null;
            /** Format: uri */
            pixiv?: string | null;
            /** Format: uri */
            melonBook?: string | null;
            /** Format: uri */
            fanBox?: string | null;
            /** Format: uri */
            booth?: string | null;
            /** Format: uri */
            nicoVideo?: string | null;
            /** Format: uri */
            skeb?: string | null;
            /** Format: uri */
            fantia?: string | null;
            /** Format: uri */
            tumblr?: string | null;
            /** Format: uri */
            youtube?: string | null;
            /** Format: uri */
            weibo?: string | null;
            /** Format: uri */
            naver?: string | null;
            /** Format: uri */
            website?: string | null;
        };
        /** ApiClientResponse */
        ApiClientResponse: {
            result?: string;
            /** @default entity */
            response: string;
            data?: components["schemas"]["ApiClient"];
        };
        /** ApiClient */
        ApiClient: {
            /** Format: uuid */
            id?: string;
            /** @enum {string} */
            type?: "api_client";
            attributes?: components["schemas"]["ApiClientAttributes"];
            relationships?: components["schemas"]["Relationship"][];
        };
        /** ApiClientAttributes */
        ApiClientAttributes: {
            name?: string;
            description?: string | null;
            profile?: string;
            externalClientId?: string | null;
            isActive?: boolean;
            /** @enum {string} */
            state?: "requested" | "approved" | "rejected" | "autoapproved";
            createdAt?: string;
            updatedAt?: string;
            version?: number;
        };
        /** ApiClient */
        ApiClientEdit: {
            description?: string | null;
            version: number;
        };
        /** ApiClientCreate */
        ApiClientCreate: {
            name: string;
            description?: string | null;
            /** @enum {string} */
            profile: "personal";
            version?: number;
        };
        /** MappingIdBody */
        MappingIdBody: {
            /** @enum {string} */
            type?: "group" | "manga" | "chapter" | "tag";
            ids?: number[];
        };
        /** MappingIdResponse */
        MappingIdResponse: {
            /** @default ok */
            result: string;
            /** @default collection */
            response: string;
            data?: components["schemas"]["MappingId"][];
            limit?: number;
            offset?: number;
            total?: number;
        };
        /** MappingId */
        MappingId: {
            /** Format: uuid */
            id?: string;
            /** @enum {string} */
            type?: "mapping_id";
            attributes?: components["schemas"]["MappingIdAttributes"];
            relationships?: components["schemas"]["Relationship"][];
        };
        /** MappingIdAttributes */
        MappingIdAttributes: {
            /** @enum {string} */
            type?: "manga" | "chapter" | "group" | "tag";
            legacyId?: number;
            /** Format: uuid */
            newId?: string;
        };
        /** TagResponse */
        TagResponse: {
            /** @default ok */
            result: string;
            /** @default collection */
            response: string;
            data?: components["schemas"]["Tag"][];
            limit?: number;
            offset?: number;
            total?: number;
        };
        /** Tag */
        Tag: {
            /** Format: uuid */
            id?: string;
            /** @enum {string} */
            type?: "tag";
            attributes?: components["schemas"]["TagAttributes"];
            relationships?: components["schemas"]["Relationship"][];
        };
        /** TagAttributes */
        TagAttributes: {
            name?: components["schemas"]["LocalizedString"];
            description?: components["schemas"]["LocalizedString"];
            /** @enum {string} */
            group?: "content" | "format" | "genre" | "theme";
            version?: number;
        };
        /** UserResponse */
        UserResponse: {
            /** @enum {string} */
            result?: "ok";
            /** @default entity */
            response: string;
            data?: components["schemas"]["User"];
        };
        /** SendAccountActivationCode */
        SendAccountActivationCode: {
            /** Format: email */
            email: string;
        };
        /** RecoverCompleteBody */
        RecoverCompleteBody: {
            newPassword: string;
        };
        /** UpdateMangaStatus */
        UpdateMangaStatus: {
            /** @enum {string|null} */
            status: "reading" | "on_hold" | "plan_to_read" | "dropped" | "re_reading" | "completed" | null;
        };
        /** ChapterRequest */
        ChapterRequest: {
            title?: string | null;
            volume?: components["schemas"]["ChapterVolume"];
            chapter?: components["schemas"]["ChapterVolume"];
            translatedLanguage?: string;
            groups?: string[];
            version?: number;
        };
        /** CoverList */
        CoverList: {
            /** @default ok */
            result: string;
            /** @default collection */
            response: string;
            data?: components["schemas"]["Cover"][];
            limit?: number;
            offset?: number;
            total?: number;
        };
        /** AuthorList */
        AuthorList: {
            /** @default ok */
            result: string;
            /** @default collection */
            response: string;
            data?: components["schemas"]["Author"][];
            limit?: number;
            offset?: number;
            total?: number;
        };
        /** ApiClientList */
        ApiClientList: {
            /** @default ok */
            result: string;
            /** @default collection */
            response: string;
            data?: components["schemas"]["ApiClient"][];
            limit?: number;
            offset?: number;
            total?: number;
        };
        /** ChapterList */
        ChapterList: {
            /** @default ok */
            result: string;
            /** @default collection */
            response: string;
            data?: components["schemas"]["Chapter"][];
            limit?: number;
            offset?: number;
            total?: number;
        };
        /** ScanlationGroupList */
        ScanlationGroupList: {
            /** @default ok */
            result: string;
            /** @default collection */
            response: string;
            data?: components["schemas"]["ScanlationGroup"][];
            limit?: number;
            offset?: number;
            total?: number;
        };
        MangaRelationCreate: components["schemas"]["MangaRelationRequest"] & unknown;
        /** MangaRelationRequest */
        MangaRelationRequest: {
            /** Format: uuid */
            targetManga?: string;
            /** @enum {string} */
            relation?: "monochrome" | "main_story" | "adapted_from" | "based_on" | "prequel" | "side_story" | "doujinshi" | "same_franchise" | "shared_universe" | "sequel" | "spin_off" | "alternate_story" | "alternate_version" | "preserialization" | "colored" | "serialization";
        };
        /** MangaRelationList */
        MangaRelationList: {
            /** @default ok */
            result: string;
            /** @default collection */
            response: string;
            data?: components["schemas"]["MangaRelation"][];
            limit?: number;
            offset?: number;
            total?: number;
        };
        /** MangaRelationResponse */
        MangaRelationResponse: {
            /** @enum {string} */
            result?: "ok" | "error";
            /** @default entity */
            response: string;
            data?: components["schemas"]["MangaRelation"];
        };
        /** MangaRelation */
        MangaRelation: {
            /** Format: uuid */
            id?: string;
            /** @enum {string} */
            type?: "manga_relation";
            attributes?: components["schemas"]["MangaRelationAttributes"];
            relationships?: components["schemas"]["Relationship"][];
        };
        /** MangaRelationAttributes */
        MangaRelationAttributes: {
            /** @enum {string} */
            relation?: "monochrome" | "main_story" | "adapted_from" | "based_on" | "prequel" | "side_story" | "doujinshi" | "same_franchise" | "shared_universe" | "sequel" | "spin_off" | "alternate_story" | "alternate_version" | "preserialization" | "colored" | "serialization";
            version?: number;
        };
        /** MangaList */
        MangaList: {
            /** @default ok */
            result: string;
            /** @default collection */
            response: string;
            data?: components["schemas"]["Manga"][];
            limit?: number;
            offset?: number;
            total?: number;
        };
        /** CustomListList */
        CustomListList: {
            /** @default ok */
            result: string;
            /** @default collection */
            response: string;
            data?: components["schemas"]["CustomList"][];
            limit?: number;
            offset?: number;
            total?: number;
        };
        /** UserList */
        UserList: {
            /** @default ok */
            result: string;
            /** @default collection */
            response: string;
            data?: components["schemas"]["User"][];
            limit?: number;
            offset?: number;
            total?: number;
        };
        /** UploadSession */
        UploadSession: {
            /** Format: uuid */
            id?: string;
            /** @enum {string} */
            type?: "upload_session";
            attributes?: components["schemas"]["UploadSessionAttributes"];
        };
        /** UploadSessionAttributes */
        UploadSessionAttributes: {
            isCommitted?: boolean;
            isProcessed?: boolean;
            isDeleted?: boolean;
            version?: number;
            createdAt?: string;
            updatedAt?: string;
        };
        /** UploadSessionFile */
        UploadSessionFile: {
            /** Format: uuid */
            id?: string;
            /** @enum {string} */
            type?: "upload_session_file";
            attributes?: components["schemas"]["UploadSessionFileAttributes"];
        };
        /** UploadSessionFileAttributes */
        UploadSessionFileAttributes: {
            originalFileName?: string;
            fileHash?: string;
            fileSize?: number;
            mimeType?: string;
            /** @enum {string} */
            source?: "local" | "remote";
            version?: number;
        };
        /** ChapterReadMarkersBatch */
        ChapterReadMarkerBatch: {
            chapterIdsRead?: string[];
            chapterIdsUnread?: string[];
        } | unknown | unknown;
        /** BeginUploadSession */
        BeginUploadSession: {
            groups: string[];
            /** Format: uuid */
            manga: string;
        };
        /** BeginEditSession */
        BeginEditSession: {
            version: number;
        };
        /** BeginUploadSession */
        CommitUploadSession: {
            chapterDraft?: components["schemas"]["ChapterDraft"];
            /** @description ordered list of Upload Session File ids */
            pageOrder?: string[];
        };
        ChapterDraft: {
            volume: components["schemas"]["ChapterVolume"];
            chapter: components["schemas"]["ChapterVolume"];
            title: string | null;
            translatedLanguage: string;
            externalUrl?: string | null;
            publishAt?: string;
        };
        /** ReportListResponse */
        ReportListResponse: {
            /** @enum {string} */
            result?: "ok" | "error";
            /** @default collection */
            response: string;
            data?: components["schemas"]["Report"][];
            limit?: number;
            offset?: number;
            total?: number;
        };
        /** Report */
        Report: {
            /** Format: uuid */
            id?: string;
            /** @enum {string} */
            type?: "report";
            attributes?: components["schemas"]["ReportAttributes"];
            relationships?: components["schemas"]["Relationship"][];
        };
        /** ReportAttributes */
        ReportAttributes: {
            details?: string;
            objectId?: string;
            /** @enum {string} */
            status?: "waiting" | "accepted" | "refused" | "autoresolved";
            createdAt?: string;
        };
        /** ForumsThreadResponse */
        ForumsThreadResponse: {
            /** @default ok */
            result: string;
            /** @default entity */
            response: string;
            data?: {
                /** @default thread */
                type: string;
                /** @description The id for the thread on the forums, accessible at `https://forums.mangadex.org/threads/:id` */
                id?: number;
                attributes?: {
                    /** @description The number of replies so far in the forums thread returned */
                    repliesCount?: number;
                };
            };
        };
        /**
         * ReferenceExpansionAuthor
         * @description Reference expansion options for author/artist entities or lists
         */
        ReferenceExpansionAuthor: "manga"[];
        /**
         * ReferenceExpansionApiClient
         * @description Reference expansion options for api_client entities or lists
         */
        ReferenceExpansionApiClient: "creator"[];
        /**
         * ReferenceExpansionChapter
         * @description Reference expansion options for chapter entities or lists
         */
        ReferenceExpansionChapter: ("manga" | "scanlation_group" | "user")[];
        /**
         * ReferenceExpansionCoverArt
         * @description Reference expansion options for cover art entities or lists
         */
        ReferenceExpansionCoverArt: ("manga" | "user")[];
        /**
         * ReferenceExpansionManga
         * @description Reference expansion options for manga entities or lists
         */
        ReferenceExpansionManga: ("manga" | "cover_art" | "author" | "artist" | "tag" | "creator")[];
        /**
         * ReferenceExpansionMangaRelation
         * @description Reference expansion options for manga relation entities or lists
         */
        ReferenceExpansionMangaRelation: "manga"[];
        /**
         * ReferenceExpansionReport
         * @description Reference expansion options for user report entities or lists
         */
        ReferenceExpansionReport: ("user" | "reason")[];
        /**
         * ReferenceExpansionScanlationGroup
         * @description Reference expansion options for scanlation group entities or lists
         */
        ReferenceExpansionScanlationGroup: ("leader" | "member")[];
        /**
         * StatisticsDetailsComments
         * @description Comments-related statistics of an entity.
         *     If it is `null`, the entity doesn't have a backing comments thread, and therefore has no comments yet.
         *
         */
        StatisticsDetailsComments: {
            /** @description The id of the thread backing the comments for that entity on the MangaDex Forums. */
            threadId?: number;
            /** @description The number of replies on the MangaDex Forums thread backing this entity's comments. This excludes the initial comment that opens the thread, which is created by our systems.
             *      */
            repliesCount?: number;
        } | null;
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
    "get-ping": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Pong */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": string;
                };
            };
        };
    };
    "get-search-manga": {
        parameters: {
            query?: {
                limit?: number;
                offset?: number;
                title?: string;
                authorOrArtist?: string;
                "authors[]"?: string[];
                "artists[]"?: string[];
                /** @description Year of release or none */
                year?: number | "none";
                "includedTags[]"?: string[];
                includedTagsMode?: "AND" | "OR";
                "excludedTags[]"?: string[];
                excludedTagsMode?: "AND" | "OR";
                "status[]"?: ("ongoing" | "completed" | "hiatus" | "cancelled")[];
                "originalLanguage[]"?: string[];
                "excludedOriginalLanguage[]"?: string[];
                "availableTranslatedLanguage[]"?: string[];
                "publicationDemographic[]"?: ("shounen" | "shoujo" | "josei" | "seinen" | "none")[];
                /** @description Manga ids (limited to 100 per request) */
                "ids[]"?: string[];
                "contentRating[]"?: ("safe" | "suggestive" | "erotica" | "pornographic")[];
                createdAtSince?: string;
                updatedAtSince?: string;
                order?: {
                    /** @enum {string} */
                    title?: "asc" | "desc";
                    /** @enum {string} */
                    year?: "asc" | "desc";
                    /** @enum {string} */
                    createdAt?: "asc" | "desc";
                    /** @enum {string} */
                    updatedAt?: "asc" | "desc";
                    /** @enum {string} */
                    latestUploadedChapter?: "asc" | "desc";
                    /** @enum {string} */
                    followedCount?: "asc" | "desc";
                    /** @enum {string} */
                    relevance?: "asc" | "desc";
                    /** @enum {string} */
                    rating?: "asc" | "desc";
                };
                "includes[]"?: components["schemas"]["ReferenceExpansionManga"];
                hasAvailableChapters?: "0" | "1" | "true" | "false";
                hasUnavailableChapters?: "0" | "1";
                group?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Manga list */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["MangaList"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    "post-manga": {
        parameters: {
            query?: never;
            header: {
                "Content-Type": string;
            };
            path?: never;
            cookie?: never;
        };
        /** @description The size of the body is limited to 64KB. */
        requestBody?: {
            content: {
                "application/json": components["schemas"]["MangaCreate"];
            };
        };
        responses: {
            /** @description Manga Created */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["MangaResponse"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    "get-manga-aggregate": {
        parameters: {
            query?: {
                "translatedLanguage[]"?: string[];
                "groups[]"?: string[];
            };
            header?: never;
            path: {
                /** @description Manga ID */
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @default ok */
                        result: string;
                        volumes?: {
                            [key: string]: {
                                volume?: string;
                                count?: number;
                                chapters?: {
                                    [key: string]: {
                                        chapter?: string;
                                        /** Format: uuid */
                                        id?: string;
                                        others?: string[];
                                        count?: number;
                                    };
                                };
                            };
                        };
                    };
                };
            };
        };
    };
    "get-manga-id": {
        parameters: {
            query?: {
                "includes[]"?: components["schemas"]["ReferenceExpansionManga"];
            };
            header?: never;
            path: {
                /** @description Manga ID */
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["MangaResponse"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Manga no content */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    "put-manga-id": {
        parameters: {
            query?: never;
            header: {
                "Content-Type": string;
            };
            path: {
                /** @description Manga ID */
                id: string;
            };
            cookie?: never;
        };
        /** @description The size of the body is limited to 64KB. */
        requestBody?: {
            content: {
                "application/json": components["schemas"]["MangaEdit"] & {
                    artists?: string[];
                    authors?: string[];
                };
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["MangaResponse"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    "delete-manga-id": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Manga ID */
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Manga has been deleted. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Response"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    "post-auth-login": {
        parameters: {
            query?: never;
            header: {
                "Content-Type": string;
            };
            path?: never;
            cookie?: never;
        };
        /** @description The size of the body is limited to 2KB. */
        requestBody?: {
            content: {
                "application/json": components["schemas"]["Login"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LoginResponse"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    "get-auth-check": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CheckResponse"];
                };
            };
        };
    };
    "post-auth-logout": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LogoutResponse"];
                };
            };
            /** @description Service Unavailable */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    "post-auth-refresh": {
        parameters: {
            query?: never;
            header: {
                "Content-Type": string;
            };
            path?: never;
            cookie?: never;
        };
        /** @description The size of the body is limited to 2KB. */
        requestBody?: {
            content: {
                "application/json": components["schemas"]["RefreshToken"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["RefreshResponse"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    "get-list-apiclients": {
        parameters: {
            query?: {
                limit?: number;
                offset?: number;
                state?: "requested" | "approved" | "rejected" | "autoapproved";
                name?: string;
                "includes[]"?: components["schemas"]["ReferenceExpansionApiClient"];
                order?: {
                    /** @enum {string} */
                    name?: "asc" | "desc";
                    /** @enum {string} */
                    createdAt?: "asc" | "desc";
                    /** @enum {string} */
                    updatedAt?: "asc" | "desc";
                };
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ApiClientList"];
                };
            };
        };
    };
    "post-create-apiclient": {
        parameters: {
            query?: never;
            header: {
                "Content-Type": string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["ApiClientCreate"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ApiClientResponse"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    "get-apiclient": {
        parameters: {
            query?: {
                "includes[]"?: components["schemas"]["ReferenceExpansionApiClient"];
            };
            header?: never;
            path: {
                /** @description ApiClient ID */
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ApiClientResponse"];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    "post-edit-apiclient": {
        parameters: {
            query?: never;
            header: {
                "Content-Type": string;
            };
            path: {
                /** @description ApiClient ID */
                id: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["ApiClientEdit"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ApiClientResponse"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    "delete-apiclient": {
        parameters: {
            query?: {
                version?: string;
            };
            header?: never;
            path: {
                /** @description ApiClient ID */
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @default ok */
                        result: string;
                    };
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    "get-apiclient-secret": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description ApiClient ID */
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @enum {string} */
                        result?: "ok";
                        data?: string;
                    };
                };
            };
            /** @description Client not found, not active or user is not the owner */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    "post-regenerate-apiclient-secret": {
        parameters: {
            query?: never;
            header: {
                "Content-Type": string;
            };
            path: {
                /** @description ApiClient ID */
                id: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": Record<string, never>;
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @enum {string} */
                        result?: "ok";
                        data?: string;
                    };
                };
            };
            /** @description Client not found, not active or user is not the owner */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    "get-search-group": {
        parameters: {
            query?: {
                limit?: number;
                offset?: number;
                /** @description ScanlationGroup ids (limited to 100 per request) */
                "ids[]"?: string[];
                name?: string;
                focusedLanguage?: string;
                "includes[]"?: components["schemas"]["ReferenceExpansionScanlationGroup"];
                order?: {
                    /** @enum {string} */
                    name?: "asc" | "desc";
                    /** @enum {string} */
                    createdAt?: "asc" | "desc";
                    /** @enum {string} */
                    updatedAt?: "asc" | "desc";
                    /** @enum {string} */
                    followedCount?: "asc" | "desc";
                    /** @enum {string} */
                    relevance?: "asc" | "desc";
                };
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ScanlationGroupList"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    "post-group": {
        parameters: {
            query?: never;
            header: {
                "Content-Type": string;
            };
            path?: never;
            cookie?: never;
        };
        /** @description The size of the body is limited to 16KB. */
        requestBody?: {
            content: {
                "application/json": components["schemas"]["CreateScanlationGroup"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ScanlationGroupResponse"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    "get-group-id": {
        parameters: {
            query?: {
                "includes[]"?: components["schemas"]["ReferenceExpansionScanlationGroup"];
            };
            header?: never;
            path: {
                /** @description Scanlation Group ID */
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ScanlationGroupResponse"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description ScanlationGroup not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    "put-group-id": {
        parameters: {
            query?: never;
            header: {
                "Content-Type": string;
            };
            path: {
                /** @description Scanlation Group ID */
                id: string;
            };
            cookie?: never;
        };
        /** @description The size of the body is limited to 8KB. */
        requestBody?: {
            content: {
                "application/json": components["schemas"]["ScanlationGroupEdit"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ScanlationGroupResponse"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    "delete-group-id": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Scanlation Group ID */
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Response"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    "post-group-id-follow": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Response"];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    "delete-group-id-follow": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Response"];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    "post-list": {
        parameters: {
            query?: never;
            header: {
                "Content-Type": string;
            };
            path?: never;
            cookie?: never;
        };
        /** @description The size of the body is limited to 8KB. */
        requestBody?: {
            content: {
                "application/json": components["schemas"]["CustomListCreate"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CustomListResponse"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    "get-list-id": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description CustomList ID */
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CustomListResponse"];
                };
            };
            /** @description CustomList not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    "put-list-id": {
        parameters: {
            query?: never;
            header: {
                "Content-Type": string;
            };
            path: {
                /** @description CustomList ID */
                id: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["CustomListEdit"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CustomListResponse"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    "delete-list-id": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description CustomList ID */
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Response"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    "follow-list-id": {
        parameters: {
            query?: never;
            header: {
                "Content-Type": string;
            };
            path: {
                /** @description CustomList ID */
                id: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": Record<string, never>;
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @enum {string} */
                        result?: "ok";
                    };
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    "unfollow-list-id": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description CustomList ID */
                id: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": Record<string, never>;
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @enum {string} */
                        result?: "ok";
                    };
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    "post-manga-id-list-listId": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Manga ID */
                id: string;
                /** @description CustomList ID */
                listId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Response"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    "delete-manga-id-list-listId": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Manga ID */
                id: string;
                /** @description CustomList ID */
                listId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Response"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    "get-user-list": {
        parameters: {
            query?: {
                limit?: number;
                offset?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CustomListList"];
                };
            };
        };
    };
    "get-user-id-list": {
        parameters: {
            query?: {
                limit?: number;
                offset?: number;
            };
            header?: never;
            path: {
                /** @description User ID */
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CustomListList"];
                };
            };
        };
    };
    "get-user": {
        parameters: {
            query?: {
                limit?: number;
                offset?: number;
                /** @description User ids (limited to 100 per request) */
                "ids[]"?: string[];
                username?: string;
                order?: {
                    /** @enum {string} */
                    username?: "asc" | "desc";
                };
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UserList"];
                };
            };
        };
    };
    "get-user-id": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description User ID */
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UserResponse"];
                };
            };
        };
    };
    "delete-user-id": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description User ID */
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Response"];
                };
            };
        };
    };
    "post-user-delete-code": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description User delete code */
                code: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Response"];
                };
            };
        };
    };
    "get-chapter": {
        parameters: {
            query?: {
                limit?: number;
                offset?: number;
                /** @description Chapter ids (limited to 100 per request) */
                "ids[]"?: string[];
                title?: string;
                "groups[]"?: string[];
                uploader?: string | string[];
                manga?: string;
                "volume[]"?: string | string[];
                chapter?: string | string[];
                "translatedLanguage[]"?: string[];
                "originalLanguage[]"?: string[];
                "excludedOriginalLanguage[]"?: string[];
                "contentRating[]"?: ("safe" | "suggestive" | "erotica" | "pornographic")[];
                "excludedGroups[]"?: string[];
                "excludedUploaders[]"?: string[];
                includeFutureUpdates?: "0" | "1";
                includeEmptyPages?: 0 | 1;
                includeFuturePublishAt?: 0 | 1;
                includeExternalUrl?: 0 | 1;
                includeUnavailable?: "0" | "1";
                createdAtSince?: string;
                updatedAtSince?: string;
                publishAtSince?: string;
                order?: {
                    /** @enum {string} */
                    createdAt?: "asc" | "desc";
                    /** @enum {string} */
                    updatedAt?: "asc" | "desc";
                    /** @enum {string} */
                    publishAt?: "asc" | "desc";
                    /** @enum {string} */
                    readableAt?: "asc" | "desc";
                    /** @enum {string} */
                    volume?: "asc" | "desc";
                    /** @enum {string} */
                    chapter?: "asc" | "desc";
                };
                includes?: ("manga" | "scanlation_group" | "user")[];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Chapter list */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ChapterList"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    "get-chapter-id": {
        parameters: {
            query?: {
                "includes[]"?: components["schemas"]["ReferenceExpansionChapter"];
            };
            header?: never;
            path: {
                /** @description Chapter ID */
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ChapterResponse"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Chapter not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    "put-chapter-id": {
        parameters: {
            query?: never;
            header: {
                "Content-Type": string;
            };
            path: {
                /** @description Chapter ID */
                id: string;
            };
            cookie?: never;
        };
        /** @description The size of the body is limited to 32KB. */
        requestBody?: {
            content: {
                "application/json": components["schemas"]["ChapterEdit"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ChapterResponse"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    "delete-chapter-id": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Chapter ID */
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Chapter has been deleted. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Response"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    "get-user-follows-manga-feed": {
        parameters: {
            query?: {
                limit?: number;
                offset?: number;
                "translatedLanguage[]"?: string[];
                "originalLanguage[]"?: string[];
                "excludedOriginalLanguage[]"?: string[];
                "contentRating[]"?: ("safe" | "suggestive" | "erotica" | "pornographic")[];
                "excludedGroups[]"?: string[];
                "excludedUploaders[]"?: string[];
                includeFutureUpdates?: "0" | "1";
                createdAtSince?: string;
                updatedAtSince?: string;
                publishAtSince?: string;
                order?: {
                    /** @enum {string} */
                    createdAt?: "asc" | "desc";
                    /** @enum {string} */
                    updatedAt?: "asc" | "desc";
                    /** @enum {string} */
                    publishAt?: "asc" | "desc";
                    /** @enum {string} */
                    readableAt?: "asc" | "desc";
                    /** @enum {string} */
                    volume?: "asc" | "desc";
                    /** @enum {string} */
                    chapter?: "asc" | "desc";
                };
                "includes[]"?: components["schemas"]["ReferenceExpansionChapter"];
                includeEmptyPages?: 0 | 1;
                includeFuturePublishAt?: 0 | 1;
                includeExternalUrl?: 0 | 1;
                includeUnavailable?: "0" | "1";
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ChapterList"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description User not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    "get-list-id-feed": {
        parameters: {
            query?: {
                limit?: number;
                offset?: number;
                "translatedLanguage[]"?: string[];
                "originalLanguage[]"?: string[];
                "excludedOriginalLanguage[]"?: string[];
                "contentRating[]"?: ("safe" | "suggestive" | "erotica" | "pornographic")[];
                "excludedGroups[]"?: string[];
                "excludedUploaders[]"?: string[];
                includeFutureUpdates?: "0" | "1";
                createdAtSince?: string;
                updatedAtSince?: string;
                publishAtSince?: string;
                order?: {
                    /** @enum {string} */
                    createdAt?: "asc" | "desc";
                    /** @enum {string} */
                    updatedAt?: "asc" | "desc";
                    /** @enum {string} */
                    publishAt?: "asc" | "desc";
                    /** @enum {string} */
                    readableAt?: "asc" | "desc";
                    /** @enum {string} */
                    volume?: "asc" | "desc";
                    /** @enum {string} */
                    chapter?: "asc" | "desc";
                };
                "includes[]"?: components["schemas"]["ReferenceExpansionChapter"];
                includeEmptyPages?: 0 | 1;
                includeFuturePublishAt?: 0 | 1;
                includeExternalUrl?: 0 | 1;
                includeUnavailable?: "0" | "1";
            };
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ChapterList"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    "post-manga-id-follow": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Response"];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    "delete-manga-id-follow": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Response"];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    "get-cover": {
        parameters: {
            query?: {
                limit?: number;
                offset?: number;
                /** @description Manga ids (limited to 100 per request) */
                "manga[]"?: string[];
                /** @description Covers ids (limited to 100 per request) */
                "ids[]"?: string[];
                /** @description User ids (limited to 100 per request) */
                "uploaders[]"?: string[];
                /** @description Locales of cover art (limited to 100 per request) */
                "locales[]"?: string[];
                order?: {
                    /** @enum {string} */
                    createdAt?: "asc" | "desc";
                    /** @enum {string} */
                    updatedAt?: "asc" | "desc";
                    /** @enum {string} */
                    volume?: "asc" | "desc";
                };
                "includes[]"?: components["schemas"]["ReferenceExpansionCoverArt"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CoverList"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    "get-cover-id": {
        parameters: {
            query?: {
                "includes[]"?: components["schemas"]["ReferenceExpansionCoverArt"];
            };
            header?: never;
            path: {
                /** @description Is Manga UUID on POST */
                mangaOrCoverId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CoverResponse"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description CoverArt not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    "edit-cover": {
        parameters: {
            query?: never;
            header: {
                "Content-Type": string;
            };
            path: {
                /** @description Is Manga UUID on POST */
                mangaOrCoverId: string;
            };
            cookie?: never;
        };
        /** @description The size of the body is limited to 2KB. */
        requestBody?: {
            content: {
                "application/json": components["schemas"]["CoverEdit"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CoverResponse"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    "upload-cover": {
        parameters: {
            query?: never;
            header: {
                "Content-Type": string;
            };
            path: {
                /** @description Is Manga UUID on POST */
                mangaOrCoverId: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "multipart/form-data": {
                    /** Format: binary */
                    file?: string;
                    volume?: components["schemas"]["CoverVolume"];
                    description?: string;
                    locale?: string;
                };
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CoverResponse"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    "delete-cover": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Is Manga UUID on POST */
                mangaOrCoverId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Response"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    "get-author": {
        parameters: {
            query?: {
                limit?: number;
                offset?: number;
                /** @description Author ids (limited to 100 per request) */
                "ids[]"?: string[];
                name?: string;
                order?: {
                    /** @enum {string} */
                    name?: "asc" | "desc";
                };
                "includes[]"?: components["schemas"]["ReferenceExpansionAuthor"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AuthorList"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    "post-author": {
        parameters: {
            query?: never;
            header: {
                "Content-Type": string;
            };
            path?: never;
            cookie?: never;
        };
        /** @description The size of the body is limited to 8KB. */
        requestBody?: {
            content: {
                "application/json": components["schemas"]["AuthorCreate"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AuthorResponse"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    "get-author-id": {
        parameters: {
            query?: {
                "includes[]"?: components["schemas"]["ReferenceExpansionAuthor"];
            };
            header?: never;
            path: {
                /** @description Author ID */
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AuthorResponse"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Author no content */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    "put-author-id": {
        parameters: {
            query?: never;
            header: {
                "Content-Type": string;
            };
            path: {
                /** @description Author ID */
                id: string;
            };
            cookie?: never;
        };
        /** @description The size of the body is limited to 8KB. */
        requestBody?: {
            content: {
                "application/json": components["schemas"]["AuthorEdit"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AuthorResponse"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    "delete-author-id": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Author ID */
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Response"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    "post-legacy-mapping": {
        parameters: {
            query?: never;
            header: {
                "Content-Type": string;
            };
            path?: never;
            cookie?: never;
        };
        /** @description The size of the body is limited to 10KB. */
        requestBody?: {
            content: {
                "application/json": components["schemas"]["MappingIdBody"];
            };
        };
        responses: {
            /** @description This response will give you an array of mappings of resource identifiers ; the `data.attributes.newId` field corresponds to the new UUID. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["MappingIdResponse"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    "get-manga-id-feed": {
        parameters: {
            query?: {
                limit?: number;
                offset?: number;
                "translatedLanguage[]"?: string[];
                "originalLanguage[]"?: string[];
                "excludedOriginalLanguage[]"?: string[];
                "contentRating[]"?: ("safe" | "suggestive" | "erotica" | "pornographic")[];
                "excludedGroups[]"?: string[];
                "excludedUploaders[]"?: string[];
                includeFutureUpdates?: "0" | "1";
                createdAtSince?: string;
                updatedAtSince?: string;
                publishAtSince?: string;
                order?: {
                    /** @enum {string} */
                    createdAt?: "asc" | "desc";
                    /** @enum {string} */
                    updatedAt?: "asc" | "desc";
                    /** @enum {string} */
                    publishAt?: "asc" | "desc";
                    /** @enum {string} */
                    readableAt?: "asc" | "desc";
                    /** @enum {string} */
                    volume?: "asc" | "desc";
                    /** @enum {string} */
                    chapter?: "asc" | "desc";
                };
                "includes[]"?: components["schemas"]["ReferenceExpansionChapter"];
                includeEmptyPages?: 0 | 1;
                includeFuturePublishAt?: 0 | 1;
                includeExternalUrl?: 0 | 1;
                includeUnavailable?: "0" | "1";
            };
            header?: never;
            path: {
                /** @description Manga ID */
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ChapterList"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    "get-manga-chapter-readmarkers": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @enum {string} */
                        result?: "ok";
                        data?: string[];
                    };
                };
            };
        };
    };
    "post-manga-chapter-readmarkers": {
        parameters: {
            query?: {
                /** @description Adding this will cause the chapter to be stored in the user's reading history */
                updateHistory?: boolean;
            };
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        /** @description The size of the body is limited to 10KB. */
        requestBody?: {
            content: {
                "application/json": components["schemas"]["ChapterReadMarkerBatch"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @enum {string} */
                        result?: "ok";
                    };
                };
            };
        };
    };
    "get-manga-chapter-readmarkers-2": {
        parameters: {
            query: {
                /** @description Manga ids */
                "ids[]": string[];
                /** @description Group results by manga ids */
                grouped?: boolean;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @enum {string} */
                        result?: "ok";
                        data?: string[] | {
                            [key: string]: string[];
                        };
                    };
                };
            };
        };
    };
    "get-manga-random": {
        parameters: {
            query?: {
                "includes[]"?: components["schemas"]["ReferenceExpansionManga"];
                "contentRating[]"?: ("safe" | "suggestive" | "erotica" | "pornographic")[];
                "includedTags[]"?: string[];
                includedTagsMode?: "AND" | "OR";
                "excludedTags[]"?: string[];
                excludedTagsMode?: "AND" | "OR";
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["MangaResponse"];
                };
            };
        };
    };
    "get-at-home-server-chapterId": {
        parameters: {
            query?: {
                /** @description Force selecting from MangaDex@Home servers that use the standard HTTPS port 443.
                 *
                 *     While the conventional port for HTTPS traffic is 443 and servers are encouraged to use it, it is not a hard requirement as it technically isn't
                 *     anything special.
                 *
                 *     However, some misbehaving school/office network will at time block traffic to non-standard ports, and setting this flag to `true` will ensure
                 *     selection of a server that uses these. */
                forcePort443?: boolean;
            };
            header?: never;
            path: {
                /** @description Chapter ID */
                chapterId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @default ok */
                        result: string;
                        /** @description The base URL to construct final image URLs from.
                         *     The URL returned is valid for the requested chapter only, and for a duration of 15 minutes from the time of the response. */
                        baseUrl?: string;
                        chapter?: {
                            hash?: string;
                            data?: string[];
                            dataSaver?: string[];
                        };
                    };
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    "get-manga-tag": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["TagResponse"];
                };
            };
        };
    };
    "get-user-me": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UserResponse"];
                };
            };
        };
    };
    "get-user-follows-group": {
        parameters: {
            query?: {
                limit?: number;
                offset?: number;
                "includes[]"?: components["schemas"]["ReferenceExpansionScanlationGroup"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ScanlationGroupList"];
                };
            };
        };
    };
    "get-user-follows-group-id": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Scanlation Group id */
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The User follow that Group */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Response"];
                };
            };
            /** @description The User doesn't follow that Group */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Response"];
                };
            };
        };
    };
    "get-user-follows-user": {
        parameters: {
            query?: {
                limit?: number;
                offset?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UserList"];
                };
            };
        };
    };
    "get-user-follows-user-id": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description User id */
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The User follow that User */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Response"];
                };
            };
            /** @description The User doesn't follow that User */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Response"];
                };
            };
        };
    };
    "get-user-follows-manga": {
        parameters: {
            query?: {
                limit?: number;
                offset?: number;
                "includes[]"?: components["schemas"]["ReferenceExpansionManga"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["MangaList"];
                };
            };
        };
    };
    "get-user-follows-manga-id": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Manga id */
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The User follow that Manga */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Response"];
                };
            };
            /** @description The User doesn't follow that Manga */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Response"];
                };
            };
        };
    };
    "get-user-follows-list": {
        parameters: {
            query?: {
                limit?: number;
                offset?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CustomListList"];
                };
            };
        };
    };
    "get-user-follows-list-id": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description CustomList id */
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The User follow that CustomList */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Response"];
                };
            };
            /** @description The User doesn't follow that CustomList */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Response"];
                };
            };
        };
    };
    "get-manga-status": {
        parameters: {
            query?: {
                /** @description Used to filter the list by given status */
                status?: "reading" | "on_hold" | "plan_to_read" | "dropped" | "re_reading" | "completed";
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @default ok */
                        result: string;
                        statuses?: {
                            [key: string]: "reading" | "on_hold" | "plan_to_read" | "dropped" | "re_reading" | "completed";
                        };
                    };
                };
            };
        };
    };
    "get-manga-id-status": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @default ok */
                        result: string;
                        /** @enum {string} */
                        status?: "reading" | "on_hold" | "plan_to_read" | "dropped" | "re_reading" | "completed";
                    };
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    "post-manga-id-status": {
        parameters: {
            query?: never;
            header: {
                "Content-Type": string;
            };
            path: {
                id: string;
            };
            cookie?: never;
        };
        /** @description Using a `null` value in `status` field will remove the Manga reading status. The size of the body is limited to 2KB. */
        requestBody?: {
            content: {
                "application/json": components["schemas"]["UpdateMangaStatus"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Response"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    "get-manga-id-draft": {
        parameters: {
            query?: {
                "includes[]"?: components["schemas"]["ReferenceExpansionManga"];
            };
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["MangaResponse"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    "commit-manga-draft": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        /** @description A Manga Draft that is to be submitted must have at least one cover in the original language, must be in the "draft" state and must be passed the correct version in the request body. */
        requestBody?: {
            content: {
                "application/json": {
                    version?: number;
                };
            };
        };
        responses: {
            /** @description OK */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["MangaResponse"];
                };
            };
            /** @description BadRequest */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    "get-manga-drafts": {
        parameters: {
            query?: {
                limit?: number;
                offset?: number;
                state?: "draft" | "submitted" | "rejected";
                order?: {
                    /** @enum {string} */
                    title?: "asc" | "desc";
                    /** @enum {string} */
                    year?: "asc" | "desc";
                    /** @enum {string} */
                    createdAt?: "asc" | "desc";
                    /** @enum {string} */
                    updatedAt?: "asc" | "desc";
                };
                "includes[]"?: components["schemas"]["ReferenceExpansionManga"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["MangaResponse"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    "post-captcha-solve": {
        parameters: {
            query?: never;
            header: {
                "Content-Type": string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    captchaChallenge: string;
                };
            };
        };
        responses: {
            /** @description OK: Captcha has been solved */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @enum {string} */
                        result?: "ok" | "error";
                    };
                };
            };
            /** @description Bad Request: Captcha challenge result was wrong, the Captcha Verification service was down or other, refer to the error message and the errorCode inside the error context */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    "get-report-reasons-by-category": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                category: "manga" | "chapter" | "scanlation_group" | "user" | "author";
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @default ok */
                        result: string;
                        /** @default collection */
                        response: string;
                        data?: {
                            /** Format: uuid */
                            id?: string;
                            /** @default report_reason */
                            type: string;
                            attributes?: {
                                reason?: components["schemas"]["LocalizedString"];
                                detailsRequired?: boolean;
                                /** @enum {string} */
                                category?: "manga" | "chapter" | "scanlation_group" | "user" | "author";
                                version?: number;
                            };
                        }[];
                        limit?: number;
                        offset?: number;
                        total?: number;
                    };
                };
            };
            /** @description Bad request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    "get-reports": {
        parameters: {
            query?: {
                limit?: number;
                offset?: number;
                category?: "manga" | "chapter" | "scanlation_group" | "user" | "author";
                reasonId?: string;
                objectId?: string;
                status?: "waiting" | "accepted" | "refused" | "autoresolved";
                order?: {
                    /** @enum {string} */
                    createdAt?: "asc" | "desc";
                };
                "includes[]"?: components["schemas"]["ReferenceExpansionReport"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ReportListResponse"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    "post-report": {
        parameters: {
            query?: never;
            header: {
                "Content-Type": string;
            };
            path?: never;
            cookie?: never;
        };
        /** @description The size of the body is limited to 8KB. */
        requestBody?: {
            content: {
                "application/json": {
                    /** @enum {string} */
                    category?: "manga" | "chapter" | "user" | "scanlation_group" | "author";
                    /** Format: uuid */
                    reason?: string;
                    /** Format: uuid */
                    objectId?: string;
                    details?: string;
                };
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Response"];
                };
            };
            /** @description Bad request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    "get-upload-session": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UploadSession"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    "begin-upload-session": {
        parameters: {
            query?: never;
            header: {
                "Content-Type": string;
            };
            path?: never;
            cookie?: never;
        };
        /** @description The size of the body is limited to 4KB. */
        requestBody?: {
            content: {
                "application/json": components["schemas"]["BeginUploadSession"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UploadSession"];
                };
            };
        };
    };
    "begin-edit-session": {
        parameters: {
            query?: never;
            header: {
                "Content-Type": string;
            };
            path: {
                chapterId: string;
            };
            cookie?: never;
        };
        /** @description The size of the body is limited to 1KB. */
        requestBody?: {
            content: {
                "application/json": components["schemas"]["BeginEditSession"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UploadSession"];
                };
            };
            /** @description Bad Request if Chapter's Manga is unpublished */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Unauthorized if user does not have upload permissions or has no rights to edit the chapter (needs to be uploader or group member) */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    "put-upload-session-file": {
        parameters: {
            query?: never;
            header: {
                "Content-Type": string;
            };
            path: {
                uploadSessionId: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "multipart/form-data": {
                    /** Format: binary */
                    file?: string;
                };
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @enum {string} */
                        result?: "ok" | "error";
                        errors?: components["schemas"]["Error"][];
                        data?: components["schemas"]["UploadSessionFile"][];
                    };
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    "abandon-upload-session": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                uploadSessionId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Response"];
                };
            };
        };
    };
    "commit-upload-session": {
        parameters: {
            query?: never;
            header: {
                "Content-Type": string;
            };
            path: {
                uploadSessionId: string;
            };
            cookie?: never;
        };
        /** @description The size of the body is limited to 4KB. */
        requestBody?: {
            content: {
                "application/json": components["schemas"]["CommitUploadSession"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Chapter"];
                };
            };
        };
    };
    "delete-uploaded-session-file": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                uploadSessionId: string;
                uploadSessionFileId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Response"];
                };
            };
        };
    };
    "delete-uploaded-session-files": {
        parameters: {
            query?: never;
            header: {
                "Content-Type": string;
            };
            path: {
                uploadSessionId: string;
            };
            cookie?: never;
        };
        /** @description The size of the body is limited to 20KB. */
        requestBody?: {
            content: {
                "application/json": string[];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Response"];
                };
            };
        };
    };
    "upload-check-approval-required": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description The size of the body is limited to 4KB. */
        requestBody?: {
            content: {
                "application/json": {
                    /** Format: uuid */
                    manga?: string;
                    locale?: string;
                };
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Response"] & {
                        requiresApproval?: boolean;
                    };
                };
            };
            /** @description Manga not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Response"];
                };
            };
        };
    };
    "get-manga-relation": {
        parameters: {
            query?: {
                "includes[]"?: components["schemas"]["ReferenceExpansionMangaRelation"];
            };
            header?: never;
            path: {
                mangaId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Manga relation list */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["MangaRelationList"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    "post-manga-relation": {
        parameters: {
            query?: never;
            header: {
                "Content-Type": string;
            };
            path: {
                mangaId: string;
            };
            cookie?: never;
        };
        /** @description The size of the body is limited to 8KB. */
        requestBody?: {
            content: {
                "application/json": components["schemas"]["MangaRelationCreate"];
            };
        };
        responses: {
            /** @description Manga relation created */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["MangaRelationResponse"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    "delete-manga-relation-id": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                mangaId: string;
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Manga relation has been deleted. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Response"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    "get-rating": {
        parameters: {
            query: {
                manga: string[];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Self-rating list */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @default ok */
                        result: string;
                        ratings?: {
                            [key: string]: {
                                rating?: number;
                                /** Format: date-time */
                                createdAt?: string;
                            };
                        };
                    };
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    "post-rating-manga-id": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                mangaId: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    rating?: number;
                };
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Response"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    "delete-rating-manga-id": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                mangaId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Manga rating was deleted */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Response"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    "get-statistics-chapter-uuid": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                uuid: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Statistics */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @default ok */
                        result: string;
                        statistics?: {
                            [key: string]: {
                                comments?: components["schemas"]["StatisticsDetailsComments"];
                            };
                        };
                    };
                };
            };
        };
    };
    "get-statistics-chapters": {
        parameters: {
            query: {
                "chapter[]": string[];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Statistics */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @default ok */
                        result: string;
                        statistics?: {
                            [key: string]: {
                                comments?: components["schemas"]["StatisticsDetailsComments"];
                            };
                        };
                    };
                };
            };
        };
    };
    "get-statistics-group-uuid": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                uuid: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Statistics */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @default ok */
                        result: string;
                        statistics?: {
                            [key: string]: {
                                comments?: components["schemas"]["StatisticsDetailsComments"];
                            };
                        };
                    };
                };
            };
        };
    };
    "get-statistics-groups": {
        parameters: {
            query: {
                "group[]": string[];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Statistics */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @default ok */
                        result: string;
                        statistics?: {
                            [key: string]: {
                                comments?: components["schemas"]["StatisticsDetailsComments"];
                            };
                        };
                    };
                };
            };
        };
    };
    "get-statistics-manga-uuid": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                uuid: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Statistics */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @default ok */
                        result: string;
                        statistics?: {
                            [key: string]: {
                                comments?: components["schemas"]["StatisticsDetailsComments"];
                                rating?: {
                                    /** @description Will be nullable if no ratings has been given */
                                    average?: number | null;
                                    /** @description Average weighted on all the Manga population */
                                    bayesian?: number;
                                    distribution?: {
                                        1?: number;
                                        2?: number;
                                        3?: number;
                                        4?: number;
                                        5?: number;
                                        6?: number;
                                        7?: number;
                                        8?: number;
                                        9?: number;
                                        10?: number;
                                    };
                                };
                                follows?: number;
                                unavailableChapterCount?: number;
                            };
                        };
                    };
                };
            };
        };
    };
    "get-statistics-manga": {
        parameters: {
            query: {
                "manga[]": string[];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Statistics */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @default ok */
                        result: string;
                        statistics?: {
                            [key: string]: {
                                comments?: components["schemas"]["StatisticsDetailsComments"];
                                rating?: {
                                    /** @description Will be nullable if no ratings has been done */
                                    average?: number | null;
                                    /** @description Average weighted on all the Manga population */
                                    bayesian?: number;
                                };
                                follows?: number;
                            };
                        };
                    };
                };
            };
        };
    };
    "get-settings-template": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, never>;
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Manga no content */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    "post-settings-template": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": Record<string, never>;
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, never>;
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    "get-settings-template-version": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                version: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": Record<string, never>;
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Manga no content */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    "get-settings": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @default ok */
                        result: string;
                        /** Format: date-time */
                        updatedAt?: string;
                        /** @description Settings that were validated by linked template */
                        settings?: Record<string, never>;
                        /**
                         * Format: uuid
                         * @description Settings template UUID
                         */
                        template?: string;
                    };
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Manga no content */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    "post-settings": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @description A JSON object that can be validated against the lastest available template */
                    settings?: Record<string, never>;
                    /**
                     * Format: date-time
                     * @description Format: 2022-03-14T13:19:37
                     */
                    updatedAt?: string;
                };
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @default ok */
                        result: string;
                        /** Format: date-time */
                        updatedAt?: string;
                        /** @description Settings that were validated against the linked template */
                        settings?: Record<string, never>;
                        /**
                         * Format: uuid
                         * @description Settings template UUID
                         */
                        template?: string;
                    };
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Manga no content */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    "get-reading-history": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @default ok */
                        result: string;
                        ratings?: {
                            chapterId?: string;
                            /** Format: date-time */
                            readDate?: string;
                        }[];
                    };
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Manga no content */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    "forums-thread-create": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /**
                     * @description The type of the resource
                     * @enum {string}
                     */
                    type?: "manga" | "group" | "chapter";
                    /**
                     * Format: uuid
                     * @description The id of the resource
                     */
                    id?: string;
                };
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ForumsThreadResponse"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description If the resource for which the thread creation was requested does not exist */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
}
