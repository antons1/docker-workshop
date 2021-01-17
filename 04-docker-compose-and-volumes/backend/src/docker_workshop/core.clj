(ns docker-workshop.core
  (:require [ring.adapter.jetty :as j]
            [docker-workshop.routes :refer [app]]
            [docker-workshop.db :refer [connect disconnect]])
  (:gen-class))

(defonce server (atom nil))

(defn start! []
  (reset! server (j/run-jetty #'app {:port 3001 :join? false})))

(defn stop! []
  (.stop @server))

(defn run-app []
  (connect)
  (start!))

(defn stop-app []
  (disconnect)
  (stop!))

(defn -main [& args]
  (run-app))

(comment
  (run-app)
  (stop-app)
  @server)