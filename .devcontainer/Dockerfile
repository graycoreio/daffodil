FROM node:16

LABEL name="Angular dev environment" \
      description="This image can be used to create a dev environment for building Angular apps." \
      vendor="graycoreio" \
      version="1.0"

# Options
ARG INSTALL_ZSH="true"
ARG USERNAME=node
ARG USER_UID=1000
ARG USER_GID=$USER_UID

RUN apt update && apt install -y \
  git \
  gnupg2 \
  vim \
  rsync \
  #Chrome Deps
  chromium \
  htop \
  && rm -rf /var/lib/apt/lists/*

ENV CHROME_BIN=/usr/bin/chromium

EXPOSE 4200 9876

RUN npm install -g @angular/cli nx

# We set this to CI because otherwise it interrupts install in codespaces? Why? Who knows.
# It's Google's problem, not ours.
ENV NG_CLI_ANALYTICS=ci

CMD [ "sleep", "infinity" ]