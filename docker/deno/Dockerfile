FROM hayd/alpine-deno:latest

# The port that your application listens to.
EXPOSE 8000

WORKDIR /app

# Prefer not to run as root.
USER deno

# Cache the dependencies as a layer (the following two steps are re-run only when deps.ts is modified).
# Ideally fetch package.ts will download and compile _all_ external files used in main.ts.
ADD package.ts .
ADD modules/ ./modules/
RUN deno fetch package.ts

# These steps will be re-run upon each file change in your working directory:
ADD server/ ./server/

# Compile the main app so that it doesn't need to be compiled each startup/entry.
RUN deno fetch server/main.ts

CMD ["--allow-net", "server/main.ts"]