(ns docker-workshop.core
  (:require [ring.adapter.jetty :as j]
            [docker-workshop.routes :refer [app]])
  (:gen-class))

(defonce server (atom nil))

(defn start! []
  (reset! server (j/run-jetty #'app {:port 3000 :join? false})))

(defn stop! []
  (.stop @server))

(defn run-app []
  (start!))

(defn stop-app []
  (stop!))

(defn -main [& args]
  (run-app))

(comment
  (run-app)
  (stop-app)
  @server)