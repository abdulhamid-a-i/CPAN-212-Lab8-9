FROM jenkins/jenkins:lts

# SWITCHING TO ROOT TO INSTALL DEPENDENCIES
USER root

# INSTALL DEPENDENCIES
RUN apt-get update && \
    apt-get install -y \
    git\
    curl\
    unzip && \
    apt-get clean

# SWITCH TO JENKINS USER
USER jenkins

# EXPOSE JENKINS PORT
EXPOSE 8080

# JENKINS HOME DIRECTORY
ENV JENKINS_HOME=/var/jenkins_home